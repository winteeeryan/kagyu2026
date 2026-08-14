import { specialEvents } from "@/data/homepage";
import styles from "./page.module.css";

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">ALL EVENTS</p>
          <h1 className="sectionTitle">全部活動</h1>
        </div>

        <div className={styles.grid}>
          {specialEvents.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.media}>
                <img alt={item.title} src={item.image} />
              </div>
              <div className={styles.content}>
                <h2>{item.title}</h2>
                <p>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
