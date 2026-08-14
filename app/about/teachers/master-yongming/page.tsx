import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "永明法師";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "永明法師介紹。",
};

export default function MasterYongmingPage() {
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
              <img alt={title} src="/about/teacher011-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              永明法師生於 1958 年台南，畢業於成功大學統計系。1983 年追隨星雲法師出家，1987 年取得中國文化大學印度文化研究所碩士。曾任佛光山中國佛教研究院教務與佛學院講師，現任佛光山編藏處主任。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="master-yongming" />
          </div>
        </div>
      </article>
    </main>
  );
}
