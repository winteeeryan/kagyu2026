import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { MainSeatArticleNav } from "../_components/MainSeatArticleNav";
import styles from "../tsurphu/page.module.css";

export const metadata: Metadata = {
  title: "隆德寺 | Kagyu",
  description: "隆德寺法輪中心是第十六世大寶法王噶瑪巴於海外建立的重要噶舉主寺。",
};

const centerInstitutions = [
  "隆德寺（Rumtek Monastery）：寺院擁有莊嚴的大殿與殿堂，四周環繞僧寮房舍。僧眾在此接受密續、梵唄與傳統修持儀軌等訓練。第十六世噶瑪巴在世時亦居住於頂樓，該處同時典藏諸多珍貴文物與法器。",
  "竹札旦翁桑登林（Drupdra Yiwong Samten Ling）閉關中心：建於 1970 年代末，為期三年的閉關院，供僧眾依噶舉傳統進行深入禪修與經續學修。",
  "喇嘛那朗陀學院（Karma Shri Nalanda Institute）：此佛學院為瓦拉那西山普–聖克里特大學（Sampurnanant Sanskrit University）之附屬學校，由第十六世噶瑪巴創建。院內教授年輩喇嘛與祖古以現代教育體系學習傳統佛學，法王亦曾於此親授課程。",
  "喀瑪德千確林（Karme Dechen Chökling）：第十六世噶瑪巴於比丘尼道場所建，用以教授尼眾禪修、儀軌與修持方法。",
];

const monthlySchedule = [
  "一月：藏曆新年活動、修三根本儀軌、長壽法會，以及第十四世噶瑪巴制定的供養上師法。",
  "二月：修白度母、五空行護法，並於月中開始整週修金剛亥母、築沙壇城。",
  "三月：修度母四壇城法會，並修桑提亞巴和言卡法，紀念第十五世法王。",
  "四月：舉行金剛舞儀軌，蓮師八變與普巴金剛法會輪換舉行。",
  "五月：修勝樂金剛法會、忿怒金剛、喜金剛等噶舉傳承主要本尊法。",
  "六月：修施身法，並開始六星期結夏閉關，僧眾自習並特別注重修戒。",
  "七月：唱誦噶舉道歌，延續噶舉傳承瑜伽士之歌。",
  "八月：修紅觀音法、築沙壇城，法會結束時將沙壇城溶入水中。",
  "九月：祈請平安法會與上師相應法，感恩並護佑噶舉傳承。",
  "十月：修大日如來儀軌與阿閦佛儀軌，並築沙壇城。",
  "十一月：修勝樂金剛儀軌、四臂瑪哈嘎拉，以及由大司徒仁波切主持的上師相應法。",
  "十二月：舉行八天二臂瑪哈嘎拉法會，開放壇城並跳金剛喇嘛舞，迎接藏曆新年。",
];

const travelGuide = [
  "航空交通：最近機場為巴多格拉機場（Bagdogra Airport, IXB），距離隆德寺法輪中心約 124 公里，設有往返新德里、加爾各答、巴特那及其他印度主要都市之航班。",
  "直升機服務：錫金直升機服務每日營運岡托與巴多格拉之間的航線，飛行時間約三十分鐘。",
  "鐵路交通：最近的主要火車站為西里古里與新甲培古里，連接新德里、德里、加爾各答、迦耶、瓦拉納西及其他印度主要都市。",
  "公路交通：岡托與周邊城市道路狀況良好，可由西里古里、大吉嶺、加爾各答、古瓦哈提等地乘車前往。",
  "長途巴士：岡托設有定期長途巴士，連接西里古里、大吉嶺、巴多格拉、卡林邦與加爾各答等地。",
  "當地交通：在岡托與周邊區域，可使用公車、計程車等方式往返市區、旅宿地點及寺院。",
];

