import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { MainSeatArticleNav } from "../_components/MainSeatArticleNav";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "楚布寺 | Kagyu",
  description: "楚布寺是噶舉傳承歷代大寶法王的主寺與核心道場。",
};

const foundingItems = [
  "公元 1159 年，第一世噶瑪巴杜松虔巴前往東藏康區時，來到中藏吐龍谷楚布寺所在地，購下建寺的土地。",
  "公元 1189 年，第一世噶瑪巴八十歲時回到吐龍谷興建楚布寺。此被稱為「人間淨土」的寺院可容納一千多位僧眾，是歷代噶瑪巴和噶舉傳承的主寺。",
];

const rebuildingItems = [
  "1966 年中國文化大革命後，楚布寺幾成廢墟。1980 年，中國政府開放西藏與尼泊爾交通，允許年長藏人回西藏省親；第十六世噶瑪巴指示竹奔德千仁波切回到西藏重建楚布寺。重建工作非常困難，因為西藏地區人民貧困，缺乏財力支持；但在竹奔仁波切多年努力與多方尋找資源之下，終於修復部分大殿，以及幾個較重要或必須的中心與房舍。",
  "第十七世大寶法王噶瑪巴鄔金欽列多傑在楚布寺陞座之後，楚布寺的修建開始加速進行。大部分殿堂房舍都已修復，包括佛學院；來自世界各地的弟子們亦捐助興建。1999 年第十七世噶瑪巴離開西藏前往印度後，楚布寺仍是噶舉的主寺，不過參訪的人較為減少。",
  "第十七世噶瑪巴陞座後，重建加速進行，佛學院與核心殿堂逐步恢復；楚布寺仍為噶舉傳承的主寺與象徵。",
];

export default function TsurphuMonasteryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="楚布寺圖像">
        <img alt="楚布寺圖像" className={styles.headerImage} src="/karmapa/karmapahero007.png" />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">楚布寺</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">噶瑪巴歷代主寺</WatermarkHeading>

            <p>
              楚布寺是噶舉傳承最重要的寺院，是歷代大寶法王的駐錫地，也是噶舉傳承佛行事業的中心。第十七世大寶法王噶瑪巴在此陞座，楚布寺是噶舉傳承弟子們心目中最重要的寺院。
            </p>
            <p>
              第一世噶瑪巴所創的轉世系統在楚布寺開始。十三世紀，第二世噶瑪巴噶瑪巴希（Karma Pakshi）便是在此寺被認證為第一世噶瑪巴的轉世。從此開始了西藏「祖古」喇嘛轉世傳統（Tulku Tradition）。從那時起，噶瑪巴代代轉世沒有間斷，直到現在的第十七世大寶法王噶瑪巴鄔金欽列多傑（Ogyen Trinley Dorje）。
            </p>
            <p>
              坐落在寧靜、樹木茂盛、山明水秀的環境中，楚布寺是很多位大成就者的道場，包括歷代的噶瑪巴。楚布寺的建築宏偉美觀，代表西藏傳統藝術的成就。寺中珍藏著數世紀以來收藏的法器文物，它被修行人認為是最有加持力的道場。
            </p>

            <WatermarkHeading as="h2">楚布寺的創建</WatermarkHeading>
            <ul>
              {foundingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">之後的發展</WatermarkHeading>
            <p>
              第二世噶瑪巴擴建寺院，並建造著名的拉千則林簡（Lhachen Zamling Gyen）大佛。此後八百多年中，寺院持續發展成龐大的道場。
            </p>

            <WatermarkHeading as="h2">環境與建築</WatermarkHeading>
            <p>
              楚布寺位於吐龍谷西北，距離拉薩約七十公里，海拔 4300 米（14000 英尺）。主殿坐落在群山環繞的山谷中央，楚布河旁，面南；四周有諸佛菩薩殿、歷代噶瑪巴殿、本尊殿、護法殿、關房、寮房、出版中心、行政中心和噶瑪巴的夏宮。
            </p>
            <p>
              寺中並有兩個藏經圖書館，收藏經藏、續藏、修行指導、法本、儀軌、各教派上師著作、西藏文學，以及歷代大寶法王和弟子的著作。雄偉的後山被稱為「大悲心」（Thukje Chenpo），前山被稱為大護法「瑪哈嘎拉山」，中央山脈則被稱為仁慈的「彌勒菩薩山」。
            </p>
            <p>
              在較高的半山上，有三年閉關中心。附近有許多歷代噶瑪巴的小型閉關中心。在楚布寺後方，建造了一座非常精緻的寺院，名為確嘎岡寺（Chögargong），是國師嘉察仁波切的主寺。此寺右邊有兩座小寺：札桑寺（Dratshang）和殊利寺（Zuri）。
            </p>
            <p>
              在寺院右邊岩石山坡上，有蔣采（Gyang Tsen）護法殿；左邊有瑪哈嘎里（Mahakali）和巴登拉莫（Palden Lhamo）護法殿；前方小溪旁則有卡那多傑嘉波（Khanak Dorje Gyalpo）護法殿。
            </p>

            <WatermarkHeading as="h2">聖物寶藏</WatermarkHeading>
            <p>
              楚布寺珍藏許多稀有且具有歷史價值的聖物，大部分都保存得很好。它們保存在佛像中、舍利塔中或陳列櫃中。這裡保存了許多佛陀、龍樹菩薩、歷代噶瑪巴的加持物。
            </p>
            <p>
              其中包括龍樹菩薩親手用泥塑的釋迦牟尼佛像，以及那洛巴、馬爾巴、密勒日巴、岡波巴、歷代噶瑪巴和許多成就者的舍利子。楚布寺最著名的大佛像中更珍藏許多聖物法寶，寺中亦有各大寶法王噶瑪巴的舍利塔，信眾們常至塔前祈請加持。
            </p>
            <p>
              1959 年後，楚布寺遭到很大的破壞。不過第十六世噶瑪巴由於其預知，保存了一部分重要法器文物，現存於錫金隆德寺中。
            </p>

            <WatermarkHeading as="h2">重建楚布寺</WatermarkHeading>
            <ul>
              {rebuildingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <figure className={styles.closingImage}>
              <img alt="楚布寺" src="/karmapa/seat001.png" />
            </figure>

            <EndMarker />
            <MainSeatArticleNav currentSlug="tsurphu" />
          </div>
        </div>
      </article>
    </main>
  );
}
