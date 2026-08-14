"use client";

import { useState } from "react";
import type { VideoItem } from "@/app/visual-media/video-channel/VideoChannelTabs";
import styles from "@/app/visual-media/video-channel/page.module.css";

type CourseCategory = {
  initialVisibleCount?: number;
  items: VideoItem[];
  label: string;
};

const INITIAL_COURSE_CARD_COUNT = 15;
const COURSE_CARD_INCREMENT = 15;

const karmapaCourseSpringItems: VideoItem[] = [
  {
    date: "2023.05.11",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十一天第一堂課",
    youtubeId: "kbDp7tQPJPI",
  },
  {
    date: "2023.05.02",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十天第一堂課",
    youtubeId: "vUY8gd-nj-8",
  },
  {
    date: "2023.05.02",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十天第二堂課",
    youtubeId: "h3pPH_S9lIY",
  },
  {
    date: "2023.04.28",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第九堂課",
    youtubeId: "C1FVeyFCaRk",
  },
  {
    date: "2023.04.27",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第八天第一堂課",
    youtubeId: "pKu5kq3urQg",
  },
  {
    date: "2023.04.27",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第八天第二堂課",
    youtubeId: "LLnRIxV-eho",
  },
  {
    date: "2023.04.26",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第七天",
    youtubeId: "1aaosO0ANfw",
  },
  {
    date: "2023.04.21",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第六天",
    youtubeId: "2pxYUtclYuM",
  },
  {
    date: "2023.04.08",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第五天",
    youtubeId: "wU_6IXVh7N8",
  },
  {
    date: "2023.04.02",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第四天",
    youtubeId: "nt_ULmGxyHo",
  },
  {
    date: "2023.03.24",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第三天第一堂課",
    youtubeId: "6emb7Rl0Zko",
  },
  {
    date: "2023.03.24",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第三天第二堂課",
    youtubeId: "yMBinCyRGjI",
  },
  {
    date: "2023.03.22",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二天第一堂課",
    youtubeId: "etdD8t9DnnU",
  },
  {
    date: "2023.03.22",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二天第二堂課",
    youtubeId: "aZV0waCIg_g",
  },
  {
    date: "2023.03.20",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第一天第一堂課",
    youtubeId: "70Xsm3ltcXM",
  },
  {
    date: "2023.03.20",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第一天第二堂課",
    youtubeId: "J-76YssQNr8",
  },
];

const karmapaCourseSpring2022Items: VideoItem[] = [
  {
    date: "2022.04.19",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十三天第一堂課",
    youtubeId: "4SislccqoSI",
  },
  {
    date: "2022.04.19",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十三天第二堂課",
    youtubeId: "nRdsnKJcx1c",
  },
  {
    date: "2022.04.15",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十二天第一堂課",
    youtubeId: "voLZgHHAtU4",
  },
  {
    date: "2022.04.15",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十二天第二堂課",
    youtubeId: "llNCFMjB7ko",
  },
  {
    date: "2022.04.11",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十一天第一堂課",
    youtubeId: "FtaCekIozB8",
  },
  {
    date: "2022.04.11",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十一天第二堂課",
    youtubeId: "EplU9NCOodk",
  },
  {
    date: "2022.04.09",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十天第一堂課",
    youtubeId: "1eUTjI6JMLc",
  },
  {
    date: "2022.04.09",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十天第二堂課",
    youtubeId: "7-l1Adj2AVk",
  },
  {
    date: "2022.04.08",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第九天第一堂課",
    youtubeId: "lO7ETIe_8OY",
  },
  {
    date: "2022.04.08",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第九天第二堂課",
    youtubeId: "mn-6wrtLNsM",
  },
  {
    date: "2022.04.04",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第八天第一堂課",
    youtubeId: "3p3O0_aogj4",
  },
  {
    date: "2022.04.04",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第八天第二堂課",
    youtubeId: "ZswBF-ltJLs",
  },
  {
    date: "2022.04.02",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第七天第一堂課",
    youtubeId: "eTep52THxWM",
  },
  {
    date: "2022.04.02",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第七天第二堂課",
    youtubeId: "FpDhdkUux1c",
  },
  {
    date: "2022.04.01",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第六天第一堂課",
    youtubeId: "z4B6AKQ-qV4",
  },
  {
    date: "2022.04.01",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第六天第二堂課",
    youtubeId: "M6D8asz4bpY",
  },
  {
    date: "2022.03.28",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第五天第一堂課",
    youtubeId: "-JmBF8UPO4k",
  },
  {
    date: "2022.03.28",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第五天第二堂課",
    youtubeId: "cEfMqArDCYw",
  },
  {
    date: "2022.03.25",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第四天第一堂課",
    youtubeId: "atZlx630pv4",
  },
  {
    date: "2022.03.25",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第四天第二堂課",
    youtubeId: "9I7aqKK0kw0",
  },
  {
    date: "2022.03.22",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第三天第一堂課",
    youtubeId: "sSeOTb6Cssw",
  },
  {
    date: "2022.03.22",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第三天第二堂課",
    youtubeId: "-j3Ug3YHixM",
  },
  {
    date: "2022.03.21",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二天第一堂課",
    youtubeId: "XAHFCzFkCTk",
  },
  {
    date: "2022.03.21",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二天第二堂課",
    youtubeId: "LukLM1lOM0Y",
  },
  {
    date: "2022.03.19",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第一天第一堂課",
    youtubeId: "G5akCd0_kbs",
  },
  {
    date: "2022.03.19",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第一天第二堂課",
    youtubeId: "r3laaCY90ik",
  },
];

