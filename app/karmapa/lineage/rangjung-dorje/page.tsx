import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa003 (Rangjung Dorje 1284-1339).jpg";

export const metadata: Metadata = {
  title: "第三世噶瑪巴讓烱多傑 | Kagyu",
  description: "第三世噶瑪巴讓烱多傑生平、教法與傳承介紹。",
};

export default function RangjungDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第三世噶瑪巴讓烱多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第三世噶瑪巴讓烱多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第三世噶瑪巴讓烱多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第三世噶瑪巴讓烱多傑Rangjung Dorje (1284-1339).</p>

            <WatermarkHeading as="h2">童年與認證</WatermarkHeading>
            <p>
              法王誕生在南藏定日蘭可（Dingri Langkor）一個寧瑪傳承家庭中。他三歲時就要求同伴孩子們用草做一個寶座，端坐其上，再戴一頂黑帽子，說自己是噶瑪巴。
            </p>
            <p>
              五歲時，他去見鄔金巴。鄔金巴在夢中已知他的到來，並認證此孩子是噶瑪巴希的轉世，把金剛黑寶冠等第二世噶瑪巴的遺物都給了讓烱多傑。
            </p>

            <WatermarkHeading as="h2">一切佛法傳承知識的權威</WatermarkHeading>
            <p>
              讓烱多傑在楚布寺長大，承接了噶舉和寧瑪的傳承。十八歲時，他受沙彌戒；他從埃菲爾士峰（Mt. Everest）山下閉關後才受比丘戒，並在噶當傳承中學習。
            </p>
            <p>
              不僅如此，他更遍訪上師，到各教派中學習佛法。因此，他成為印度與西藏各種佛教傳承中，法教及修法的權威。
            </p>

            <WatermarkHeading as="h2">創立噶瑪寧體傳承</WatermarkHeading>
            <p>
              二十多歲時，在閉關禪定中，他看到太陽升起中有無垢友（Vimalamitra）尊者，然後蓮師融入他的眉心中。他剎那間知道自己得到了寧瑪傳承大圓滿灌頂。
            </p>
            <p>
              他寫下許多關於大圓滿的教法，並創建噶瑪寧體（Karma Nyingtik）傳承。由於他深入寧瑪派無垢友的法教，將噶舉大手印與寧瑪大圓滿結合成一體。
            </p>
            <p>
              三十五歲時，他在定中學習了時輪金剛教法。他著作占星術的新論述，迄今被稱為「楚期」或楚布寺天文學，成為設計楚布寺藏曆的基礎。他也精通醫學；在西藏，天文學與醫學是相關連的學問。
            </p>
            <p>
              在一生之中，他寫下許多論典，包括著名的《甚深內義》（Zab mo nang don），此書是金剛乘中最著名的典籍之一。
            </p>

            <WatermarkHeading as="h2">弘法與圓寂</WatermarkHeading>
            <p>
              第三世噶瑪巴在西藏和中國建立了許多寺院。1332 年，他前往中國，為弟子元朝皇帝托貢鐵木爾（Toghon Temur）舉行登基儀式，之後在中國圓寂。圓寂時，許多人都看到他的形象在月亮中呈現。
            </p>
            <p>
              在眾多弟子中，有雅德遍千（Yakde Panchen）、創立覺囊（Jonang）教派的多波巴（Dolpopa）、夏瑪札巴森給（Shama Drakpa Senge）等。最重要的是嘉華永東巴（Gyalwa Yungtönpa），他是噶舉傳承的持有者。
            </p>

            <WatermarkHeading as="h2">嘉華永東巴</WatermarkHeading>
            <p>
              嘉華永東巴（Gyalwa Yungtonpa，1296-1376）誕生在南藏從宗都根莫（Tsongdu Gurmo）一個寧瑪傳承修行人家中，取名多傑本（Dorje Bum）。他從小學習五明，對大乘經典和金剛乘經典有無比知識，大部分時間在夏魯（Shalu）學習。
            </p>
            <p>
              他從祖強巴森給（Zur Champa Senge）處學習大圓滿法中之瑪哈瑜伽、阿努瑜伽及阿底瑜伽，之後又從香巴夏本（Shamgpa Shakbum）學習 Yaman taka cycle of teachings 和灌頂。他追隨非常多上師學習，成為當代最受尊重的大師。
            </p>
            <p>
              嘉華永東巴對薩迦、楚布、夏魯、桑普作供養，並應母親要求接受一位空行母。在第一個孩子出世後，他請求家長允許剃度，法名多傑帕（Dorje Pal）。他後來遇到第三世噶瑪巴讓烱多傑，得到口傳及全部傳承並圓滿證悟。
            </p>
            <p>
              他多年在西藏、帕羅（Paro）和不丹修行。他撰寫論著，分辨經藏和續藏在佛法見地上的不同，不僅令人印象深刻，也超越當代許多偉大學者。雅德遍千即成為他的弟子。
            </p>
            <p>
              他是密行瑜伽士，利益眾多眾生。八十二歲時，在木蛇年圓寂，圓寂時出現許多成就者瑞相。在他眾多弟子中，最關鍵的是第四世噶瑪巴若佩多傑（Rolpe Dorje）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="rangjung-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
