import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa012 (Changchub Dorje 1703~1732).jpg";

export const metadata: Metadata = {
  title: "第十二世噶瑪巴蔣秋多傑 | Kagyu",
  description: "第十二世噶瑪巴蔣秋多傑生平、朝聖弘法與傳承介紹。",
};

export default function ChangchubDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十二世噶瑪巴蔣秋多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十二世噶瑪巴蔣秋多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十二世噶瑪巴蔣秋多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十二世噶瑪巴蔣秋多傑 Changchub Dorje (1703~1732)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              正如第十一世噶瑪巴所預言，第十二世噶瑪巴誕生在東藏德格省（Derge）直龍查托（Kyile Tsaktor）。第八世夏瑪巴確吉敦珠（Chokyi Dhöndrup）派搜尋隊去找到他，在噶瑪寺見面時，認證出蔣秋多傑是噶瑪巴的轉世。
            </p>

            <WatermarkHeading as="h2">修學與弘法</WatermarkHeading>
            <p>
              法王追隨很多位上師學習，並將噶舉法教傳授給卡陀寺（Katok）的寧瑪派大師們，同時也從他們那裡得到寧瑪的法教。
            </p>

            <WatermarkHeading as="h2">印度與尼泊爾朝聖</WatermarkHeading>
            <p>
              由於西藏動亂不安，他決定去印度、尼泊爾朝聖；隨行者有夏瑪巴、大司徒仁波切、國師嘉察仁波切。
            </p>
            <p>
              尼泊爾國王非常禮遇及尊敬噶瑪巴。噶瑪巴在尼泊爾消滅了瘟疫，並祈雨解除了旱災。他在印度造訪了佛陀的聖地之後，回到西藏。
            </p>

            <WatermarkHeading as="h2">圓寂與預言信</WatermarkHeading>
            <p>
              他接受了中國的邀請，並準備由夏瑪巴陪同去中國；但是他在禪定中知道中國會有政治動亂，並且知道他自己的時間也到了。因此他留下預言，把他轉世的信函交付給大司徒仁波切後，自己因感染天花而圓寂。
            </p>
            <p>
              兩天後，夏瑪巴也因天花圓寂。大司徒仁波切確吉穹乃（Chokyi Jungney，1700~1774）是他的法嗣。
            </p>

            <WatermarkHeading as="h2">第八世大司徒仁波切確吉穹乃</WatermarkHeading>
            <p>
              確吉穹乃（Chokyi Jungney，1700~1774）誕生在康區德格（Derge，Kham）。他從夏瑪巴和噶瑪巴處得到全部噶舉傳承法教，也追隨多位上師學習，譬如日增次旺諾布大師（Rikdzin Tsewang Norbu）。
            </p>
            <p>
              1727 年，他在西藏東部創建了宏偉的八蚌寺。他最重要的事業之一，是主持德格王（Derge）編印《甘珠爾》（經藏）、《丹珠爾》（論藏）的工作；這部由木刻複印的藏經舉世聞名，是藏傳佛教的聖典，被稱為德格版本（Derge edition）。
            </p>
            <p>
              他的佛行事業非常廣，包括興建或修建寺院、閉關中心等等。他認證了第十三世噶瑪巴和第九世夏瑪仁波切，並將全部傳承法教傳給第十三世噶瑪巴堆督多傑。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="changchub-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
