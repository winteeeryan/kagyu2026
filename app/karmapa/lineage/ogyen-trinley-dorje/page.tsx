import type { Metadata } from "next";
import Link from "next/link";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa017 (Ogyen Trinley Dorje 1985- ).jpg";

export const metadata: Metadata = {
  title: "第十七世噶瑪巴鄔金欽列多傑 | Kagyu",
  description: "第十七世噶瑪巴鄔金欽列多傑生平、返回楚布寺與出走印度介紹。",
};

export default function OgyenTrinleyDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十七世噶瑪巴鄔金欽列多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十七世噶瑪巴鄔金欽列多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十七世噶瑪巴鄔金欽列多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十七世噶瑪巴鄔金欽列多傑 Ogyen Trinley Dorje (1985- )</p>

            <WatermarkHeading as="h2">出身和童年</WatermarkHeading>
            <p>
              1985 年，法王誕生在東藏拉拓（Lhatok）區一個遊牧家庭的帳蓬中。母親才懷他的時候，曾經有奇異的夢。他出生時有一隻杜鵑鳥飛到他們的帳蓬上，同時在山谷中很多人都聽到神秘的法螺聲音。
            </p>
            <p>
              在西藏，這些現象被視為是一位成就者誕生的吉祥徵兆。
            </p>
            <p>
              這位名叫阿波嘎嘎的年輕牧童，從小家人就感覺到他的生活似乎處處受到加持，但是阿波嘎嘎沒有告訴家人他是誰。1992 年，他要求家人移居另一個山谷，並告訴他們那裡會有僧人來拜訪。
            </p>
            <p>
              他們移居不久，第十六世噶瑪巴的弟子們依照第十六世噶瑪巴預言信中的指示，來到此山谷，發現阿波嘎嘎出生與生活中的一些細節與預言相符，證實阿波嘎嘎就是第十七世大寶法王噶瑪巴鄔金欽列多傑。
            </p>

            <WatermarkHeading as="h2">預言與認證</WatermarkHeading>
            <p>
              第十六世噶瑪巴除了留下預言信之外，並寫作了很多首詩和道歌，預言他雖然離開西藏楚布主寺，但很快就會回來，他的根本上師將是大司徒仁波切，他將會在印度學習。
            </p>
            <p>
              更奇特的是，十九世紀大師秋吉林巴的預言與法王的誕生細節吻合。正因這些預言一一吻合，傳統的說法是噶瑪巴在「自己認證自己」。
            </p>

            <WatermarkHeading as="h2">重返楚布寺</WatermarkHeading>
            <p>
              1992 年，第十七世大寶法王噶瑪巴終於又回到了楚布寺。同年 9 月 27 日，在楚布寺舉行了陞座典禮，並且得到史無前例的中國政府正式承認。兩萬多人參加了這場莊嚴的典禮，第二天上午，兩萬五千多人列隊接受法王的加持。
            </p>
            <p>
              在楚布寺，法王學習佛教經藏、梵唄、儀軌及佛教藝術如金剛喇嘛舞。每天接見來自世界各地數以百計的朝聖者。他漸漸開始為大眾灌頂並參與寺院各種法會。
            </p>
            <p>
              他在 10 歲時，開始經由禪定認證多位轉世仁波切，包括他的禪修導師帕沃（Pawo）仁波切、蔣貢康楚仁波切和年輕的達桑仁波切（Dobzang Rinpoche）。
            </p>
            <p>
              法王在楚布寺時，很快修復了被毀壞多年的大殿、佛堂、舍利塔、佛學院（Shedra）和僧舍，圓滿了噶瑪巴主要的任務之一。
            </p>

            <WatermarkHeading as="h2">出走印度</WatermarkHeading>
            <p>
              逐漸地，因為中國政府給他的壓力，使他無法盡到噶瑪巴應擔負的責任。他無法遵照政府的要求去抨擊達賴喇嘛和承認班禪喇嘛。由於政府對佛教的不認識，法王無法做一些政府規定他做的事。
            </p>
            <p>
              並且，法王必須接受傳承中上師們的灌頂和傳授法教；在楚布寺中，政府不允許海外高僧回西藏的情況下，使法王的學習變得非常困難。
            </p>
            <p>
              終於，在 1999 年，他決定出走。雖然他一直受到政府嚴格的監視和保護，也知道政府絕對不會允許他出國進修，他和身邊少數親信們研擬了一個大膽的出走計劃。
            </p>

            <WatermarkHeading as="h2">翻山越嶺</WatermarkHeading>
            <p>
              經過數月精心規劃，在 12 月 28 日，十四歲的大寶法王噶瑪巴宣佈閉關後，褪下僧袍換上一件深色風衣，從窗口出去，和少數隨眾乘車悄悄地離開了楚布寺。
            </p>
            <p>
              他們一路上乘車、步行、騎馬、乘直升機、火車、計程車到達印度。此一智慧及勇敢的出走，成為全世界媒體的頭條新聞。
            </p>
            <p>
              2000 年元月五日，法王到達印度達蘭沙拉，此行驚震了全世界。尊貴的第十四世達賴喇嘛熱誠歡迎他。2001 年，印度政府給與法王難民身份，法王繼續住在達蘭沙拉附近，等待印度政府准許他回到在印度錫金噶瑪巴的主寺隆德寺。
            </p>

            <p>
              關於法王詳細事蹟，請參閱
              <Link href="/karmapa/history">歷年紀事</Link>
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="ogyen-trinley-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
