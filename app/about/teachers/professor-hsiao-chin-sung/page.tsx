import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "蕭金松教授";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "蕭金松教授介紹。",
};

export default function ProfessorHsiaoChinSungPage() {
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
              <img alt={title} src="/about/teacher012-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              蕭教授生於 1943 年，嘉義縣人，政治大學法學研究所碩士，早年師從歐陽無畏教授。曾任蒙藏委員會秘書、科長、中華佛學研究所兼任副研究員，以及政大民族研究所所長、民族學系主任，教授藏文與《現觀莊嚴論》等藏語佛典。現任法光佛教文化研究所所長。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="professor-hsiao-chin-sung" />
          </div>
        </div>
      </article>
    </main>
  );
}
