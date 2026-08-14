import { activityCategories, type ActivityItem } from "@/data/homepage";

export type ListedActivity = ActivityItem & {
  category: string;
  categoryIndex: number;
  originalIndex: number;
  sortTime: number;
};

const activityTimeZone = "Asia/Taipei";

function getDateKey(date: Date, timeZone = activityTimeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone,
    year: "numeric",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${values.year}-${values.month}-${values.day}`;
}

function getActivityDateKey(value: string) {
  const dateMatch = value.match(/\d{4}[./-]\d{1,2}[./-]\d{1,2}/);

  if (!dateMatch) {
    return value;
  }

  const [year, month, day] = dateMatch[0].split(/[./-]/);

  return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
}

function getActivityTime(value: string) {
  const dateKey = getActivityDateKey(value);
  const time = new Date(`${dateKey}T00:00:00+08:00`).getTime();

  return Number.isFinite(time) ? time : 0;
}

function compareNewestFirst(first: ListedActivity, second: ListedActivity) {
  if (first.sortTime !== second.sortTime) {
    return second.sortTime - first.sortTime;
  }

  if (first.categoryIndex !== second.categoryIndex) {
    return first.categoryIndex - second.categoryIndex;
  }

  return first.originalIndex - second.originalIndex;
}

export function getActivityListingData(now = new Date()) {
  const todayKey = getDateKey(now);
  const categories = activityCategories.map((category) => category.label);
  const activities = activityCategories.flatMap((category, categoryIndex) =>
    category.items.map((item, originalIndex) => ({
      ...item,
      category: category.label,
      categoryIndex,
      originalIndex,
      sortTime: getActivityTime(item.startDate),
    })),
  );

  return {
    categories,
    latestActivities: activities
      .filter((item) => getActivityDateKey(item.endDate) >= todayKey)
      .sort(compareNewestFirst),
    pastActivities: activities
      .filter((item) => getActivityDateKey(item.endDate) < todayKey)
      .sort(compareNewestFirst),
    todayKey,
  };
}
