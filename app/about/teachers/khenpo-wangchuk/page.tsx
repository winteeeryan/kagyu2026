import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 金剛上師 旺九堪布";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 金剛上師 旺九堪布介紹。",
};

export default function KhenpoWangchukPage() {
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
              <img alt={title} src="/about/teacher010-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              旺九堪布生於 1977 年，十九歲於噶瑪師利那瀾陀高級佛學院剃度。於高級學程期間即協助教授《噶瑪噶舉傳承歷史》及《藏文文法》。完成十一年高級課程後，成為佛學導師並任教多年。
            </p>
            <p>
              2008 年畢業於錫金噶瑪師利那瀾陀佛學院，取得博士學位級別佛學證書。2013 年圓滿三年六個月閉關，後任隆德寺講師。同年由大寶法王辦公室安排來台弘法。
            </p>
            <p>
              旺九堪布德行端謹、勤勉向學，融通多年間教證所學，是佛門難得之龍象，惠澤寶島十方佛子，功德無量。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-wangchuk" />
          </div>
        </div>
      </article>
    </main>
  );
}
