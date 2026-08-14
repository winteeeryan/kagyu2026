import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 圖登諾布仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 圖登諾布仁波切介紹。",
};

export default function ThubtenNorbuRinpochePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">{title}</WatermarkHeading>

            <figure className={localStyles.teacherPortrait}>
              <img alt={title} src="/about/teacher004-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              圖登諾布仁波切於 1965 年出生，自幼即被多位高僧認定為其祖父——伏藏師才曲仁波切之轉世，後又經果洛年模寺認證為第三代住持格秀普巴仁波切之化身。
            </p>
            <p>
              仁波切先後依止堪欽門色仁波切、堪欽秋恰仁波切，尤以在喇榮五明佛學院依止法王晉美彭措為根本上師，廣泛學習顯密教法與大圓滿竅訣。1993 年，再於達賴喇嘛、貝諾法王、紐修堪仁波切、聽列諾布仁波切、多珠千仁波切等大德座下領受灌頂與教授，使修證更臻成熟。
            </p>
            <p>
              1993 年年底來台弘法，1995 年獲晉美彭措法王賜名，成立寧瑪巴喇榮三乘法林佛學會，並創立「普利慈育學苑」，致力推動藏族教育，護持喇榮五明佛學院不遺餘力。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="thubten-norbu-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
