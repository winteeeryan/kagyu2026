import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa015 (Khakhyab Dorje 1871-1922).jpg";

export const metadata: Metadata = {
  title: "第十五世噶瑪巴卡恰多傑 | Kagyu",
  description: "第十五世噶瑪巴卡恰多傑生平、弘法事業與傳承介紹。",
};

export default function KhakhyabDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十五世噶瑪巴卡恰多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十五世噶瑪巴卡恰多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十五世噶瑪巴卡恰多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十五世噶瑪巴卡恰多傑 Khakhyab Dorje (1871-1922)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              法王誕生在中藏宗省謝可村（Sheikor），一出生就唸六字大明咒。他兩眉中長了黑捲毛的白痣，是佛陀卅二相中的一種瑞相。
            </p>
            <p>
              竹千仁波切（Kyabgon Drukchen）、明就旺吉嘉波（Mingyur Wanggi Gyalpo）、蔣貢康楚、德千秋吉林巴（Terchen Chokgyur Lingpa）和巴沃祖拉寧切（Pawo Tsuklak Nyinchey）認證並為他舉行陞座典禮。
            </p>

            <WatermarkHeading as="h2">修學與傳承</WatermarkHeading>
            <p>
              他從多位上師處受到完整的教育和灌頂，並從蔣貢康楚仁波切處不僅接受了全部噶舉傳承的法教，也包括西藏各教派的傳承法教以及醫學、藝術、語言學。
            </p>
            <p>
              他也追隨過偉大的導師堪千札西歐哲（Khenchen Tashi Ozer）學習。
            </p>

            <WatermarkHeading as="h2">弘法事業</WatermarkHeading>
            <p>
              他到西藏各地弘法、灌頂、教學，收集經論的珍本並出版。他是第一位結婚的噶瑪巴，有三個孩子。次子是第二世蔣貢康楚巴登欽哲唯色（Jamgon Kongrul Palden Khyentse Öser）。
            </p>
            <p>
              他的一生是菩薩為度眾生而學習不倦的最佳示範。他主要的弟子是：大司徒貝瑪汪秋嘉波、蔣貢康楚巴登欽哲唯色和貝魯欽哲洛卓米芝蔣貝果洽（Beru Khyentse Lodro Mize Jampe Gocha）。
            </p>

            <WatermarkHeading as="h2">圓寂與預言信</WatermarkHeading>
            <p>
              1922 年他入涅槃，圓寂前將他來生轉世細節的預言信交給最親的侍者蔣巴竹清（Jampal Tsultrim）。
            </p>

            <WatermarkHeading as="h2">第十一世大司徒仁波切貝瑪旺秋嘉波</WatermarkHeading>
            <p>
              貝瑪旺秋嘉波（Pema Wangchok Gyalpo，1886-1953）誕生在東藏里塘。第十五世噶瑪巴認證並為他舉行陞座典禮。
            </p>
            <p>
              他追隨蔣貢康楚仁波切、堪千欽哲仁波切（Khenchen Shenga Rinpoche）以及多位上師學習，成為經藏、密續的大學者。第十五世噶瑪巴是他的根本上師，將噶舉傳承交付給他，他又將此傳承傳給了第十六世噶瑪巴讓烱日佩多傑（Rangjung Rigpe Dorje）。
            </p>

            <WatermarkHeading as="h2">第二世蔣貢仁波切巴登欽哲唯瑟</WatermarkHeading>
            <p>
              巴登欽哲唯色（Palden Khyentse Öser，1904-1953）誕生在楚布寺中，是第十五世噶瑪巴的次子。他十二歲被認證為第二世蔣貢康楚仁波切。第十五世噶瑪巴在楚布寺為他舉行陞座典禮。
            </p>
            <p>
              他在第一世蔣貢康楚仁波切的主寺察加仁欽札（Tsadra Rinchen Trak）寺追隨多位上師學習；噶瑪巴給他灌頂並授與他噶舉傳承全部法教。他在西藏及中國弘法。他是大手印的成就者，並且是傳承的持有者。
            </p>
            <p>
              他將大手印傳承的精髓傳授給第十六世噶瑪巴讓烱日佩多傑（Rangjung Rigpe Dorje，1924-1981）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="khakhyab-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
