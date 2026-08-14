import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 傳承上師 曲尼倫珠阿闍黎";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 傳承上師 曲尼倫珠阿闍黎介紹。",
};

export default function AcharyaChonyiLhundrupPage() {
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
              <img alt={title} src="/about/master002.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              曲尼倫珠上師出生於1984年，來自不丹東部一座美麗而純樸的村落。天性謙和、心性善良的他，自幼便與佛法結下深厚因緣。
            </p>
            <p>
              在完成中學教育後，曲尼上師尚未正式進入佛學院，就已主動、精進地圓滿四加行，顯示其堅定的修行心。2006年，他於隆德寺受戒出家，自此展開密集而有次第的佛法薰習道路。
            </p>
            <p>
              同年三月，曲尼上師進入山普能梵文大學（Sampurnanand Sanskrit University）之關係學校──噶瑪師利那瀾陀佛學院（Karma Shri Nalanda Institute），接受結合現代教育體制的傳統佛學訓練。在進修高階佛學期間，他不僅專注自身的聞思修行，並自願擔任初階課程的教導者，協助後進穩固基礎。
            </p>
            <p>
              在為期十一年的嚴謹學程中，曲尼上師深入學習「藏文文法」、「唯識」、「中觀」、「邏輯學」、「律藏」、「文學」、「禪修」等各項經論與實修內容。2016年，他獲得相當於哲學碩士之阿闍黎學位。畢業後即留任佛學院教授藏文文法及文學課程，並擔任為期兩年的佛學院出納，以認真態度完成行政與教學雙重責任。
            </p>
            <p>
              性格開朗樂觀的曲尼上師，多年在祈願大法會中自願擔任功德組服務人員。與他共事過的眾多法友，無不對其熱忱、真誠與耐心大加讚譽。同時，他亦長期協助噶瑪巴辦公室推動慈善事業，並在噶瑪巴學校擔任小喇嘛及村童的藏文教師。他活潑生動的教學極受孩子們喜愛，最珍貴的是，他以無私的陪伴與溫暖的關懷，成為孩子們成長旅途中的力量與向導。
            </p>
            <p>
              曲尼上師先後親從尊貴的第十七世大寶法王噶瑪巴、大司徒仁波切、嘉察仁波切、桑傑年巴仁波切、堪千創古仁波切、詠給明就仁波切等當代傑出傳承導師處，領受噶舉傳承中極為珍貴的灌頂與口傳。他亦不拘門派，向薩迦法王、吉美法王領受殊勝傳承。曲尼上師不僅精勤於佛法聞思，更努力將佛法之精髓落實於生活，是一位真正做到 見修並重、德學兼備的良師。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="acharya-chonyi-lhundrup" />
          </div>
        </div>
      </article>
    </main>
  );
}
