import { charityShopCategories, getCharityShopItemCount } from "@/data/charityShop";

export type NavGroup = {
  title: string;
  links: string[];
};

export type NavItem = {
  label: string;
  href: string;
  groups: NavGroup[];
};

export type Product = {
  title: string;
  price: string;
  compareAt?: string;
  image: string;
  hoverImage?: string;
  href: string;
};

export type BookCategory = {
  title: string;
  image: string;
  href: string;
};

export type PromoTile = {
  title: string;
  cta: string;
  image: string;
  href: string;
  tone: "light" | "dark";
};

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroSlide = {
  image: string;
  alt: string;
};

export type ActivityItem = {
  title: string;
  meta: string;
  publishDate: string;
  startDate: string;
  endDate: string;
  center: string;
  image: string;
  href: string;
  posterFull?: string;
  posterThumbnail?: string;
};

export type ActivityCategory = {
  label: string;
  href: string;
  items: ActivityItem[];
};

export type PopularCollectionGroup = {
  label: string;
  count: number;
  image: string;
  href: string;
  items: ActivityItem[];
};

export type SpecialEventItem = {
  title: string;
  meta: string;
  image: string;
  href: string;
};

export const announcement =
  "Orders may be delayed 3–5 days due to an ongoing retreat. Thank you for your patience.";

export const navItems: NavItem[] = [
  {
    label: "關於學院",
    href: "/about",
    groups: [
      { title: "學院簡介", links: [] },
      { title: "成立緣起", links: [] },
      { title: "師資與上師", links: [] },
      { title: "全省中心", links: [] },
    ],
  },
  {
    label: "聞・思・修",
    href: "/study-practice",
    groups: [
      {
        title: "入門指南",
        links: [
          "為什麼學佛",
          "在家居士如何學佛",
          "藏傳佛教教育制度",
          "藏傳佛教之殊勝與方便",
          "現行台灣佛法教育",
          "道場行儀",
        ],
      },
      {
        title: "佛心慧語",
        links: [
          "聞思經典",
          "祖師語錄",
          "聖者行傳",
          "法王教言",
        ],
      },
      
      { title: "佛學小百科", links: [] },
      { title: "正法電子書", links: [] },
    ],
  },
  {
    label: "大寶法王",
    href: "/karmapa",
    groups: [
      
      { title: "嘉華噶瑪巴歷史", links: [] },
      { title: "歷代大寶法王", links: [] },
      { title: "金剛寶冠【黑寶冠】", links: [] },
      { title: "噶瑪巴簡要祈請文", links: [] },
      { title: "噶瑪巴神聖的預言", links: [] },
      { title: "噶瑪巴主寺法座", links: [] },
      { title: "大寶法王墨寶", links: [] },
    ],
  },
  {
    label: "噶舉傳承",
    href: "/kagyu-lineage",
    groups: [
      {
        title: "傳承概述",
        links: ["藏傳佛教之噶舉傳承", "密續和大手印之道", "噶舉的四大八小支派", "西藏和境外的主寺"],
      },
      {
        title: "黃金珠鬘",
        links: ["黃金珠鬘傳承概述", "黃金珠鬘法脈傳承祖師"],
      },
      {
        title: "噶舉經典",
        links: [],
      },
      {
        title: "當代傳承上師",
        links: [],
      },
    ],
  },
  {
    label: "共修與活動",
    href: "/activities",
    groups: [
      {
        title: "最新活動",
        links: [],
      },
      {
        title: "過往活動",
        links: [],
      },
    ],
  },
  {
    label: "護持與志工",
    href: "/support-volunteer",
    groups: [
      {
        title: "護持資訊",
        links: [],
      },
      {
        title: "功德海",
        links: [],
      },
      {
        title: "志工招募",
        links: [],
      },
      {
        title: "義賣商店",
        links: [],
      },
    ],
  },
];