const karmapaCourseSpring2021Items: VideoItem[] = [
  {
    date: "2021.03.17",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二十天課程",
    youtubeId: "D-mycG1G3LQ",
  },
  {
    date: "2021.03.16",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十九天第一堂課",
    youtubeId: "Kn85Xl7eV7w",
  },
  {
    date: "2021.03.16",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十九天第二堂課",
    youtubeId: "NxWOjOjx2AQ",
  },
  {
    date: "2021.03.14",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十八天第一堂課",
    youtubeId: "nCbOiJvwDGY",
  },
  {
    date: "2021.03.14",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十八天第二堂課",
    youtubeId: "V8-3fVxk3ls",
  },
  {
    date: "2021.03.13",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十七天第一堂課",
    youtubeId: "GE6uSvzHLgk",
  },
  {
    date: "2021.03.13",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十七天第二堂課",
    youtubeId: "Uy7Gx0FB1o4",
  },
  {
    date: "2021.03.12",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十六天第一堂課",
    youtubeId: "BiYDVN7tUPs",
  },
  {
    date: "2021.03.12",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十六天第二堂課",
    youtubeId: "Y9CVjqAiuB8",
  },
  {
    date: "2021.03.10",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十五天第一堂課",
    youtubeId: "oKRijoLifUc",
  },
  {
    date: "2021.03.10",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十五天第二堂課",
    youtubeId: "T3oi_7oWPkw",
  },
  {
    date: "2021.03.07",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十四天第一堂課",
    youtubeId: "vXtU_Kq89p0",
  },
  {
    date: "2021.03.07",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十四天第二堂課",
    youtubeId: "aXqNSwyFNC0",
  },
  {
    date: "2021.03.05",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十三天第一堂課",
    youtubeId: "dv9rTJPYGII",
  },
  {
    date: "2021.03.05",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十三天第二堂課",
    youtubeId: "Hrr4PrOC8gk",
  },
  {
    date: "2021.03.04",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十二天第一堂課",
    youtubeId: "oym_b4-tRzA",
  },
  {
    date: "2021.03.04",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十二天第二堂課",
    youtubeId: "-oWS-I-9wOs",
  },
  {
    date: "2021.02.28",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十一天第一堂課",
    youtubeId: "lbP0BYfA_dk",
  },
  {
    date: "2021.02.28",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十一天第二堂課",
    youtubeId: "Zh1IPeUyU18",
  },
  {
    date: "2021.02.27",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十天第一堂課",
    youtubeId: "r6AQK9v3C8s",
  },
  {
    date: "2021.02.27",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第十天第二堂課",
    youtubeId: "YZj0Pwa4ZAg",
  },
  {
    date: "2021.02.26",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第九天第一堂課",
    youtubeId: "qvnPWOS9Bl4",
  },
  {
    date: "2021.02.26",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第九天第二堂課",
    youtubeId: "P3dsFDM8lhs",
  },
  {
    date: "2021.02.25",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第八天第一堂課",
    youtubeId: "La9nh4fSJHs",
  },
  {
    date: "2021.02.25",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第八天第二堂課",
    youtubeId: "mmAQ-Bt7UNg",
  },
  {
    date: "2021.02.24",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第七天第一堂課",
    youtubeId: "rxZ1CUvaF8s",
  },
  {
    date: "2021.02.24",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第七天第二堂課",
    youtubeId: "SeZkoJEPpGQ",
  },
  {
    date: "2021.02.21",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第六天第一堂課",
    youtubeId: "Y6tkI5Kg--g",
  },
  {
    date: "2021.02.21",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第六天第二堂課",
    youtubeId: "DDiv4Tu_kQk",
  },
  {
    date: "2021.02.20",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第五天第一堂課",
    youtubeId: "nEA8Kl1TEdo",
  },
  {
    date: "2021.02.20",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第五天第二堂課",
    youtubeId: "v7FywYL_5A0",
  },
  {
    date: "2021.02.19",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第四天第一堂課",
    youtubeId: "R-EMyVIoe4E",
  },
  {
    date: "2021.02.19",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第四天第二堂課",
    youtubeId: "N6Be-OFvks0",
  },
  {
    date: "2021.02.17",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第三天第一堂課",
    youtubeId: "dvudcUpAZ0w",
  },
  {
    date: "2021.02.17",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第三天第二堂課",
    youtubeId: "Ou8IZoX5uLQ",
  },
  {
    date: "2021.02.16",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二天第一堂課",
    youtubeId: "VgkuF3VBKPE",
  },
  {
    date: "2021.02.16",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第二天第二堂課",
    youtubeId: "F7xaCJzEkjc",
  },
  {
    date: "2021.02.15",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第一天第一堂課",
    youtubeId: "54y5fobwj80",
  },
  {
    date: "2021.02.15",
    excerpt: "第十七世大寶法王講解米覺多傑的《妙行》自傳與《無比》自讚兩部傳記",
    title: "大寶法王讖摩春季課程・第一天第二堂課",
    youtubeId: "zL0LlkWDFsE",
  },
];

