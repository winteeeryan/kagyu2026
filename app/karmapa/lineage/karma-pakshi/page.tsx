import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa002 (Karma Pakshi 1204-1283).jpg";

export const metadata: Metadata = {
  title: "第二世噶瑪巴噶瑪巴希 | Kagyu",
  description: "第二世噶瑪巴噶瑪巴希生平、弘法與傳承介紹。",
};

export default function KarmaPakshiPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第二世噶瑪巴噶瑪巴希</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第二世噶瑪巴噶瑪巴希</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第二世噶瑪巴噶瑪巴希" src={portrait} />
            </figure>

            <p className="imageCaption">第二世噶瑪巴噶瑪巴希Karma Pakshi (1204-1283).</p>

            <WatermarkHeading as="h2">神童</WatermarkHeading>
            <p>
              法王誕生在東藏直龍查托（Kyil-le Tsakto）的貴族家庭中，名叫確津（Chözin）。六歲時，未經指導便有書法才能，對佛典瀏覽一遍便能理解，眾人確信他是轉世靈童。
            </p>
            <p>
              在赴中藏求學時，他遇見朋札巴。朋札巴從第一世噶瑪巴法嗣卓貢惹千處接受噶舉傳承，並將傳承中的法教透過灌頂正式傳給年輕的噶瑪巴希。從此開始，每一位噶瑪巴都從傳承持有者處得到傳承中的一切教法，成為傳承持有者。
            </p>
            <p>
              第二世噶瑪巴前半生幾乎都在閉關，也曾訪問並修建第一世噶瑪巴所建的寺院。他也是第一位將觀音菩薩六字大明咒「嗡瑪呢貝美吽」傳到西藏的人。
            </p>

            <WatermarkHeading as="h2">忽必烈皇宮</WatermarkHeading>
            <p>
              四十七歲時，法王接受蒙古可汗成吉思汗孫子忽必烈的邀請前往中國。在中國、西藏及《馬可波羅遊記》中，都記錄了噶瑪巴希在皇宮中示現神通的事蹟。法王也扮演和平使者，但他不願留在皇宮中，因此得罪了忽必烈。
            </p>
            <p>
              此後十年，噶瑪巴希在中國、蒙古、西藏各處行腳，成為眾人尊敬的上師。忽必烈的哥哥、當時的皇上蒙哥可汗特別尊重法王，並賜予「Ti Ahro」金印。
            </p>
            <p>
              蒙哥可汗去世後，忽必烈繼承元朝王位。忽必烈對噶瑪巴希七年前拒絕留在宮中一事仍非常不悅，並妒忌噶瑪巴希與哥哥蒙哥更親近，於是派三萬大軍逮捕噶瑪巴。當大軍面對噶瑪巴時，皆因他的二指手印而定住不能動。
            </p>
            <p>
              法王對軍人生起大悲心，令軍人能動並任由他們逮捕。然而軍人卻綁不住他，因為他似乎沒有實體；給他喝毒藥時，法王身中反而射出令人目眩的光芒。各種方式都對噶瑪巴無效，忽必烈終於改變心意，並成為他的弟子。噶瑪巴在皇宮中停留一段時日，受到極尊榮的待遇。
            </p>

            <WatermarkHeading as="h2">禪定中示現神通</WatermarkHeading>
            <p>
              噶瑪巴回到楚布寺，看見數年前興建的五十尺高巨大佛像竟然不正，向左傾斜。法王在佛前入禪定，身體如佛像般傾斜，然後身體緩緩坐正，佛像也隨之歸正。
            </p>
            <p>
              第二世大寶法王的一百多部著作，都保存在楚布寺藏經閣中。圓寂前，噶瑪巴希將自己轉世的訊息告訴法嗣鄔金巴。
            </p>

            <WatermarkHeading as="h2">鄔金巴 Orgyenpa</WatermarkHeading>
            <p>
              鄔金巴（Orgyenpa，1230-1312）誕生在北藏拉拓村（Lato）的一個密乘修行者家庭。年輕時隨父親修學金剛乘教法。他非常希望閉關修行，但知道需先充實經教基礎。上師葛桑巴（Götsangpa）為他授沙彌戒。
            </p>
            <p>
              七歲開始，他為治學打下基礎。十六歲時，他開始在倉區（Tsang）極負盛名的寺院中學習論藏、中觀、律藏及五明和科學學門。各科成績都很好，並從哥倫巴（Golungpa Namkha Gyaltsen）處學習全部時輪金剛密續。
            </p>
            <p>
              他曾前往尼泊爾、印度、中國、巴基斯坦、查里（Tsari）、岡底斯山（Mount Kailash）、加藍達拉（Jalandara）和烏地亞拉（Odiyana）學習，並至各聖地禪修，得到至高證悟，成為金剛乘成就者。
            </p>

            <WatermarkHeading as="h2">傳承與弟子</WatermarkHeading>
            <p>
              五十三歲時，鄔金巴遇到第二世噶瑪巴噶瑪巴希，獲得噶舉全部傳承法教。經口傳之後，他融入傳承教法中，與其無二無別。鄔金巴的佛行事業遍及西藏各地，他教授弟子的重點是岡波巴傳承的大手印法。
            </p>
            <p>
              在眾多弟子中，他有四大法子：涅多瓦（Nyedowa）兩兄弟、確戒卡卻瓦（Chöje Khachuwa）和蔣揚索南唯瑟（Jamyang Sönam Öser）；另有八位弟子，其中四位非常傑出，皆為西藏與印度著名的學者或瑜伽士。然而他最主要的弟子，是第三世噶瑪巴讓烱多傑。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="karma-pakshi" />
          </div>
        </div>
      </article>
    </main>
  );
}