export const navRouteMap: Record<string, string> = {
  學院簡介: "/about/introduction",
  成立緣起: "/about/origin",
  師資與上師: "/about/teachers",
  全省中心: "/about/centers",
  入門指南: "/study-practice/beginner-guide",
  為什麼學佛: "/study-practice/beginner-guide/why-study-buddhism",
  在家居士如何學佛: "/study-practice/beginner-guide/lay-practice",
  藏傳佛教教育制度: "/study-practice/beginner-guide/tibetan-buddhist-education",
  藏傳佛教之殊勝與方便:
    "/study-practice/beginner-guide/tibetan-buddhist-excellence-and-skillful-means",
  現行台灣佛法教育: "/study-practice/beginner-guide/taiwan-dharma-education",
  道場行儀: "/study-practice/beginner-guide/center-etiquette",
  佛心慧語: "/study-practice/dharma-wisdom",
  聞思經典: "/study-practice/dharma-wisdom/scriptures",
  祖師語錄: "/study-practice/dharma-wisdom/masters-quotes",
  聖者行傳: "/study-practice/dharma-wisdom/saints-biographies",
  法王教言: "/study-practice/dharma-wisdom/karmapa-teachings",
  佛學小百科: "/study-practice/buddhist-encyclopedia",
  正法電子書: "https://dharmaebooks.org",
  嘉華噶瑪巴歷史: "/karmapa/history",
  歷代大寶法王: "/karmapa/lineage",
  "金剛寶冠【黑寶冠】": "/karmapa/black-crown",
  噶瑪巴簡要祈請文: "/karmapa/short-prayer",
  噶瑪巴神聖的預言: "/karmapa/prophecies",
  噶瑪巴主寺法座: "/karmapa/main-seat",
  大寶法王墨寶: "/karmapa/calligraphy",
  傳承概述: "/kagyu-lineage/overview",
  藏傳佛教之噶舉傳承: "/kagyu-lineage/overview/kagyu-in-tibetan-buddhism",
  密續和大手印之道: "/kagyu-lineage/overview/tantra-and-mahamudra",
  噶舉的四大八小支派: "/kagyu-lineage/overview/four-greater-eight-lesser-schools",
  西藏和境外的主寺: "/kagyu-lineage/overview/monasteries",
  黃金珠鬘: "/kagyu-lineage/golden-garland",
  黃金珠鬘傳承概述: "/kagyu-lineage/golden-rosary/overview",
  黃金珠鬘法脈傳承祖師: "/kagyu-lineage/golden-rosary/masters",
  噶舉經典: "/kagyu-lineage/texts",
  當代傳承上師: "/kagyu-lineage/contemporary-masters",
  有聲書: "/meditation-space/audiobooks",
  白噪音: "/meditation-space/white-noise",
  心靈開解: "/meditation-space/counsel",
  數位共修: "/meditation-space/digital-practice",
  留言牆: "/meditation-space/message-wall",
  影音頻道: "/visual-media/video-channel",
  最新活動: "/activities/latest",
  過往活動: "/activities/past",
  活動報名: "/activities/registration",
  護持資訊: "/support-volunteer/support-info",
  當期勸募專案: "/support-volunteer/current-fundraising",
  功德海: "/support-volunteer/merit-ocean",
  志工招募: "/support-volunteer/volunteer-recruitment",
  義賣商店: "/support-volunteer/charity-shop",
};

export const hero = {
  eyebrow: "",
  title: "",
  description: "",
  ctas: [
    { label: "課程開示", href: "/courses" },
    { label: "最新資訊", href: "/latest-info" },
  ] satisfies HeroCta[],
  slides: [
    {
      image: "/hero/pc1.png?v=20260412-3",
      alt: "Blue homepage hero slide featuring a monk in prayer and a bilingual institute wordmark.",
    },
    {
      image: "/hero/pc2.png?v=20260412-3",
      alt: "Red homepage hero slide featuring a monk in prayer and a bilingual institute wordmark.",
    },
    {
      image: "/hero/pc3.png?v=20260412-3",
      alt: "Gold homepage hero slide featuring a monk portrait and a bilingual institute wordmark.",
    },
  ] satisfies HeroSlide[],
};

