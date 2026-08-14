import type { Metadata } from "next";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { VideoChannelTabs } from "./VideoChannelTabs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "影音頻道 | Kagyu",
  description: "噶瑪噶舉基金會影音頻道。",
};

export default function VideoChannelPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section} aria-labelledby="video-channel-title">
        <div className={styles.inner}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>Visual Media</p>
            <WatermarkHeading as="h2">影音頻道</WatermarkHeading>
            <p className={styles.readAside}>
              一念觀照，萬法澄明；於法音、行願與傳承影像之中，與您共聞佛法智慧，照見心中清淨。
            </p>
            <h1 className={styles.hiddenTitle} id="video-channel-title">
              影音頻道
            </h1>
            <SectionOpener />
          </header>

          <VideoChannelTabs />

          <div className={styles.endMarker}>
            <EndMarker />
          </div>
        </div>
      </section>
    </main>
  );
}
