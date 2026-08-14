import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionCard } from "@/components/ui/SectionCard";
import { saintBiographies } from "./saintData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "聖者行傳 | Kagyu",
  description: "八十四大成就者傳前六位聖者行傳。",
};

const saintCards = saintBiographies.map((card, index) => ({
  ...card,
  href: `/study-practice/dharma-wisdom/saints-biographies/${card.slug}`,
  id: `saint-biography-${String(index + 1).padStart(2, "0")}`,
}));

function SaintCard({ card }: { card: (typeof saintCards)[number] }) {
  return (
    <SectionCard
      ariaLabel={`${card.name} 詳細介紹`}
      className={styles.saintCard}
      href={card.href}
      image={card.image}
      imageAlt={card.name}
      subtitle={
        <>
          <span>{card.order}</span>
        </>
      }
      title={card.name}
    />
  );
}

export default function Page() {
  return (
    <main className={`${styles.page} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="聖者行傳橫幅">
        <img
          alt="聖者行傳橫幅"
          className={styles.bannerImage}
          src="/study-practice/dharmawisdomhero003.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">聖者行傳</DecoratedHeading>
          </div>

          <section className={styles.cardSection} aria-label="聖者行傳列表">
            <div className={styles.cardGrid}>
              {saintCards.map((card) => (
                <SaintCard card={card} key={card.id} />
              ))}
            </div>
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
