"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type VideoItem = {
  date: string;
  excerpt: string;
  title: string;
  youtubeId?: string;
};

type VideoCategory = {
  items: VideoItem[];
  label: string;
};

function buildPlaceholderItems(label: string, count: number): VideoItem[] {
  return Array.from({ length: count }, (_, index) => ({
    date: label,
    excerpt: "影音內容說明待更新。",
    title: `${label}影音待更新 ${String(index + 1).padStart(2, "0")}`,
  }));
}

export const karmapaTeachingItems: VideoItem[] = [
  {
    date: "2026.07.12",
    excerpt: "真正去感受煩惱，生起「願意改變」的動機",
    title: "噶瑪巴法語",
    youtubeId: "KFhgUF3PcuQ",
  },
  {
    date: "2020.04.19",
    excerpt:
      "2020/4/19 共修迴向COVID19疫情，怙尊法王噶瑪巴，次日4/19全球網路共修《普賢行願品＆三藴經》，祈福迴向之中文開示部分。",
    title: "法王噶瑪巴《普賢行願品＆三蘊經》共修開示",
    youtubeId: "xeXXcGMcL30",
  },
  {
    date: "2020.04.18",
    excerpt:
      "2020/4/18 共修迴向COVID19疫情，怙尊法王噶瑪巴引領首日全球網路共修《心經迴遮法》祈福迴向。",
    title: "法王噶瑪巴《心經迴遮》共修開示",
    youtubeId: "kXZPkZ51laE",
  },
  {
    date: "2020.04.14",
    excerpt: "影片母源、感恩取自法王官方FB；中文譯師：堪布羅卓丹傑。",
    title: "Karmapa法王噶瑪巴對全球新冠疫情的開示",
    youtubeId: "smsp4WDeeGY",
  },
  {
    date: "2020.01.28",
    excerpt: "薩迦愈病—祛病消災願文",
    title: "大寶法王2020新年寄語",
    youtubeId: "YbSC-mnNJNs",
  },
  {
    date: "2019.03.06",
    excerpt: "佛子行三十七頌",
    title: "法王宣說《佛子行》三",
    youtubeId: "hi7m2Ykqc2g",
  },
  {
    date: "2019.02.20",
    excerpt: "生起「願菩提心」，學習「行菩提心」",
    title: "法王宣說《佛子行》二",
    youtubeId: "LEP3hIWC6bE",
  },
  {
    date: "2019.02.19",
    excerpt: "在河濱大教堂，以聞法慶祝「佛陀成道日」",
    title: "法王宣說《佛子行》一",
    youtubeId: "tfQRuO-g9rA",
  },
  {
    date: "2018.09.05",
    excerpt: "聞思修是佛子行",
    title: "佛心慧語（二）",
    youtubeId: "jJpjxLgmLnM",
  },
  {
    date: "2018.09.05",
    excerpt: "戒定慧解知見生，三明六通道品發；慈悲十力無畏起，眾生善業因緣生",
    title: "佛心慧語（一）",
    youtubeId: "4T54S0irCRQ",
  },
  {
    date: "2018.09.02",
    excerpt: "生起「願菩提心」，學習「行菩提心」",
    title: "聞思修是佛子行三十七頌",
    youtubeId: "fA9keVw3mKM",
  },
];

