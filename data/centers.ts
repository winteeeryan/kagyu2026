export type CenterInfo = {
  alt: string;
  contact: string[];
  image: string;
  objectPosition?: string;
  title: string;
  transport?: string[];
};

export const centers: CenterInfo[] = [
  {
    alt: "台北中心",
    contact: [
      "地址 台北市中山區民生東路一段 39 號10樓",
      "電話 (02) 2581-4395",
      "傳真 (02) 2543-1818",
    ],
    image: "/about/center002.png",
    title: "台北中心",
    transport: [
      '捷運 淡水信義線 雙連站(2號出口) 步行約8分 或由(1號出口)轉乘公車至"華泰飯店"站',
      "捷運 中和新蘆線 中山國小站(2號出口)或行天宮站(1號出口) 步行約8~10分",
      '公車 638 至"聚盛里"站',
      '公車 208, 226, 246, 811, 紅33, 民生幹線, 至"華泰飯店"站',
    ],
  },
  {
    alt: "高雄中心",
    contact: [
      "地址 高雄市苓雅區光華一路226號10樓",
      "電話 (07) 223-7878",
      "傳真 (07) 227-1919",
    ],
    image: "/about/center003.png",
    objectPosition: "60% center",
    title: "高雄中心",
    transport: ["捷運橘線：信義國小站(4號出口)，步行5分到中心"],
  },
  {
    alt: "花蓮中心",
    contact: ["地址 花蓮縣吉安鄉文興街11號", "電話 (03) 854-1888"],
    image: "/about/center004.png",
    title: "花蓮中心",
  },
  {
    alt: "財團法人高雄市噶瑪噶舉基金會",
    contact: [
      "地址 高雄市苓雅區光華一路226號10樓",
      "電話 (07) 223-7878",
      "傳真 (07) 227-1919",
    ],
    image: "/about/center005.png",
    title: "財團法人高雄市噶瑪噶舉基金會",
  },
];

export const instituteCenters = [
  ...centers.slice(0, 3).map((center) => ({
    contact: [center.contact[0], center.contact.slice(1).join(" / ")],
    title: center.title,
  })),
  {
    contact: ["地址 嘉義市新生路283號8樓", "電話 0909-809908"],
    title: "噶瑪噶舉基金會［嘉義分處］",
  },
];
