import Link from "next/link";
import type { ReactNode } from "react";

export const karmapaLinks: Record<string, string> = {
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

export const karmapaNumeralById: Record<string, string> = {
  "1": "一",
  "2": "二",
  "3": "三",
  "4": "四",
  "5": "五",
  "6": "六",
  "7": "七",
  "8": "八",
  "9": "九",
  "10": "十",
  "11": "十一",
  "12": "十二",
  "13": "十三",
  "14": "十四",
  "15": "十五",
  "16": "十六",
  "17": "十七",
};

export const karmapaTextPattern =
  /第(十七|十六|十五|十四|十三|十二|十一|十|九|八|七|六|五|四|三|二|一)世(?:大寶法王噶瑪巴|大寶法王|噶瑪巴)/g;

type KarmapaTextLinkOptions = {
  currentKarmapaId?: number | string | null;
  currentNumeral?: string | null;
};

function normalizeCurrentNumeral(options?: KarmapaTextLinkOptions) {
  if (!options) {
    return null;
  }

  if (options.currentNumeral) {
    return options.currentNumeral;
  }

  if (options.currentKarmapaId == null) {
    return null;
  }

  const id = String(options.currentKarmapaId).replace(/^karmapa-/, "");
  return karmapaNumeralById[id] ?? null;
}

export function renderKarmapaTextLinks(text: string, options?: KarmapaTextLinkOptions): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  const currentNumeral = normalizeCurrentNumeral(options);

  text.replace(karmapaTextPattern, (match, numeral: string, offset: number) => {
    if (offset > lastIndex) {
      parts.push(text.slice(lastIndex, offset));
    }

    if (numeral === currentNumeral) {
      parts.push(match);
    } else {
      parts.push(
        <Link href={karmapaLinks[numeral]} key={`${match}-${offset}`}>
          {match}
        </Link>,
      );
    }

    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
