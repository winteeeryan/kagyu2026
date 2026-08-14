import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { MainSeatArticleNav } from "../_components/MainSeatArticleNav";
import styles from "../tsurphu/page.module.css";

export const metadata: Metadata = {
  title: "噶瑪師利那瀾陀高級佛學院 | Kagyu",
  description: "噶瑪師利那瀾陀高級佛學院是第十六世大寶法王噶瑪巴創設的高級佛學教育機構。",
};

const degrees = [
  "阿闍黎學位（碩士）：自 1987 年起，KSNI 正式與印度山普那梵文大學結盟，由大學授予歷史悠久之大學文憑，其資格為全印度及國際佛學院普遍承認。",
  "佛學博士學位（Ka-rabjampa）：依噶舉傳承八百多年傳統，學生於修學教法與禪法後，經審核可授予學院最高佛學榮銜。",
];

const administration = [
  "1986 年，國師嘉察仁波切接替蔣貢康楚仁波切擔任執行董事。",
  "1989 年，夏瑪仁波切擔任執行董事。",
  "1993 年，大司徒仁波切擔任執行董事，與國師嘉察仁波切在第十七世噶瑪巴指導下，共同負責院務。",
];

const curriculum = [
  "必修課程包括佛教哲學與心理學。",
  "選修課程包括英文、印度文、巴利文、梵文、藏文、佛教史、西藏文學、藝術、西藏天文學與醫學。",
  "教授方式遵照傳統嚴格訓練，並應用部分現代教育方法。",
  "除學術課程之外，學生也學習各種禪修方法。",
];

const dailySchedule = [
  "6:00 am - 11:00 am：必修課程。",
  "下午：選修課程或自習。",
  "晚上：自習或辯經。",
];

const acharyaSchedule = [
  "04:00-05:00：共修。",
  "05:00-06:00：休息。",
  "06:00-07:00：早課。",
  "07:00-07:30：早餐。",
  "07:30-10:30：上課。",
  "10:30-10:45：休息。",
  "10:45-12:00：禪修或研習。",
  "12:00-01:00：午餐。",
  "01:00-02:00：唸經。",
  "02:00-04:00：下午講解。",
  "04:00-05:00：茶點與休息。",
  "05:00-06:00：修持。",
  "06:00-07:00：晚餐。",
  "07:00-09:00：經典研討或自修。",
];

const travelGuide = [
  "航空交通：最近機場為巴多格拉機場（Bagdogra Airport, IXB），距離隆德寺法輪中心約 124 公里，可往返新德里、加爾各答、巴特那及其他印度主要都市。",
  "直升機服務：錫金直升機服務營運岡托與巴多格拉之間的航線，飛行時間約三十分鐘。",
  "鐵路交通：最近的主要火車站為西里古里與新甲培古里，連接新德里、德里、加爾各答、迦耶、瓦拉納西及其他印度主要都市。",
  "公路交通：岡托與周邊城市道路狀況良好，可由西里古里、大吉嶺、加爾各答、古瓦哈提等地乘車前往。",
  "長途巴士：岡托設有定期長途巴士，連接西里古里、大吉嶺、巴多格拉、卡林邦與加爾各答等地。",
  "當地交通：在岡托與周邊區域，可使用公車與計程車往返市區、旅宿地點及寺院。",
];

