import Link from "next/link";
import styles from "./ContemporaryMastersArticleNav.module.css";

const masterItems = [
  {
    href: "/kagyu-lineage/contemporary-masters/rangjung-rigpe-dorje",
    slug: "rangjung-rigpe-dorje",
    title: "第十六世大寶法王讓炯立佩多傑",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/ogyen-trinley-dorje",
    slug: "ogyen-trinley-dorje",
    title: "第十七世大寶法王烏金欽列多傑",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/tai-situ-rinpoche",
    slug: "tai-situ-rinpoche",
    title: "第十二世泰錫度仁波切",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/gyaltsab-rinpoche",
    slug: "gyaltsab-rinpoche",
    title: "第十二世嘉察仁波切",
  },
  {
    href: "https://www.jamgonkongtrul.org/section.php?s1=1&s2=1",
    isExternal: true,
    slug: "jamgon-kongtrul-rinpoche",
    title: "第四世蔣貢康楚仁波切",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/pawo-rinpoche",
    slug: "pawo-rinpoche",
    title: "第十一世巴渥仁波切",
  },
  {
    href: "/kagyu-lineage/contemporary-masters/mingyur-rinpoche",
    slug: "mingyur-rinpoche",
    title: "第七世詠給明珠仁波切",
  },
];

type ContemporaryMastersArticleNavProps = {
  currentSlug: string;
};

type MasterItem = (typeof masterItems)[number];

function NavLink({
  className,
  eyebrow,
  item,
}: {
  className: string;
  eyebrow: string;
  item: MasterItem;
}) {
  const content = (
    <>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <span className={styles.title}>{item.title}</span>
    </>
  );

  if (item.isExternal) {
    return (
      <a className={className} href={item.href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {content}
    </Link>
  );
}

export function ContemporaryMastersArticleNav({ currentSlug }: ContemporaryMastersArticleNavProps) {
  const currentIndex = masterItems.findIndex((item) => item.slug === currentSlug);
  const previous = currentIndex > 0 ? masterItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < masterItems.length - 1 ? masterItems[currentIndex + 1] : null;

  return (
    <nav aria-label="當代傳承上師文章導覽" className={styles.root}>
      {previous ? (
        <NavLink className={`${styles.link} ${styles.previous}`} eyebrow="← 上一位" item={previous} />
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}

      <Link className={`${styles.link} ${styles.overview}`} href="/kagyu-lineage/contemporary-masters">
        <span className={styles.eyebrow}>返回</span>
        <span className={styles.title}>當代傳承上師</span>
      </Link>

      {next ? (
        <NavLink className={`${styles.link} ${styles.next}`} eyebrow="下一位 →" item={next} />
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}
    </nav>
  );
}
