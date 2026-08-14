import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionCard } from "@/components/ui/SectionCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "歷代大寶法王 | Kagyu",
  description: "歷代大寶法王介紹。",
};

const karmapaCards = [
  {
    href: "/karmapa/lineage/karmapa-1",
    image: "/karmapa/karmapa001%20(Du%CC%88sum%20Khyenpa%201110-1193).jpg",
    name: "第一世噶瑪巴杜松虔巴",
    title: "Düsum Khyenpa (1110-1193)",
  },
  {
    href: "/karmapa/lineage/karmapa-2",
    image: "/karmapa/karmapa002 (Karma Pakshi 1204-1283).jpg",
    name: "第二世噶瑪巴噶瑪巴希",
    title: "Karma Pakshi (1204-1283)",
  },
  {
    href: "/karmapa/lineage/karmapa-3",
    image: "/karmapa/karmapa003 (Rangjung Dorje 1284-1339).jpg",
    name: "第三世噶瑪巴讓烱多傑",
    title: "Rangjung Dorje (1284-1339)",
  },
  {
    href: "/karmapa/lineage/karmapa-4",
    image: "/karmapa/karmapa004 (Rolpe Dorje 1340-1383).jpg",
    name: "第四世噶瑪巴若佩多傑",
    title: "Rolpe Dorje (1340-1383)",
  },
  {
    href: "/karmapa/lineage/karmapa-5",
    image: "/karmapa/karmapa005(Deshin Shekpa 1384~1415).jpg",
    name: "第五世噶瑪巴德新謝巴",
    title: "Deshin Shekpa (1384-1415)",
  },
  {
    href: "/karmapa/lineage/karmapa-6",
    image: "/karmapa/karmapa006(Thongwa Donden1416~1453).jpg",
    name: "第六世噶瑪巴通瓦敦殿",
    title: "Thongwa Donden (1416-1453)",
  },
  {
    href: "/karmapa/lineage/karmapa-7",
    image: "/karmapa/karmapa007 (Chodrak Gyatso 1454~1506).jpg",
    name: "第七世噶瑪巴確札嘉措",
    title: "Chodrak Gyatso (1454-1506)",
  },
  {
    href: "/karmapa/lineage/karmapa-8",
    image: "/karmapa/karmapa008 (Mikyo Dorje1507~1554).jpg",
    name: "第八世噶瑪巴米覺多傑",
    title: "Mikyo Dorje (1507-1554)",
  },
  {
    href: "/karmapa/lineage/karmapa-9",
    image: "/karmapa/karmapa009 (Wangchuk Dorje 1556~1603).jpg",
    name: "第九世噶瑪巴旺秋多傑",
    title: "Wangchuk Dorje (1556-1603)",
  },
  {
    href: "/karmapa/lineage/karmapa-10",
    image: "/karmapa/karmapa010%20(Cho%CC%88ying%20Dorje1604~1674).jpg",
    name: "第十世噶瑪巴確映多傑",
    title: "Chöying Dorje (1604-1674)",
  },
  {
    href: "/karmapa/lineage/karmapa-11",
    image: "/karmapa/karmapa011(Yeshe Dorje1676~1702).jpg",
    name: "第十一世噶瑪巴耶謝多傑",
    title: "Yeshe Dorje (1676-1702)",
  },
  {
    href: "/karmapa/lineage/karmapa-12",
    image: "/karmapa/karmapa012 (Changchub Dorje 1703~1732).jpg",
    name: "第十二世噶瑪巴蔣秋多傑",
    title: "Changchub Dorje (1703-1732)",
  },
  {
    href: "/karmapa/lineage/karmapa-13",
    image: "/karmapa/karmapa013 (Dudul Dorje 1733~1797).jpg",
    name: "第十三世噶瑪巴堆督多傑",
    title: "Dudul Dorje (1733-1797)",
  },
  {
    href: "/karmapa/lineage/karmapa-14",
    image: "/karmapa/karmapa014 (Thekchok Dorje 1798-1868).jpg",
    name: "第十四世噶瑪巴特秋多傑",
    title: "Thekchok Dorje (1798-1868)",
  },
  {
    href: "/karmapa/lineage/karmapa-15",
    image: "/karmapa/karmapa015 (Khakhyab Dorje 1871-1922).jpg",
    name: "第十五世噶瑪巴卡恰多傑",
    title: "Khakhyab Dorje (1871-1922)",
  },
  {
    href: "/karmapa/lineage/karmapa-16",
    image: "/karmapa/karmapa016 (Rangjung Rigpe Dorje 1924-1981).jpg",
    name: "第十六世噶瑪巴讓烱日佩多傑",
    title: "Rangjung Rigpe Dorje (1924-1981)",
  },
  {
    href: "/karmapa/lineage/karmapa-17",
    image: "/karmapa/karmapa017 (Ogyen Trinley Dorje 1985- ).jpg",
    name: "第十七世噶瑪巴鄔金欽列多傑",
    title: "Ogyen Trinley Dorje (1985-)",
  },
].map((card, index) => ({
  ...card,
  id: `karmapa-${String(index + 1).padStart(2, "0")}`,
}));

function splitTitle(title: string) {
  const match = title.match(/^(.*) \((.*)\)$/);

  if (!match) {
    return { dates: "", romanizedName: title };
  }

  return { dates: match[2], romanizedName: match[1] };
}

function KarmapaCard({ card }: { card: (typeof karmapaCards)[number] }) {
  const title = splitTitle(card.title);

  return (
    <SectionCard
      ariaLabel={`${card.name} 詳細介紹`}
      href={card.href}
      image={card.image}
      subtitle={
        <>
          <span>{title.romanizedName}</span>
          {title.dates ? <span>{title.dates}</span> : null}
        </>
      }
      title={card.name}
    />
  );
}

export default function KarmapaLineagePage() {
  const topCards = karmapaCards.slice(0, 15);
  const bottomCards = karmapaCards.slice(15);

  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="歷代大寶法王圖像">
        <img
          alt="歷代大寶法王圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero002.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">歷代大寶法王</DecoratedHeading>
          </div>

          <section className={styles.cardSection} aria-label="歷代大寶法王介紹">
            <div className={styles.topGrid}>
              {topCards.map((card) => (
                <KarmapaCard card={card} key={card.id} />
              ))}
            </div>

            <div className={styles.bottomGrid}>
              {bottomCards.map((card) => (
                <KarmapaCard card={card} key={card.id} />
              ))}
            </div>
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
