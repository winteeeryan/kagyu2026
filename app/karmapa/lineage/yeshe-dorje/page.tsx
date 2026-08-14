import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa011(Yeshe Dorje1676~1702).jpg";

export const metadata: Metadata = {
  title: "第十一世噶瑪巴耶謝多傑 | Kagyu",
  description: "第十一世噶瑪巴耶謝多傑生平、伏藏法教與傳承介紹。",
};

export default function YesheDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十一世噶瑪巴耶謝多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十一世噶瑪巴耶謝多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十一世噶瑪巴耶謝多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十一世噶瑪巴耶謝多傑 Yeshe Dorje (1676~1702)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              法王誕生在東藏眉秀（Mayshö）地區一個佛教家庭中。第七世夏瑪仁波切及第六世國師嘉察仁波切，根據第十世噶瑪巴留下的信函，認證他是第十一世噶瑪巴，並在楚布寺為他舉行陞座典禮。
            </p>

            <WatermarkHeading as="h2">法教與伏藏</WatermarkHeading>
            <p>
              他從第七世夏瑪仁波切處得到噶舉傳承法教及大手印傳承，並從詠給明就多傑（Yonge Mingyur Dorje）和達香紐丹多傑（Taksham Nüden Dorje）接受了蓮師的伏藏法開示。
            </p>
            <p>
              蓮師曾預言第十一世噶瑪巴是伏藏師。他也是一位預言家，曾示現各種神通。
            </p>

            <WatermarkHeading as="h2">認證夏瑪巴</WatermarkHeading>
            <p>
              法王找到並認證第八世夏瑪巴巴千確吉敦珠（Paichen Chokyi Dondrub，1695~1732）。夏瑪巴是法王最重要的弟子，也是傳承的持有者。
            </p>

            <WatermarkHeading as="h2">圓寂與傳承</WatermarkHeading>
            <p>
              此世大寶法王是噶瑪巴中壽命最短的。在短短一生中，他將噶舉法教和寧瑪法教結合在一起。他把預言來世的信函交付給夏瑪巴後圓寂。
            </p>

            <WatermarkHeading as="h2">第八世夏瑪仁波切巴千確吉敦珠</WatermarkHeading>
            <p>
              確吉敦珠（Palchen Chökyi Dhondrub，1695~1732）誕生於尼泊爾由牧（Yolmo）一個尼泊爾家庭中。根據第十一世噶瑪巴的明確指示，他的代表很快找到七歲的確吉敦珠，把他帶去西藏，並為他舉行陞座典禮。
            </p>
            <p>
              夏瑪巴確吉敦珠從噶瑪巴處得到全部傳承法教，並隨第三世崔河甘增達吉（Treho Tendzin Dhargye）、國師敦悅寧波（Goshir Dhönyö Nyingpo）及多位上師學習。
            </p>
            <p>
              他去中國、尼泊爾弘法，度化眾多的人。他圓寂時才卅八歲，並將噶舉傳承傳給第十二世噶瑪巴蔣秋多傑（Changchub Dorje，1703~1732）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="yeshe-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
