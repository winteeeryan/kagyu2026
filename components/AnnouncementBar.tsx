import styles from "./AnnouncementBar.module.css";

export function AnnouncementBar({ message }: { message: string }) {
  return (
    <div className={styles.bar}>
      <div className="container">
        <p>{message}</p>
      </div>
    </div>
  );
}
