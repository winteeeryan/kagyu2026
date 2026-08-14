import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴的 貝瑪穰卓阿闍黎";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴的 貝瑪穰卓阿闍黎介紹。",
};

export default function AcharyaPemaRangdrolPage() {
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
              <img alt={title} src="/about/master003.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              貝瑪穰卓阿闍黎出生於1975年1月1日，故鄉位於不丹倫奇的卓瑪松村。1993年年滿十八歲時正式出家，之後前往噶瑪師利那瀾陀高級佛學院（Karma Shri Nalanda Institute）深入研習佛法，並於2004年取得相當於哲學碩士的阿闍黎學位。
            </p>
            <p>
              在學院十一年的求學期間，阿闍黎先以兩年完成佛學初階與進階的預備課程，其後逐步修讀中觀、邏輯學、般若經典、阿毘達磨俱舍論、寶性論、入菩薩行論、藏文文法、英文、梵文、宗教史、戒律學與禪學等諸多重要課程，學習次第扎實而完善。
            </p>
            <p>
              於進入高年級後，貝瑪穰卓阿闍黎在學院一向表現優異，常擔任承擔責任的角色，因此噶瑪師利那瀾陀高級佛學院特別委任他擔任三年的「糾察師」以及一年「大寮典座」，足見其品行、紀律與能力均深受肯定。
            </p>
            <p>
              2008年，阿闍黎於波卡仁波切在印度大吉嶺附近的米麗寺閉關中心進行為期三年的閉關修行。2011年圓滿閉關後，他返回佛學院續任教師，並持續教學至2016年。2017年5月，應噶瑪巴辦公室安排，他前往巴西 Karma Chokhorling Centre 弘法與服務一年多。2018年6月，阿闍黎返抵印度，再度於噶瑪師利那瀾陀高級佛學院擔任教師至今，持續貢獻心力培育後學。
            </p>
            <p>
              貝瑪穰卓阿闍黎先後親得尊勝第十七世大寶法王、傑堪布祖古吉美丘扎仁波切、大司徒仁波切、國師嘉察仁波切、竹旺桑傑年巴仁波切與米麗堪布仁波切等大德的灌頂、教授與口傳，獲得噶舉傳承中珍貴而完整的加持。
            </p>
            <p>
              阿闍黎具備責任心、上進心與良好人格特質，在學院中參與共修課程與僧團活動時，始終展現出活力與樂於助人的精神。是故，期盼各相關單位能給予全面支持，使貝瑪穰卓阿闍黎得以成為引導與利益眾生的良師。
            </p>
            <p>
              謹此敬表感謝。
              <br />
              堪布格桑尼瑪
              <br />
              寫於印度錫金隆德寺噶瑪師利那瀾陀高級佛學院
            </p>

            <figure className={localStyles.teacherPortrait}>
              <img
                alt="來自印度錫金隆德寺的推薦函"
                src="/about/master003recommendationletter.jpg"
              />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>
              來自印度錫金隆德寺的推薦函
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="acharya-pema-rangdrol" />
          </div>
        </div>
      </article>
    </main>
  );
}
