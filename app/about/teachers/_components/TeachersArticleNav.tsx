import Link from "next/link";
import styles from "./TeachersArticleNav.module.css";

const teacherItems = [
  { href: "/about/teachers/khenpo-khechok", slug: "khenpo-khechok", title: "尊貴 金剛上師 凱筑堪布" },
  { href: "/about/teachers/acharya-chonyi-lhundrup", slug: "acharya-chonyi-lhundrup", title: "尊貴 傳承上師 曲尼倫珠阿闍黎" },
  { href: "/about/teachers/acharya-pema-rangdrol", slug: "acharya-pema-rangdrol", title: "尊貴的 貝瑪穰卓阿闍黎" },
  { href: "/about/teachers/tashi-jamchen-rinpoche", slug: "tashi-jamchen-rinpoche", title: "尊貴 智慧林佛學院首席堪布札西蔣成仁波切" },
  { href: "/about/teachers/khenpo-rinchen-rinpoche", slug: "khenpo-rinchen-rinpoche", title: "尊貴 堪布仁千仁波切" },
  { href: "/about/teachers/khenpo-tsenang-rinpoche", slug: "khenpo-tsenang-rinpoche", title: "尊貴 堪布慈囊仁波切" },
  { href: "/about/teachers/thubten-norbu-rinpoche", slug: "thubten-norbu-rinpoche", title: "尊貴 圖登諾布仁波切" },
  { href: "/about/teachers/pema-wangchen-rinpoche", slug: "pema-wangchen-rinpoche", title: "尊貴 噶陀仁珍千寶六世 貝瑪旺晴仁波切" },
  { href: "/about/teachers/khenpo-jigme-rinpoche", slug: "khenpo-jigme-rinpoche", title: "尊貴 堪布吉美仁波切" },
  { href: "/about/teachers/khenpo-karma-rabten-rinpoche", slug: "khenpo-karma-rabten-rinpoche", title: "尊貴 堪布嘎瑪拉布仁波切" },
  { href: "/about/teachers/khenpo-trinley-namgyal", slug: "khenpo-trinley-namgyal", title: "尊貴 赤列南佳堪布" },
  { href: "/about/teachers/khenpo-losang-tenzin", slug: "khenpo-losang-tenzin", title: "尊貴 洛桑滇增堪布" },
  { href: "/about/teachers/khenpo-wangchuk", slug: "khenpo-wangchuk", title: "尊貴 金剛上師 旺九堪布" },
  { href: "/about/teachers/master-yongming", slug: "master-yongming", title: "永明法師" },
  { href: "/about/teachers/professor-hsiao-chin-sung", slug: "professor-hsiao-chin-sung", title: "蕭金松教授" },
];

type TeachersArticleNavProps = {
  currentSlug: string;
};

export function TeachersArticleNav({ currentSlug }: TeachersArticleNavProps) {
  const currentIndex = teacherItems.findIndex((item) => item.slug === currentSlug);
  const previous = currentIndex > 0 ? teacherItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < teacherItems.length - 1 ? teacherItems[currentIndex + 1] : null;

  return (
    <nav aria-label="師資介紹文章導覽" className={styles.root}>
      {previous ? (
        <Link className={`${styles.link} ${styles.previous}`} href={previous.href}>
          <span className={styles.eyebrow}>← 上一位</span>
          <span className={styles.title}>{previous.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.spacer} />
      )}

      <Link className={`${styles.link} ${styles.overview}`} href="/about/teachers">
        <span className={styles.eyebrow}>返回</span>
        <span className={styles.title}>師資與上師</span>
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