const ceremonyRecordItems: VideoItem[] = [
  {
    date: "2025.12.31",
    excerpt: "歲末除障護法共修",
    title: "2025瑪哈嘎拉歲末七祿除障大法會",
    youtubeId: "tw9fKtqp8mU",
  },
  {
    date: "2025.09.19",
    excerpt:
      "以此功德願證佛自性，降伏煩惱怨敵之過患。生老病死洶湧之波濤，願度眾生解脫輪迴海。",
    title: "2025年阿彌陀佛超薦法會",
    youtubeId: "MbQDXvPw4DE",
  },
  {
    date: "2025.03.09",
    excerpt: "影片母源、感恩取自洄瀾有線電視",
    title: "供佛齋天護國佑民祈安增福大法會：修持佛法降福消災",
    youtubeId: "boC-_h6uoMs",
  },
  {
    date: "2024.08.13",
    excerpt: "阿彌陀佛超薦祈福",
    title: "2024阿彌陀佛超薦大法會",
    youtubeId: "2SLAo1k8UVA",
  },
  {
    date: "2024.08.11",
    excerpt: "蓮花菩提苑超薦法會",
    title: "農曆七月孝親月：蓮花菩提苑超薦法會",
    youtubeId: "MAmOcKb_JG4",
  },
  {
    date: "2023.09.12",
    excerpt: "蓮苑開光祈福大典",
    title: "花蓮噶舉《蓮花菩提苑》暨《蓮花生命園區》開光祈福大法會",
    youtubeId: "H-tq1tNIuNE",
  },
  {
    date: "2023.08.26",
    excerpt: "片母源、感恩取自洄瀾有線電視",
    title: "七月孝親月：台灣噶舉佛學院花蓮中心阿彌陀佛超薦法會",
    youtubeId: "B30AW4Htxpc",
  },
  {
    date: "2023.06.20",
    excerpt: "恭祝法王祝壽祈福",
    title: "2023恭祝第十七世大寶法王祝壽祈福大法會",
    youtubeId: "76TySoi3Sw0",
  },
  {
    date: "2023.05.30",
    excerpt: "供燈祈願福慧增長",
    title: "2023年供燈",
    youtubeId: "1-H6ojZ5DBA",
  },
  {
    date: "2022.08.14",
    excerpt: "花蓮中心孝親超渡",
    title: "農曆七月孝親月：花蓮中心超渡法會",
    youtubeId: "srCfSpKxAdw",
  },
  {
    date: "2022.07.05",
    excerpt:
      "願吾一切生世中，無比達波噶舉眾 尤其威德噶瑪巴，莊嚴頂戴永不離",
    title: "2022尊勝：第十七世大寶法王噶瑪巴祝壽法會",
    youtubeId: "GPC7kdFh9lg",
  },
  {
    date: "2018.08.28",
    excerpt: "孝親吉祥阿彌陀法會",
    title: "2018孝親吉祥月：阿彌陀佛法會",
    youtubeId: "-OoGsvlisA8",
  },
  {
    date: "2017.06.24",
    excerpt: "三地連線祝壽法會",
    title: "2017噶瑪巴祝壽生日法會",
    youtubeId: "RKRQE4ac8xg",
  },
];

const kagyuLineageItems: VideoItem[] = [
  {
    date: "2014.01.16",
    excerpt: "第五世大寶法王德新謝巴與明代瑞相長卷圖",
    title: "瑞相圖",
    youtubeId: "j2Jt_8NdONU",
  },
  {
    date: "2014.01.03",
    excerpt: "國師嘉察仁波切紀錄",
    title: "國師嘉察仁波切紀錄片",
    youtubeId: "W3Uy9aQESgo",
  },
  {
    date: "2013.10.28",
    excerpt: "歷代大寶法王金剛駐錫地",
    title: "密嚴淨土・楚布寺",
    youtubeId: "mezD4frb03I",
  },
  {
    date: "2013.04.22",
    excerpt:
      "第一位上師帝洛巴以口傳教法，一代一代連續無間斷地將噶舉傳承的法教完整地傳至第十七世大寶法王噶瑪巴。",
    title: "噶舉傳承",
    youtubeId: "N6d4Lhr5w1I",
  },
  {
    date: "日期未註明",
    excerpt: "黃金寶鬘佛法開示",
    title: "黃金寶鬘：佛法開示",
    youtubeId: "7JQv4tT8e6c",
  },
];

const dharmaPracticeItems: VideoItem[] = [
  {
    date: "2023.10.22",
    excerpt: "觀音頌缽銅鑼浴",
    title: "觀音頌缽銅鑼浴",
    youtubeId: "olxypcQ4AVY",
  },
  {
    date: "2023.10.19",
    excerpt: "尊貴曲尼倫珠阿闍黎於不丹傳法",
    title: "四臂觀音暨禪修",
    youtubeId: "STKAz5rejoY",
  },
  {
    date: "2017.06.26",
    excerpt: "法王首次加拿大弘法",
    title: "噶瑪巴加拿大弘法行",
    youtubeId: "n9PgR_NYHDo",
  },
];

