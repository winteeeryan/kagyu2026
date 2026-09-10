"use client";

import Fuse, { type FuseResultMatch } from "fuse.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import type { SearchDocument, SearchIndexPayload } from "@/types/search";
import styles from "./SiteSearch.module.css";

const searchKeys = [
  { name: "title", weight: 5 },
  { name: "keywords", weight: 4 },
  { name: "category", weight: 2 },
  { name: "excerpt", weight: 1 },
  { name: "content", weight: 1 },
];

type SearchHit = {
  item: SearchDocument;
  matches?: readonly FuseResultMatch[];
  score?: number;
};

type SiteSearchProps = {
  initialQuery?: string;
  mode: "overlay" | "page";
  onClose?: () => void;
  open?: boolean;
};

function normalizeText(value: string) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("zh-Hant")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchRank(document: SearchDocument, query: string) {
  const title = normalizeText(document.title);
  if (title === query) return 0;
  if (title.includes(query)) return 1;
  if (document.keywords.some((keyword) => normalizeText(keyword).includes(query))) return 2;
  if (normalizeText(document.category).includes(query)) return 3;
  return 4;
}

function Highlight({
  field,
  matches,
  text,
}: {
  field: "title" | "excerpt";
  matches?: readonly FuseResultMatch[];
  text: string;
}) {
  const ranges = matches?.find((match) => match.key === field)?.indices;
  if (!ranges?.length) return text;

  let cursor = 0;
  return (
    <>
      {ranges.map(([start, end], index) => {
        const before = text.slice(cursor, start);
        const highlighted = text.slice(start, end + 1);
        cursor = end + 1;
        return (
          <Fragment key={`${start}-${end}-${index}`}>
            {before}
            <mark>{highlighted}</mark>
            {index === ranges.length - 1 ? text.slice(cursor) : null}
          </Fragment>
        );
      })}
    </>
  );
}

