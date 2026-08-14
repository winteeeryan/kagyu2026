import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { CalligraphyCollage } from "./CalligraphyCollage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "大寶法王墨寶 | Kagyu",
  description: "台灣噶舉佛學院書寫墨寶與大寶法王墨寶展示。",
};

export default function KarmapaCalligraphyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="大寶法王墨寶圖像">
        <img
          alt="大寶法王墨寶圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero006.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">大寶法王墨寶</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">台灣噶舉佛學院書寫墨寶</WatermarkHeading>

            <figure className={styles.featuredImage}>
              <img
                alt="大寶法王墨寶"
                className={styles.calligraphyImage}
                src="/karmapa/caligraphy001.jpg"
              />
            </figure>

            <p className={`${styles.notice} imageCaption`}>
              ※ 墨寶來源為法王噶瑪巴中文官網，請勿將法王噶瑪巴書畫作品擅自印刷出版，更嚴禁作為商業用途 ※
            </p>

            <WatermarkHeading as="h2">大寶法王墨寶</WatermarkHeading>
            <CalligraphyCollage />

            <p className={`${styles.notice} imageCaption`}>
              ※ 墨寶來源為法王噶瑪巴中文官網，請勿將法王噶瑪巴書畫作品擅自印刷出版，更嚴禁作為商業用途 ※
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
