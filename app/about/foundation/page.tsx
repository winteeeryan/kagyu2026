import type { Metadata } from "next";
import { AboutBannerPage } from "@/app/about/_components/AboutBannerPage";

export const metadata: Metadata = {
  title: "基金會簡介 | Kagyu",
  description: "財團法人噶瑪噶舉基金會簡介。",
};

export default function Page() {
  return (
    <AboutBannerPage
      alt="基金會簡介橫幅"
      imageSrc="/about/abouthero001.png"
      title="基金會簡介"
    />
  );
}
