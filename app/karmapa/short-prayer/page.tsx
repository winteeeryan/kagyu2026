import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "歷代法王噶瑪巴簡要祈請文 | Kagyu",
  description: "歷代法王噶瑪巴簡要祈請文。",
};

const prayerSections = [
  {
    lines: ["未來第六佛名號獅吼 無量化身遍護一切界", "實修傳承唯一大法王 杜松虔巴足下誠祈請"],
    title: "第一世噶瑪巴",
  },
  {
    lines: ["自證本尊法界盡歸服 調伏傲慢蒙古外道王", "水火諸毒鬼神皆能摧 噶瑪巴希足下誠祈請"],
    title: "第二世噶瑪巴",
  },
  {
    lines: ["著作等身廣釋顯密論 為諸眾生開示正法要", "具大成就令法得弘傳 讓炯多傑足下誠祈請"],
    title: "第三世噶瑪巴",
  },
  {
    lines: ["調馴諸趣以種種語言 了知離邊對治諸邪見", "究極實相聖諦本性證 若佩多傑足下誠祈請"],
    title: "第四世噶瑪巴",
  },
  {
    lines: ["見者起信具足佛相好 三界友情上師如來尊", "善緣所求殊勝成就得 德新謝巴足下誠祈請"],
    title: "第五世噶瑪巴",
  },
  {
    lines: ["親證本尊空行口訣獲 禁行神變各種莊嚴具", "威德降伏外道人天師 通瓦敦殿足下誠祈請"],
    title: "第六世噶瑪巴",
  },
  {
    lines: ["調伏欺誑邪惡及黨羽 廣闊無上三寶佛塔建", "獲得成就弟子遍法界 確札嘉措足下誠祈請"],
    title: "第七世噶瑪巴",
  },
  {
    lines: ["所知如法辨才無障礙 解說經典精義離怖畏", "威儀適度從無懈怠生 米覺多傑足下誠祈請"],
    title: "第八世噶瑪巴",
  },
  {
    lines: ["輾轉無量悲力大自在 不變金剛身語意顯現", "引導人間來去大法王 旺秋多傑足下誠祈請"],
    title: "第九世噶瑪巴",
  },
  {
    lines: ["饒益上中下之三士道 殊勝化身指點諸教法", "見聞正量利生宏法作 確映多傑足下誠祈請"],
    title: "第十世噶瑪巴",
  },
  {
    lines: ["隨順我等徒眾示神變 依劫轉世大悲色化身", "憶禱剎那賜予大加持 耶謝多傑足下誠祈請"],
    title: "第十一世噶瑪巴",
  },
  {
    lines: ["大樂法性形相無別身 深明無二了悟大圓智", "無明慧炬唯一眾生眷 蔣秋多傑足下誠祈請"],
    title: "第十二世噶瑪巴",
  },
  {
    lines: ["漏垢之形似如天魔軍 如是黑暗金剛妙智破", "慧日威光摧毀盡無餘 堆督多傑足下誠祈請"],
    title: "第十三世噶瑪巴",
  },
  {
    lines: ["善巧方便妙智難思議 不壞金剛如是等持定", "同體大悲法王救世主 特秋多傑足下誠祈請"],
    title: "第十四世噶瑪巴",
  },
  {
    lines: ["無邊諸王僧伽解脫之 事業功德無遺唯要法", "雪國依怙法王噶瑪巴 卡洽多傑足下誠祈請"],
    title: "第十五世噶瑪巴",
  },
  {
    lines: ["實證諸法本性無繆誤 依觀照見大圓鏡妙智", "眾生憶念賜喜慶吉祥 日佩多傑足下誠祈請"],
    title: "第十六世噶瑪巴",
  },
  {
    lines: ["清涼境域正法之傳規 再次重披弘揚之鎧甲", "為成如此心願而降生 鄔金欽列多傑誠祈請"],
    title: "第十七世噶瑪巴",
  },
  {
    lines: ["無上佛法一切無垢淨 無邊功德圓證成就法", "解說成辦清淨遍弘傳 噶瑪巴尊聖意祈圓證"],
    title: "歷代噶瑪巴",
  },
  {
    lines: ["今生來世代代一切之 三世諸佛一切事業者", "噶瑪巴尊恆常而攝受 菩提道愉悅行願修習"],
  },
  {
    lines: ["一切增長護持無上士 黑帽寶冠唯一持有者", "本尊心要具德極樂界 願勝樂金剛慈悲攝受"],
  },
  {
    lines: ["如是增長善業無錯亂 觀想諸佛忿怒尊壇城", "般若蓮花甘露水喝飲 如來果位自身願得證"],
  },
];

const karmapaLinks: Record<string, string> = {
  一: "/karmapa/lineage/karmapa-1",
  二: "/karmapa/lineage/karmapa-2",
  三: "/karmapa/lineage/karmapa-3",
  四: "/karmapa/lineage/karmapa-4",
  五: "/karmapa/lineage/karmapa-5",
  六: "/karmapa/lineage/karmapa-6",
  七: "/karmapa/lineage/karmapa-7",
  八: "/karmapa/lineage/karmapa-8",
  九: "/karmapa/lineage/karmapa-9",
  十: "/karmapa/lineage/karmapa-10",
  十一: "/karmapa/lineage/karmapa-11",
  十二: "/karmapa/lineage/karmapa-12",
  十三: "/karmapa/lineage/karmapa-13",
  十四: "/karmapa/lineage/karmapa-14",
  十五: "/karmapa/lineage/karmapa-15",
  十六: "/karmapa/lineage/karmapa-16",
  十七: "/karmapa/lineage/karmapa-17",
};

const karmapaPattern = /第(十七|十六|十五|十四|十三|十二|十一|十|九|八|七|六|五|四|三|二|一)世噶瑪巴/g;

function renderKarmapaLinks(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  text.replace(karmapaPattern, (match, numeral: string, offset: number) => {
    if (offset > lastIndex) {
      parts.push(text.slice(lastIndex, offset));
    }

    parts.push(
      <Link href={karmapaLinks[numeral]} key={`${match}-${offset}`}>
        {match}
      </Link>,
    );

    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function KarmapaShortPrayerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="歷代法王噶瑪巴簡要祈請文圖像">
        <img
          alt="歷代法王噶瑪巴簡要祈請文圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero004.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">歷代法王噶瑪巴簡要祈請文</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            {prayerSections.map((section) => (
              <section className={styles.stanza} key={[section.title, ...section.lines].join("")}>
                {section.title ? <WatermarkHeading as="h2">{renderKarmapaLinks(section.title)}</WatermarkHeading> : null}
                {section.lines.map((line) => (
                  <p key={line}>{renderKarmapaLinks(line)}</p>
                ))}
              </section>
            ))}

            <p className={styles.note}>
              {renderKarmapaLinks(
                "此祈求歷代光榮噶瑪巴尊聖之祈請文，係依第八世噶瑪巴米覺多傑所著法本而寫。餘則分別由其後各位噶瑪巴住世之時而增添於後。",
              )}
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
