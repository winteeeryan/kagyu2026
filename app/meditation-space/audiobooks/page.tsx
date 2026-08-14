import styles from "@/app/subpage.module.css";

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="有聲書橫幅">
        <img
          alt="有聲書橫幅"
          className={styles.bannerImage}
          src="/meditation-space/meditationspacehero001.png"
        />
      </section>
    </main>
  );
}
