import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 堪布慈囊仁波切";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 堪布慈囊仁波切介紹。",
};

export default function KhenpoTsenangRinpochePage() {
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
              <img alt={title} src="/about/teacher003-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              仁波切出生於 1967 年蓮師殊勝吉祥日，並於當日示現吉祥瑞相。十三歲時剃度出家，其後完成三年三個月閉關，並依止噶瑪策定仁波切、大司徒仁波切、老仁波切、噶瑪旺丘仁波切、晉美彭措法王等大成就者深入學習顯密教法。
            </p>
            <p>
              具神通之上師凱查扎巴阿旺加查仁波切曾預言：慈囊仁波切前世為大圓滿成就者阿旺諾布。仁波切長年弘法利生，行遍世界各地，是一位具格之上師、作家，亦是修持大手印與大圓滿的實修行者。
            </p>
            <p>
              他致力於改善西藏偏遠山區的生活環境，興建慈智學校、醫療所、養老院等，照顧貧苦百姓。多年來擔任欽饒寺住持及印度智慧林佛學院院長，講經弘法近二十年，培育無數僧俗人才。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-tsenang-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