const activityImagePool = [
  "https://tibetantreasures.com/cdn/shop/files/Precious-Treasury_WO.png?v=1748403651&width=1200",
  "https://tibetantreasures.com/cdn/shop/files/handpainted_WO.jpg?v=1748058101&width=1200",
  "https://tibetantreasures.com/cdn/shop/files/T18173-1_WO.jpg?v=1754895796&width=1200",
  "https://tibetantreasures.com/cdn/shop/products/Way-of-the-Bodhisattva-bowobod.jpg?v=1754898108&width=1200",
  "https://tibetantreasures.com/cdn/shop/products/The-Precious-Treasury-Set-T02180-sq.jpg?v=1754897715&width=1200",
  "https://tibetantreasures.com/cdn/shop/files/T06066-2_WO_47ce12d2-813b-4d05-afa6-7faee3dfe42b.jpg?v=1726263169&width=1200",
  "https://tibetantreasures.com/cdn/shop/files/T10274_Red-Sandalwood-Mala-Lg-1_WO_2d63e326-beee-43f7-ab2a-b03b75d251f3.jpg?v=1775251631&width=1200",
  "https://tibetantreasures.com/cdn/shop/files/Gates_of_Buddhist_Practice-bogbpra.jpg?v=1754898007&width=1200",
];

const activityTitlePool = [
  "2026年2月高清桌曆",
  "護持功德主招募",
  "噶瑪噶舉基金會2024桌曆",
  "佛學會服務項目",
];

const activityMetaPool = [
  "2026.02.01",
  "2025.04.06",
  "2024.01.01",
  "2022.10.03",
];

const nationalActivityImages = [
  "/activity/nationalactivity001.png",
  "/activity/nationalactivity002.png",
  "/activity/nationalactivity003.png",
  "/activity/nationalactivity004.png",
];

const nationalActivities: ActivityItem[] = [
  {
    title: "2026年2月高清桌曆",
    meta: "2026.02.01",
    publishDate: "2026-02-01",
    startDate: "2026-02-01",
    endDate: "2026-02-01",
    center: "全國活動",
    image: nationalActivityImages[0],
    href: "/events?category=national",
  },
  {
    title: "護持功德主招募",
    meta: "2025.04.06",
    publishDate: "2025-04-06",
    startDate: "2025-04-06",
    endDate: "2025-04-06",
    center: "全國活動",
    image: nationalActivityImages[1],
    href: "/events?category=national",
  },
  {
    title: "噶瑪噶舉基金會2024桌曆",
    meta: "2024.01.01",
    publishDate: "2024-01-01",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
    center: "全國活動",
    image: nationalActivityImages[2],
    href: "/events?category=national",
  },
  {
    title: "佛學會服務項目",
    meta: "2022.10.03",
    publishDate: "2022-10-03",
    startDate: "2022-10-03",
    endDate: "2022-10-03",
    center: "全國活動",
    image: nationalActivityImages[3],
    href: "/events?category=national",
  },
];

const kaohsiungActivityImages = [
  "/activity/kaohsiungactivity001.png",
  "/activity/kaohsiungactivity002.png",
  "/activity/kaohsiungactivity003.png",
  "/activity/kaohsiungactivity004.png",
  "/activity/kaohsiungactivity005.png",
  "/activity/kaohsiungactivity006.png",
  "/activity/kaohsiungactivity007.png",
  "/activity/kaohsiungactivity008.png",
  "/activity/kaohsiungactivity009.png",
  "/activity/kaohsiungactivity010.png",
  "/activity/kaohsiungactivity011.png",
  "/activity/kaohsiungactivity012.png",
  "/activity/kaohsiungactivity013.png",
  "/activity/kaohsiungactivity014.png",
  "/activity/kaohsiungactivity015.png",
  "/activity/kaohsiungactivity016.png",
];

const taipeiActivityImages = [
  "/activity/taipeiactivity001.png",
  "/activity/taipeiactivity002.png",
  "/activity/taipeiactivity003.png",
  "/activity/taipeiactivity004.png",
  "/activity/taipeiactivity005.png",
  "/activity/taipeiactivity006.png",
  "/activity/taipeiactivity007.png",
  "/activity/taipeiactivity008.png",
];

