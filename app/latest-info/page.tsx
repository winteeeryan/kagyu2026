import Link from "next/link";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { specialEvents } from "@/data/homepage";
import styles from "./page.module.css";

type LatestInfoItem = (typeof specialEvents)[number] & {
  excerpt?: string;
};

const latestInfoItems: LatestInfoItem[] = [
  {
    ...specialEvents[0],
    title: "法王噶瑪巴對全球新冠疫情的開示",
    meta: "2020.04.15 | 最新公告",
    image: "/latestinfo/news20200415.png",
    excerpt: "請轉心向內，一起為世界祈願！",
    href: "https://www.kagyuoffice.org.tw/news/20200414",
  },
  {
    ...specialEvents[1],
    title: "第36屆祈願法會點燈祈願法會．法王特別開示",
    meta: "2019.01.21 | 最新公告",
    image: "/latestinfo/news20190121.jpg",
    excerpt: "志求解脫、出離輪迴，才是真正出家戒",
    href: "https://www.kagyuoffice.org.tw/17th-karmapa/karmapa-chronicle/kagyumonlam/20190121",
  },
  {
    ...specialEvents[2],
    title: "2018年第九屆北美噶舉大祈願法會．點燈祈願法會，願慈悲照亮世界",
    meta: "2018.06.10 | 最新公告",
    image: "/latestinfo/news20180610.jpg",
    excerpt: "「點燈祈願法會」，在世界金融中心紐約上場了！",
    href: "https://www.kagyuoffice.org.tw/news/20180610",
  },
  {
    ...specialEvents[3],
    title: "第35屆噶舉大祈願法會．法王圓滿開示",
    meta: "2018.03.04 | 最新公告",
    image: "/latestinfo/news20180304.png",
    excerpt: "我不在的時候，謝謝你們守住這個家",
    href: "https://www.kagyuoffice.org.tw/17th-karmapa/karmapa-chronicle/kagyumonlam/20180304",
  },
  {
    ...specialEvents[4],
    title: "法王噶瑪巴首次加拿大弘法",
    meta: "2017.06.02 | 最新公告",
    image: "/latestinfo/news20170602.jpg",
    excerpt: "「佛教的根道果」第一堂課",
    href: "https://www.kagyuoffice.org.tw/news/20170602",
  },
  {
    ...specialEvents[5],
    title: "法王噶瑪巴首次加拿大弘法 ．第四屆「對話」論壇",
    meta: "2017.06.01 | 最新公告",
    image: "/latestinfo/news20170601.jpg",
    excerpt: "降伏自心，才是真修行!",
    href: "https://www.kagyuoffice.org.tw/news/20170601",
  },
  {
    ...specialEvents[6],
    title: "法王噶瑪巴首度英國弘法．長壽佛灌頂暨弘法圓滿開示",
    meta: "2017.05.27 | 最新公告",
    image: "/latestinfo/news20170527001.jpg",
    excerpt: "心惜一切生命，情通眾生苦樂",
    href: "https://www.kagyuoffice.org.tw/news/20170527-1",
  },
  {
    ...specialEvents[7],
    title: "法王噶瑪巴訪問英國的尼泊爾社區",
    meta: "2017.05.27 | 最新公告",
    image: "/latestinfo/news20170527002.jpg",
    excerpt:
      "此際，天空出現一個明亮巨大的雙彩虹，不禁令人想起2008年法王第一次訪問美國時，彩虹也經常伴隨法王在東岸的行程。",
    href: "https://www.kagyuoffice.org.tw/news/20170527",
  },
  {
    ...specialEvents[8],
    title: "法王噶瑪巴訪問歐洲最大的印度神廟",
    meta: "2017.05.25 | 最新公告",
    image: "/latestinfo/news20170525.jpg",
    excerpt:
      "今晨法王噶瑪巴前往倫敦西北部，訪問歐洲最大的印度神廟BAPS斯瓦米那瑞揚(BAPS Swaminarayan Mandir)",
    href: "https://www.kagyuoffice.org.tw/news/20170525",
  },
  ...specialEvents.slice(9),
];

const readItems = latestInfoItems.map((item, index) => {
  const [date] = item.meta.split(" | ");

  return {
    ...item,
    date,
    excerpt:
      item.excerpt ??
      [
        "近期共修、課程與學院公告彙整，邀請大眾依自身因緣參與聞思修學。",
        "延續傳承教法與地方中心活動，讓修持、學習與護持在日常中相續。",
        "從課程安排到活動提醒，整理每一則值得留意的學院訊息。",
      ][index % 3],
  };
});

export default function LatestInfoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.readSection}>
        <div className={styles.inner}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>最新資訊</p>
            <WatermarkHeading as="h2">法王活動與開示</WatermarkHeading>
            <p className={styles.readAside}>
              隨順第十七世法王弘法足跡，收錄近期活動、開示與演說訊息。願法音入心，如清泉潤物。
            </p>
            <SectionOpener />
          </header>

          <div className={styles.articleGrid}>
            {readItems.map((item, index) => {
              return (
                <Link
                  className={styles.articleCard}
                  href={item.href}
                  key={`${item.title}-${item.date}-${index}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className={styles.imageFrame}>
                    {item.image ? (
                      <img alt="" className={styles.articleImage} src={item.image} />
                    ) : (
                      <span aria-hidden="true" className={styles.imagePlaceholder} />
                    )}
                  </span>
                  <time className={styles.date} dateTime={item.date.replaceAll(".", "-")}>
                    {item.date}
                  </time>
                  <span className={styles.articleTitle}>{item.title}</span>
                  <p className={styles.excerpt}>{item.excerpt}</p>
                  <span className={styles.readMore}>詳細閱讀</span>
                </Link>
              );
            })}
          </div>

          <EndMarker />
        </div>
      </section>
    </main>
  );
}