const karmapaCourseItems: VideoItem[] = [
  ...karmapaCourseSpringItems,
  ...karmapaCourseSpring2022Items,
  ...karmapaCourseSpring2021Items,
];

const covidChineseTeachingItem: VideoItem = {
  date: "2020.04.14",
  excerpt: "視頻內含中文字幕",
  title: "大寶法王噶瑪巴對於新冠肺炎疫情最新開示",
  youtubeId: "frHODv2Xorw",
};

const chineseTeachingItems: VideoItem[] = [
  {
    date: "2025.10.11",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王說中文／達賴喇嘛尊者90歲大壽祝壽／淨韻三千",
    youtubeId: "SeP1R77SYlc",
  },
  {
    date: "2023.07.01",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王說中文為達賴尊者88歲生日祝福",
    youtubeId: "OO0GAIsOLb0",
  },
  {
    date: "2023.01.21",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王中文發音新春兔年祝福",
    youtubeId: "waRvn9F0c_c",
  },
  {
    date: "2021.01.04",
    excerpt: "視頻內含中文字幕",
    title: "噶瑪巴宣佈2021年除障祈願網路共修時間",
    youtubeId: "LvZ-vLIOv3I",
  },
  {
    date: "2020.04.24",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎直播共修 第七天《圓滿開示》",
    youtubeId: "Wq9cQ-u2eWo",
  },
  {
    date: "2020.04.24",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎直播共修 第七天《總結祈願和迴向》",
    youtubeId: "MVCPk6KHbU0",
  },
  {
    date: "2020.04.23",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎直播開示 第六天",
    youtubeId: "DHNZl65LwcI",
  },
  {
    date: "2020.04.22",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎中文直播開示 第五天",
    youtubeId: "mFDbOKVGmew",
  },
  {
    date: "2020.04.21",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎中文直播開示 第四天",
    youtubeId: "e0oa2m410fQ",
  },
  {
    date: "2020.04.20",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎中文直播開示 第三天",
    youtubeId: "VqcMnwgM6mc",
  },
  {
    date: "2020.04.19",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎中文直播開示 第二天",
    youtubeId: "DLSweEV-tX8",
  },
  {
    date: "2020.04.18",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴新冠肺炎中文直播開示 第一天",
    youtubeId: "kTtaoUfUAtc",
  },
  covidChineseTeachingItem,
];

