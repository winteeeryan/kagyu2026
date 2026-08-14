import type { Metadata } from "next";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { getActivityListingData } from "@/app/activities/activityData";
import supportStyles from "@/app/support-volunteer/page.module.css";
import shopStyles from "@/app/support-volunteer/charity-shop/page.module.css";
import { ActivityListingGrid } from "@/app/activities/latest/LatestActivitiesGrid";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "過往活動 | Kagyu",
  description: "噶瑪噶舉基金會過往活動與各中心共修紀錄。",
};

export default function PastActivitiesPage() {
  const { categories, pastActivities } = getActivityListingData();

  return (
    <main className={supportStyles.page}>
      <section className={shopStyles.overviewPage}>
        <header className={shopStyles.overviewHeader}>
          <p className={shopStyles.eyebrow}>共修活動</p>
          <WatermarkHeading as="h2">過往活動</WatermarkHeading>
          <p className={shopStyles.intro}>
            彙整已圓滿的共修、法會與中心活動紀錄。
            <br />
            依活動日期由近至遠排列，方便回顧與查找。
          </p>
          <SectionOpener />
        </header>

        <ActivityListingGrid
          activities={pastActivities}
          archiveHref="/activities/latest"
          archiveLabel="返回最新活動"
          categories={categories}
          emptyMessage="目前尚無過往活動紀錄"
        />

        <EndMarker />
      </section>
    </main>
  );
}
