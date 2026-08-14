import styles from "@/app/subpage.module.css";

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="心靈開解橫幅">
        <img
          alt="心靈開解橫幅"
          className={styles.bannerImage}
          src="/meditation-space/meditationspacehero003.png"
        />
      </section>
    </main>
  );
}
