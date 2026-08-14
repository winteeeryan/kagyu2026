import type { Metadata } from "next";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { MeritOceanSections } from "./MeritOceanSections";
import { MeritSeaGuideNav } from "./MeritSeaGuideNav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "功德海 | Kagyu-2026",
};

export default function Page() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.root}>
          <div className={styles.inner}>
            <header className={styles.header}>
              <p className={styles.eyebrow}>護持佛學院</p>
              <WatermarkHeading as="h2">功德海</WatermarkHeading>
              <p className={styles.intro}>
                感念十方善信護持佛學院、僧伽醫護與弘法志業。
                <br />
                本頁彙整功德主名錄、僧伽醫護專戶真特別捐赠致謝。
              </p>
              <SectionOpener />
              <MeritSeaGuideNav />
            </header>
            <MeritOceanSections />
          </div>
        </section>
      </main>
    </>
  );
}
