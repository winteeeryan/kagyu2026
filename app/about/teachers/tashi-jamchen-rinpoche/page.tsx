import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "./page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 智慧林佛學院首席堪布札西蔣成仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 智慧林佛學院首席堪布札西蔣成仁波切介紹。",
};

export default function TashiJamchenRinpochePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">
              尊貴 智慧林佛學院首席
              <br />
              堪布札西蔣成仁波切
            </WatermarkHeading>

            <figure className={localStyles.teacherPortrait}>
              <img alt={title} src="/about/teacher001-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              堪布札西蔣成仁波切於1970年出生於康區南青多昌，自幼具備深厚善根。十三歲時於拉祝噶瑪塔傑林寺剃度出家，正式踏上僧伽清淨之道。十七歲以後，依止大堪布多傑羌噶瑪策滇、大堪布貝瑪策旺仁波切，以及寧瑪派佳傑木瑟大仁波切等具德善知識，廣泛聽受顯密教法，奠定堅實基礎。
            </p>
            <p>
              其後，仁波切前往喇榮五明佛學院，親近晉美彭措法王及諸大經教師，在其座下完整學習四大教派顯密五大教典，深入經論義理，勤修聞思，悉心研習佛法大義。隨後更赴吉祥哲蚌佛學院進一步研修，經多年的聞思與實修，成為具備深刻見地與修證的學者型大德。
            </p>
            <p>
              在尊貴的泰錫度仁波切指示之下，札西蔣成仁波切受任智慧林佛學院院長，承擔起弘法利生與培養僧才的重要使命。其領導期間，德行謹嚴、才識精湛，不僅教化有方，且以自身之道風示現清淨僧相，深受四眾弟子敬仰。
            </p>
            <p>
              札西蔣成仁波切稟性敦厚、行持賢善，是一位具足學識、修證與人格的堪布大德，誠為值得我們由衷尊崇的善知識。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="tashi-jamchen-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