const taipeiActivities: ActivityItem[] = [
  {
    title: "二臂黑袍瑪哈嘎拉修法",
    meta: "2026.04.26",
    publishDate: "2026-04-26",
    startDate: "2026-04-26",
    endDate: "2026-04-26",
    center: "台北中心",
    image: taipeiActivityImages[0],
    href: "/events?category=taipei",
  },
  {
    title: "施身法",
    meta: "2026.04.18",
    publishDate: "2026-04-18",
    startDate: "2026-04-18",
    endDate: "2026-04-18",
    center: "台北中心",
    image: taipeiActivityImages[1],
    href: "/events?category=taipei",
  },
  {
    title: "《長壽三尊大灌頂》",
    meta: "2026.04.12",
    publishDate: "2026-04-12",
    startDate: "2026-04-12",
    endDate: "2026-04-12",
    center: "台北中心",
    image: taipeiActivityImages[2],
    href: "/events?category=taipei",
  },
  {
    title: "瑪哈嘎拉修法",
    meta: "2026.03.29",
    publishDate: "2026-03-29",
    startDate: "2026-03-29",
    endDate: "2026-03-29",
    center: "台北中心",
    image: taipeiActivityImages[3],
    href: "/events?category=taipei",
  },
  {
    title: "蓮師財神一切總集",
    meta: "2026.02.22",
    publishDate: "2026-02-22",
    startDate: "2026-02-22",
    endDate: "2026-02-22",
    center: "台北中心",
    image: taipeiActivityImages[4],
    href: "/events?category=taipei",
  },
  {
    title: "綠度母修法",
    meta: "2025.09.21",
    publishDate: "2025-09-21",
    startDate: "2025-09-21",
    endDate: "2025-09-21",
    center: "台北中心",
    image: taipeiActivityImages[5],
    href: "/events?category=taipei",
  },
  {
    title: "蓮師財神暨薈供",
    meta: "2025.09.14",
    publishDate: "2025-09-14",
    startDate: "2025-09-14",
    endDate: "2025-09-14",
    center: "台北中心",
    image: taipeiActivityImages[6],
    href: "/events?category=taipei",
  },
  {
    title: "2025 台灣噶舉佛學院 光明點燈開始報名",
    meta: "2025.01.01",
    publishDate: "2025-01-01",
    startDate: "2025-01-01",
    endDate: "2025-01-01",
    center: "台北中心",
    image: taipeiActivityImages[7],
    href: "/events?category=taipei",
  },
];

