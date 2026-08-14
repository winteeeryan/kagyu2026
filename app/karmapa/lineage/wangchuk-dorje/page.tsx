import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa009 (Wangchuk Dorje 1556~1603).jpg";

export const metadata: Metadata = {
  title: "第九世噶瑪巴旺秋多傑 | Kagyu",
  description: "第九世噶瑪巴旺秋多傑生平、大手印著作與傳承介紹。",
};

export default function WangchukDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第九世噶瑪巴旺秋多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第九世噶瑪巴旺秋多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第九世噶瑪巴旺秋多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第九世噶瑪巴旺秋多傑 Wangchuk Dorje (1556~1603)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              正如第八世噶瑪巴所預言，旺秋多傑誕生在東藏高地翠秀（Treshö）。他在母腹中，便唸咒語發出聲音。出生時，他雙跏趺坐而落，說：「我是噶瑪巴！」
            </p>
            <p>
              六個月大時，他被帶往楚布寺，大司徒仁波切和夏瑪仁波切都認證他是第八世噶瑪巴的轉世。六歲時，夏瑪仁波切為他舉行陞座典禮。
            </p>

            <WatermarkHeading as="h2">弘法與建寺</WatermarkHeading>
            <p>
              陞座後，他在夏瑪仁波切陪同下，前往西藏、西康等多處旅行弘法，共有三萬多位比丘受具足戒，接引無數人信聞佛法。
            </p>
            <p>
              噶瑪巴旺秋多傑也前往蒙古和不丹弘法，並興建寺院。法王指派德行高超的喇嘛代表他前往錫金，創建三座寺院：拉蘭（Ralang）、波通（Phodong）及隆德（Rumtek）。隆德寺在 1960 年代成為大寶法王噶瑪巴在印度的主寺。
            </p>

            <WatermarkHeading as="h2">大手印著作</WatermarkHeading>
            <p>
              和第八世噶瑪巴一樣，第九世噶瑪巴有許多注釋經典和大手印的論著，包括《了義海》（The Ocean Of Definitive Meaning）、《除無明闇》（Dispelling The Darkness Of Ignorance）和《直指法身》（Pointing Out the Dharmakaya）。
            </p>
            <p>
              這些著作都是此後傳承中學習大手印的重要教材，對噶瑪噶舉傳承的修學體系有深遠影響。
            </p>

            <WatermarkHeading as="h2">圓寂與預言信</WatermarkHeading>
            <p>
              四十八歲時，他將預言下一世轉世的信函交付第六世夏瑪仁波切確吉旺秋（Chokyi Wangchuk）後圓寂。
            </p>

            <WatermarkHeading as="h2">第六世夏瑪仁波切確吉旺秋</WatermarkHeading>
            <p>
              確吉旺秋（Chokyi Wangchuk，1584~1630）誕生在中藏直貢區（Drikhung）。五歲時，第九世噶瑪巴認證他是第六世夏瑪巴，並將噶舉傳承法教都傳給他。
            </p>
            <p>
              他成為大學者，精通經藏和密續。其記憶力驚人，能完整背誦三十二部佛典，並有許多論著。他是西藏王德西松巴的上師，也興建了堪波涅南寺（Kampo Neynang）。
            </p>
            <p>
              他曾前往中國和尼泊爾弘法，並用梵文教導尼泊爾國王拉曼那能辛（Laxman Naran Singh）佛法。
            </p>

            <WatermarkHeading as="h2">傳承持有者</WatermarkHeading>
            <p>
              確吉旺秋認證第十世噶瑪巴確映多傑，並傳授傳承法教。四十歲時圓寂，並示現瑞相。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="wangchuk-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
