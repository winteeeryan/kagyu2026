import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "金剛寶冠【黑寶冠】 | Kagyu",
  description: "金剛寶冠【黑寶冠】的由來與甚深義藏。",
};

const meaningSections = [
  {
    title: "不變的法界",
    paragraphs: [
      "金剛寶冠之顏色為深藍色；代表所有一切現象不變的真實本性~法界。",
      "證悟亦是不變的，就如同虛空一般。此虛空在這裡是以深藍色作為其表徵。",
    ],
  },
  {
    title: "三身",
    paragraphs: [
      "金剛寶冠（黑寶冠）頂上之三端點。一點位於中間，另二點位於二邊。",
      "其意代表：自然自生呈現之三身──法身、報身及化身。",
    ],
  },
  {
    title: "壇城之主",
    paragraphs: [
      "金剛寶冠（黑寶冠）之頂端嚴飾。其義代表，在金剛乘教法中智慧之頂峰及一切壇城之主，同時亦表徵佛智之無礙示行。",
    ],
  },
  {
    title: "佛之二智",
    paragraphs: [
      "金剛寶冠（黑寶冠）之中上部份，飾以珍貴珠寶製成之「日」與「月」。",
      "其義代表，佛陀的兩種智慧：即「盡所有智」、「如所有智」。",
    ],
  },
  {
    title: "佛之事業",
    paragraphs: [
      "金剛寶冠（黑寶冠）左右兩側之雲形嚴飾；其義代表，無量、且無分別之悲智雨霖，同時亦象徵諸佛及十地菩薩利眾之事業。而第十地菩薩之果位，即稱為「法雲地」。",
    ],
  },
  {
    title: "四種證悟事業",
    paragraphs: [
      "金剛寶冠（黑寶冠）莊嚴之正面，飾有五種不同顏色珍貴寶石之十字金剛杵。其義代表「五色佛部」；而杵之枝靶部份（如圖示）表徵四種證悟事業~息、增、懷、誅。",
    ],
  },
  {
    title: "四無量心",
    paragraphs: [
      "金剛寶冠（黑寶冠）之基部；由四角四邊型之區域為十字金剛杵建構方型或V型之基部。其義代表：「四無量心」，亦即「慈、悲、喜、捨」，這同時也是大寶法王引領眾生經由「道」而至圓滿證悟果位之深層義涵。",
    ],
  },
];

export default function KarmapaBlackCrownPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="金剛寶冠黑寶冠圖像">
        <img
          alt="金剛寶冠黑寶冠圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero003.png"
        />
      </section>

      <article
        className="karmapaArticleStart"
        aria-labelledby="black-crown-title"
      >
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1" id="black-crown-title">
              金剛寶冠【黑寶冠】
            </DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">【黑寶冠】的由來</WatermarkHeading>
            <p>
              明朝永樂皇帝在一場法會中，看見一頂由十萬位空行母的頭髮所織成的黑色金剛寶冠，在第五世噶瑪巴德新謝巴之頭頂上盤旋；皇帝悟到這是因為他的虔敬，才可能見到能助他開悟的法冠，因此他做了一頂寶冠供養噶瑪巴，使人人都可以看到，並獲得加持。
            </p>

            <WatermarkHeading as="h2">【黑寶冠】之甚深義藏</WatermarkHeading>
            <p>歷代大寶法王之金剛寶冠，或稱「黑寶冠」，涵藏了甚深之表徵意義。</p>
            <p>寶冠之形狀與嚴飾象徵了歷代大寶法王的證悟德行。</p>

            {meaningSections.map((section) => (
              <section className={styles.subsection} key={section.title}>
                <h4>{section.title}</h4>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