export default function RumtekMonasteryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="隆德寺圖像">
        <img alt="隆德寺圖像" className={styles.headerImage} src="/karmapa/karmapahero007.png" />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">隆德寺</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">大寶法王噶瑪巴的主寺</WatermarkHeading>

            <p>
              隆德寺法輪中心是噶舉傳承在海外最為重要的主寺，由第十六世大寶法王噶瑪巴於 1960 年代所建，亦是法王在世時的國際噶舉總部與弘法事業推展至全球的核心基地。
            </p>
            <p>
              在此，年輕一代的噶舉上師依循八百年未曾中斷的傳統教法與禪修次第而學修，延續噶舉深厚的教法脈絡。
            </p>

            <WatermarkHeading as="h2">法輪中心院所</WatermarkHeading>
            <ul>
              {centerInstitutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">宗教與教育使命</WatermarkHeading>
            <p>
              今日的法輪中心已發展為國際噶舉僧團的重要基地，培育僧眾逾八百人，並持續將噶舉教法、修持與利眾事業弘揚至世界各地。
            </p>
            <p>
              整體建築群除主殿與僧舍外，亦包括閉關院、佛學院及收藏法器文物的頂樓，形成一套完整而具深度的修學體系。
            </p>

            <WatermarkHeading as="h2">地理與氣候</WatermarkHeading>
            <p>
              隆德寺法輪中心位於印度錫金邦東部，距離首都岡托（Gangtok）約 24 公里，海拔約 1,547 公尺（約 5,800 英尺）。每年 3 月至 5 月底，以及 10 月至 12 月中旬，是前往當地旅遊與參訪的最佳時節。
            </p>
            <p>
              當地常用語言包括錫金語、巴哈里語（尼泊爾語方言）、印地語、藏語與英語。
            </p>

            <WatermarkHeading as="h2">歷史背景</WatermarkHeading>
            <p>
              1959 年，在中國軍隊進入西藏前夕，第十六世大寶法王噶瑪巴率領僧團離開西藏。同年，法王抵達錫金，並接受錫金國王楚耶嘉（Chogyal Tashi Namgyal）之正式庇護。
            </p>
            <p>
              王室與歷代噶瑪巴淵源深厚，因此決議邀請噶瑪巴與僧團常住錫金。法王接受此邀請，並在錫金展開新的弘法與建寺事業。
            </p>

            <WatermarkHeading as="h2">抵達與建寺</WatermarkHeading>
            <p>
              1959 年 4 月 25 日，噶瑪巴抵達錫金首都岡托。國王向法王推薦於魯姆泰（Rumtek）建寺。魯姆泰地勢秀麗，前臨雪峰、後倚河谷，自岡托前往僅一小時車程。
            </p>
            <p>
              此地原為第九世噶瑪巴寺院舊址，但因年代久遠，寺址已成廢墟。噶瑪巴與錫金王室關係深厚，加以魯姆泰自古即為噶瑪噶舉的聖地，因此王室在法王抵達後，即著手重整第九世噶瑪巴寺院之計畫，其中最重要的項目即是重建隆德寺。
            </p>
            <p>
              1962 年，隆德寺重建工程正式展開。法王委派秘書丹秋央敦（Dhamchoe Yongdu）總領工程，依循法王願景組織團隊，全面推動建寺計畫。建寺資金主要來自錫金王室與印度政府的慷慨支援，施主、弟子與政府三方力量匯聚，使隆德寺重建得以順利完成。
            </p>

            <WatermarkHeading as="h2">隆德寺落成與開光</WatermarkHeading>
            <p>
              歷經四年多努力，隆德寺於 1966 年正式落成。新寺院宏偉莊嚴，供奉珍貴佛像、經典及法器文物，並具備閉關院、僧舍、經堂等完善制度。
            </p>
            <p>
              同年 1 月 1 日，噶瑪巴宣布：「魯姆泰將成為噶瑪噶舉之中樞，共同承擔教授與弘傳法教之使命。」自 1966 年開光以後，隆德寺即成為噶舉傳承在印度最具代表性與指標性的主寺，並正式肩負起國際弘法的重任。
            </p>

            <WatermarkHeading as="h2">宗教典禮與日常修學</WatermarkHeading>
            <p>
              寺院每年定期為大眾舉辦宗教活動，最重要的兩項分別於夏季與冬季舉行。藏曆四月舉行十天蓮師或普巴金剛法會，第十天跳神聖的喇嘛舞；冬季則舉行瑪哈嘎拉護法法會，並以文化與宗教節目慶祝藏曆新年。
            </p>
            <p>
              隆德寺首重藏傳佛教儀禮與戒律。僧眾學習讀寫藏文、記誦重要金剛乘儀軌、梵唄、做多瑪、持咒、金剛喇嘛舞與其他修持表演，並依各自興趣選修藝術課程與金剛乘禪修課程。
            </p>
            <p>
              隆德寺特別注重噶舉傳承中的傳統教法，包括密續、金剛亥母、勝樂金剛、喜金剛等修法，也傳授寧瑪傳承教法，如蓮師法、普巴金剛法，以及多位伏藏師之伏藏法。
            </p>

            <WatermarkHeading as="h2">年度修持</WatermarkHeading>
            <ul>
              {monthlySchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">出行指南</WatermarkHeading>
            <ul>
              {travelGuide.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <figure className={styles.closingImage}>
              <img alt="隆德寺" src="/karmapa/seat002.png" />
            </figure>

            <EndMarker />
            <MainSeatArticleNav currentSlug="rumtek" />
          </div>
        </div>
      </article>
    </main>
  );
}