const kaohsiungActivities: ActivityItem[] = [
  {
    title: "恭祝 第十七世大寶法王 噶瑪巴聖誕祝壽法會",
    meta: "2026.06.20",
    publishDate: "2026-06-20",
    startDate: "2026-06-20",
    endDate: "2026-06-20",
    center: "高雄中心",
    image: kaohsiungActivityImages[8],
    href: "/events?category=kaohsiung",
  },
  {
    title: "八肢瑜伽",
    meta: "2026.07.07",
    publishDate: "2026-07-07",
    startDate: "2026-07-07",
    endDate: "2026-07-07",
    center: "高雄中心",
    image: kaohsiungActivityImages[9],
    href: "/events?category=kaohsiung",
  },
  {
    title: "八肢瑜伽",
    meta: "2026.07.14",
    publishDate: "2026-07-14",
    startDate: "2026-07-14",
    endDate: "2026-07-14",
    center: "高雄中心",
    image: kaohsiungActivityImages[10],
    href: "/events?category=kaohsiung",
  },
  {
    title: "八肢瑜伽",
    meta: "2026.08.03",
    publishDate: "2026-08-03",
    startDate: "2026-08-03",
    endDate: "2026-08-03",
    center: "高雄中心",
    image: kaohsiungActivityImages[11],
    href: "/events?category=kaohsiung",
  },
  {
    title: "藥師佛暨綠度母修持法會",
    meta: "2026.09.06",
    publishDate: "2026-09-06",
    startDate: "2026-09-06",
    endDate: "2026-09-06",
    center: "高雄中心",
    image: kaohsiungActivityImages[12],
    href: "/events?category=kaohsiung",
  },
  {
    title: "瑪吉拉尊施身法",
    meta: "2026.09.13",
    publishDate: "2026-09-13",
    startDate: "2026-09-13",
    endDate: "2026-09-13",
    center: "高雄中心",
    image: kaohsiungActivityImages[13],
    href: "/events?category=kaohsiung",
  },
  {
    title: "蓮師暨財寶天王修持法會",
    meta: "2026.09.19",
    publishDate: "2026-09-19",
    startDate: "2026-09-19",
    endDate: "2026-09-19",
    center: "高雄中心",
    image: kaohsiungActivityImages[14],
    href: "/events?category=kaohsiung",
  },
  {
    title: "瑪哈嘎拉大護法除障法會",
    meta: "2026.09.27",
    publishDate: "2026-09-27",
    startDate: "2026-09-27",
    endDate: "2026-09-27",
    center: "高雄中心",
    image: kaohsiungActivityImages[15],
    href: "/events?category=kaohsiung",
  },
  {
    title: "愛心蔬食餐 祈福供燈 愛心義剪",
    meta: "2026.05.01",
    publishDate: "2026-05-01",
    startDate: "2026-05-01",
    endDate: "2026-05-01",
    center: "高雄中心",
    image: kaohsiungActivityImages[0],
    href: "/events?category=kaohsiung",
  },
  {
    title: "瑪哈嘎拉修法",
    meta: "2026.04.26",
    publishDate: "2026-04-26",
    startDate: "2026-04-26",
    endDate: "2026-04-26",
    center: "高雄中心",
    image: kaohsiungActivityImages[1],
    href: "/events?category=kaohsiung",
  },
  {
    title: "《佛學基礎》",
    meta: "2026.04.25",
    publishDate: "2026-04-25",
    startDate: "2026-04-25",
    endDate: "2026-04-25",
    center: "高雄中心",
    image: kaohsiungActivityImages[2],
    href: "/events?category=kaohsiung",
  },
  {
    title: "蓮師財神薈供",
    meta: "2026.04.19",
    publishDate: "2026-04-19",
    startDate: "2026-04-19",
    endDate: "2026-04-19",
    center: "高雄中心",
    image: kaohsiungActivityImages[3],
    href: "/events?category=kaohsiung",
  },
  {
    title: "愛心送暖平安餐",
    meta: "2026.04.13",
    publishDate: "2026-04-13",
    startDate: "2026-04-13",
    endDate: "2026-04-13",
    center: "高雄中心",
    image: kaohsiungActivityImages[4],
    href: "/events?category=kaohsiung",
  },
  {
    title: "2026《阿彌陀佛超薦大法會》",
    meta: "2026.04.05",
    publishDate: "2026-04-05",
    startDate: "2026-04-05",
    endDate: "2026-04-05",
    center: "高雄中心",
    image: kaohsiungActivityImages[5],
    href: "/events?category=kaohsiung",
  },
  {
    title: "蓮師財神暨薈供",
    meta: "2026.04.04",
    publishDate: "2026-04-04",
    startDate: "2026-04-04",
    endDate: "2026-04-04",
    center: "高雄中心",
    image: kaohsiungActivityImages[6],
    href: "/events?category=kaohsiung",
  },
  {
    title: "金剛薩埵 35佛大懺悔及供水",
    meta: "2026.03.29",
    publishDate: "2026-03-29",
    startDate: "2026-03-29",
    endDate: "2026-03-29",
    center: "高雄中心",
    image: kaohsiungActivityImages[7],
    href: "/events?category=kaohsiung",
  },
];

const hualienActivityImages = [
  "/activity/hualienactivity001.png",
  "/activity/hualienactivity002.png",
  "/activity/hualienactivity003.png",
  "/activity/hualienactivity004.png",
  "/activity/hualienactivity005.png",
  "/activity/hualienactivity006.png",
  "/activity/hualienactivity007.png",
  "/activity/hualienactivity008.png",
  "/activity/hualienactivity009.png",
  "/activity/hualienactivity010.png",
  "/activity/hualienactivity011.png",
];

