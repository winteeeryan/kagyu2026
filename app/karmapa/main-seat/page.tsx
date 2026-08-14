import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionCard } from "@/components/ui/SectionCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "噶瑪巴主寺法座 | Kagyu",
  description: "噶瑪巴主寺法座介紹。",
};

const templeCards = [
  {
    defaultObjectPosition: "50% 22%",
    image: "/karmapa/seat001.png",
    href: "/karmapa/main-seat/tsurphu",
    location: "西藏",
    templeName: "楚布寺 Tsurphu Monastery",
    templeNameText: "楚布寺 Tsurphu Monastery",
  },
  {
    defaultObjectPosition: "48% 34%",
    image: "/karmapa/seat002.png",
    href: "/karmapa/main-seat/rumtek",
    location: "印度錫金",
    templeName: "隆德寺 Rumtek Monastery",
    templeNameText: "隆德寺 Rumtek Monastery",
  },
  {
    defaultObjectPosition: "52% 42%",
    image: "/karmapa/seat003.png",
    href: "/karmapa/main-seat/ktd",
    location: "美國紐約州",
    templeName: (
      <>
        噶瑪三乘法輪中心
        <br />
        Karma Triyana Dharmachakra
      </>
    ),
    templeNameText: "噶瑪三乘法輪中心 Karma Triyana Dharmachakra",
  },
  {
    defaultObjectPosition: "50% 30%",
    image: "/karmapa/seat004.png",
    href: "/karmapa/main-seat/ksni",
    location: "印度錫金",
    templeName: (
      <>
        噶瑪師利那瀾陀高級佛學院
        <br />
        KSNI Karma Shri Nalanda Institute
      </>
    ),
    templeNameText: "噶瑪師利那瀾陀高級佛學院 KSNI Karma Shri Nalanda Institute",
  },
];

function TempleCard({ card }: { card: (typeof templeCards)[number] }) {
  return (
    <SectionCard
      ariaLabel={`${card.templeNameText} 詳細介紹`}
      className={styles.templeCard}
      href={card.href}
      image={card.image}
      imageAlt={`${card.templeNameText} 建築圖像`}
      imageStyle={{ objectPosition: card.defaultObjectPosition }}
      subtitle={card.location}
      title={card.templeName}
    />
  );
}

export default function KarmapaMainSeatPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="噶瑪巴主寺法座圖像">
        <img
          alt="噶瑪巴主寺法座圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero007.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">噶瑪巴主寺法座</DecoratedHeading>
          </div>

          <section className={styles.templeSection} aria-label="噶瑪巴主寺法座卡片">
            {templeCards.map((card) => (
              <TempleCard card={card} key={card.templeNameText} />
            ))}

            <div className={styles.centerMark} aria-hidden="true">
              <img alt="" draggable={false} src="/karmapa/subtitle-deco.png" />
            </div>
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
