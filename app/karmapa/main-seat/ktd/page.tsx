import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { MainSeatArticleNav } from "../_components/MainSeatArticleNav";
import styles from "../tsurphu/page.module.css";

export const metadata: Metadata = {
  title: "噶瑪三乘法輪中心 | Kagyu",
  description: "噶瑪三乘法輪中心是第十六世噶瑪巴於美國紐約州創立的正統修學道場。",
};

export default function KtdPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="噶瑪三乘法輪中心圖像">
        <img
          alt="噶瑪三乘法輪中心圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero007.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">噶瑪三乘法輪中心</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">西方弟子的正統修學道場</WatermarkHeading>

            <p>
              噶瑪三乘法輪中心是藏傳佛教噶舉傳承領導者尊貴的嘉華噶瑪巴在此處的主寺。它位於紐約州渥士托克城（Woodstock），坐落在美麗的卡斯基山脈深處。
            </p>
            <p>
              噶瑪三乘法輪中心，是第十六世噶瑪巴因應西方弟子們渴望有一座正統道場以供學習及修行而創立的。在此，口耳傳承得以最純淨的方式保存，也成為希望學習及修行藏傳佛教的西方弟子的重要道場。
            </p>

            <WatermarkHeading as="h2">弘法任務</WatermarkHeading>

            <p>
              噶瑪三乘法輪中心的住持是尊貴的堪布卡特仁波切（The Ven. Khenpo Karthar Rinpoche）。第三世巴多祖古仁波切（The Ven. Bardor Tulku Rinpoche）也曾在此常住，丹增確涅（Tenzin Chonyi）是中心的負責人。
            </p>
            <p>
              他們三人共同負起尊貴的噶瑪巴託付的弘法任務，延續噶舉傳承在西方世界的修學與實修事業。關於噶瑪三乘法輪中心更詳細的資料，可參觀該中心網站 www.kagyu.org。
            </p>

            <figure className={styles.closingImage}>
              <img alt="噶瑪三乘法輪中心" src="/karmapa/seat003.png" />
            </figure>

            <EndMarker />
            <MainSeatArticleNav currentSlug="ktd" />
          </div>
        </div>
      </article>
    </main>
  );
}
