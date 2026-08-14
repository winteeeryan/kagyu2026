import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa005(Deshin Shekpa 1384~1415).jpg";

export const metadata: Metadata = {
  title: "第五世噶瑪巴德新謝巴 | Kagyu",
  description: "第五世噶瑪巴德新謝巴生平、黑寶冠法會與傳承介紹。",
};

export default function DeshinShekpaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第五世噶瑪巴德新謝巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第五世噶瑪巴德新謝巴</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第五世噶瑪巴德新謝巴" src={portrait} />
            </figure>

            <p className="imageCaption">第五世噶瑪巴德新謝巴 Deshin Shekpa (1384~1415)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              法王誕生於南藏涅塘地區一個瑜伽士家中。他母親懷他的時候，能聽到他在胎中唸「嗡啊吽」咒聲。他一出生不久便坐直，擦一擦自己的臉說：「我皈依佛，皈依法，皈依僧。我是噶瑪巴！嗡瑪尼貝美吽！」
            </p>
            <p>
              當他被帶到楚布寺，第二世夏瑪卡卻旺波仁波切立刻認出此孩子就是第四世噶瑪巴若佩多傑的轉世。他把黑寶冠等代為保管之物都給了德新謝巴，並授予所有噶舉傳承法教。德新謝巴很快完成學習。
            </p>

            <WatermarkHeading as="h2">永樂皇帝與中國弘法</WatermarkHeading>
            <p>
              二十二歲時，明朝永樂皇帝在夢中見到噶瑪巴就是觀音菩薩，於是寄來金字書寫的信函，邀請噶瑪巴前往中國。二十三歲時，噶瑪巴經三年旅行抵達皇宮；永樂皇帝親自在城門口迎接，尊噶瑪巴為師，對法王非常尊敬。
            </p>
            <p>
              歷史記載，在接下來一百天中，噶瑪巴每天顯現一個絕妙驚人的奇蹟。永樂皇帝將事蹟繪畫在布上，並以漢、蒙、藏文字註解，形成《噶瑪巴為明太祖薦福圖》。如前兩位噶瑪巴一般，德新謝巴也前往五台山朝聖，並視察他的寺院。
            </p>

            <WatermarkHeading as="h2">黑寶冠法會的開始</WatermarkHeading>
            <p>
              永樂皇帝在一場法會中，看見一頂由十萬位空行母頭髮所織成的黑色金剛寶冠，在上師頭頂上盤旋。皇帝悟到，這是因為他的虔敬，才可能見到能助他開悟的法冠。
            </p>
            <p>
              因此，皇帝製作一頂寶冠供養噶瑪巴，使人人都可以看到並獲得加持。這便是黑寶冠法會的開始。據說人們只要見到此寶冠一眼，便得被救度。皇帝並賜噶瑪巴最高頭銜「大寶法王」及金印，此後噶瑪巴被尊稱為大寶法王噶瑪巴。
            </p>

            <WatermarkHeading as="h2">返回楚布與圓寂</WatermarkHeading>
            <p>
              1410 年，法王回到楚布寺，修復遭地震破壞的寺院。他認證夏瑪確培耶謝（Shamar Chopal Yeshe，1406-1452）為第三世夏瑪仁波切。
            </p>
            <p>
              他知道自己不久人世，於是留下轉世信函。法王在布達拉宮圓寂時年僅三十一歲，火化後舍利中顯現觀音菩薩、勝樂金剛和喜金剛的形象。
            </p>
            <p>
              噶舉傳承的持有者，是噶瑪巴的弟子索關仁千桑波（Sokwön Rinchen Sangpo），亦名 Ratnabhadra 或 Rikpe Raltri。
            </p>

            <WatermarkHeading as="h2">索關仁千桑波</WatermarkHeading>
            <p>
              索關仁千桑波（Sokwön Rinchen Sangpo，亦名 Ratnabhadra 或 Rikpe Raltri，15 世紀）誕生在索山（Soksam）一個著名家庭中。從小在寺院剃度出家，接受一般教育與佛法教育後，在西藏各處行腳參訪並參加辯論。
            </p>
            <p>
              辯論主題包括《中觀論》、《般若經》、《律藏》及《阿毘達摩俱舍論》。他成為經藏及續藏的大師，因此被尊稱為「日貝惹直」（Rikpe Raltri），意為因明哲理之劍。
            </p>
            <p>
              他從第五世噶瑪巴得到噶舉傳承的全部法教，並圓滿證悟，成為當代最殊勝禪師。索關仁千桑波將噶舉傳承法教傳給第六世噶瑪巴通瓦敦殿（Thongwa Donden，1416-1453）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="deshin-shekpa" />
          </div>
        </div>
      </article>
    </main>
  );
}
