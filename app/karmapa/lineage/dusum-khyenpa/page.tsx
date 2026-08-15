import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "./page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa001%20(D%C3%BCsum%20Khyenpa%201110-1193).jpg";

export const metadata: Metadata = {
  title: "第一世噶瑪巴杜松虔巴 | Kagyu",
  description: "第一世噶瑪巴杜松虔巴生平、修學、建寺與黃金珠鬘傳承介紹。",
};

export default function DusumKhyenpaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第一世噶瑪巴杜松虔巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第一世噶瑪巴杜松虔巴</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第一世噶瑪巴杜松虔巴" src={portrait} />
            </figure>

            <p className="imageCaption">第一世噶瑪巴杜松虔巴Düsum Khyenpa (1110-1193).</p>

            <WatermarkHeading as="h2">童年</WatermarkHeading>
            <p>
              法王誕生在東藏多雪的澤鄉（Teshö）山脈多康（Do Khams）村中，被取名格沛（Gephel）。他的父親是專修大威德金剛的瑜伽士，母親是一位瑜伽女。從小父親就教他佛法，並很有成就，且獲得神通，可在石頭上留下手印和腳印。
            </p>

            <WatermarkHeading as="h2">最初的上師</WatermarkHeading>
            <p>
              廿歲時，他在堪布確吉森給（Chapa Chokyi Senge）座下出家，堪布是西藏辯經制度的創始者。並追隨大譯師帕薩尼瑪察巴喇嘛（Patsap Nyima Trakpa）大譯師，翻譯了很多中觀論著，並是一位中觀應成派的修行者。
            </p>

            <WatermarkHeading as="h2">追隨岡波巴學習</WatermarkHeading>
            <p>
              卅歲時，他在根本上師岡波巴座下學習。岡波巴是大瑜伽士密勒日巴的弟子，杜松虔巴先修學噶當傳承的教法。主要得先以大乘經教為基礎，才能修習金剛乘的法教。他也追隨惹瓊巴（Rechungpa）和其他密勒日巴的弟子學習。
            </p>
            <p>
              由於法王本具的慈悲心，使他無論學習經教或禪修都迅速有成就並證悟悉地，他示現各種因證悟而產生的神通力，最為人所傳頌；並且也讓弟子們生起好奇心和信心。所有歷代噶瑪巴都具有一種攝受力，無論誰只要見到噶瑪巴，都會生起無比的感動和對佛法的信心。
            </p>

            <WatermarkHeading as="h2">創建寺院</WatermarkHeading>
            <p>
              法王五十五歲時在堪波涅南（Kampo Néynang）與建了一座寺院；在六十歲時，他在東藏里塘（Lithang）與建了潘普寺（Panphuk）。之後七十六歲時，他在東藏興建了噶瑪寺（Karma Gon）。八十歲時在中藏吐龍谷（Tolung valley）創立楚布寺（Tsurphu），是為法王的主寺迄今。
            </p>
            <p>
              第一世噶瑪巴是藏傳佛教轉世制度的創始人。歷史上法王圓寂入滅前，都會留下預言信函，明確指出自己下一世將出生的地點、時辰、父母姓名和出生時所示現的瑞相。法王將存證信寫好，交給他的弟子卓貢惹千（Drogon Rechen），他是法王傳承的持有者。
            </p>
            <p>
              八十四歲時法王圓寂，他主要的弟子是：達隆巴（Tak-lungpa）創建達隆噶舉（Taklung Kagyu），倉巴嘉惹（Tsangpa Gyare）創建竹巴噶舉（Drupa Kagyu），噶當巴德西（Khadampa Desheg），創建卡陀寧瑪（Katok Nyingma）傳承。
            </p>

            <WatermarkHeading as="h2">黃金珠鬘傳承人</WatermarkHeading>
            <p>
              無間斷的噶舉傳承是由袓師一代一代口耳相傳的，轉世制度的建立，使噶瑪巴以大慈悲心住世弘法；而傳承則經由前一世法王傳給接法弟子後，再口耳相傳給下一世法王。因此在黃金珠鬘的傳承鏈中，從帝洛巴到第一世噶瑪巴是代代親傳。但是從第一世噶瑪巴起，則傳承不斷的經由弟子們傳給下一世噶瑪巴，我們介紹歷屆噶瑪巴時，也必須介紹他們承接傳承的弟子。因為他們都和法王一樣是黃金珠鬘的傳承者，是傳承的持有者。
            </p>

            <WatermarkHeading as="h2">卓貢惹千（1148-1218）</WatermarkHeading>
            <p>
              卓貢惹千（Drogon Rechen）誕生於中藏雅龍（Yarlung）區的一個讀書人家庭。從小對小乘、大乘佛法的次第道有心得。九歲時，他從噶舉上師章吉惹巴（Zangri Repa）處學習到口授密法及大手印道歌。平時他只穿著棉布禪修，故同密勒日巴一樣被稱為仁千，意思是「穿著棉布的大瑜伽士」。他有非常殊勝的證悟。
            </p>

            <WatermarkHeading as="h2">行密勒日巴之道</WatermarkHeading>
            <p>
              十五歲時，他的上師章吉惹巴（Zangri Repa）圓寂。上師圓寂之前，指示他應去接密勒日巴的法脈，然後認真修行成為法系中的上師。因此，他先追隨多位噶舉上師以及大圓滿上師學習，但是他對自己證悟的三摩地不滿意，決定離家修行。先經由空波（Kongpo）到東藏康區（Kham），一路上，他向遇到的多位上師求法。從通巴桑珠（Thöpa Samdrup）得到施身法傳承；從恩嘎利巴（Ngari-pa）學到金剛手菩薩及金剛薩埵法，從尼亞巴就賽（Nyalpa Josey）學文殊和忿怒馬哈嘎拉法。他建了十八個密乘道場，並成就了眾多弟子。
            </p>

            <WatermarkHeading as="h2">與第一世噶瑪巴相遇</WatermarkHeading>
            <p>
              此時卓貢惹千巴正對氣脈明點修行頗有心得，對自己的成就生起了一些我慢心。當他一知道著名的法王杜松虔巴住在堪波南寧，就決定去見他，他只想去晤面，並沒有想要去求法。見面時，第一世噶瑪巴告訴他：「啊！年青的金剛乘行者，你可以去跟我的學生學習。」卓貢仁千問道「你有怎樣的學生？」噶瑪巴回答說：「德松桑傑（Deuchung Sangye），貝薩札德瓦（Baltsa Takdelwa）等等。」卓貢仁千先去見德松桑傑，德松桑傑要他去見貝薩札德瓦。他到了貝薩札德瓦山洞，看見一隻大老虎在裡面睡覺，他嚇得跑了回來。德松告訴他再去一次，他再去，看見山洞中有個小水池。他擾動池水並丟進去幾塊小石子後離去。再次德松叫他回去看看，他去看到山洞中的一位老瑜伽士膝上有他丟下水的石子。此時，他心想「如果弟子都這樣有本事，他們的老師的證悟一定更了不起！」他以堅定的決定及信心，在法王座下認真修習了七年，成為法王最主要的心子之一。
            </p>
            <p>
              他卅七歲剃度受比丘戒，法名索南札巴（Sönam Drakpa），他繼續追隨法王學習噶舉傳承法教三年後，成為法嗣和傳承的持有者。當法王噶瑪巴回到中藏，卓貢仁千留在康區（Kham）噶瑪寺（Karma Gon）和堪波涅南寺（Kampo Neynang）弘法及繼續法王的事業。七十歲時圓寂，火化後有很多舍利子。他的法子是朋札巴桑南多傑（Pomdrakpa Sönam Dorje），他是噶舉傳承的繼承人。
            </p>
            <p>
              以上資料來至巴沃祖湛成瓦（Pawo Tsuklak Trengwa&apos;s）所著的《學者的盛宴》，北京版，vol.2，pp873-877。
            </p>

            <WatermarkHeading as="h2">朋札巴</WatermarkHeading>
            <p>
              朋札巴索南多傑（Pomdrakpa Sonam Dorje）誕生在中藏吉當巴卻竹（Dri Dampa Chöchuk）。五歲時開始讀書，九歲時從涅拉康甘波（Nyen Lhakhang Gangpo）得母續傳承。十四歲時，一聽到卓貢惹千的名字，立刻在禪定中看見紅色空行母預言卓貢是他的上師。不到十天，他就去覲見卓貢惹千，並在座下出家，法名索南多傑。從此卓貢惹千是他的根本上師，給他很多的灌頂。他苦修多年，在灌頂時及禪修時都親見智慧本尊和第一世噶瑪巴傳授法教。從卓貢惹千處，他得到全部噶舉傳承，成為法嗣和噶舉傳承的持有者。
            </p>

            <WatermarkHeading as="h2">噶舉傳承的持有者</WatermarkHeading>
            <p>
              朋札巴接噶舉傳承之後，成為非常殊勝的上師。卓貢惹千曾告訴朋札巴和洛卓仁千（Lodro Rinchen），他們倆人同時都是傳承的持有者。他也預言朋札巴的佛行事業會非常興盛，並且他的弟子會使傳承更廣大的宏揚直到未來。那時，朋札巴看見他的上師示現為佛陀，無數的佛圍繞著，這是他成為傳承持有者的徵兆。
            </p>
            <p>
              朋札巴的佛行事業，如預言一樣的興盛，他將傳承傳授給第二世噶瑪巴─噶瑪巴希（Karma Pakshi）。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="dusum-khyenpa" />
          </div>
        </div>
      </article>
    </main>
  );
}
