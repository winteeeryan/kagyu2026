import styles from "./SectionOpener.module.css";

export function SectionOpener() {
  return (
    <div aria-hidden="true" className={styles.root}>
      <img
        alt=""
        className={styles.image}
        draggable={false}
        src="/karmapa/title-deco.png"
        style={{ mixBlendMode: "normal" }}
      />
    </div>
  );
}
