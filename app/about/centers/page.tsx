import type { Metadata } from "next";
import { CentersGallery } from "./CentersGallery";

export const metadata: Metadata = {
  title: "全省中心 | Kagyu",
  description: "台灣噶舉佛學院全省中心。",
};

export default function Page() {
  return <CentersGallery />;
}
