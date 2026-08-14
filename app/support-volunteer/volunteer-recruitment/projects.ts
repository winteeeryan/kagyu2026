export type VolunteerProject = {
  body?: string[];
  centeredBodyIndexes?: number[];
  date: string;
  galleryImages?: string[];
  excerpt: string;
  galleryPlaceholders?: number;
  href: string;
  image: string;
  layoutVariant?: "mediaStory";
  meta: string;
  slug: string;
  title: string;
  video?: {
    label: string;
    youtubeId?: string;
  };
};

export const volunteerProjects: VolunteerProject[] = [
  {
    body: [
      "2021年11月18日，慈悲好蔬分享跑車開跑了。健康美味的平安餐都是由中心義工主動發心，親自烹調。所謂「無緣大慈，同體大悲。」願平安餐點能如暖流般，漫延在這嚴峻的時節。",
      "尊勝噶瑪巴教言，\n慈悲善行利群生，\n噶瑪噶舉基金會，\n好蔬分享平安餐。",
    ],
    date: "2021.11.18",
    excerpt:
      "2021年11月18日，慈悲好蔬分享跑車開跑了。健康美味的平安餐都是由中心義工主動發心，親自烹調。",
    galleryImages: [
      "/officialalbum/20211118高雄供餐花絮分享/20211118010.jpg",
      "/officialalbum/20211118高雄供餐花絮分享/20211118007.jpg",
      "/officialalbum/20211118高雄供餐花絮分享/20211118004.jpg",
      "/officialalbum/20211118高雄供餐花絮分享/20211118012.jpg",
    ],
    href: "/support-volunteer/volunteer-recruitment/peace-meal-distribution",
    image: "/support-volunteer/volunteer-recruitment/volunteerevent001.png",
    layoutVariant: "mediaStory",
    meta: "2021.11.18",
    slug: "peace-meal-distribution",
    title: "平安餐發送",
    video: {
      label: "平安餐發送",
      youtubeId: "-NCrzMxGZXY",
    },
  },
  {
    body: [
      "台灣噶舉佛學院（高雄中心）於二〇二一年具香月四月二十五日（星期日）舉辦「懸掛風馬旗祈福消災」活動，透過法會煙供加持修法，代理懸掛風馬旗，祈願善行功德增長、罪障清淨。",
      "供養項目：\n代理供福田煙供粉一包：350 元\n金色字風馬旗一條（二十面）：680 元\n材質：綢緞、金箔粉\n顏色：五彩色金剛繩",
      "風馬旗象徵息、增、懷、誅四種事業，亦可於風馬旗上填寫個人祈願。祈願內容可包含渡化歷代祖先與亡者、祈願身體健康、事業順利、障礙消除、正緣婚姻、財運增長、運途順遂、懺悔罪障、冤親債主解冤釋結，以及增長智慧、金榜題名與善緣圓滿。",
      "《山淨煙供》本軌出自蓮師授記百位伏藏師中之拉尊南開吉美伏藏師，取伏藏地為錫金。本軌之功德，據伏藏原本卷末載言：「於贖命、清淨信財有虧、消除障礙諸如金剛鑽般無堅不摧。」",
      "可藉此煙供行外內密三種清淨，外層為焚諸供物生煙供養佈施四種賓客，以淨除魔難冤孽，內層則以此淨治五毒煩惱，密層則藉此淨治我執。",
      "煙供分為「息、增、懷、誅」四法，必須迎請具德高僧，依照儀軌與壇城如法修持。一般信眾可以虔誠心供養五穀、藥材、花、油、布、香及各種食物，乃至七珍八寶等供品；經由上師佛法加持，將之轉化為殊勝供養，以火燃燒，供養十方諸佛菩薩，下施六道眾生，令法界一切歡喜滿足，十方安樂吉祥。",
      "「息、增、懷、誅」藉由煙供儀式，分別成辦不同事業：「息」為除障消業；「增」為增長福德、智慧、財富與長壽；「懷」為懷柔冤親敵害與煩惱；「誅」為誅滅貪、瞋、癡、無明與外在障礙，並以此功德迴向法界。",
      "煙供聚資法是一種累積資糧、消除違緣障礙的殊勝法門。不僅能幫助行者積聚往生淨土資糧、成就出世果位，也能助益現世生活所需與事業順緣。若有受用不足之情形，常行煙供並勤修增益諸法，則能相輔相成，更見成效。",
      "對於平素有修持者，聞香能轉煩惱為般若性智；而無修持者，也可藉由聞香消障止惡。尤其六道中，有諸多無形眾生尚會覺知病痛和饑餓，全靠佛教寺廟每天午供、藥食等佈施，才能稍解痛苦。身為佛弟子，應修習煙供，普令一切六道眾生聞香得食、向善，分擔如來家業。",
    ],
    centeredBodyIndexes: [1],
    date: "2021.04.25",
    excerpt: "法會煙供加持修法，代理懸掛風馬旗，祈願善行功德增長、罪障清淨。",
    href: "/support-volunteer/volunteer-recruitment/wind-horse-prayer-flags",
    image: "/support-volunteer/volunteer-recruitment/volunteerevent002.png",
    meta: "2021.04.25",
    slug: "wind-horse-prayer-flags",
    title: "懸掛風馬旗祈福消災",
  },
];
