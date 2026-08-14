import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa016 (Rangjung Rigpe Dorje 1924-1981).jpg";

export const metadata: Metadata = {
  title: "第十六世噶瑪巴讓烱日佩多傑 | Kagyu",
  description: "第十六世噶瑪巴讓烱日佩多傑生平、弘法事業與傳承介紹。",
};

export default function RangjungRigpeDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十六世噶瑪巴讓烱日佩多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十六世噶瑪巴讓烱日佩多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十六世噶瑪巴讓烱日佩多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十六世噶瑪巴讓烱日佩多傑 Rangjung Rigpe Dorje (1924-1981)</p>

            <WatermarkHeading as="h2">誕生瑞相</WatermarkHeading>
            <p>
              法王誕生在東藏德格省阿圖宮附近，直曲（Dri Chu）河堤上登闊（Denkhok）的一個貴族家庭中。因為很多位德格的高僧告訴他母親，她懷的是個大菩薩，因此她母親決定去一個清淨的地方分娩。
            </p>
            <p>
              她在蓮師閉過關的洞前搭了個帳蓬，請堪布灑淨後住在裡面，給孩子一個清淨的環境。生產前不久，有一天母親發現肚子完全變平了，孩子不知到哪裡去了；隔了一天肚子又鼓了起來，恢復正常。第二天小菩薩就出生了。一出生，嬰兒就對母親說：「媽媽、媽媽！我要走了！」
            </p>

            <WatermarkHeading as="h2">認證與陞座</WatermarkHeading>
            <p>
              法王出生的各種情況和第十五世噶瑪巴給侍者蔣巴竹清（Jampal Tsultrim）信中所敘述的非常相似。蔣巴竹清把信給了楚布寺的負責人，他們請大司徒仁波切、欽哲仁波切和蔣貢康楚仁波切去進一步瞭解。
            </p>
            <p>
              很快地，他們到了孩子的住處時，第十一世大司徒仁波切立刻認出他就是嘉華噶瑪巴（Gyalwang Karmapa）的轉世，並請達賴喇嘛再確認。
            </p>
            <p>
              第十五世噶瑪巴的兩大弟子大司徒仁波切和蔣貢康楚仁波切主持讓烱日佩的皈依禮，並授菩薩戒。不久也得到達賴喇嘛的認證信函。
            </p>

            <WatermarkHeading as="h2">返回楚布寺</WatermarkHeading>
            <p>
              法王八歲時，在德格接受了從楚布寺帶來的黑寶冠和僧袍。在去八蚌寺的途中，他特別停下來參訪和加持德格寺院的出版中心，預示他將來會在印度出版佛教經典。
            </p>
            <p>
              大司徒仁波切為他陞座為第十六世噶瑪巴讓烱恰達日佩多傑（Rangjung Khyabdak Rigpe Dorje），並陪伴他去噶瑪巴的主寺楚布寺。國師嘉察仁波切、蔣貢康楚仁波切、巴沃仁波切和上師們都到涅千唐拉（Nyenchen Tang La）山谷會合，迎接法王，一起護送法王回楚布寺。
            </p>
            <p>
              到楚布寺不久，第十三世達賴喇嘛接見了噶瑪巴並為他舉行圓頂禮。行禮時，達賴喇嘛看見噶瑪巴頭頂上顯現智慧寶冠。
            </p>

            <WatermarkHeading as="h2">修學與傳法</WatermarkHeading>
            <p>
              典禮後，大司徒仁波切和竹巴噶舉法王共同為噶瑪巴舉行陞座大典。大司徒仁波切、國師嘉察仁波切為他灌頂，並傳授全部噶舉傳承的法教。
            </p>
            <p>
              法王隨貢噶（Gangkar）仁波切學習經藏，追隨欽哲仁波切（Khyentse Rinpoche）學習密續。他並從蔣貢康楚仁波切獲得大手印灌頂，並追隨多位上師學習。
            </p>
            <p>
              噶瑪巴去里塘八蚌（Pangphuk）寺時，依過去噶瑪巴傳統在附近大石頭上留下了大約廿個腳印。
            </p>

            <WatermarkHeading as="h2">朝聖與弘法</WatermarkHeading>
            <p>
              1941 年至 1944 年，十八歲的大寶法王噶瑪巴回到楚布寺，大部分時間在閉關，並擴建楚布寺。
            </p>
            <p>
              1944 年，噶瑪巴開始加強與喜馬拉雅山附近佛教國家的關係，包括印度在內。當他去南藏時，接到不丹國王吉美多傑汪秋（Jigme Dorje Wangchuk）的邀請，噶瑪巴率團開始朝聖之旅，先到不丹北部本塘（Bumthang）等處舉辦弘法活動。
            </p>
            <p>
              1947 年，噶瑪巴一行繼續朝聖之旅，到了尼泊爾、印度錫金和佛陀出生地藍毘尼園（Lumbini）、佛說法地瓦拉那西（Varanasi）、佛成道地菩提迦耶（Bodhgaya）。1948 年，在旅經印度北部京納（Kinnaur）和普讓（Purang）到達岡底斯山（Mt. Kailash）後，噶瑪巴返回楚布寺。
            </p>

            <WatermarkHeading as="h2">離藏與隆德寺</WatermarkHeading>
            <p>
              1954 年，法王陪同尊貴的達賴喇嘛與多位上師訪問中國，回程經東藏一路拜訪寺院。1956 年，法王率團去錫金後覲見尊貴的達賴喇嘛、班禪喇嘛，並接受印度佛教會邀請參加慶祝佛陀誕生 2500 年大會。
            </p>
            <p>
              1959 年，法王預知共產主義中國將會進軍西藏，知道佛教寺院定會遭到破壞，於是開始準備離藏，並先照會達賴喇嘛他將於 1959 年春天離開西藏。第十六世噶瑪巴和很多隨行者離開西藏，攜走佛像、繪畫、舍利及噶瑪巴傳承中重要文物。
            </p>
            <p>
              三週後，團隊安全抵達不丹北部，受到不丹政府官員歡迎接待。錫金國王正式邀請噶瑪巴駐錫在錫金，於是在不丹兩個月後到達錫金首都岡托（Gangtok）。
            </p>
            <p>
              錫金國王建議了好幾個地方，噶瑪巴決定安住在隆德區，並宣佈隆德寺是西藏外的主寺，仍希望有一天可以回到西藏楚布寺。
            </p>
            <p>
              1962 年，隆德寺興建工程正式開始。錫金皇室提供大部分資金，在噶瑪巴和印度首相尼赫魯會晤後，印度政府也提供了支助。1966 年，寺院建築工程完工，從楚布寺帶來的法器文物也都妥當安置。藏曆新年那一天，噶瑪巴正式為寺院開光，稱此主寺為「法輪中心，祛除無明，成就佛果噶瑪巴的主寺」，一般稱之為隆德寺。
            </p>

            <WatermarkHeading as="h2">國際弘法</WatermarkHeading>
            <p>
              1974 年，噶瑪巴率領一團噶舉派喇嘛到西方國家訪問，訪問了美國、加拿大和歐洲，舉行數次黑寶冠法會，並灌頂和弘法。
            </p>
            <p>
              1975 年元月中旬，噶瑪巴去羅馬梵蒂岡與天主教教宗第六世聖保羅晤面。1976 年至 1977 年，噶瑪巴再度去西方國家訪問，參觀各地宗教中心，在四大洲會晤國家領袖、宗教界領袖和長老們，並接觸多位藝術界大師。
            </p>
            <p>
              1960 年至 1970 年間，噶瑪巴與不丹皇室關係很好，皇室提供給噶瑪巴兩所皇宮和一大片土地興建寺院。
            </p>
            <p>
              1979 年 11 月 28 日，第十六世大寶法王噶瑪巴為座落在新德里東南方的噶瑪法輪中心破土，開始興建。印度總統和首相都到場觀禮，此中心主要功能是禪修、學術研究和翻譯工作。
            </p>
            <p>
              1980 年五月，第十六世大寶法王噶瑪巴訪問希臘、英國、東南亞和美國。噶瑪巴在各地舉行黑寶冠法會、灌頂法會、講經說法、接受媒體訪問、參加座談會和慈善公益活動。
            </p>

            <WatermarkHeading as="h2">圓寂與傳承囑託</WatermarkHeading>
            <p>
              1981 年 11 月 5 日，第十六世大寶法王噶瑪巴在美國芝加哥附近再弘（Zion）美國國際診所圓寂。法體送回印度。圓寂前，他將一信物託付給第十二世大司徒仁波切東由寧切（Pema Tonyo Nyinje，1954~），若干年後，大司徒仁波切才發現此信物中有噶瑪巴的轉世信函。
            </p>
            <p>
              12 月 20 日，在印度錫金噶瑪巴的荼毘大典中，有印度政要和來自世界各地的弟子參加。
            </p>
            <p>
              12 月 21 日，第十六世噶瑪巴的秘書長達卻揚都在隆德寺召集噶瑪噶舉傳承會議。會議決議由噶瑪巴四大法子大司徒仁波切、夏瑪仁波切、蔣貢康楚仁波切和國師嘉察仁波切共同主持傳承事宜，並決定找尋噶瑪巴的預言信函。四位法子承諾並接下此重大任務。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="rangjung-rigpe-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
