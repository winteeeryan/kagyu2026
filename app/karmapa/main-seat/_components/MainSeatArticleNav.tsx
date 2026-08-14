import Link from "next/link";
import styles from "./MainSeatArticleNav.module.css";

const mainSeatItems = [
  { href: "/karmapa/main-seat/tsurphu", slug: "tsurphu", title: "楚布寺" },
  { href: "/karmapa/main-seat/rumtek", slug: "rumtek", title: "隆德寺" },
  { href: "/karmapa/main-seat/ktd", slug: "ktd", title: "噶瑪三乘法輪中心" },
  { href: "/karmapa/main-seat/ksni", slug: "ksni", title: "噶瑪師利那瀾陀高級佛學院" },
];

type MainSeatArticleNavProps = {
  currentSlug: string;
};

export function MainSeatArticleNav({ currentSlug }: MainSeatArticleNavProps) {
  const currentIndex = mainSeatItems.findIndex((item) => item.slug === currentSlug);
  const previous = currentIndex > 0 ? mainSeatItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < mainSeatItems.length - 1 ? mainSeatItems[currentIndex + 1] : null;

  return (
    <nav aria-label="噶瑪巴主寺法座頁面導覽" className={styles.root}>
      {previous ? (
        <Link className={`${styles.link} ${styles.previous}`} href={previous.href}>
          <span className={styles.eyebrow}>← 上一座</span>
          <span className={styles.title}>{previous.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}

      <Link className={`${styles.link} ${styles.overview}`} href="/karmapa/main-seat">
        <span className={styles.eyebrow}>返回</span>
        <span className={styles.title}>噶瑪巴主寺法座</span>
      </Link>

      {next ? (
        <Link className={`${styles.link} ${styles.next}`} href={next.href}>
          <span className={styles.eyebrow}>下一座 →</span>
          <span className={styles.title}>{next.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}
    </nav>
  );
}
