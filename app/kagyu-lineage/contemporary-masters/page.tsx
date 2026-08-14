import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionCard } from "@/components/ui/SectionCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "當代傳承上師 | Kagyu",
  description: "當代傳承上師介紹。",
};

const masterCards = [
  {
    href: "/kagyu-lineage/contemporary-masters/rangjung-rigpe-dorje",
    imageAlt: "第十六世大寶法王 讓炯立佩多傑",
    name: (
      <>
        第十六世大寶法王
        <br />
        讓炯立佩多傑
      </>
    ),
    subtitle: "上師相應法",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/ogyen-trinley-dorje",
    imageAlt: "第十七世大寶法王 烏金欽列多傑",
    name: (
      <>
        第十七世大寶法王
        <br />
        烏金欽列多傑
      </>
    ),
    subtitle: "觀音法門--慈悲的修行",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/tai-situ-rinpoche",
    imageAlt: "第十二世泰錫度仁波切",
    name: "第十二世泰錫度仁波切",
    subtitle: "大手印",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/gyaltsab-rinpoche",
    imageAlt: "第十二世嘉察仁波切",
    name: "第十二世嘉察仁波切",
    subtitle: "開示供燈之意義",
  },
  {
    href: "https://www.jamgonkongtrul.org/section.php?s1=1&s2=1",
    imageAlt: "第四世蔣貢康楚仁波切",
    name: "第四世蔣貢康楚仁波切",
    subtitle: "蔣貢康楚仁波切長壽祈願文",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/pawo-rinpoche",
    imageAlt: "第十一世巴渥仁波切",
    name: "第十一世巴渥仁波切",
    subtitle: "巴渥仁波切長壽祈請文",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/mingyur-rinpoche",
    imageAlt: "第七世詠給明珠仁波切",
    name: "第七世詠給明珠仁波切",
    subtitle: "中陰文武百尊之故事",
  },
].map((card, index) => ({
  id: `contemporary-master-${String(index + 1).padStart(2, "0")}`,
  image: `/kagyu-lineage/contemporary${String(index + 1).padStart(3, "0")}.png`,
  ...card,
}));

export default function Page() {
  const topCards = masterCards.slice(0, 4);
  const bottomCards = masterCards.slice(4);

  return (
    <main className={`${styles.page} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="當代傳承上師橫幅">
        <img
          alt="當代傳承上師橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero008.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">當代傳承上師</DecoratedHeading>
          </div>

          <section className={styles.cardSection} aria-label="當代傳承上師列表">
            <div className={styles.topGrid}>
              {topCards.map((card) => (
                <SectionCard
                  image={card.image}
                  imageAlt={card.imageAlt}
                  href={card.href}
                  key={card.id}
                  openInNewTab={Boolean(card.href)}
                  subtitle={card.subtitle}
                  title={card.name}
                />
              ))}
            </div>

            <div className={styles.bottomGrid}>
              {bottomCards.map((card) => (
                <SectionCard
                  image={card.image}
                  imageAlt={card.imageAlt}
                  href={card.href}
                  key={card.id}
                  openInNewTab={Boolean(card.href)}
                  subtitle={card.subtitle}
                  title={card.name}
                />
              ))}
            </div>
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
