import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 赤列南佳堪布";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 赤列南佳堪布介紹。",
};

export default function KhenpoTrinleyNamgyalPage() {
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
              <img alt={title} src="/about/teacher008-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              赤列南佳堪布出生於青海囊謙縣。十二歲於東那拉青寺出家，十八歲入拉青寺佛學院學習，二十二歲前往德格宗薩康謝五明佛學院深造，二十八歲成為合格教授師。
            </p>
            <p>
              三十歲於尼泊爾樂謝林擔任堪布，三十一歲在泰錫度仁波切推舉下來台弘法。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-trinley-namgyal" />
          </div>
        </div>
      </article>
    </main>
  );
}
