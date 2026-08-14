import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "為什麼學佛 | Kagyu",
  description: "為什麼學佛、聞法者的基本觀念與聞法四依。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="為什麼學佛橫幅">
        <img
          alt="為什麼學佛橫幅"
          className={styles.bannerImage}
          src="/study-practice/studypracticehero001.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">為什麼學佛</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">為什麼要學佛？</WatermarkHeading>

            <p>
              世上所有宗教，宗旨不外離苦得樂。但是很多人對這有誤解，有人覺得這是一種迷信，有人覺得這是一種傳統信仰而已。這是因為對宗教不理解而產生的觀念。為何會這樣？因為有人不知自己苦；有人已知自己苦，但又不理會；有人已知苦想解脫，卻又尋錯方向，一生勞祿自以為追求幸福，到老卻質疑人生有何意義？
            </p>

            <p>
              為何會這樣？因為光靠自己的智慧，要成就一個有意義的人生是難度很高的，需要他人的經驗與教導才能圓滿。所以不只要靠信仰，還要靠前人的智慧。而學習佛法的慈悲與智慧，就是最圓滿最究竟，讓一切眾生皆離苦得樂的方法。
            </p>

            <p>
              無上殊勝佛陀於無量劫中，久習於大悲，實現正遍知智慧的主要目的，就是要對眾生示以如來暫時與安樂之解脫道，給予未見法道利益與安樂之盲瞽眾生智慧眼。
            </p>

            <p>
              經云：「佛陀出世於世間，獲得難得之人身，敬信佛法聞佛法，百劫亦難得值遇。」故凡恭敬聞法傳法者，必得無量功德，能否捨斷輪迴，全賴聽聞佛法與否。
            </p>

            <p>
              《聖鬘獅子吼經》云：「若將一切祝禱皆集於一，何為彼一？是願我持有佛法。」聖天菩薩云：「眾生痛苦唯一藥，一切安樂之泉源是佛法。」
            </p>

            <p>
              《虛空藏經》云：「有問世尊！除受持佛法外之一切善，彼善小如芝麻；受持聖法之善業，大如十方虛空。」故受持佛法有不可思議功德。
            </p>

            <WatermarkHeading as="h2">聞法者的三個基本觀念</WatermarkHeading>

            <ul>
              <li>
                <strong>聞慧：</strong>
                透過誦聲入耳、耳傳心，心悟經意而修行。文字般若如讀經、見聞轉誦，屬小乘法之小悟。
              </li>
              <li>
                <strong>思慧：</strong>
                以正念、善意來接受經意，透過返照而開悟。觀照般若如解經、悟法解意，屬中乘法之中悟。
              </li>
              <li>
                <strong>修慧：</strong>
                學行並重、言行一致。實相般若如照經而行、依法修行，屬大乘法之大悟。
              </li>
            </ul>

            <WatermarkHeading as="h2">聞法之原則：四依</WatermarkHeading>

            <ol>
              <li>
                <strong>依義不依語：</strong>
                研究經典要依佛法大義，深入其內涵而不執著文字。
              </li>
              <li>
                <strong>依智不依識：</strong>
                聽聞佛法要依自性妙智慧，而不依識神用事，不依自己的感覺、我執與偏見。
              </li>
              <li>
                <strong>依了義不依不了義：</strong>
                研究經典要了解並深究真正的真理佛法，而不走旁門左道；應往心性下功夫，斷除術流異端。
              </li>
              <li>
                <strong>依法不依人：</strong>
                此為修行者最高原則。捨棄依賴心才能自性自渡；內依自性妙智慧處事，不凡事依靠他人督促提醒；外依真理佛法，遵循古往聖賢修行之過程。
              </li>
            </ol>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
