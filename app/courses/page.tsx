import type { Metadata } from "next";
import { CoursePageContent } from "./CoursePageContent";

export const metadata: Metadata = {
  title: "法王開示課程 | Kagyu",
  description: "大寶法王噶瑪巴法王開示課程。",
};

export default function CoursesPage() {
  return <CoursePageContent />;
}
