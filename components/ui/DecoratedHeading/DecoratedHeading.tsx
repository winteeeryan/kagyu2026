import styles from "./DecoratedHeading.module.css";

type DecoratedHeadingProps = {
  as?: "h1" | "h2";
  children: string;
  className?: string;
  id?: string;
};

export function DecoratedHeading({
  as: Heading = "h2",
  children,
  className,
  id,
}: DecoratedHeadingProps) {
  return (
    <div className={`${styles.root}${className ? ` ${className}` : ""}`}>
      <Heading className={styles.heading} id={id}>
        {children}
      </Heading>
      <img
        alt=""
        aria-hidden="true"
        className={styles.decoration}
        src="/karmapa/title-deco.png"
      />
    </div>
  );
}
