import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { KarmapaTeachingCourseTabs } from "./KarmapaTeachingCourseTabs";
import styles from "@/app/visual-media/video-channel/page.module.css";

export function CoursePageContent() {
  return (
    <main className={styles.page}>
      <section className={styles.section} aria-labelledby="karmapa-course-title">
        <div className={styles.inner}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>Karmapa Teachings</p>
            <WatermarkHeading as="h2">法王開示課程</WatermarkHeading>
            <p className={styles.readAside}>
              依循法王法音，讓聞思修於一聞一行之間相續，於日常中照見本心。
            </p>
            <h1 className={styles.hiddenTitle} id="karmapa-course-title">
              法王開示課程
            </h1>
            <SectionOpener />
          </header>

          <KarmapaTeachingCourseTabs />

          <div className={styles.endMarker}>
            <EndMarker />
          </div>
        </div>
      </section>
    </main>
  );
}
