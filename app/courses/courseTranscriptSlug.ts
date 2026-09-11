import type { VideoItem } from "@/app/visual-media/video-channel/VideoChannelTabs";

const chineseNumbers: Record<string, number> = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
  十一: 11,
  十二: 12,
  十三: 13,
};

const transcriptDates = new Set([
  "2025.12.30",
  "2025.12.29",
  "2025.12.28",
  "2025.12.27",
  "2025.12.23",
  "2025.06.26",
]);

export function getCourseTranscriptSlug(
  item: Pick<VideoItem, "date" | "title">,
) {
  const year = item.date.slice(0, 4);

  if ((year === "2022" || year === "2023") && item.title.includes("讖摩春季課程")) {
    const match = item.title.match(
      /第([一二三四五六七八九十百]+)(天|堂課)(?:第([一二])堂課)?/,
    );

    if (match) {
      const number = chineseNumbers[match[1]];
      if (match[3]) {
        return `${year}-day-${number}-lesson-${chineseNumbers[match[3]]}`;
      }
      return match[2] === "堂課" ? `${year}-lesson-${number}` : `${year}-day-${number}`;
    }
  }

  if (transcriptDates.has(item.date)) {
    return item.date.replaceAll(".", "-");
  }

  return undefined;
}
