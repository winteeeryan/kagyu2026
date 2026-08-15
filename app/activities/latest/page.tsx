import type { Metadata } from "next";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { getActivityListingData } from "@/app/activities/activityData";
import supportStyles from "@/app/support-volunteer/page.module.css";
import shopStyles from "@/app/support-volunteer/charity-shop/page.module.css";
import { ActivityListingGrid } from "./LatestActivitiesGrid";


export const metadata: Metadata = {
  title: "最新活動 | Kagyu",
  description: "噶瑪噶舉基金會最新活動與各中心共修訊息。",
};

export default function LatestActivitiesPage() {
  const { categories, latestActivities } = getActivityListingData();

  return (
    <main className={supportStyles.page}>
      <section className={shopStyles.overviewPage}>
        <header className={shopStyles.overviewHeader}>
          <p className={shopStyles.eyebrow}>共修活動</p>
          <WatermarkHeading as="h2">最新活動</WatermarkHeading>
          <p className={shopStyles.intro}>
            無論是日常共修、深入學習，或參與法會，都能在近期活動中找到適合自己的安排。
            <br />
            歡迎依當下因緣參與，與法友同行，讓修學融入每一次相聚。
          </p>
          <SectionOpener />
        </header>

        <ActivityListingGrid
          activities={latestActivities}
          archiveHref="/activities/past"
          archiveLabel="查看更多往期活動"
          categories={categories}
          emptyMessage="目前尚無即將舉行的活動"
        />

        <EndMarker />
      </section>
    </main>
  );
}
