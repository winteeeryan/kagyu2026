"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { karmapaLinks, karmapaNumeralById, karmapaTextPattern } from "@/components/ui/KarmapaTextLinks";

const karmapaSlugNumerals: Record<string, string> = {
  "dusum-khyenpa": "一",
  "karma-pakshi": "二",
  "rangjung-dorje": "三",
  "rolpe-dorje": "四",
  "deshin-shekpa": "五",
  "thongwa-donden": "六",
  "chodrak-gyatso": "七",
  "mikyo-dorje": "八",
  "wangchuk-dorje": "九",
  "choying-dorje": "十",
  "yeshe-dorje": "十一",
  "changchub-dorje": "十二",
  "dudul-dorje": "十三",
  "thekchok-dorje": "十四",
  "khakhyab-dorje": "十五",
  "rangjung-rigpe-dorje": "十六",
  "ogyen-trinley-dorje": "十七",
};

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;

  return (
    !parent ||
    parent.closest("a") ||
    parent.closest("script, style, noscript") ||
    parent.dataset.karmapaAutoLinked === "true"
  );
}

function getCurrentKarmapaNumeral(pathname: string) {
  const routeMatch = pathname.match(/(?:\/karmapa(?:\/lineage)?)?\/karmapa-(\d{1,2})(?:\/)?$/);

  if (routeMatch) {
    const numeral = karmapaNumeralById[routeMatch[1]];

    if (numeral) {
      return numeral;
    }
  }

  const slug = pathname.split("/").filter(Boolean).at(-1);

  if (slug && karmapaSlugNumerals[slug]) {
    return karmapaSlugNumerals[slug];
  }

  const titleMatch = document.title.match(karmapaTextPattern)?.[0]?.match(/第(.+)世(?:大寶法王噶瑪巴|大寶法王|噶瑪巴)/);

  return titleMatch?.[1] ?? null;
}

function linkKarmapaTerms(root: ParentNode, currentNumeral: string | null) {
  const targets = root.querySelectorAll(".karmapaArticleStart p, .karmapaArticleStart li");

  targets.forEach((target) => {
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (node instanceof Text && !shouldSkipNode(node) && karmapaTextPattern.test(node.data)) {
        textNodes.push(node);
      }

      karmapaTextPattern.lastIndex = 0;
    }

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;

      node.data.replace(karmapaTextPattern, (match, numeral: string, offset: number) => {
        if (offset > lastIndex) {
          fragment.append(document.createTextNode(node.data.slice(lastIndex, offset)));
        }

        if (numeral === currentNumeral) {
          fragment.append(document.createTextNode(match));
          lastIndex = offset + match.length;
          return match;
        }

        const link = document.createElement("a");
        link.dataset.karmapaAutoLinked = "true";
        link.href = karmapaLinks[numeral];
        link.textContent = match;
        fragment.append(link);

        lastIndex = offset + match.length;
        return match;
      });

      if (lastIndex < node.data.length) {
        fragment.append(document.createTextNode(node.data.slice(lastIndex)));
      }

      node.replaceWith(fragment);
      karmapaTextPattern.lastIndex = 0;
    });
  });
}

export function KarmapaTermAutoLinks() {
  const pathname = usePathname();

  useEffect(() => {
    linkKarmapaTerms(document, getCurrentKarmapaNumeral(pathname));
  }, [pathname]);

  return null;
}
