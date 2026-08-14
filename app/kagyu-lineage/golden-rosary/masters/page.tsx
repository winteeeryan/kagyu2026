import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionCard } from "@/components/ui/SectionCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "黃金珠鬘法脈傳承祖師 | Kagyu",
  description: "黃金珠鬘法脈傳承祖師介紹。",
};

const masterCards = [
  {
    href: "/kagyu-lineage/golden-rosary/masters/vajradhara",
    image: "/kagyu-lineage/%23001Vajradhara.jpg",
    name: "金剛總持",
    subtitle: "Vajradhara",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/tilopa",
    image: "/kagyu-lineage/%23002Tilopa.jpg",
    name: "帝洛巴",
    subtitle: "Tilopa",
    years: "988-1069",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/naropa",
    image: "/kagyu-lineage/%23003Naropa.jpg",
    name: "那洛巴",
    subtitle: "Naropa",
    years: "1016-1100",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/marpa",
    image: "/kagyu-lineage/%23004Marpa.jpg",
    name: "馬爾巴",
    subtitle: "Marpa",
    years: "1012-1097",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/milarepa",
    image: "/kagyu-lineage/%23005Milarepa.jpg",
    name: "密勒日巴",
    subtitle: "Milarepa",
    years: "1040-1123",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/gampopa",
    image: "/kagyu-lineage/%23006Gampopa.jpg",
    name: "岡波巴",
    subtitle: "Gampopa",
    years: "1079-1153",
  },
].map((card, index) => ({
  ...card,
  id: `golden-rosary-master-${String(index + 1).padStart(2, "0")}`,
}));

function MasterCard({ card }: { card: (typeof masterCards)[number] }) {
  return (
    <SectionCard
      ariaLabel={`${card.name} 詳細介紹`}
      href={card.href}
      image={card.image}
      imageAlt={card.name}
      subtitle={
        <>
          <span>{card.subtitle}</span>
          {card.years ? <span>{card.years}</span> : null}
        </>
      }
      title={card.name}
    />
  );
}

export default function Page() {
  return (
    <main className={`${styles.page} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="黃金珠鬘法脈傳承祖師橫幅">
        <img
          alt="黃金珠鬘法脈傳承祖師橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero006.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">黃金珠鬘法脈傳承祖師</DecoratedHeading>
          </div>

          <section className={styles.cardSection} aria-label="黃金珠鬘法脈傳承祖師列表">
            <div className={styles.topGrid}>
              {masterCards.map((card) => (
                <MasterCard card={card} key={card.id} />
              ))}
            </div>
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
