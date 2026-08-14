import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa008 (Mikyo Dorje1507~1554).jpg";

export const metadata: Metadata = {
  title: "第八世噶瑪巴米覺多傑 | Kagyu",
  description: "第八世噶瑪巴米覺多傑生平、學術、藝術與傳承介紹。",
};

export default function MikyoDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第八世噶瑪巴米覺多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第八世噶瑪巴米覺多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第八世噶瑪巴米覺多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第八世噶瑪巴米覺多傑 Mikyo Dorje (1507~1554)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              法王誕生於俄楚（Ngomchu）的卡帝普區（Kartiphuk），名沙丹（Satam）的小村莊，一個瑜伽士家庭中。一出生便說：「我是噶瑪巴。」
            </p>
            <p>
              大司徒仁波切得到消息後，發現一切徵兆與預言信相符，於是認證此孩童是噶瑪巴，並帶他前往噶瑪寺，受到帝王般的照顧。
            </p>
            <p>
              法王五歲時，在青海省有一位母親聲稱自己的孩子是噶瑪巴。噶瑪巴的監護人國師嘉察仁波切和楊日巴（Yang Ripa）前去處理此事。他們發誓，在未能確定誰是真的轉世噶瑪巴之前，對兩個孩子絕對一視同仁。
            </p>
            <p>
              當他們見到米覺多傑時，竟情不自禁地行大禮拜，立刻相信他是真正的噶瑪巴。為慎重起見，大司徒仁波切、國師嘉察仁波切和多位第七世噶瑪巴弟子設計測驗，確認誰是真正的噶瑪巴。米覺多傑通過考驗並說：「唉瑪吙！不要懷疑，我是噶瑪巴。」次年六歲時，國師嘉察仁波切為他舉行陞座典禮。
            </p>

            <WatermarkHeading as="h2">修學與弘法</WatermarkHeading>
            <p>
              噶瑪巴米覺多傑追隨多位上師學習，包括大司徒仁波切、多摩札西唯瑟（Dulmo Tashi Ösel）、達波札西南嘉（Dakpo Tashi Namgyal）和第一世噶瑪欽列巴仁波切（Karma Trinleypa）。他從桑傑年巴仁波切和大司徒仁波切處得到全部噶舉傳承法教。
            </p>
            <p>
              八歲時，噶瑪巴到了蘇曼寺，在定中「法稱」與「陳那」現身傳授他中觀思想。九歲時，他接受雲南姜王邀請前往訪問，使原本反對佛教的姜王皈依佛門，接受灌頂，並在境內建築一百所寺院。
            </p>
            <p>
              噶瑪巴遊訪至蔡林達里（Tralin Dali），在此為宗喀巴大師及兩位法子修了一座特別儀軌。同年十一月，中國明武宗派五百名官員攜帶各種寶物，邀請他造訪中土。
            </p>
            <p>
              此時噶瑪巴於定中看見天空有兩個太陽，其中一個突然墜落地上。法王認為這是武宗駕崩之兆，因此沒有前往中土。使節回國後，武宗已去世，證明他的預言確實無誤。
            </p>

            <WatermarkHeading as="h2">學術與藝術</WatermarkHeading>
            <p>
              米覺多傑是最著名的噶瑪巴之一，是大禪師和大學者。他著作三十多部論典，包括注釋《毘奈耶經》、《般若經》、《阿毘達摩論》、《中觀》等，以及關於大手印和相關法義的作品。
            </p>
            <p>
              他也是藝術家，並且是唐卡畫主要學派噶瑪加吉（Karma Gadri）派的創始人。他也為噶瑪噶舉傳承寫下許多修法儀軌和祈請文。
            </p>

            <WatermarkHeading as="h2">勝觀與佛行事業</WatermarkHeading>
            <p>
              第八世噶瑪巴在勝觀中知道自己與咕嚕仁波切不可分。咕嚕仁波切所行的弘法事業，是佛在人間圓滿弘法事業的一種方式。
            </p>
            <p>
              第八世噶瑪巴了知自己的佛行事業，與咕嚕仁波切執行第三佛迦葉佛（Dipamkara）的佛行事業無二無別。於此賢劫中共有一千佛，因此噶瑪巴和咕嚕仁波切都可說是千佛事業的化身。
            </p>

            <WatermarkHeading as="h2">圓寂與預言信</WatermarkHeading>
            <p>
              法王四十八歲圓寂前，將預言來世的信交給夏瑪昆丘顏拉仁波切（Shamar Konchok Yenlak Rinpoche）。
            </p>
            <p>
              他的主要弟子有第五世夏瑪仁波切昆丘顏拉仁波切、第四世大司徒秋吉果洽仁波切、第四世國師嘉察札巴敦珠仁波切，以及第二世巴沃祖拉湛瓦仁波切。
            </p>
            <p>
              他在預言信中寫道：「我的來世將投胎到一個雪域東邊澤秀河口的地方，那附近有自然形成的觀音像岩石，還可聽到潺潺的水聲。我看見徵兆，我會很快在那裡出生。」
            </p>

            <WatermarkHeading as="h2">昆秋顏拉</WatermarkHeading>
            <p>
              昆秋顏拉（Könchök Yenlak，1526~1583）誕生於木雞年，在空波（Kongpo）北部名為姜（Kyen）的地方。一出生便唸六字大明咒。
            </p>
            <p>
              第八世噶瑪巴認證他是第五世夏瑪巴。他追隨噶瑪巴和巴沃仁波切學習，很快成為大學者和禪師，並由噶瑪巴處得到全部傳承法教，成為傳承持有者。
            </p>
            <p>
              他有許多著作，並認證及教導第九世噶瑪巴。圓寂時有非常多瑞相。他將全部傳承法教傳給第九世噶瑪巴旺秋多傑。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="mikyo-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