export default function KsniPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="噶瑪師利那瀾陀高級佛學院圖像">
        <img
          alt="噶瑪師利那瀾陀高級佛學院圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero007.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">噶瑪師利那瀾陀高級佛學院</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">噶瑪巴創設的高級佛學院</WatermarkHeading>

            <p>
              噶瑪巴創設的那瀾陀高級佛學院（Karma Shri Nalanda Institute, KSNI），是一所被公認的傑出佛學院。它和瓦拉納西（Varanasi）的山普那梵文大學結盟，授予阿闍黎碩士（Acharya）學位和佛學博士（Ka-rabjampa）學位。
            </p>
            <p>
              KSNI 是一所僧伽學校，學生主要是 13 至 15 歲的沙彌。學校師資陣容堅強，包括多位傳承上師、寺院住持、閉關中心指導導師與普通大學教授等。
            </p>
            <p>
              學院為佛學教育設定極高標準，課程包括佛教哲學、心理學、教育相關課程，以及佛教史、西藏文學、藝術、英文、印度文、巴利文、梵文與西藏研究。
            </p>

            <WatermarkHeading as="h2">地理與氣候</WatermarkHeading>
            <p>
              那瀾陀高級佛學院設在隆德寺山坡上，距離錫金首都岡托約 24 公里，約一小時車程。所在地海拔 1547 米（5800 英尺），夏季溫差約 20.7°C／13.1°C，冬季約 14.9°C／7.7°C。
            </p>
            <p>每年朝聖的最佳季節是 2 月到 5 月底，或 10 月到 12 月中旬。</p>

            <WatermarkHeading as="h2">每年重要宗教典禮</WatermarkHeading>
            <p>
              寺院每年定期為大眾舉辦宗教活動，最重要的兩項分別在夏季與冬季舉行。藏曆四月舉行十天蓮師或普巴金剛法會，第十天跳神聖的喇嘛舞，主題為蓮師八變、本尊或護法。
            </p>
            <p>
              藏曆十二月，隆德寺舉行十天瑪哈嘎拉護法法會，接著在十二月二十九日跳瑪哈嘎拉金剛舞，之後慶祝藏曆新年，節目以文化與宗教為主，並邀請藏族歌唱家、舞蹈家表演。
            </p>

            <WatermarkHeading as="h2">學院歷史</WatermarkHeading>
            <p>
              第十六世大寶法王噶瑪巴創建那瀾陀高級佛學院。那瀾陀曾是印度最著名佛學院的校名，噶瑪巴為了培養下一代僧才、延續噶舉傳承並弘揚佛法，對佛學院特別重視。
            </p>
            <p>
              1980 年，KSNI 開始興建，經費來自噶瑪巴前往北美後，北美地區信眾弟子的捐助。在第十六世噶瑪巴的加持下，學院於 1982 年正式開學，並任命夏瑪仁波切、大司徒仁波切、蔣貢康楚仁波切、國師嘉察仁波切和祕書長達卻雍度為學校董事。
            </p>
            <p>
              第一屆學生四十多人，後來已發展至一百多人。在執行董事蔣貢康楚仁波切的領導下，學校興建更多教室、學生宿舍，並擴建圖書館。新教學大樓具有傳統西藏建築風格，壁上有色彩豐富的佛教繪畫。
            </p>

            <WatermarkHeading as="h2">學位授予</WatermarkHeading>
            <p>
              KSNI 為噶舉傳承之高級佛學教育機構。學院招收八年制初中畢業生，學生需於院中修讀七年，完成後授予論師資格，相當於大學畢業。其後可再進修兩年取得阿闍黎學位，續修兩年可獲佛學博士學位。
            </p>
            <ul>
              {degrees.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">學生來源與福利</WatermarkHeading>
            <p>
              學生主要來自喜馬拉雅山區、不丹、尼泊爾、拉達克、錫金和印度等地，多數是藏人後裔。本院全部免費，學費與生活費皆由世界各基金會和私人捐助支持，教授薪資亦由慈善團體支助，並有多位教授在院義務奉獻。
            </p>
            <p>
              1982 年，由教授老師們發起，在蔣貢康楚仁波切支持下成立學生福利中心。此中心負責人由學生選舉產生，任期兩年；中心除照顧清寒與疾病就醫之外，也協助學院舉辦院際活動。
            </p>

            <WatermarkHeading as="h2">師資與行政</WatermarkHeading>
            <p>
              KSNI 的兩位主要導師由第十六世噶瑪巴任命：堪布創古仁波切和大禪師竹清嘉措仁波切。另外有多位導師指導辯經、西藏文學、歷史、巴利文、梵文、印度文、英文等課程。
            </p>
            <p>
              尊貴的第十六世大寶法王噶瑪巴於 1981 年親自寫下「噶瑪師利那瀾陀高級佛學院章程、訓導和教務手冊」。根據此章程，本院行政由噶舉四位法子和一位指定高僧共同負責。
            </p>
            <ul>
              {administration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">課程</WatermarkHeading>
            <ul>
              {curriculum.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">每日作息</WatermarkHeading>
            <ul>
              {dailySchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">阿闍黎學位作息</WatermarkHeading>
            <ul>
              {acharyaSchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <WatermarkHeading as="h2">出版</WatermarkHeading>
            <p>
              1986 年，學院高班生成立委員會，募集資金支持出版珍貴稀有的教科書、木刻經書，並為學院收集唐卡，編輯出版那瀾陀期刊。
            </p>

            <WatermarkHeading as="h2">出行指南</WatermarkHeading>
            <ul>
              {travelGuide.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <figure className={styles.closingImage}>
              <img alt="噶瑪師利那瀾陀高級佛學院" src="/karmapa/seat004.png" />
            </figure>

            <EndMarker />
            <MainSeatArticleNav currentSlug="ksni" />
          </div>
        </div>
      </article>
    </main>
  );
}
