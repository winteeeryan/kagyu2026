import type { Metadata } from "next";
import { SupportAccordion } from "@/components/support/SupportAccordion";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "護持資訊 | Kagyu-2026",
};

export default function SupportInfoPage() {
  return (
    <main className={styles.page}>
      <SupportAccordion />
    </main>
  );
}
