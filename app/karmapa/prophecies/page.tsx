import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { ProphecyHotspots } from "./ProphecyHotspots";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "噶瑪巴神聖的預言 | Kagyu",
  description: "噶瑪巴神聖預言專題頁面。",
};

export default function KarmapaPropheciesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="噶瑪巴神聖預言圖像">
        <img
          alt="噶瑪巴神聖預言圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero005.png"
        />
      </section>

      <section
        className={`karmapaArticleStart ${styles.introSection}`}
        aria-labelledby="prophecy-guide-title"
      >
        <div className={styles.introInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1" id="prophecy-guide-title">
              噶瑪巴神聖的預言
            </DecoratedHeading>
          </div>
          <p>
            十九世紀偉大的掘藏師秋吉林巴訪問藏東南簽的噶瑪寺時得到一個淨觀，
            預示二十一世噶瑪巴的轉世，他將淨觀所見詳細的描述給噶麥堪千仁千塔加，
            他是噶瑪寺尊貴的住持，並將淨觀描繪在絲綢上。
          </p>
          <p>
            圖中央的大畫像是蓮花生大師，他直接出現在秋吉林巴前顯現他與普賢王如來佛、本出佛金剛總持、釋迦牟尼佛、阿彌陀佛與觀世音菩薩是無二別的。
            在蓮花生大士的頭上是十四位秋吉林巴時代已轉世的瑪巴。途中有未來七位將會轉世的噶瑪巴，每一位都有一個場景，以描繪他們未來事業的狀況。
          </p>
          <ProphecyHotspots />
          <EndMarker />
        </div>
      </section>

    </main>
  );
}
