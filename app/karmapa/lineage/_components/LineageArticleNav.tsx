import Link from "next/link";
import styles from "./LineageArticleNav.module.css";

const lineageItems = [
  { href: "/karmapa/lineage/karmapa-1", slug: "dusum-khyenpa", title: "第一世噶瑪巴杜松虔巴" },
  { href: "/karmapa/lineage/karmapa-2", slug: "karma-pakshi", title: "第二世噶瑪巴噶瑪巴希" },
  { href: "/karmapa/lineage/karmapa-3", slug: "rangjung-dorje", title: "第三世噶瑪巴讓烱多傑" },
  { href: "/karmapa/lineage/karmapa-4", slug: "rolpe-dorje", title: "第四世噶瑪巴若佩多傑" },
  { href: "/karmapa/lineage/karmapa-5", slug: "deshin-shekpa", title: "第五世噶瑪巴德新謝巴" },
  { href: "/karmapa/lineage/karmapa-6", slug: "thongwa-donden", title: "第六世噶瑪巴通瓦敦殿" },
  { href: "/karmapa/lineage/karmapa-7", slug: "chodrak-gyatso", title: "第七世噶瑪巴確札嘉措" },
  { href: "/karmapa/lineage/karmapa-8", slug: "mikyo-dorje", title: "第八世噶瑪巴米覺多傑" },
  { href: "/karmapa/lineage/karmapa-9", slug: "wangchuk-dorje", title: "第九世噶瑪巴旺秋多傑" },
  { href: "/karmapa/lineage/karmapa-10", slug: "choying-dorje", title: "第十世噶瑪巴確映多傑" },
  { href: "/karmapa/lineage/karmapa-11", slug: "yeshe-dorje", title: "第十一世噶瑪巴耶謝多傑" },
  { href: "/karmapa/lineage/karmapa-12", slug: "changchub-dorje", title: "第十二世噶瑪巴蔣秋多傑" },
  { href: "/karmapa/lineage/karmapa-13", slug: "dudul-dorje", title: "第十三世噶瑪巴堆督多傑" },
  { href: "/karmapa/lineage/karmapa-14", slug: "thekchok-dorje", title: "第十四世噶瑪巴特秋多傑" },
  { href: "/karmapa/lineage/karmapa-15", slug: "khakhyab-dorje", title: "第十五世噶瑪巴卡恰多傑" },
  { href: "/karmapa/lineage/karmapa-16", slug: "rangjung-rigpe-dorje", title: "第十六世噶瑪巴讓烱日佩多傑" },
  { href: "/karmapa/lineage/karmapa-17", slug: "ogyen-trinley-dorje", title: "第十七世噶瑪巴鄔金欽列多傑" },
];

type LineageArticleNavProps = {
  currentSlug: string;
};

export function LineageArticleNav({ currentSlug }: LineageArticleNavProps) {
  const currentIndex = lineageItems.findIndex((item) => item.slug === currentSlug);
  const previous = currentIndex > 0 ? lineageItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < lineageItems.length - 1 ? lineageItems[currentIndex + 1] : null;

  return (
    <nav aria-label="歷代大寶法王文章導覽" className={styles.root}>
      {previous ? (
        <Link className={`${styles.link} ${styles.previous}`} href={previous.href}>
          <span className={styles.eyebrow}>← 上一世</span>
          <span className={styles.title}>{previous.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}

      <Link className={`${styles.link} ${styles.overview}`} href="/karmapa/lineage">
        <span className={styles.eyebrow}>返回</span>
        <span className={styles.title}>歷代大寶法王</span>
      </Link>

      {next ? (
        <Link className={`${styles.link} ${styles.next}`} href={next.href}>
          <span className={styles.eyebrow}>下一世 →</span>
          <span className={styles.title}>{next.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}
    </nav>
  );
}