const hualienActivities: ActivityItem[] = [
  {
    title: "孝親報恩 吉祥月阿彌陀佛超薦大法會",
    meta: "2026.08.22",
    publishDate: "2026-08-22",
    startDate: "2026-08-22",
    endDate: "2026-08-22",
    center: "花蓮中心",
    image: hualienActivityImages[8],
    href: "/events?category=hualien",
  },
  {
    title: "瑪哈嘎拉修法",
    meta: "2026.09.26",
    publishDate: "2026-09-26",
    startDate: "2026-09-26",
    endDate: "2026-09-26",
    center: "花蓮中心",
    image: hualienActivityImages[9],
    href: "/events?category=hualien",
  },
  {
    title: "蓮師山淨煙供",
    meta: "2026.09.26",
    publishDate: "2026-09-26",
    startDate: "2026-09-26",
    endDate: "2026-09-26",
    center: "花蓮中心",
    image: hualienActivityImages[10],
    href: "/events?category=hualien",
  },
  {
    title: "瑪哈嘎拉修法",
    meta: "2026.04.22",
    publishDate: "2026-04-22",
    startDate: "2026-04-22",
    endDate: "2026-04-22",
    center: "花蓮中心",
    image: hualienActivityImages[0],
    href: "/events?category=hualien",
  },
  {
    title: "蓮師山淨煙供",
    meta: "2026.04.21",
    publishDate: "2026-04-21",
    startDate: "2026-04-21",
    endDate: "2026-04-21",
    center: "花蓮中心",
    image: hualienActivityImages[1],
    href: "/events?category=hualien",
  },
  {
    title: "瑪哈嘎拉修法",
    meta: "2026.03.22",
    publishDate: "2026-03-22",
    startDate: "2026-03-22",
    endDate: "2026-03-22",
    center: "花蓮中心",
    image: hualienActivityImages[2],
    href: "/events?category=hualien",
  },
  {
    title: "蓮師山淨煙供",
    meta: "2026.03.21",
    publishDate: "2026-03-21",
    startDate: "2026-03-21",
    endDate: "2026-03-21",
    center: "花蓮中心",
    image: hualienActivityImages[3],
    href: "/events?category=hualien",
  },
  {
    title: "天祐台灣 2026 供佛齋天消災祈安大法會",
    meta: "2026.03.20",
    publishDate: "2026-03-20",
    startDate: "2026-03-20",
    endDate: "2026-03-20",
    center: "花蓮中心",
    image: hualienActivityImages[4],
    href: "/events?category=hualien",
  },
  {
    title: "台灣最高的地藏王菩薩 開光儀式",
    meta: "2026.01.29",
    publishDate: "2026-01-29",
    startDate: "2026-01-29",
    endDate: "2026-01-29",
    center: "花蓮中心",
    image: hualienActivityImages[5],
    href: "/events?category=hualien",
  },
  {
    title: "《蓮師山淨煙供》共修日",
    meta: "2025.12.13",
    publishDate: "2025-12-13",
    startDate: "2025-12-13",
    endDate: "2025-12-13",
    center: "花蓮中心",
    image: hualienActivityImages[6],
    href: "/events?category=hualien",
  },
  {
    title: "點燈祈福 懸掛風馬旗 煙供粉",
    meta: "2025.12.15",
    publishDate: "2025-12-15",
    startDate: "2025-12-15",
    endDate: "2025-12-15",
    center: "花蓮中心",
    image: hualienActivityImages[7],
    href: "/events?category=hualien",
  },
];

function buildActivityCategory(
  label: string,
  href: string,
  offset: number,
  count = 8,
  images = activityImagePool,
): ActivityCategory {
  return {
    label,
    href,
    items: Array.from({ length: count }, (_, index) => {
      const itemIndex = (index + offset) % activityTitlePool.length;
      const imageIndex = (index + offset) % images.length;

      return {
        title: `${label}・${activityTitlePool[itemIndex]}`,
        meta: activityMetaPool[itemIndex],
        publishDate: activityMetaPool[itemIndex].replace(/\./g, "-"),
        startDate: activityMetaPool[itemIndex].replace(/\./g, "-"),
        endDate: activityMetaPool[itemIndex].replace(/\./g, "-"),
        center: label,
        image: images[imageIndex],
        href,
      };
    }),
  };
}

export const activityCategories: ActivityCategory[] = [
  {
    label: "全國活動",
    href: "/events?category=national",
    items: nationalActivities,
  },
  {
    label: "台北中心",
    href: "/events?category=taipei",
    items: taipeiActivities,
  },
  {
    label: "高雄中心",
    href: "/events?category=kaohsiung",
    items: kaohsiungActivities,
  },
  {
    label: "花蓮中心",
    href: "/events?category=hualien",
    items: hualienActivities,
  },
  {
    label: "苗栗中心",
    href: "/events?category=miaoli",
    items: [],
  },
];

