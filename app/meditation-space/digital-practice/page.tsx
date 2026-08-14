import styles from "@/app/subpage.module.css";

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="數位共修橫幅">
        <img
          alt="數位共修橫幅"
          className={styles.bannerImage}
          src="/meditation-space/meditationspacehero004.png"
        />
      </section>
    </main>
  );
}