const buddhistTeachingItems: VideoItem[] = [
  {
    date: "2025.12.30",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王講解杜松虔巴大師《大眾開示》第四天",
    youtubeId: "gsCEHDOuCF0",
  },
  {
    date: "2025.12.29",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王講解杜松虔巴大師《大眾開示》第三天",
    youtubeId: "WcTNi5Tv9yw",
  },
  {
    date: "2025.12.28",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王講解杜松虔巴大師《大眾開示》第二天",
    youtubeId: "80Yj0cc3IFo",
  },
  {
    date: "2025.12.27",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王講解杜松虔巴大師《大眾開示》第一天",
    youtubeId: "hLK0qSr0-9E",
  },
  {
    date: "2025.12.23",
    excerpt: "第40屆噶舉大祈願法會",
    title: "第十七世大寶法王／大毗盧遮那成佛神變續介紹",
    youtubeId: "hvQyRrjUwuI",
  },
  {
    date: "2025.06.26",
    excerpt: "視頻內含中文字幕",
    title: "尊貴第十七世大寶法王噶瑪巴生日開示",
    youtubeId: "oOXnW2T2bjo",
  },
  {
    date: "2025.02.12",
    excerpt: "視頻內含中文字幕",
    title: "法王特別開示・第39屆噶舉祈願法會",
    youtubeId: "pxD9flXn9gY",
  },
  {
    date: "2024.02.19",
    excerpt: "視頻內含中文字幕",
    title: "第十七世大寶法王略說《事師法五十頌》的殊勝及重要性",
    youtubeId: "3mr4Zjmog28",
  },
  {
    date: "2024.02.16",
    excerpt: "視頻內含中文字幕",
    title: "第十七世大寶法王《事師法五十頌》圓滿開示",
    youtubeId: "o759kgClZ6o",
  },
  {
    date: "2022.07.03",
    excerpt: "視頻內含中文字幕",
    title: "法王噶瑪巴生日感言",
    youtubeId: "gg1rHWR0NU8",
  },
  {
    date: "2022.02.02",
    excerpt: "視頻內含中文字幕",
    title: "第十七世大寶法王噶瑪巴 大年初二的祝福",
    youtubeId: "EYbfA0tabfE",
  },
];

const lineageMasterItems: VideoItem[] = [
  {
    date: "2023.12.19",
    excerpt: "視頻內含中文字幕",
    title: "第一世大寶法王杜松虔巴生平簡介／第十七世大寶法王講授",
    youtubeId: "4WKzHDe-TjI",
  },
];

const ritualChantingItems: VideoItem[] = [
  {
    date: "2022.09.08",
    excerpt: "視頻內含中文字幕",
    title: "懷業祈禱文・第十七世大寶法王親頌・21遍（純聲版）",
    youtubeId: "WfQLvQchv_c",
  },
  {
    date: "2022.09.06",
    excerpt: "視頻內含中文字幕",
    title: "懷業祈禱文・第十七世大寶法王親頌・21遍（背景音樂海浪聲版）",
    youtubeId: "Xsq_AWcBuwI",
  },
  {
    date: "2022.04.24",
    excerpt: "藏語+漢語",
    title: "薩迦癒病・1小時版・第十七世大寶法王慈悲唱頌",
    youtubeId: "cWwc8HcCHfs",
  },
  {
    date: "2020.04.24",
    excerpt: "視頻內含中文字幕+片尾法王唱誦",
    title: "大寶法王噶瑪巴親頌陀羅尼集、薩迦癒病、安紊本母簡軌 第七天",
    youtubeId: "3QY8rGojSWg",
  },
  {
    date: "2020.04.23",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴親頌《阿彌陀佛極樂淨土祈願文》第六天",
    youtubeId: "Btt7PvE4quQ",
  },
  {
    date: "2020.04.22",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴親頌《蓮花生大士消除障道祈請文》、《願望任運自然成就祈請頌》第五天",
    youtubeId: "A-Au0a3VlwM",
  },
  {
    date: "2020.04.21",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴親頌《救度佛母二十一種禮讚文》第四天",
    youtubeId: "-SNiugabRKg",
  },
  {
    date: "2020.04.20",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴親頌《不動佛陀羅尼經》第三天",
    youtubeId: "pf6pWBN_kDo",
  },
  {
    date: "2020.04.19",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴親頌《普賢行願品》、《三蘊經》第二天",
    youtubeId: "TuTEGX7R2VM",
  },
  {
    date: "2020.04.18",
    excerpt: "視頻內含中文字幕",
    title: "大寶法王噶瑪巴親頌《心經回遮法》第一天",
    youtubeId: "dssSoNzBACs",
  },
  {
    date: "2020.03.24",
    excerpt: "視頻內含中文字幕",
    title: "佛燈的祝福（點燈祈願文）・莊嚴版・尊貴第十七世大寶法王噶瑪巴唱誦",
    youtubeId: "s2g4nIIGg3U",
  },
  {
    date: "2020.02.28",
    excerpt: "視頻內含中文字幕+頌缽",
    title: "尊貴第十七世大寶法王噶瑪巴親誦《心經》3遍、般若佛母心咒108遍",
    youtubeId: "iMcoIxAgoqQ",
  },
  {
    date: "2020.02.26",
    excerpt: "視頻內含中文字幕",
    title: "薩迦癒病・1小時版・尊貴第十七世大寶法王噶瑪巴親頌",
    youtubeId: "ilx4lpfZoVE",
  },
  {
    date: "2020.02.06",
    excerpt: "視頻內含中文字幕",
    title: "薩迦癒病・尊貴第十七世大寶法王噶瑪巴親頌",
    youtubeId: "xSeE4Hc6ASM",
  },
];

