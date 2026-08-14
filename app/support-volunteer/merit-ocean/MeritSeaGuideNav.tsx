import { SupportGuideNav } from "@/components/support/SupportGuideNav";

const guideItems = [
  {
    number: "01",
    title: "功德海名錄",
    href: "#gongdehai",
    ariaLabel: "前往功德海名錄",
  },
  {
    number: "02",
    title: "僧伽醫護捐款專戶",
    href: "#sangha-medical",
    ariaLabel: "前往僧伽醫護捐款專戶",
  },
  {
    number: "03",
    title: "致謝 3000 美元捐贈",
    href: "#thanks-3000",
    ariaLabel: "前往致謝 3000 美元捐贈",
  },
];

export function MeritSeaGuideNav() {
  return <SupportGuideNav items={guideItems} />;
}
