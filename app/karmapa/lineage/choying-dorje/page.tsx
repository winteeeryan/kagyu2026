import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa010 (Chöying Dorje1604~1674).jpg";

export const metadata: Metadata = {
  title: "第十世噶瑪巴確映多傑 | Kagyu",
  description: "第十世噶瑪巴確映多傑生平、藝術成就與傳承介紹。",
};

export default function ChoyingDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十世噶瑪巴確映多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十世噶瑪巴確映多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十世噶瑪巴確映多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十世噶瑪巴確映多傑 Chöying Dorje (1604~1674)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              第十世噶瑪巴確映多傑誕生在西藏東北的角落，果洛康西唐（Golok Khansi Tang）。他一出生，就向四方各走一步，雙腿盤坐在中央並說：「嗡嘛尼貝美吽啥！我憐憫人道之苦，因為我是噶瑪巴！」
            </p>
            <p>
              這位神奇的嬰兒被帶到宗莫欽（Tsong Mo Che）王宮，備受禮遇。六歲時，被夏瑪仁波切認證後，為法王舉行陞座典禮。
            </p>

            <WatermarkHeading as="h2">藝術成就</WatermarkHeading>
            <p>
              噶瑪巴七歲前便通曉繪畫和雕塑，八歲時即能依照造像量度書籍的尺度繪製出精美的佛像，又通曉雕塑與刺繡工藝，被譽為神童，著有《噶魯藝術註釋》一書。
            </p>
            <p>
              年輕的噶瑪巴常舉行黑寶冠法會。他曾與大約五百位博學的年輕喇嘛辯經，被問到佛陀的生平故事、菩薩教法以及中觀派的法義等等，噶瑪巴贏了辯論。
            </p>

            <WatermarkHeading as="h2">動亂與行化</WatermarkHeading>
            <p>
              噶瑪巴預知政治將會動亂並有戰事發生，他知道蒙古軍隊會介入支持黃教格魯巴，政治迫害即將來臨。於是噶瑪巴將他的資財布施給窮人，指派國師嘉察仁波切作為他在楚布寺的臨時代表，他帶領隨從到揚竹（Yam Dul）搭帳蓬紮營。
            </p>
            <p>
              蒙古固始可汗率兵占領西康後，進軍西藏，造成極大的破壞，並攻擊噶瑪巴的營地，殺害很多隨從。噶瑪巴帶了侍者昆都贊波（Kuntu Zangpo）飛行離去。
            </p>
            <p>
              他們落在荒蕪之地，連續十二天沒有食物；這時蓮師現身，給他們服用了甘露丸。然後他們到了雲南、緬甸和尼泊爾，一路上他邊行邊弘法及興建道場。
            </p>

            <WatermarkHeading as="h2">返回西藏</WatermarkHeading>
            <p>
              過了廿多年後，法王才回到了西藏。他認證夏瑪仁波切、國師嘉察仁波切和巴沃仁波切的轉世，並傳授給他們噶舉傳承法教，夏瑪巴成為他的法嗣。
            </p>
            <p>
              法王七十一歲時，留下轉世預言信函給夏瑪巴和嘉察巴後圓寂；之後由國師嘉察仁波切繼續主持楚布寺。此時西藏的政治環境已徹底改變，第五世達賴喇嘛已成為西藏的統治者，此政統也從此一代代傳遞下去。
            </p>

            <WatermarkHeading as="h2">傑出弟子</WatermarkHeading>
            <p>
              他的傑出弟子有：第七世夏瑪仁波切耶謝寧波（Yeshe Nyingpo，1631~1694）、第六世大司徒仁波切米滂確嘉惹殿（Mipham Chogyal Rarten，1658~1682）、第六世國師嘉察仁波切（Nobu Zango，1659~1698）、第五世巴沃仁波切祖拉成列嘉波（Truklak Trinlay Gyampo，1694~1699）。
            </p>

            <WatermarkHeading as="h2">第七世夏瑪仁波切耶謝寧波</WatermarkHeading>
            <p>
              耶謝寧波（Yeshe Nyingpo，1631~1694）誕生在東藏果洛（Golok）區，被第十世噶瑪巴認證。他非常虔誠地追隨噶瑪巴學習，得到全部噶舉傳承的法教，並成為大手印及大圓滿禪修的成就者，六十四歲時圓寂。
            </p>
            <p>
              他是第十一世噶瑪巴耶謝多傑的認證者，也是傳承導師。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="choying-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
