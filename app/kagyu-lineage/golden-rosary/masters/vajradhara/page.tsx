import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { GoldenRosaryMastersArticleNav } from "../_components/GoldenRosaryMastersArticleNav";
import styles from "./page.module.css";

const portrait = "/kagyu-lineage/%23001Vajradhara.jpg";

export const metadata: Metadata = {
  title: "金剛總持 | Kagyu",
  description: "金剛總持 Vajradhara 介紹。",
};

export default function VajradharaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">金剛總持</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">金剛總持 Vajradhara</WatermarkHeading>

            <figure className={styles.articlePortrait}>
              <img alt="金剛總持 Vajradhara" src={portrait} />
            </figure>

            <p className="imageCaption">金剛總持 Vajradhara</p>

            <p>
              金剛總持（藏文：多傑羌 Dorje Chang）為原始本初佛，象徵證悟圓滿、覺性究竟的本質，是無形的法身，超越凡俗概念，卻具備無所不攝的功德。佛有三身：法身、報身與化身；其中法身以兩種不同方式顯現色身：
            </p>

            <ul>
              <li>其一是具有身形的化身，即一般眾生以不淨知覺所體驗到的佛；</li>
              <li>
                其二是純淨色身，稱為報身或淨樂身，為具純淨知覺之眾生——亦即高證量菩薩——所能見到的佛。
              </li>
            </ul>

            <p>
              2500 多年前的釋迦牟尼佛，是本賢劫一千佛中的第四佛，屬於化身佛。悉達多太子證悟法身後，以慈悲所現之色身示現化身佛，以度化眾生。
            </p>

            <p>
              在究竟實相上，釋迦牟尼佛與金剛總持並無差別，因為釋迦牟尼佛的心即是法身、語即為報身，而身則為化身。
            </p>

            <p>金剛總持化現於帝洛巴之前的諸多殊勝形相，其中每一個象徵都指向證悟之義。例如：</p>

            <ul>
              <li>金剛總持身色蔚藍如天空，象徵證悟心的遼闊與無限，名為法身。</li>
              <li>天人所具之耳環、寶冠、手鐲等莊嚴，象徵覺醒心的透澈清明，名為報身。</li>
              <li>人身形像則代表凡夫所能覺知的化身。</li>
            </ul>

            <p>
              金剛總持胸前所持之鈴與杵象徵智慧與善巧方便的結合。佛的三身雖異名異相，但對證悟者而言三者無二無別；而此三身合一的本質，即是一切眾生本具的佛性。
            </p>

            <p>
              金剛總持亦為噶舉傳承之核心。帝洛巴直接由金剛總持報身佛受法，是故噶舉傳承之根本源頭即是佛陀。此證悟的傳承自帝洛巴始，經由黃金珠鬘（Ganden–Tongpa）無間斷地延續至今。
            </p>

            <EndMarker />
            <GoldenRosaryMastersArticleNav currentSlug="vajradhara" />
          </div>
        </div>
      </article>
    </main>
  );
}
