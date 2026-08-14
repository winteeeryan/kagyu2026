import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa013 (Dudul Dorje 1733~1797).jpg";

export const metadata: Metadata = {
  title: "第十三世噶瑪巴堆督多傑 | Kagyu",
  description: "第十三世噶瑪巴堆督多傑生平、神變事蹟與傳承介紹。",
};

export default function DudulDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十三世噶瑪巴堆督多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十三世噶瑪巴堆督多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十三世噶瑪巴堆督多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十三世噶瑪巴堆督多傑 Dudul Dorje (1733~1797)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              正如預言所言，法王誕生在南藏涅恰瓦宗（Nyen Chawatrong）。大司徒仁波切確吉穹乃找到他，把他帶去楚布寺。四歲時，國師嘉察仁波切為他舉行陞座典禮。
            </p>
            <p>
              八歲時，大司徒仁波切傳他全部噶舉傳承的法教。他追隨卡托日增哲旺諾布（Kathok Rigdzin Tsewang Norbu）、噶舉欽列新塔（Kagyu Trinley Shingta）、巴沃祖拉嘎哇（Pawo Tsuklak Gawa）等噶舉和寧瑪多位大師學習。
            </p>

            <WatermarkHeading as="h2">大昭寺水患</WatermarkHeading>
            <p>
              有一天，拉薩大昭寺（Jo-kang Temple）大佛像下有水汨汨流出，佛像有被水淹的危險。蓮師曾經預言，噶瑪巴是唯一能化解這危機的人。
            </p>
            <p>
              拉薩官員知道蓮師的預言，便立刻請噶瑪巴相助。但噶瑪巴因為有事不能前往，他特別派人送達一封信函，並吩咐要將這信放在水面上。照辦之後，水立即消退；這封信是寫給龍王的，動之以觀音菩薩悲心。
            </p>
            <p>
              此後，噶瑪巴去大昭寺向佛像獻哈達時，據說佛像手臂動了起來並接下哈達，佛像雙臂迄今維持此狀。
            </p>

            <WatermarkHeading as="h2">遙作開光</WatermarkHeading>
            <p>
              藏南一寺院邀請噶瑪巴開光，噶瑪巴無法前往，但他指定開光日期。當日，他在楚布寺中將米灑向空中，此時進行開光典禮的寺院居然有米像雨一樣落下，得到了加持。
            </p>

            <WatermarkHeading as="h2">認證與傳承</WatermarkHeading>
            <p>
              噶瑪巴、大司徒仁波切和卡托日增次旺諾布認證了夏瑪巴的轉世確珠嘉措（Chodrup Gyatso）。他是第六世班禪喇嘛巴登耶謝（Palden Yeshe）的幼弟。
            </p>
            <p>
              他圓寂前將轉世信函托付給大司徒貝瑪寧切（Situpa Pema Nyinje）。圓寂後，大司徒仁波切是他的法嗣。
            </p>

            <WatermarkHeading as="h2">第十世夏瑪巴米滂確珠嘉措</WatermarkHeading>
            <p>
              米滂確珠嘉措（Mipham Chodrup Gyatso，1742~1793）誕生在中藏札西哲（Tashi Tse），是第六世班禪大師洛桑巴登耶謝（Lobsang Palden Yeshe）的幼弟。經噶瑪巴和大司徒仁波切認證，並為他舉辦陞座典禮。
            </p>
            <p>
              他隨大司徒仁波切、巴沃仁波切和日增次旺諾布上師學習多年，成為大學者及大禪師。1780 年，他去尼泊爾修復了在思彎揚布（Swayambhu）的大佛塔。
            </p>
            <p>
              但在此時尼泊爾和西藏發生衝突，拉薩一位有權勢的格魯派大臣塔察丹佩貢波（Tagtsag Tenpai Gonpo）乘機宣稱衝突是夏瑪巴煽起的。藏政府通過法會規定將夏瑪巴的寺院都隸屬格魯派之外，並規定夏瑪巴不得再轉世，直到廿世紀才由第十六世噶瑪巴再開始認證夏瑪巴。
            </p>
            <p>
              他將傳承傳給了第九世大司徒仁波切貝瑪寧切旺波（Pema Nyinje Wangpo，1774~1853）。
            </p>

            <WatermarkHeading as="h2">第九世大司徒仁波切貝瑪寧切旺波</WatermarkHeading>
            <p>
              貝瑪寧切旺波（Pema Nyinje Wangpo，1774~1853）誕生在東藏宜洪（Yihung），由第十三世噶瑪巴和夏瑪仁波切、巴沃仁切認證。蓮師也曾預言他的出生。
            </p>
            <p>
              他的主要上師是第十三世噶瑪巴和第十世夏瑪巴。他成為當代大學者及大禪師，弘揚佛法使非常多的人受益，並建立了很多的道場和閉關中心。他有三巨冊的論著。
            </p>
            <p>
              他成為第十四世噶瑪巴的主要上師，也是蔣貢康楚羅卓泰耶（Jamgon Kongtrul Lodro Thaye）的上師，並將傳承法教全部傳授給第十四世噶瑪巴特秋多傑（Thekchok Dorje）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="dudul-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
