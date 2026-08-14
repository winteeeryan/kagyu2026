import styles from "@/app/subpage.module.css";

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="留言牆橫幅">
        <img
          alt="留言牆橫幅"
          className={styles.bannerImage}
          src="/meditation-space/meditationspacehero005.png"
        />
      </section>
    </main>
  );
}
