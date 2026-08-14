import Link from "next/link";
import styles from "./GoldenRosaryMastersArticleNav.module.css";

const masterItems = [
  {
    href: "/kagyu-lineage/golden-rosary/masters/vajradhara",
    slug: "vajradhara",
    title: "金剛總持",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/tilopa",
    slug: "tilopa",
    title: "帝洛巴",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/naropa",
    slug: "naropa",
    title: "那洛巴",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/marpa",
    slug: "marpa",
    title: "馬爾巴",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/milarepa",
    slug: "milarepa",
    title: "密勒日巴",
  },
  {
    href: "/kagyu-lineage/golden-rosary/masters/gampopa",
    slug: "gampopa",
    title: "岡波巴",
  },
];

type GoldenRosaryMastersArticleNavProps = {
  currentSlug: string;
};

export function GoldenRosaryMastersArticleNav({ currentSlug }: GoldenRosaryMastersArticleNavProps) {
  const currentIndex = masterItems.findIndex((item) => item.slug === currentSlug);
  const previous = currentIndex > 0 ? masterItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < masterItems.length - 1 ? masterItems[currentIndex + 1] : null;

  return (
    <nav aria-label="黃金珠鬘祖師文章導覽" className={styles.root}>
      {previous ? (
        <Link className={`${styles.link} ${styles.previous}`} href={previous.href}>
          <span className={styles.eyebrow}>← 上一位</span>
          <span className={styles.title}>{previous.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}

      <Link className={`${styles.link} ${styles.overview}`} href="/kagyu-lineage/golden-rosary/masters">
        <span className={styles.eyebrow}>返回</span>
        <span className={styles.title}>黃金珠鬘法脈傳承祖師</span>
      </Link>

      {next ? (
        <Link className={`${styles.link} ${styles.next}`} href={next.href}>
          <span className={styles.eyebrow}>下一位 →</span>
          <span className={styles.title}>{next.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}
    </nav>
  );
}
