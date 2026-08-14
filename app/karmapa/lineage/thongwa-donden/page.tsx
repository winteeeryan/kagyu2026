import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa006(Thongwa Donden1416~1453).jpg";

export const metadata: Metadata = {
  title: "第六世噶瑪巴通瓦敦殿 | Kagyu",
  description: "第六世噶瑪巴通瓦敦殿生平、修持儀軌與傳承介紹。",
};

export default function ThongwaDondenPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第六世噶瑪巴通瓦敦殿</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第六世噶瑪巴通瓦敦殿</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第六世噶瑪巴通瓦敦殿" src={portrait} />
            </figure>

            <p className="imageCaption">第六世噶瑪巴通瓦敦殿  Thongwa Donden (1416~1453)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              法王誕生在東藏靠近噶瑪寺（Karma Gon）的哦托色炯（Ngomto Shakyam）一個瑜伽士家中。出生不久，父母抱他外出乞食，遇到第五世噶瑪巴弟子俄巴恰嘉華（Ngompa Cha Gyalwa），小嬰兒非常興奮。
            </p>
            <p>
              俄巴恰嘉華問他叫什麼名字，小嬰兒握住他的手指說：「我是無生，超越一切名、地點，我將引導許多眾生解脫！」然後說自己是噶瑪巴，但請求先不要告訴別人。俄巴恰嘉華照顧他七個月後，把他帶往噶瑪寺。
            </p>
            <p>
              第五世噶瑪巴弟子第三世夏瑪仁波切認證他是噶瑪巴轉世後，為他舉行陞座大典，並和蔣揚札巴（Jamyang Drakpa）、堪千涅普瓦（Khenchen Nyephuwa）共同將噶舉傳承法教全部傳給他。法王也從傳承上師仁千桑波得到全部傳承法教。
            </p>

            <WatermarkHeading as="h2">受戒與灌頂</WatermarkHeading>
            <p>
              九歲時，在中藏奧卡塔西塘寺（Olka Tashi Tang），由納普南藏波為他剃度。他受了菩薩戒，也接受「時輪金剛」灌頂。
            </p>

            <WatermarkHeading as="h2">修持儀軌與弘法事業</WatermarkHeading>
            <p>
              他編纂瑪哈嘎拉舞的論述，並為岡倉噶舉制定許多修行儀軌。岡倉噶舉即是噶瑪噶舉。他也將香巴噶舉（Shangpa Kagyu）法教和希解派（Shijay）施身法融入噶舉傳承。
            </p>
            <p>
              他在西藏廣行佛行事業，包括弘法、教學、修建寺院、出版經書、制定僧伽儀軌，並在噶舉傳承中開設佛學院。
            </p>

            <WatermarkHeading as="h2">轉世信函與圓寂</WatermarkHeading>
            <p>
              1452 年，他知道自己不久人世，開始閉關，並將金剛持法教傳給國師嘉察巴究敦珠（Gyaltsab Goshir Paljor Döndrup），託付他一封轉世信函，交代下一代轉世的所有細節。
            </p>
            <p>
              第六世噶瑪巴主要的法子是本嘎蔣白桑波（Pengar Jampal Sangpo）。他著有《大手印傳承祈請文》，此文是他在證悟大手印時自然流出的法語。
            </p>
            <p>
              法王於 1453 年圓寂，時年三十八歲。主要弟子包括第一世國師嘉察巴究敦珠仁波切（Gyaltsab Goshir Paljor Döndrup，1427~1489）、第二世大司徒札西南嘉仁波切（Situ Tashi Namgyal，1450~1497）、本嘎蔣白桑波（Penkar Jampal Sangpo）與昆千絨通堪布（Kunchen Ronton Khenpo）。
            </p>

            <WatermarkHeading as="h2">本嘎蔣白桑波</WatermarkHeading>
            <p>
              本嘎蔣白桑波（Pengar Jampal Sangpo，15 至 16 世紀）誕生在旦香（Damshang）一個成就者家庭中。很小便開始讀書；二十歲時，隨大班智達榮登（Ronton）學習經藏及密續。
            </p>
            <p>
              之後，他隨第六世噶瑪巴專注學習噶舉傳承法教與那洛六法等法，成就為噶舉傳承中傑出的上師。他是第七世噶瑪巴的主要上師，傳授全部噶舉傳承法教，並教導年輕的噶瑪巴成為和他一樣有學問、有教養且品德高尚的君子。
            </p>

            <WatermarkHeading as="h2">國師嘉察巴究敦珠</WatermarkHeading>
            <p>
              國師嘉察巴究敦珠（Goshir Gyaltsap Paljor Döndrup，1427~1489）誕生在中藏涅莫區。第六世噶瑪巴教導他經藏和論藏，他也從噶瑪巴、本嘎蔣白桑波和多位上師處學習佛教理論及禪修方法。
            </p>
            <p>
              之後，他擔任噶瑪巴的秘書，把自己奉獻給噶瑪巴和傳承事業。他就是第一世國師嘉察仁波切。他將從第六世噶瑪巴得到的傳承法，全部傳給第七世噶瑪巴確札嘉措（Chodrak Gyatso）。
            </p>
            <p>
              國師嘉察巴究敦珠於第七世噶瑪巴二十五歲時示現圓寂，並顯現許多成就瑞相。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="thongwa-donden" />
          </div>
        </div>
      </article>
    </main>
  );
}
