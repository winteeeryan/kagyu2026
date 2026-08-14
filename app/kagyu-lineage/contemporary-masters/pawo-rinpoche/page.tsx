import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { ContemporaryMastersArticleNav } from "../_components/ContemporaryMastersArticleNav";

export const metadata: Metadata = {
  title: "具德巴沃仁波切長壽祈請文 | Kagyu",
  description: "第十一世巴渥仁波切具德巴沃仁波切長壽祈請文。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="第十一世巴渥仁波切橫幅">
        <img
          alt="第十一世巴渥仁波切橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero008.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">具德巴沃仁波切長壽祈請文</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十一世巴渥仁波切</WatermarkHeading>

            <h4>具德巴沃仁波切長壽祈請文</h4>

            <div className={styles.centeredBodyText}>
              <p>咕汝畢雜呀！</p>

              <p>無畏淨妙法界中，最勝不變金剛身，無量刹土中幻化，賜妙光明之威勢。</p>
              <p>調伏諸魔最勇士，事業優越具力勢，佛法妙音遍十方，輪涅導師祈住世。</p>
              <p>智慧媲美龍樹尊，成就無上如密勒，一切瞻部莊嚴者，持譽白光祈住世。</p>
              <p>見者解惑具聖身，深廣具義語度眾，具四無量圓滿慧，三身自性祈住世。</p>
              <p>如此祈願菩提樹，善果遍滿於虛空，持有度眾權法冠，長壽佛性如日月。</p>
              <p>直至數劫金剛住，具四戒律大事業，賜予無畏於三界,善妙吉祥咸圓滿！</p>

              <p>應乃朗拉紮理事們之請求，書于錫金地區大德法林處。</p>
            </div>

            <p className={styles.signatureText}>——第十二世嘉察紮巴明就果恰所撰寫</p>

            <EndMarker />
            <ContemporaryMastersArticleNav currentSlug="pawo-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
