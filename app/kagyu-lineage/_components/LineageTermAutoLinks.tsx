"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const lineageTermLinks: Record<string, { href: string; key: string }> = {
  金剛總持: { href: "/kagyu-lineage/golden-rosary/masters/vajradhara", key: "vajradhara" },
  帝洛巴: { href: "/kagyu-lineage/golden-rosary/masters/tilopa", key: "tilopa" },
  那洛巴: { href: "/kagyu-lineage/golden-rosary/masters/naropa", key: "naropa" },
  馬爾巴: { href: "/kagyu-lineage/golden-rosary/masters/marpa", key: "marpa" },
  密勒日巴: { href: "/kagyu-lineage/golden-rosary/masters/milarepa", key: "milarepa" },
  岡波巴: { href: "/kagyu-lineage/golden-rosary/masters/gampopa", key: "gampopa" },
  黃金珠鬘: { href: "/kagyu-lineage/golden-rosary/overview", key: "golden-rosary" },
};

const lineageTermPattern = new RegExp(
  Object.keys(lineageTermLinks)
    .sort((a, b) => b.length - a.length)
    .join("|"),
  "g",
);

const pageKeyByPathSegment: Record<string, string> = {
  vajradhara: "vajradhara",
  tilopa: "tilopa",
  naropa: "naropa",
  marpa: "marpa",
  milarepa: "milarepa",
  gampopa: "gampopa",
};

function getCurrentPageKey(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const finalSegment = segments.at(-1);

  if (finalSegment && pageKeyByPathSegment[finalSegment]) {
    return pageKeyByPathSegment[finalSegment];
  }

  if (segments.includes("golden-rosary")) {
    return "golden-rosary";
  }

  const bodyPageKey = document.body.dataset.pageKey;
  return bodyPageKey || null;
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;

  return (
    !parent ||
    parent.closest("a") ||
    parent.closest("script, style, noscript") ||
    parent.closest("h1, h2, h3, h4, h5, h6") ||
    parent.closest(".imageCaption") ||
    parent.dataset.lineageAutoLinked === "true"
  );
}

function linkLineageTerms(root: ParentNode, currentPageKey: string | null) {
  const targets = root.querySelectorAll(
    ".content-area p, .content-area li, .karmapaArticleStart p:not(.imageCaption), .karmapaArticleStart li",
  );

  targets.forEach((target) => {
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (node instanceof Text && !shouldSkipNode(node) && lineageTermPattern.test(node.data)) {
        textNodes.push(node);
      }

      lineageTermPattern.lastIndex = 0;
    }

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;

      node.data.replace(lineageTermPattern, (match, offset: number) => {
        const linkData = lineageTermLinks[match];

        if (offset > lastIndex) {
          fragment.append(document.createTextNode(node.data.slice(lastIndex, offset)));
        }

        if (!linkData || linkData.key === currentPageKey) {
          fragment.append(document.createTextNode(match));
          lastIndex = offset + match.length;
          return match;
        }

        const link = document.createElement("a");
        link.dataset.lineageAutoLinked = "true";
        link.href = linkData.href;
        link.textContent = match;
        fragment.append(link);

        lastIndex = offset + match.length;
        return match;
      });

      if (lastIndex < node.data.length) {
        fragment.append(document.createTextNode(node.data.slice(lastIndex)));
      }

      node.replaceWith(fragment);
      lineageTermPattern.lastIndex = 0;
    });
  });
}

export function LineageTermAutoLinks() {
  const pathname = usePathname();

  useEffect(() => {
    linkLineageTerms(document, getCurrentPageKey(pathname));
  }, [pathname]);

  return null;
}