const kagyuMonlamItems: VideoItem[] = [
  {
    date: "2025.06.29",
    excerpt: "視頻內含中文字幕",
    title: "第17屆台灣噶舉祈願大法會／大寶法王圓滿日開示",
    youtubeId: "3hzhRqSL3oY",
  },
  {
    date: "2022.03.16",
    excerpt: "視頻內含中文字幕",
    title: "供奉上師儀軌／2022特殊噶舉祈願法會",
    youtubeId: "aUm4huHe0Og",
  },
  {
    date: "2022.03.07",
    excerpt: "視頻內含中文字幕",
    title: "第17世大寶法王／供奉上師儀軌圓滿開示／2022特殊噶舉祈願法會",
    youtubeId: "CM247_DRY5s",
  },
  {
    date: "2022.02.23",
    excerpt: "視頻內含中文字幕",
    title: "噶瑪巴希上師成就法／2022特殊噶舉祈願法會",
    youtubeId: "rdvQBsgujXU",
  },
  {
    date: "2022.02.17",
    excerpt: "視頻內含中文字幕",
    title: "了義大手印祈願文／第17世大寶法王親頌／2022特殊噶舉祈願法會",
    youtubeId: "6f8EXAT5P2A",
  },
];

const courseCategories: CourseCategory[] = [
  {
    initialVisibleCount: INITIAL_COURSE_CARD_COUNT,
    items: karmapaCourseItems,
    label: "法王課程",
  },
  {
    items: buddhistTeachingItems,
    label: "佛法開示",
  },
  {
    items: kagyuMonlamItems,
    label: "噶舉法會",
  },
  {
    items: ritualChantingItems,
    label: "儀軌與唱誦",
  },
  {
    items: lineageMasterItems,
    label: "傳承與祖師",
  },
  {
    items: chineseTeachingItems,
    label: "中文弘法",
  },
];

export function KarmapaTeachingCourseTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({
    法王課程: INITIAL_COURSE_CARD_COUNT,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabBar} role="tablist" aria-label="法王開示課程分類">
        {courseCategories.map((category, index) => {
          const isActive = index === activeIndex;
          const tabId = `karmapa-course-tab-${index}`;
          const panelId = `karmapa-course-panel-${index}`;

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
        {courseCategories.map((category, index) => {
          const isActive = index === activeIndex;
          const tabId = `karmapa-course-tab-${index}`;
          const panelId = `karmapa-course-panel-${index}`;
          const visibleCount =
            visibleCounts[category.label] ?? category.initialVisibleCount ?? category.items.length;
          const visibleItems = category.items.slice(0, visibleCount);
          const hasMoreItems = visibleCount < category.items.length;

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
                {visibleItems.map((item, itemIndex) => {
                  const isPlayable = Boolean(item.youtubeId);

                  return (
                    <article
                      className={styles.articleCard}
                      key={`${category.label}-${item.date}-${item.title}-${itemIndex}`}
                    >
                      <button
                        aria-label={
                          isPlayable
                            ? `播放${item.title}`
                            : item.title
                              ? `${item.title}影片待補`
                              : `${category.label} placeholder`
                        }
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
                      {item.date ? <span className={styles.date}>{item.date}</span> : null}
                      {item.title ? <span className={styles.articleTitle}>{item.title}</span> : null}
                      {item.excerpt ? <p className={styles.excerpt}>{item.excerpt}</p> : null}
                      <button
                        className={styles.readMore}
                        disabled={!isPlayable}
                        onClick={() => setActiveVideo(item)}
                        type="button"
                      >
                        開始觀看
                      </button>
                    </article>
                  );
                })}
              </div>
              {hasMoreItems ? (
                <button
                  className={styles.loadMoreButton}
                  onClick={() =>
                    setVisibleCounts((counts) => ({
                      ...counts,
                      [category.label]: Math.min(
                        visibleCount + COURSE_CARD_INCREMENT,
                        category.items.length,
                      ),
                    }))
                  }
                  type="button"
                >
                  載入更多
                </button>
              ) : null}
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
