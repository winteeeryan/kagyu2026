import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { renderKarmapaTextLinks } from "@/components/ui/KarmapaTextLinks/KarmapaTextLinks";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { GoldenRosaryMastersArticleNav } from "../_components/GoldenRosaryMastersArticleNav";
import styles from "../vajradhara/page.module.css";

const portrait = "/kagyu-lineage/%23006Gampopa.jpg";

export const metadata: Metadata = {
  title: "岡波巴 | Kagyu",
  description: "岡波巴 Gampopa 介紹。",
};

export default function GampopaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">岡波巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">岡波巴 Gampopa</WatermarkHeading>

            <figure className={styles.articlePortrait}>
              <img alt="岡波巴 Gampopa" src={portrait} />
            </figure>

            <p className="imageCaption">岡波巴 Gampopa</p>

            <p>
              岡波巴誕生於西藏東部的涅地（Nyal）。他的父親是一位名醫，以精湛醫術與行醫經驗將他撫養成人。自七歲起，岡波巴追隨多位醫師學習，包括印度醫師吉美（Kyeme）、西藏倉（Tsang）地區醫師烏色（Usil）、以及尼泊爾醫師維吉（Viji）。他用八年半時間研習醫術，通曉中國與西藏醫學，因此成為當代知名的醫者。
            </p>

            <WatermarkHeading as="h2">早年佛法學習</WatermarkHeading>
            <p>
              岡波巴自幼對佛法深感興趣，十五歲時已廣泛修學寧瑪派（紅教）諸多密法，包括根本續秘密心要、赫汝卡嘎波、寂靜忿怒續、大悲網持續等法。他亦依止噶當派大師夏巴雍登札（Sharpa
              Yonten Drak）學法。
            </p>

            <WatermarkHeading as="h2">家庭巨變與出家因緣</WatermarkHeading>
            <ul>
              <li>
                二十二歲時，岡波巴與一位美麗賢淑的官家女子成婚，育有一子一女。然而在他二十五歲時，當地爆發嚴重傳染病，他的妻子與兩名子女皆不幸離世。妻子臨終時囑託他：將餘生奉獻於佛法。
              </li>
              <li>
                二十六歲時，岡波巴於格西洛丹些饒（Geshe Loden
                Sherap）座下出家，法名索南仁千（Sonam Rinchen）。
              </li>
              <li>
                二十八歲時，他追隨噶當派大師紐庫巴宗竹嘉稱（Nyukrumpa Tsöndru
                Gyaltsen）學法多年。
              </li>
            </ul>
            <p>
              【他亦於夏巴領巴與夏杜哇魯巴兩位格西處學習〈莊嚴經論〉、〈現觀莊嚴論〉、〈俱舍論〉及其他法典；又在茫境羅登洗惹處接受喜金剛、密集金剛等續部灌頂，並聽聞釋要與口訣。其後再於紐如巴與甲交日巴二格西處廣學噶當派全部法要。大師自忖：「現在我應該開始修行了。」遂前往甲交山閉關靜修。】
            </p>

            <WatermarkHeading as="h2">與密勒日巴的會晤</WatermarkHeading>
            <p>
              三十二歲時，岡波巴聽見乞丐們談論大瑜伽行者密勒日巴，心中即生強烈信心，決定尋訪尊者。歷經艱辛旅程，他來到促德（Trode
              Tashigang），而密勒日巴已預知其將至——因為尊者已在此地等候。
            </p>
            <p>然而，因察覺岡波巴內心尚存微細我慢，密勒日巴特意延後兩週才召見他。</p>
            <p>
              首次會面時，密勒日巴手持一個以人顱製成的頭骨碗，盛滿麥酒，遞給岡波巴並說：「把這碗酒喝下去！」
            </p>
            <p>岡波巴身為比丘，當眾飲酒十分為難。尊者說：「不要妄念，喝下去吧。」岡波巴遂一口飲盡。</p>
            <p>此舉象徵：密勒日巴確認岡波巴已具承受究竟法教之根器。</p>
            <p>
              在短短十三個月內，密勒日巴直接傳授給他所有法教，包括那洛巴的法脈，尤其是甚深的拙火瑜伽與完整的大手印傳承。岡波巴生起深廣覺受，最終圓滿證悟，成為密勒日巴正式法嗣。
            </p>

            <WatermarkHeading as="h2">創立噶舉傳承</WatermarkHeading>
            <p>
              岡波巴將自己在大手印上的證悟，與噶當派的教法巧妙融合，創立噶舉派，其一分支即為達波噶舉（Dhakpo
              Kagyu）。他創建寺院——達拉岡波（Draklha Gampo），並在此閉關、禪修、教學與度眾。
            </p>
            <p>
              他著作豐富，其中最著名者為《解脫莊嚴寶·大乘菩提道次第論》（The Jewel Ornament of
              Liberation）。
            </p>
            <p>
              岡波巴既是噶當傳承的執持者，又承續密勒日巴的大手印及密續傳承。自他以後，噶舉傳承便具備雙重脈系，因此能以非常圓滿、完善的法教引導弟子證悟。
            </p>

            <WatermarkHeading as="h2">教法傳承方式</WatermarkHeading>
            <p>
              岡波巴先教授弟子們噶當派的大乘道，再傳授密勒日巴噶舉傳承中不共的大手印與密續法教，使弟子能依次第圓滿修持。
            </p>

            <WatermarkHeading as="h2">弟子與傳承後嗣</WatermarkHeading>
            <p>岡波巴弟子眾多，其中最優秀的六位為：</p>
            <ul>
              <li>{renderKarmapaTextLinks("杜松虔巴（Düsum Khyenpa） —— 第一世噶瑪巴（Karmapa）")}</li>
              <li>帕莫竹巴（Phakmo Drupa）</li>
              <li>岡波竹青寧波（Gampo Tsultrim Nyingpo）</li>
              <li>沙通修恭（Saltong Shogom）</li>
              <li>跋絨達瑪旺秋（Barom Dharma Wangchu）</li>
              <li>祥卓威袞波（Zhang Drowae Gonpo）</li>
            </ul>
            <p>其中，岡波巴最重要的黃金珠鬘傳承法嗣，即是：</p>
            <p>{renderKarmapaTextLinks("第一世噶瑪巴杜松虔巴。")}</p>

            <EndMarker />
            <GoldenRosaryMastersArticleNav currentSlug="gampopa" />
          </div>
        </div>
      </article>
    </main>
  );
}
