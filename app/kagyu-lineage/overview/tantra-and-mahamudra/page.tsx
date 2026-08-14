import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "密續和大手印之道 | Kagyu",
  description: "密續和大手印之道介紹。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="密續與大手印橫幅">
        <img
          alt="密續與大手印橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero003.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">密續和大手印之道</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <p>噶舉傳承圍繞經藏與續藏的精髓而建立，特別重視密續中的金剛乘與大手印教法。</p>
            <p>依修持方式，可分為兩大類：</p>
            <ul>
              <li>方便法門</li>
              <li>解脫法門</li>
            </ul>

            <WatermarkHeading as="h2">方便法門（密續修持）</WatermarkHeading>
            <p>方便法門指金剛乘密續中常用的修持方式，其教法依密續的四部分類如下：</p>
            <ol>
              <li>事部（Kriya-tantra）——行動密續</li>
              <li>行部（Charya-tantra）</li>
              <li>瑜伽部（Yoga-tantra）——強調心之瑜伽與禪觀</li>
              <li>無上瑜伽部（Anuttarayoga-tantra）</li>
            </ol>

            <p>其中，無上瑜伽部再細分為：</p>
            <ul>
              <li>父續</li>
              <li>母續</li>
              <li>無二續</li>
            </ul>

            <p>噶舉傳承主要依此三部，並特別強調母續與無二續。</p>
            <p>所有密續教法皆依兩個次第圓滿修持：</p>
            <ul>
              <li>生起次第（觀修本尊）</li>
              <li>圓滿次第（融入自性）</li>
            </ul>

            <h4>生起次第：本尊觀修</h4>
            <p>
              噶舉傳承的生起次第，以密續本尊法為核心。三大主要本尊為：金剛亥母（Vajrayogini），勝樂金剛（Chakrasamvara），紅觀音（Gyalwa Gyamtso）。
            </p>
            <p>此外亦包含護法修法，如瑪哈嘎拉法（Mahakala）。</p>

            <h4>圓滿次第：氣、脈、明點的殊勝修持</h4>
            <p>圓滿次第被視為一切密續中最殊勝、最神聖的教法，包含：</p>
            <ul>
              <li>氣（Prana）</li>
              <li>脈（Nadi）</li>
              <li>明點（Bindu）</li>
            </ul>
            <p>
              在噶舉傳承中，最精要者為無上瑜伽母續（Anuttarayoga Mother Tantra）的圓滿次第修持，即：那洛六法（六瑜伽）；它一直是噶舉傳承修持的中心，尤其為噶瑪噶舉傳承最重視的核心實修法。
            </p>

            <WatermarkHeading as="h2">解脫法門（大手印 Mahamudra）</WatermarkHeading>
            <p>
              解脫法門即大手印修持（Mahamudra or The Great Seal），是噶舉獨特、最高層次的禪修傳統。
            </p>
            <p>岡波巴傳承指出，大手印可由五方式傳授，後歸納為三類：</p>

            <h4>三種大手印傳授方式</h4>
            <ol>
              <li>經部大手印</li>
              <li>密續部大手印</li>
              <li>心髓大手印</li>
            </ol>

            <p>
              佛陀曾授記岡波巴之降世，他依上述三法傳授大手印，使其成為噶舉傳承的正統傳法方式，並延續至今。
            </p>
            <p>各噶舉支派皆教授此法，但以噶瑪噶舉的傳承最為殊勝、完備。</p>

            <h4>密續與大手印之證悟差別</h4>
            <p>密續教法與大手印皆直接指向心的本質，差別如下：</p>
            <ul>
              <li>密續圓滿次第：證悟「平常心」</li>
              <li>大手印禪修：證悟「金剛心」</li>
            </ul>
            <p>兩者均為通達實相的重要途徑。</p>

            <h4>各噶舉支派間的差異</h4>
            <p>四密續與大手印中的根、道、果三種修持方式，雖為噶舉各派共通法，但在：</p>
            <ul>
              <li>詮釋方式</li>
              <li>禪修指導方法</li>
            </ul>
            <p>上仍存在細微差別。</p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
