import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { ContemporaryMastersArticleNav } from "../_components/ContemporaryMastersArticleNav";

export const metadata: Metadata = {
  title: "中陰文武百尊之故事 | Kagyu",
  description: "第七世詠給明珠仁波切開示中陰文武百尊之故事。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="第七世詠給明珠仁波切橫幅">
        <img
          alt="第七世詠給明珠仁波切橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero008.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">中陰文武百尊之故事</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第七世詠給明珠仁波切</WatermarkHeading>

            <h4>中陰文武百尊之故事</h4>

            <p>
              從前西藏有一個老太太住在一個圓形的村莊裏。他家就在村前的一個路口邊，而村尾則住著一戶大富人家。有一天，大富人家的家長，也就是他們的父親過世了。大富人家和這位老太太很熟。所以便派人到她家通報消息，同時也安慰她不要難過。這時大富人家請了許多喇嘛到家中修“中陰文武百尊”的法。他們在壇城上掛了許多不同本尊的唐卡。
            </p>
            <p>
              這時這位老太太也到了喪家參加法會，她看到周遭許多各種這輩子從沒見過的本尊法相，於是便請問法會中負責各項事宜的喇嘛。喇嘛向她說，那些都是人臨終時會顯現出來的本尊。老太太心中充滿了懷疑的說：「真的嗎？真奇怪！人死亡時，真的會有這些東西顯現出來嗎？」於是她就這樣在心裏嘀咕著回到了家。
            </p>
            <p>
              三年後換老太太往生了。她家也算富有，所以同樣的，子女們也請了許多喇嘛為了她辦了一次很隆重的法會，連修了四十九天的法才算圓滿。後來老太太的一個子女帶了許多珠寶和錢財到拉薩準備供養噶碼巴大寶法王。到了噶瑪巴大寶法王那裏時，由於要參見的人太多了，所以前兩天都沒有輪到他，一直到了第三天才見到噶瑪巴大寶法王。
            </p>
            <p>
              那時噶瑪巴在花園裏坐在椅子上。他將帶來的金銀財寶、天珠等供養了噶瑪巴大寶法王，然後向噶瑪巴大寶法王說：「我的母親已往生，請您務必要引領她得到解脫，登上佛的淨土。請您務必一定要答應我。」
            </p>
            <p>噶瑪巴大寶法王說：「這個我沒辦法答應你。」</p>
            <p>兒子說：「那麼請您告訴我，我母親現在到底投生到哪里了？」</p>
            <p>噶瑪巴大寶法王說：「這個我怎麼知道？我又沒有神通，什麼也看不到！」</p>
            <p>
              於是兒子又說：「不行，不行！您一定要告訴我，我母親到底投生到什麼地方去了？請您一定要引領她、加持她，讓她能解脫到佛的淨土。」
            </p>
            <p>噶瑪巴大寶法王回答說：「我沒有這樣的能力，也沒有這樣的神通。」</p>
            <p>兒子堅持道：「您一定有的！您一定具有這樣的能力，您一定具有這樣的神通的！」</p>
            <p>
              然後又抱住噶瑪巴大寶法王的腳，熱切的請求：「您一定要答應我！您不答應我的話，我就不放開！」然後一直哭個不停。
            </p>
            <p>最後噶瑪巴大寶法王說：「唉，你母親已經成佛好幾個禮拜了。」</p>
            <p>
              這時兒子反過來說：「噶瑪巴，您一定說謊，我母親一生都不懂得修行，也沒有持甚麼咒或念甚麼佛，她怎麼可能成佛呢？這都是因為我抱著你的腳不放，所以您才這樣講的，對不對？」
            </p>
            <p>噶瑪巴大寶法王說：「不是，不是這樣的！」</p>
            <p>
              然後又問他：「你們那個地方三年前不是有人過世嗎？那時那戶人家的子女曾經向你母親報訊，所以你母親就過去安慰他們，碰到他們剛好在做法事，所以在壇城中看到許多本尊的法照。有一位執事的喇嘛曾回答你母親的問題，他向她說：『這些都是人死亡時會顯現的本尊。』所以你媽在往生時看到這些本尊，馬上認出來而當下解脫了。如果你不相信的話，回去可以去問那位執事的喇嘛有關當時的情形就能一清二楚了。」
            </p>
            <p>
              回到家後，他便馬上去問那位喇嘛原委，喇嘛回答說：「喔，沒錯！當時你母親看到這些中陰百尊的身相時，曾問我這是甚麼。所以我就告訴她，這些都是我們在死亡中陰當中會顯現出來的所有本尊。」兒子聽完後，生起很強烈的信心。
            </p>
            <p>
              所以這位老太太也沒修過中陰的法，她只看過中陰本尊的身相，結果在死亡的當下便得到這麼大的利益。所以在座諸位今天能來聽中陰的法，這個利益更是不可思議，比前面那個老太太所獲得的利益更大。這點請大家要牢記在心。
            </p>
            <p>摘錄自〔生死相隨〕一書。臺灣寶鬘印經會出版</p>

            <EndMarker />
            <ContemporaryMastersArticleNav currentSlug="mingyur-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
