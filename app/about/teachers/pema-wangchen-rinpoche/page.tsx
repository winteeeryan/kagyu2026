import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 噶陀仁珍千寶六世 貝瑪旺晴仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 噶陀仁珍千寶六世 貝瑪旺晴仁波切介紹。",
};

export default function PemaWangchenRinpochePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">
              尊貴 噶陀仁珍千寶六世
              <br />
              貝瑪旺晴仁波切
            </WatermarkHeading>

            <figure className={localStyles.teacherPortrait}>
              <img alt={title} src="/about/teacher005-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              貝瑪旺晴仁波切於 1973 年出生於尼泊爾，自幼即被認證為偉大噶陀仁珍才旺諾布之轉世。仁波切依止多位大成就者，包括圖滇諾布、堪欽益西嘉措、康倉仁波切、白玉噶瑪恰美仁波切、夏札瑞薩仁波切、噶陀席欽翁珠仁波切、格魯巴朗加仁波切、阿客慈誠、夏札桑吉多傑仁波切、穆得瑪德瑜伽士、貝諾法王、多智千法王、聽列諾布仁波切、堪欽貝瑪才旺法王、大學者阿客德勒喇等。
            </p>
            <p>
              仁波切獲得噶陀、白玉、隆欽、敦珠、噶舉、覺囊等諸大傳承，並出版佛學、歷史、傳記、詩學、小說等著作十三冊；更整理噶陀仁珍千寶二世才旺諾布法集及覺囊派多羅納塔大師法集，貢獻卓著。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="pema-wangchen-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