const charityItems: VideoItem[] = [
  {
    date: "2026.05.01",
    excerpt: "",
    title: "財團法人噶瑪噶舉基金會・愛心平安餐",
    youtubeId: "9EGWJKzSavg",
  },
  {
    date: "2026.04.19",
    excerpt: "",
    title: "噶瑪噶舉基金會・愛心送暖平安餐《鳳山區》",
    youtubeId: "IN36GfN85yM",
  },
  {
    date: "2025.09.28",
    excerpt: "",
    title: "噶瑪噶舉基金會・愛心送暖平安餐",
    youtubeId: "ecIhe6nPUfs",
  },
  {
    date: "2025.04.21",
    excerpt: "",
    title: "財團法人噶瑪噶舉基金會・愛心平安餐",
    youtubeId: "dQHwVcCjteo",
  },
  {
    date: "2025.03.10",
    excerpt: "",
    title: "噶瑪噶舉基金會・愛心送暖平安餐",
    youtubeId: "5icFqjwJLwQ",
  },
  {
    date: "2023.06.19",
    excerpt: "",
    title: "噶瑪噶舉基金會・發送愛心平安餐",
    youtubeId: "oafj-94vcF0",
  },
  {
    date: "2023.05.29",
    excerpt: "",
    title: "噶瑪噶舉基金會・發送愛心平安餐",
    youtubeId: "zQuqX-3_9DU",
  },
  {
    date: "2023.05.22",
    excerpt: "",
    title: "噶瑪噶舉基金會・發送愛心平安餐",
    youtubeId: "71QGMEN3LEk",
  },
  {
    date: "2022.03.27",
    excerpt: "",
    title: "寒冬送暖・吉祥平安餐",
    youtubeId: "-NCrzMxGZXY",
  },
];

const sustainabilityItems: VideoItem[] = [
  {
    date: "2025.03.16",
    excerpt: "法王慈悲指導，生態永續新里程碑",
    title: "蓮光復鄉環保植存",
    youtubeId: "fVUpKrXafgg",
  },
  {
    date: "2025.03.11",
    excerpt: "光復公所共環保植存",
    title: "噶瑪噶舉基金會贈地",
    youtubeId: "kKYstQoC6SE",
  },
];

const videoCategories: VideoCategory[] = [
  { items: karmapaTeachingItems, label: "法王開示" },
  { items: ceremonyRecordItems, label: "法會紀實" },
  { items: kagyuLineageItems, label: "噶舉傳承" },
  { items: dharmaPracticeItems, label: "弘法禪修" },
  { items: charityItems, label: "公益慈善" },
  { items: sustainabilityItems, label: "環保永續" },
];

export function VideoChannelTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabBar} role="tablist" aria-label="影音頻道分類">
        {videoCategories.map((category, index) => {
          const isActive = index === activeIndex;
          const tabId = `video-channel-tab-${index}`;
          const panelId = `video-channel-panel-${index}`;

          return (
            <button
              aria-controls={panelId}
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              id={tabId}
              key={category.label}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className={styles.contentContainer}>
        {videoCategories.map((category, index) => {
          const isActive = index === activeIndex;
          const tabId = `video-channel-tab-${index}`;
          const panelId = `video-channel-panel-${index}`;

          return (
            <section
              aria-hidden={!isActive}
              aria-labelledby={tabId}
              className={`${styles.panel} ${isActive ? styles.panelActive : styles.panelHidden}`}
              id={panelId}
              key={`${category.label}-panel`}
              role="tabpanel"
            >
              <div className={styles.articleGrid}>
                {category.items.map((item, itemIndex) => {
                  const isPlayable = Boolean(item.youtubeId);

                  return (
                    <article
                      className={styles.articleCard}
                      key={`${category.label}-${item.date}-${item.title}-${itemIndex}`}
                    >
                      <button
                        aria-label={isPlayable ? `播放${item.title}` : `${item.title}影片待補`}
                        className={`${styles.imageFrame} ${isPlayable ? styles.videoThumb : ""}`}
                        disabled={!isPlayable}
                        onClick={() => setActiveVideo(item)}
                        style={
                          item.youtubeId
                            ? {
                                backgroundImage: `url("https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg")`,
                              }
                            : undefined
                        }
                        type="button"
                      >
                        {isPlayable ? (
                          <span className={styles.playButton} aria-hidden="true">
                            <span className={styles.playIcon} />
                          </span>
                        ) : (
                          <span aria-hidden="true" className={styles.imagePlaceholder} />
                        )}
                      </button>
                      <span className={styles.date}>{item.date}</span>
                      <span className={styles.articleTitle}>{item.title}</span>
                      {item.excerpt ? (
                        <p className={styles.excerpt}>{item.excerpt}</p>
                      ) : null}
                      <button
                        className={styles.readMore}
                        disabled={!isPlayable}
                        onClick={() => setActiveVideo(item)}
                        type="button"
                      >
                        點擊觀看
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {activeVideo?.youtubeId ? (
        <div
          aria-label={`${activeVideo.title}影片預覽`}
          aria-modal="true"
          className={styles.lightbox}
          onClick={() => setActiveVideo(null)}
          role="dialog"
        >
          <div className={styles.lightboxInner} onClick={(event) => event.stopPropagation()}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.lightboxFrame}
              referrerPolicy="strict-origin-when-cross-origin"
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
              title={activeVideo.title}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
