import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "嘉華噶瑪巴歷史 | Kagyu",
  description: "嘉華噶瑪巴歷史與佛行事業介紹。",
};

const prophecySections = [
  {
    title: "《三摩地王經》（Samadhirāja Sūtra）之預言",
    paragraphs: [
      "佛陀言：「我圓寂二千年後，佛法將在紅臉人的地方流傳。彼地之人皆為觀音菩薩弟子，欣哈那達菩薩（Simhanada）名『噶瑪巴』者將誕生。具足禪定之力，能降伏當地眾生；並以見、聞、憶、觸之方式，使眾生安住於光明之境。」",
      "此段經文指出噶瑪巴為觀音化身系譜之一，將於佛法興盛之地誕生，並以禪定與慈悲導引眾生。",
    ],
  },
  {
    title: "《楞伽經》（Laṅkāvatāra Sūtra）之預言",
    paragraphs: [
      "經中記載：「著僧伽梨，頂戴黑冠者，將不間斷地為眾生弘法，直至本賢劫第一千佛示現。」",
      "此處「頂戴黑冠」明顯對應噶瑪巴為「黑帽系」領袖的象徵性記載，並指出其化身將持續示現、無間度化眾生。",
    ],
  },
  {
    title: "《文殊菩薩根本續》（Mūlamanjuśrī Tantra）之預言",
    paragraphs: [
      "經中言：「名字中以『噶』為前、『瑪』為後者，當於世出，令佛法大放光彩。」",
      "此處清楚點出「噶瑪巴」之名，即以「噶」字開頭、「瑪」字居後。預示其化身誕生後將令佛法興盛、光明遍照。",
    ],
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

export default function KarmapaHistoryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection} aria-label="嘉華噶瑪巴歷史圖像">
        <img
          alt="嘉華噶瑪巴歷史圖像"
          className={styles.headerImage}
          src="/karmapa/karmapahero001.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">嘉華噶瑪巴歷史</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <p>
              噶瑪巴的含義是「行佛行事業者」，或「佛行事業的化身」。噶瑪巴以化身方式轉世了十七次，每一位噶瑪巴都扮演西藏佛教的保存和傳播者。佛陀和蓮花生大士都曾預言噶瑪巴的出生，幾個世紀以來，噶瑪巴不僅是延續金剛乘的中心人物，也是延續噶瑪噶舉的關鍵人物。在保存佛法傳承教法上，噶瑪巴更扮演了最重要的角色。
            </p>

            <WatermarkHeading as="h2">歷史背景</WatermarkHeading>

            <h4>佛陀在經續中的預言——噶瑪巴的降世</h4>
            <p>
              在經藏與續藏中均有記載：佛陀曾預言多位菩薩將於世間降生，而噶瑪巴（Karmapa）即是其中之一。仁千巴桑（Rinchen Palzang）在《明鏡》——楚布寺指南中，曾彙集與噶瑪巴相關的預言內容。
            </p>
            <p>以下摘錄數部經續中對噶瑪巴降世的明文記載：</p>

            {prophecySections.map((section) => (
              <section className={styles.subsection} key={section.title}>
                <h4>{section.title}</h4>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <h4>蓮師伏藏中的預言</h4>
            <p>
              此外，許多與蓮花生大士相關的伏藏（藏密預言法典）中也多次提及噶瑪巴的降世與其利益眾生的願行。
            </p>
            <p>
              這些伏藏文獻進一步印證噶瑪巴作為大悲與智慧的化現，將以連續轉世的方式護持佛法、度化無量有情。
            </p>

            <WatermarkHeading as="h2">噶瑪巴佛</WatermarkHeading>

            <p>
              從勝義諦來看，噶瑪巴早已圓滿證悟成佛，名為賢遍南若佛（Shenphen Namrol）。在本賢劫中，他將示現為未來的第六佛——竹巴森給（Trukpa Senge），其本質與釋迦牟尼佛無二無別。這一觀點顯示，噶瑪巴本具圓滿覺悟，以不同方式示現於世間，攝受眾生並利益有情。
            </p>
            <p>
              從世俗諦來看，噶瑪巴是十地菩薩，同時也是觀音菩薩的化身。數百年來，噶瑪巴以無數形相出現在人間，曾化現為婆羅門沙哈拉大師、示現為印度蓮花生大士，以及多位西藏本地瑜伽士與修行者。他以種種身形弘揚佛法，使無量眾生得以接觸善法並獲得利益。
            </p>
            <p>
              雖然歷史上有許多偉大修行者以化身方式利益眾生，但以連續轉世（化身體系）的方式無間地降生於世，在西藏佛教史中僅有噶瑪巴一位。他是藏傳佛教歷史上第一位以「轉世認證制度」而確立的喇嘛，自十一世紀以來，噶瑪巴的轉世脈系未曾間斷，延續至今日。這一現象本身即象徵著慈悲願力與法脈延續的堅固，亦顯示噶瑪巴在佛教歷史中的獨特地位與重要性。
            </p>

            <WatermarkHeading as="h2">佛行事業</WatermarkHeading>

            <p>
              噶瑪巴不僅是噶舉傳承的核心人物，在整個西藏金剛乘各大教派中亦具有深遠的影響力。歷代噶瑪巴在弘揚佛法、保存教典與延續傳承方面皆扮演舉足輕重的角色，功績卓越。
            </p>
            <p>
              {renderKarmapaLinks(
                "第三世噶瑪巴讓炯多傑保存並發展了寧瑪派的重要教授——「心髓教法」，使其得以在藏地延續不斷。第四世噶瑪巴若佩多傑（Rolpe Dorje）則確認宗喀巴大師為具德行者，並為其授戒，對後來格魯派的興起形成深刻影響。第七世至第九世噶瑪巴在經藏、續藏的保存與編纂，以及噶舉派大手印傳統的弘揚上皆作出無比重要的貢獻。",
              )}
            </p>
            <p>
              {renderKarmapaLinks(
                "第十四世噶瑪巴於香巴傳承瀕臨失傳之際，將其重新挽救並使之得以延續。他以超越教派界線的宏觀視野推動「利美運動」（非宗派運動），不分宗派弘揚佛法，並將此精神傳授給其心子蔣貢康楚大師。第十五世噶瑪巴卡恰多傑亦在寧瑪派伏藏傳承的保存、整理與弘揚方面扮演關鍵角色。第十六世噶瑪巴讓炯日佩多傑更被視為二十世紀最偉大的西藏佛教大師之一。他離開西藏後，在境外保存與延續各傳承方面投入巨大心力，成為現代藏傳佛教能夠持續興盛的重要支柱之一。",
              )}
            </p>
            <p>
              第十六世大寶法王對經典保存尤為重視，他重新校印德格版《甘珠爾》與《丹珠爾》——《甘珠爾》共一百零八冊、《丹珠爾》共二百一十四冊——並將全套《甘珠爾》免費贈送至印度、尼泊爾、不丹、西藏及美國等地的寺院，創下史無前例的先例；《丹珠爾》亦以成本價贈予各道場。除此之外，法王亦致力保存、整理與出版歷代噶瑪巴及重要上師們的著作，並以講經、說法、灌頂等方式廣弘佛法。
            </p>
            <p>
              第十七世大寶法王噶瑪巴烏金欽列多傑（Ogyen Trinley Dorje，1985－）是 1959 年後藏傳佛教史上的關鍵上師，也是史上第一位由中國政府正式承認的轉世活佛。他在 1990 年代致力於佛教的重建與弘揚，尤其修復了遭文革嚴重破壞、幾乎全毀的楚布寺，是近代復興藏傳佛教的重要力量。1999 年底，法王決議離開楚布寺，前往印度，目前安住於達蘭薩拉上密院（Gyuto）。在此處，他接受傳承、深入研習並廣行弘法，每年吸引成千上萬來自藏區、印度、尼泊爾、不丹及世界各地的僧俗信眾前來朝聖，接受法王的教導與攝受。
            </p>
            <p>
              噶瑪巴最具象徵性的標誌之一，便是他的黑寶冠（Black Crown）。黑寶冠象徵大寶法王的法脈不斷住世、活動本尊化現，是噶瑪巴法王不可取代、永續傳承的殊勝象徵。
            </p>
            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
