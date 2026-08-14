import { AboutBannerPage } from "@/app/about/_components/AboutBannerPage";
import { TeacherTabs } from "./TeacherTabs";

export default function Page() {
  return (
    <AboutBannerPage
      alt="師資與上師橫幅"
      imageSrc="/about/abouthero003.png"
      title="師資與上師"
    >
      <TeacherTabs />
    </AboutBannerPage>
  );
}
