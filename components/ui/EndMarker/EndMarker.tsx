import styles from "./EndMarker.module.css";

export function EndMarker() {
  return (
    <div aria-hidden="true" className={styles.root}>
      <img
        alt=""
        className={styles.image}
        draggable={false}
        src="/karmapa/title-deco.png"
      />
    </div>
  );
}
