import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa007 (Chodrak Gyatso 1454~1506).jpg";

export const metadata: Metadata = {
  title: "第七世噶瑪巴確札嘉措 | Kagyu",
  description: "第七世噶瑪巴確札嘉措生平、著作與傳承介紹。",
};

export default function ChodrakGyatsoPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第七世噶瑪巴確札嘉措</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第七世噶瑪巴確札嘉措</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第七世噶瑪巴確札嘉措" src={portrait} />
            </figure>

            <p className="imageCaption">第七世噶瑪巴確札嘉措 Chodrak Gyatso (1454~1506)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              法王誕生在北藏企達（Chida），在母腹中就會叫媽媽（Ama-la）。他一出生便用梵文唸咒「嗡阿吽」，此咒代表空明無二的境界。
            </p>
            <p>
              五個月大時，他說：「在世界上除了『空』之外別無他物。」九個月大時，父母帶他去見第一世國師嘉察仁波切，他立刻被認出是第六世噶瑪巴信中所指的男孩，仁波切並為他舉行陞座大典。
            </p>
            <p>
              四歲時，國師嘉察仁波切為他灌頂。八歲時，他在噶瑪寺追隨國師嘉察仁波切、本嘎蔣白桑波（Pengar Jampal Sangpo）學習完整噶舉法教。
            </p>

            <WatermarkHeading as="h2">修持與著作</WatermarkHeading>
            <p>
              法王一生大部分時間在閉關。他也是一位大經論師，有許多著作，包括《三世之燈》（The Lamp of the Three Worlds），以及最著名的《邏輯海典》（The Ocean of Reasoning）。
            </p>

            <WatermarkHeading as="h2">佛行事業</WatermarkHeading>
            <p>
              噶瑪巴在楚布正式成立佛學院，並修復噶瑪巴希所造的佛像。他非常活躍地主持公道、排憂解紛、保護動物、主持橋樑開工典禮，也曾贈送黃金到佛陀成道地菩提迦耶建佛像。
            </p>
            <p>
              他帶領許多人為消除疾病唸誦百萬遍六字大明咒。五十三歲時，他圓寂前將下一世轉生的詳情寫在信中，交給札西巴究（Tashi Paljor）。
            </p>

            <WatermarkHeading as="h2">札西巴究</WatermarkHeading>
            <p>
              札西巴究，即第一世桑傑年巴仁波切德瑪竹千（Denma Drachen，1457~1525），誕生在東藏德格的德瑪區。五歲時，一聽到噶瑪巴的名字，他立刻肅然起敬。一年後，他見到第七世噶瑪巴，並被賜予法名札西巴究。
            </p>
            <p>
              他追隨大學者桑傑巴（Sangye Pal）在德瑪學習。十六歲時，噶瑪巴傳授他全部噶舉傳承法教；之後在噶瑪巴指導下，前往中藏康山閉關修行。
            </p>
            <p>
              如密勒日巴一般，經過二十年的閉關，他圓滿證悟，成為第一世桑傑年巴仁波切（Sangye Nyenpa Rinpoche）。
            </p>

            <WatermarkHeading as="h2">傳承持有者</WatermarkHeading>
            <p>
              札西巴究是第八世噶瑪巴的主要上師，並將傳承授予第八世噶瑪巴米覺多傑（Mikyo Dorje）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="chodrak-gyatso" />
          </div>
        </div>
      </article>
    </main>
  );
}
