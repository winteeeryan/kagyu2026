"use client";

import { useMemo, useState } from "react";
import { SectionCard } from "@/components/ui/SectionCard";
import styles from "./page.module.css";

type TeachingCard = {
  id: string;
  image: string;
  number: string;
  title: string;
};

type TeachingCardGridProps = {
  cards: TeachingCard[];
};

const INITIAL_VISIBLE_CARDS = 40;
const VISIBLE_CARD_INCREMENT = 40;

export function TeachingCardGrid({ cards }: TeachingCardGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CARDS);
  const visibleCards = useMemo(() => cards.slice(0, visibleCount), [cards, visibleCount]);
  const hasMore = visibleCount < cards.length;

  return (
    <>
      <div className={styles.cardGrid}>
        {visibleCards.map((card) => (
          <SectionCard
            ariaLabel={`${card.title} 詳細內容`}
            className={styles.teachingCard}
            href={`/study-practice/dharma-wisdom/karmapa-teachings/${card.number}`}
            image={card.image}
            imageAlt={card.title}
            key={card.id}
            openInNewTab
            subtitle={`第 ${card.number} 則`}
            title={card.title}
          />
        ))}
      </div>

      {hasMore ? (
        <button
          className={styles.loadMoreButton}
          type="button"
          onClick={() => setVisibleCount((count) => Math.min(count + VISIBLE_CARD_INCREMENT, cards.length))}
        >
          載入更多
        </button>
      ) : null}
    </>
  );
}
