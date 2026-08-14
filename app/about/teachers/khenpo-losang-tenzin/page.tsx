import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 洛桑滇增堪布";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 洛桑滇增堪布介紹。",
};

export default function KhenpoLosangTenzinPage() {
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
              <img alt={title} src="/about/teacher009-full.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              堪布洛桑滇增出生於四川德格縣。十四歲於拉薩甘丹寺出家，二十歲入印度宗薩佛學院，以十年極短時間圓滿全部課程並取得堪布資格。
            </p>
            <p>
              畢業後在佛學院任教一年，再赴智慧林僧團任八十位僧眾之教授師。依泰錫度仁波切指示來台弘法，並通過蒙藏委員會與法鼓山共同舉辦之「漢藏佛教文化交流研究班」甄試。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-losang-tenzin" />
          </div>
        </div>
      </article>
    </main>
  );
}