export const specialEvents: SpecialEventItem[] = [
  {
    title: "2026年2月高清桌曆",
    meta: "2026.02.01 | 台北中心",
    image: "/activity/nationalactivity001.png",
    href: "/events",
  },
  {
    title: "護持功德主招募",
    meta: "2025.04.06 | 全國線上",
    image: "/activity/nationalactivity002.png",
    href: "/events",
  },
  {
    title: "噶瑪噶舉基金會2024桌曆",
    meta: "2024.01.01 | 高雄中心",
    image: "/activity/nationalactivity003.png",
    href: "/events",
  },
  {
    title: "唱誦與靜心夜",
    meta: "2026.05.10 | 花蓮中心",
    image: "/activity/hualienactivity001.png",
    href: "/events",
  },
  {
    title: "親子慈心體驗",
    meta: "2026.05.17 | 苗栗中心",
    image: "/activity/taipeiactivity001.png",
    href: "/events",
  },
  {
    title: "傳承上師開示",
    meta: "2026.05.24 | 台北中心",
    image: "/activity/taipeiactivity002.png",
    href: "/events",
  },
  {
    title: "志工心行培訓",
    meta: "2026.06.07 | 全國活動",
    image: "/activity/kaohsiungactivity001.png",
    href: "/events",
  },
  {
    title: "夏季禪修講堂",
    meta: "2026.06.14 | 高雄中心",
    image: "/activity/kaohsiungactivity002.png",
    href: "/events",
  },
];

export const newItems: Product[] = [
  {
    title: "Authentic Lama Choopa",
    price: "$18.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/T06080_Authentic-Lama-Choopa-Incense-1_WO.jpg?v=1775254740&width=900",
    hoverImage:
      "https://tibetantreasures.com/cdn/shop/files/T06081_Authentic-Lama-Choopa-Incense-XL-1_WO.jpg?v=1775254746&width=900",
    href: "/support-volunteer/charity-shop/incense",
  },
  {
    title: "Bodhiseed Mala",
    price: "$42.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/T10255_Bodhiseed-Mala-1_WO.jpg?v=1775182125&width=900",
    hoverImage:
      "https://tibetantreasures.com/cdn/shop/files/T10255_Bodhiseed-Mala-2_WO.jpg?v=1775182125&width=900",
    href: "/support-volunteer/charity-shop/malas",
  },
  {
    title: "Thangtong Gyalpo Gold Handle Phurba",
    price: "$88.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/T16446-1_WO.jpg?v=1775180580&width=900",
    hoverImage:
      "https://tibetantreasures.com/cdn/shop/files/T16446-2_WO.jpg?v=1775180580&width=900",
    href: "/support-volunteer/charity-shop/others",
  },
  {
    title: "Red Sandalwood Damaru",
    price: "$96.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/T16451_Damaru-White-Skin-1_WO.jpg?v=1775255406&width=900",
    hoverImage:
      "https://tibetantreasures.com/cdn/shop/files/T16451_Damaru-White-Skin-2_WO.jpg?v=1775255405&width=900",
    href: "/support-volunteer/charity-shop/others",
  },
];

export const popularItems: Product[] = [
  {
    title: "Burlwood Chod Drum",
    price: "$168.00",
    compareAt: "$190.00",
    image:
      "https://tibetantreasures.com/cdn/shop/products/Dudjom-Burlwood-Chod-Drum-10-Inch-T16288-1.jpg?v=1754896843&width=900",
    href: "/support-volunteer/charity-shop/others",
  },
  {
    title: "Red Sandalwood Mala",
    price: "$32.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/T10274_Red-Sandalwood-Mala-Lg-1_WO_2d63e326-beee-43f7-ab2a-b03b75d251f3.jpg?v=1775251631&width=900",
    href: "/support-volunteer/charity-shop/malas",
  },
  {
    title: "Green Tara Statue",
    price: "$124.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/T18173-1_WO.jpg?v=1754895796&width=900",
    href: "/support-volunteer/charity-shop/others",
  },
  {
    title: "Zen Shawl",
    price: "$54.00",
    image:
      "https://tibetantreasures.com/cdn/shop/files/Red-Pashmina-Zen-Medium-T04075-1.jpg?v=1754897846&width=900",
    href: "/support-volunteer/charity-shop/others",
  },
];

