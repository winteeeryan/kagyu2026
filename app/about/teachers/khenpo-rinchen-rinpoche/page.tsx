import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 堪布仁千仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 堪布仁千仁波切介紹。",
};

export default function KhenpoRinchenRinpochePage() {
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
              <img alt={title} src="/about/teacher002-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              堪布仁千仁波切出生於西康囊謙。十四歲時於蘇曼寺佛學院依止大學士清明拉滇仁波切學習佛法。其後多年於無人聖地叉秋山洞閉關修持，並於金剛總持噶瑪才滇仁波切、晉美彭措法王、貝瑪才旺仁波切等大德座下學習顯密教法。
            </p>
            <p>
              隨後進入哲蚌大佛學院深造，圓滿學習四大教派與顯密五大教典，完全精通諸顯密法要，並成為教授。尊貴的大寶法王授予其大學士認證。金剛總持噶瑪才滇仁波切亦曾預言，仁千仁波切將成為利益廣大眾生、對佛教界具有深遠貢獻的偉大仁波切。
            </p>
            <p>
              自 2002 年起，仁千仁波切受尊貴大寶法王之囑，教授《中觀四百論》、因明等重要佛法課程。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-rinchen-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
