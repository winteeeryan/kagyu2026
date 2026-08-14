import type { ReactNode } from "react";
import styles from "./WatermarkHeading.module.css";

type WatermarkHeadingProps = {
  as?: "h2" | "h3";
  children: ReactNode;
};

export function WatermarkHeading({ as: Component = "h3", children }: WatermarkHeadingProps) {
  return <Component className={styles.root}>{children}</Component>;
}
