import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa004 (Rolpe Dorje 1340-1383).jpg";

export const metadata: Metadata = {
  title: "第四世噶瑪巴若佩多傑 | Kagyu",
  description: "第四世噶瑪巴若佩多傑生平、弘法與傳承介紹。",
};

export default function RolpeDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第四世噶瑪巴若佩多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第四世噶瑪巴若佩多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第四世噶瑪巴若佩多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第四世噶瑪巴若佩多傑Rolpe Dorje (1340-1383).</p>

            <WatermarkHeading as="h2">誕生與童年</WatermarkHeading>
            <p>
              依前世所留下的預言函所示，第四世噶瑪巴誕生在西藏的空波區（Kongpo）。他的母親是智慧空行母所化現，周遭的人都能聽到他在母親腹中持誦咒語「嗡瑪尼貝美吽」。
            </p>
            <p>
              出生時，他坐直並持咒。三歲時，他告訴母親：「我是噶瑪巴希的轉世。」年幼時，他即具有噶瑪巴的神通力，可同時閱讀多本書，也能從夢中得到殊勝法教。
            </p>

            <WatermarkHeading as="h2">受戒與承接傳承</WatermarkHeading>
            <p>
              他六歲受沙彌戒，十八歲時從堪千東竹巴處接受比丘具足戒，並持戒嚴謹，不食酒肉。
            </p>
            <p>
              他在楚布寺研習哲學和宗教辯論，之後至第三世大寶法王噶瑪巴法嗣寧瑪上師永東巴（Yungtönpa）處，承受噶舉與寧瑪之傳承灌頂。
            </p>

            <WatermarkHeading as="h2">前往中國弘法</WatermarkHeading>
            <p>
              十九歲時，中國元朝皇帝托貢鐵木貞邀請噶瑪巴前往中國。他接受邀請後，一路上於各處停留教學。在中國教學三年，並建立許多寺院及道場。
            </p>
            <p>
              鐵木貞是元朝最後一任皇帝。之後，明朝明太祖也邀請他前往中國，他無法親自前往，但派遣學識淵博的喇嘛代表他赴中國。
            </p>

            <WatermarkHeading as="h2">一個殊勝的聚會</WatermarkHeading>
            <p>
              當他從中國回到西藏途中，替一位特殊的年輕人取名袞噶寧波（Kunga Nyingpo），並授予沙彌戒。他預言這位來自宗喀（Tsongka）的青年將來會成為一位偉大的上師。此青年即是後來創立格魯（Gelugpa）傳承的宗喀巴大師（Tsongkhapa）。
            </p>

            <WatermarkHeading as="h2">詩與佛行事業</WatermarkHeading>
            <p>
              法王是一位詩人，特別熟悉印度詩學。他寫下許多詩與道歌，成為噶舉傳承的重要特色。
            </p>
            <p>
              有一次，他的一位公主弟子告訴噶瑪巴，她夢中有人告訴她，若有人能在巨石山上做出三百尺高的佛像，將對大眾有很大利益。工人不知如何著手，法王便親自用山坡上的小石勾畫佛像略圖，並親自監督工程。歷時十三個月，三百多位工人齊心合力完成一幅巨大的佛像唐卡。
            </p>

            <WatermarkHeading as="h2">圓寂與預言</WatermarkHeading>
            <p>
              他在藏東圓寂前，於魯王山頂上說：「應將一名好僧侶的遺體火化在此山頂，這樣中國軍隊將不會入侵西藏。」後來眾人才知道，法王是在預言自己的圓寂。
            </p>
            <p>他主要持續傳承的弟子，是第二世夏瑪卡卻旺波（Shamar Khagchod Wangpo）。</p>

            <WatermarkHeading as="h2">卡卻旺波</WatermarkHeading>
            <p>
              卡卻旺波（Khagchod Wangpo，1350-1405）被第四世大寶法王噶瑪巴認證為第一世夏瑪仁波切（1283-1349）的轉世。他誕生在北藏納香（Namshang）境內的契瑪龍（Chema Lung），從小就非常特殊。
            </p>
            <p>
              七個月大時，他看到第四世噶瑪巴示現並對他一彈指，便能憶起前世一切。七歲時，他遇到第四世噶瑪巴，受沙彌戒和菩薩戒。噶瑪巴傳授他完整的大手印、那洛六法及噶舉傳承法，並為第二世夏瑪巴舉行紅寶冠坐床典禮。
            </p>
            <p>
              卡卻旺波追隨多位噶舉與寧瑪上師學習藏經和密續。第四世噶瑪巴圓寂後，卡卻旺波承接傳承；並在認證第五世噶瑪巴後，於楚布寺為他舉行陞座典禮並傳授法教。
            </p>
            <p>
              卡卻旺波是傳承中第一位將法教寫作成法本者，據記載共有八部著作。五十六歲時圓寂，並示現證悟徵兆。他的法嗣是第五世噶瑪巴德新謝巴（Deshin Shekpa）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="rolpe-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