export const popularCollectionGroups: PopularCollectionGroup[] =
  charityShopCategories.map((category) => ({
    label: category.title,
    count: category.items.reduce((total, item) => total + getCharityShopItemCount(item), 0),
    image: category.image,
    href: category.href,
    items: category.items.map((item) => ({
      title: item.title,
      meta: "",
      publishDate: "",
      startDate: "",
      endDate: "",
      center: category.title,
      image: item.image,
      href: category.href,
      posterFull: undefined,
      posterThumbnail: undefined,
    })),
  }));

export const spotlight = {
  heading: "Revealed Treasures",
  name: "Yedharma Stupa",
  price: "$14.00",
  compareAt: "$15.00",
  images: [
    "https://tibetantreasures.com/cdn/shop/files/T18382-1_WO.jpg?v=1754895878&width=1200",
    "https://tibetantreasures.com/cdn/shop/files/T18382-2_WO.jpg?v=1754895878&width=1200",
    "https://tibetantreasures.com/cdn/shop/files/T18382-3_WO.jpg?v=1754895878&width=1200",
  ],
  description: [
    "Handcrafted by Future Alchemy, each Yedharma Stupa is filled with carefully selected relics and mantras, including a ringsel believed to originate from an ancient Shakyamuni Buddha relic in Burma.",
    "Guided by Terma predictions and Buddhist masters’ advice, these stupas are being placed worldwide in hopes of averting future crises while reminding us that collective action can positively influence global conditions.",
  ],
};

export const books: BookCategory[] = [
  {
    title: "Books for Beginners",
    image:
      "https://tibetantreasures.com/cdn/shop/files/Gates_of_Buddhist_Practice-bogbpra.jpg?v=1754898007&width=900",
    href: "https://dharmaebooks.org",
  },
  {
    title: "Mind Training",
    image:
      "https://tibetantreasures.com/cdn/shop/products/Mind-Training-The-Great-Collection-T02161.jpg?v=1754897542&width=900",
    href: "https://dharmaebooks.org",
  },
  {
    title: "Ngöndro",
    image:
      "https://tibetantreasures.com/cdn/shop/products/NgondroBook-1.jpg?v=1754898083&width=900",
    href: "https://dharmaebooks.org",
  },
  {
    title: "Mahayana & Bodhisattva Path",
    image:
      "https://tibetantreasures.com/cdn/shop/products/Way-of-the-Bodhisattva-bowobod.jpg?v=1754898108&width=900",
    href: "https://dharmaebooks.org",
  },
  {
    title: "Vajrayana & Deity Yoga",
    image:
      "https://tibetantreasures.com/cdn/shop/products/Red-Tara-Commentary-bortcom_eb59aefc-8d23-43e3-85a0-b41b2c5b7edf.jpg?v=1754898085&width=900",
    href: "https://dharmaebooks.org",
  },
  {
    title: "Dzogchen & Mahamudra",
    image:
      "https://tibetantreasures.com/cdn/shop/products/The-Precious-Treasury-Set-T02180-sq.jpg?v=1754897715&width=900",
    href: "https://dharmaebooks.org",
  },
];

export const promoTiles: PromoTile[] = [
  {
    title: "The Precious Treasury Series",
    cta: "Explore the Series",
    image:
      "https://tibetantreasures.com/cdn/shop/files/Precious-Treasury_WO.png?v=1748403651&width=1800",
    href: "https://dharmaebooks.org",
    tone: "dark",
  },
  {
    title: "Hand-Painted Thangkas",
    cta: "View Thangkas",
    image:
      "https://tibetantreasures.com/cdn/shop/files/handpainted_WO.jpg?v=1748058101&width=1400",
    href: "/support-volunteer/charity-shop",
    tone: "light",
  },
];

export const footerLinks = {
  more: ["About Us", "Contact", "FAQs", "My Account"],
  policies: ["Refund Policy", "Privacy Policy", "Shipping Policy"],
};