export function SiteSearch({
  initialQuery = "",
  mode,
  onClose,
  open = true,
}: SiteSearchProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const startedLoadingRef = useRef(false);
  const closeRef = useRef(onClose);
  const [input, setInput] = useState(initialQuery);
  const [documents, setDocuments] = useState<SearchDocument[]>([]);
  const [engine, setEngine] = useState<Fuse<SearchDocument> | null>(null);
  const [loadState, setLoadState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [showAll, setShowAll] = useState(false);
  const query = input.trim();
  const normalizedQuery = normalizeText(query);
  const shouldLoad = mode === "page" || open;

  closeRef.current = onClose;

  useEffect(() => {
    if (!shouldLoad || startedLoadingRef.current) return;
    startedLoadingRef.current = true;
    setLoadState("loading");
    fetch("/search-index.json")
      .then((response) => {
        if (!response.ok) throw new Error("Search index request failed");
        return response.json() as Promise<SearchIndexPayload>;
      })
      .then((payload) => {
        setDocuments(payload.documents);
        setEngine(
          new Fuse(
            payload.documents,
            {
              threshold: 0.34,
              ignoreLocation: true,
              includeMatches: true,
              includeScore: true,
              minMatchCharLength: 2,
              keys: searchKeys,
            },
            Fuse.parseIndex<SearchDocument>(payload.index as never),
          ),
        );
        setLoadState("ready");
      })
      .catch(() => setLoadState("error"));
  }, [shouldLoad]);

  useEffect(() => setShowAll(false), [normalizedQuery]);

  useEffect(() => {
    if (mode === "page") setInput(initialQuery);
  }, [initialQuery, mode]);

  useEffect(() => {
    if (mode !== "overlay" || !open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current?.();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled])',
        ),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [mode, open]);

  const results = useMemo<SearchHit[]>(() => {
    if (!normalizedQuery || loadState !== "ready") return [];

    const hits: SearchHit[] = Array.from(normalizedQuery).length === 1
      ? documents
          .filter((document) =>
            [document.title, document.category, document.excerpt, document.content, ...document.keywords]
              .some((value) => normalizeText(value).includes(normalizedQuery)),
          )
          .map((item) => ({ item }))
      : (engine?.search(normalizedQuery) ?? []);

    return hits
      .sort((first, second) => {
        const rankDifference = matchRank(first.item, normalizedQuery) - matchRank(second.item, normalizedQuery);
        return rankDifference || (first.score ?? 0) - (second.score ?? 0);
      })
      .slice(0, 50);
  }, [documents, engine, loadState, normalizedQuery]);

  const visibleResults = mode === "overlay" && !showAll ? results.slice(0, 8) : results;
  const inputId = mode === "overlay" ? "overlay-site-search" : "site-search-input";
  const resultId = mode === "overlay" ? "overlay-site-search-results" : "site-search-results";

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mode === "page") {
      router.replace(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
    }
  }

  function clearSearch() {
    setInput("");
    if (mode === "page") router.replace("/search");
    inputRef.current?.focus();
  }

  const form = (
    <form
      className={`${styles.form} ${mode === "overlay" ? styles.overlayForm : ""}`}
      onSubmit={submitSearch}
      role="search"
    >
      <label className="visuallyHidden" htmlFor={inputId}>搜尋關鍵詞</label>
      <input
        aria-controls={resultId}
        autoComplete="off"
        autoFocus={mode === "page"}
        id={inputId}
        onChange={(event) => setInput(event.target.value)}
        placeholder="輸入關鍵詞"
        ref={inputRef}
        type="search"
        value={input}
      />
      {input ? (
        <button className={styles.clearButton} onClick={clearSearch} type="button">清除</button>
      ) : null}
      {mode === "page" ? <button className={styles.submitButton} type="submit">搜尋</button> : null}
      {mode === "overlay" ? (
        <button className={styles.closeButton} onClick={onClose} type="button">關閉</button>
      ) : null}
    </form>
  );

  const resultContent = (
    <section aria-live="polite" aria-label="搜尋結果" className={styles.results} id={resultId}>
      {loadState === "loading" && query ? <p className={styles.status}>正在載入搜尋索引…</p> : null}
      {loadState === "error" ? <p className={styles.status}>搜尋資料暫時無法載入，請稍後再試。</p> : null}
      {loadState === "ready" && !query && mode === "page" ? (
        <p className={styles.status}>請輸入至少一個關鍵詞。</p>
      ) : null}
      {loadState === "ready" && query && results.length === 0 ? (
        <p className={styles.status}>找不到與「{query}」相關的內容。</p>
      ) : null}
      {loadState === "ready" && query && results.length > 0 ? (
        <>
          <div className={styles.resultSummary}>
            <p>「{query}」的搜尋結果</p>
            <span>{results.length} 筆</span>
          </div>
          <ol className={styles.resultList}>
            {visibleResults.map((result, index) => (
              <li key={result.item.id}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <article>
                  <p className={styles.category}>{result.item.category}</p>
                  <h2>
                    <Link href={result.item.url} onClick={mode === "overlay" ? onClose : undefined}>
                      <Highlight field="title" matches={result.matches} text={result.item.title} />
                    </Link>
                  </h2>
                  {result.item.excerpt ? (
                    <p className={styles.excerpt}>
                      <Highlight field="excerpt" matches={result.matches} text={result.item.excerpt} />
                    </p>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
          {mode === "overlay" && !showAll && results.length > visibleResults.length ? (
            <button className={styles.showMoreButton} onClick={() => setShowAll(true)} type="button">
              顯示更多結果
            </button>
          ) : null}
        </>
      ) : null}
    </section>
  );

  if (mode === "overlay") {
    if (!open || typeof document === "undefined") return null;
    return createPortal(
      <div className={styles.overlayRoot}>
        <button aria-label="關閉搜尋" className={styles.overlayBackdrop} onClick={onClose} type="button" />
        <section aria-label="搜尋本站" aria-modal="true" className={`${styles.overlayPanel} ${query || loadState === "error" ? styles.overlayPanelExpanded : ""}`} ref={dialogRef} role="dialog">
          {form}
          {query || loadState === "error" ? <div className={styles.overlayResults}>{resultContent}</div> : null}
        </section>
      </div>,
      document.body,
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Search</p>
          <h1>搜尋本站</h1>
          <p>輸入關鍵詞，搜尋網站中的文章、教言、活動、影音與義賣商品。</p>
        </header>
        {form}
        {resultContent}
      </div>
    </main>
  );
}
