import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 堪布嘎瑪拉布仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 堪布嘎瑪拉布仁波切介紹。",
};

export default function KhenpoKarmaRabtenRinpochePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">{title}</WatermarkHeading>

            <figure className={localStyles.teacherPortrait}>
              <img alt={title} src="/about/teacher007-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              堪布嘎瑪拉布仁波切出生於西康。十三歲起先後親近大成就桑格、善知識嘎瑪希阿、澤根仁波切、大堪布貝瑪切旺、晉美彭措法王、大堪布希阿榮伯等，跨宗派廣學十年，之後圓滿八年閉關。
            </p>
            <p>
              仁波切曾任查查寺閉關上師、嘎瑪希阿攝政王，並於西藏查查寺、印度創古高級佛學院、尼泊爾創古閉關中心廣弘因明、戒律、對法、中觀、般若、那若六法、大手印、大圓滿等課程，至今不輟。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-karma-rabten-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
