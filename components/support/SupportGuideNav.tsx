import styles from "./SupportGuideNav.module.css";

export type SupportGuideNavItem = {
  title: string;
  href: string;
  ariaLabel: string;
  number?: string;
};

type SupportGuideNavProps = {
  items: SupportGuideNavItem[];
};

export function SupportGuideNav({ items }: SupportGuideNavProps) {
  return (
    <section className={styles.pageToc}>
      <div className={styles.inner}>
        <h2 className={styles.title}>本頁導覽</h2>

        <nav className={styles.nav} aria-label="本頁導覽">
          <ol className={styles.list}>
            {items.map((item) => (
              <li className={styles.item} key={item.href}>
                <a
                  aria-label={item.ariaLabel}
                  className={`${styles.link} ${
                    item.number ? "" : styles.linkNoNumber
                  }`}
                  href={item.href}
                >
                  {item.number ? (
                    <span className={styles.number}>{item.number}</span>
                  ) : null}
                  <span className={styles.text}>{item.title}</span>
                  <span className={styles.arrow} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
