import styles from "@/app/subpage.module.css";

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="白噪音橫幅">
        <img
          alt="白噪音橫幅"
          className={styles.bannerImage}
          src="/meditation-space/meditationspacehero002.png"
        />
      </section>
    </main>
  );
}
