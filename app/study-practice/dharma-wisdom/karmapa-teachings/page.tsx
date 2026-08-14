import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { TeachingCardGrid } from "./TeachingCardGrid";
import styles from "./page.module.css";
import { teachingTitles } from "./teachingTitles";
import { getTeachingThumbnailSrc } from "./teachingImages";

export const metadata: Metadata = {
  title: "法王教言 | Kagyu",
  description: "法王教言列表。",
};


const teachingCards = teachingTitles.map((title, index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    id: `karmapa-teaching-${number}`,
    image: getTeachingThumbnailSrc(number),
    number,
    title,
  };
});

export default function Page() {
  return (
    <main className={`${styles.page} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="法王教言橫幅">
        <img
          alt="法王教言橫幅"
          className={styles.bannerImage}
          src="/study-practice/dharmawisdomhero004.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">法王教言</DecoratedHeading>
          </div>

          <section className={styles.cardSection} aria-label="法王教言列表">
            <TeachingCardGrid cards={teachingCards} />
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
