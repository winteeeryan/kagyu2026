import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 堪布吉美仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 堪布吉美仁波切介紹。",
};

export default function KhenpoJigmeRinpochePage() {
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
              <img alt={title} src="/about/teacher006-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              堪布吉美仁波切於 1974 年出生於青海囊謙，十歲時於蘇曼寺殿竹仁波切座下剃度為沙彌。十二歲於泰錫度仁波切座前正式出家。十九歲進入喇榮五明佛學院，於法王晉美彭措座下領受灌頂、講解與實修教授，七年中深入學習經部、中觀、因明、波羅密多、大毗婆娑論、戒律及密續。
            </p>
            <p>
              其後前往哲蚌寺研修三年，於上師三寶生起堅固不動之信心，修證功德日增。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-jigme-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
