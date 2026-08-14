"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const karmapaTermLinks: Record<string, string> = {
  一: "/karmapa/lineage/karmapa-1",
  二: "/karmapa/lineage/karmapa-2",
  三: "/karmapa/lineage/karmapa-3",
  四: "/karmapa/lineage/karmapa-4",
  五: "/karmapa/lineage/karmapa-5",
  六: "/karmapa/lineage/karmapa-6",
  七: "/karmapa/lineage/karmapa-7",
  八: "/karmapa/lineage/karmapa-8",
  九: "/karmapa/lineage/karmapa-9",
  十: "/karmapa/lineage/karmapa-10",
  十一: "/karmapa/lineage/karmapa-11",
  十二: "/karmapa/lineage/karmapa-12",
  十三: "/karmapa/lineage/karmapa-13",
  十四: "/karmapa/lineage/karmapa-14",
  十五: "/karmapa/lineage/karmapa-15",
  十六: "/karmapa/lineage/karmapa-16",
  十七: "/karmapa/lineage/karmapa-17",
};

const karmapaTermPattern =
  /第?(十七|十六|十五|十四|十三|十二|十一|十|九|八|七|六|五|四|三|二|一)世(?:大寶法王|噶瑪巴)/g;

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;

  return (
    !parent ||
    parent.closest("a") ||
    parent.closest("script, style, noscript") ||
    parent.dataset.aboutKarmapaAutoLinked === "true"
  );
}

function linkKarmapaTerms(root: ParentNode) {
  const targets = root.querySelectorAll(
    ".karmapaArticleStart p, .karmapaArticleStart li, .karmapaArticleStart h2, .karmapaArticleStart h3, .karmapaArticleStart h4",
  );

  targets.forEach((target) => {
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (node instanceof Text && !shouldSkipNode(node) && karmapaTermPattern.test(node.data)) {
        textNodes.push(node);
      }

      karmapaTermPattern.lastIndex = 0;
    }

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;

      node.data.replace(karmapaTermPattern, (match, numeral: string, offset: number) => {
        if (offset > lastIndex) {
          fragment.append(document.createTextNode(node.data.slice(lastIndex, offset)));
        }

        const link = document.createElement("a");
        link.dataset.aboutKarmapaAutoLinked = "true";
        link.href = karmapaTermLinks[numeral];
        link.textContent = match;
        fragment.append(link);

        lastIndex = offset + match.length;
        return match;
      });

      if (lastIndex < node.data.length) {
        fragment.append(document.createTextNode(node.data.slice(lastIndex)));
      }

      node.replaceWith(fragment);
      karmapaTermPattern.lastIndex = 0;
    });
  });
}

export function AboutKarmapaTermAutoLinks() {
  const pathname = usePathname();

  useEffect(() => {
    linkKarmapaTerms(document);
  }, [pathname]);

  return null;
}
