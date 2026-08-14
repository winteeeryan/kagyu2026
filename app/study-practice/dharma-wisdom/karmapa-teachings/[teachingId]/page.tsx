import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { getTeachingBody } from "../teachingBodies";
import { getTeachingImageSrc } from "../teachingImages";
import { teachingTitles } from "../teachingTitles";
import detailStyles from "./page.module.css";

type PageProps = {
  params: Promise<{
    teachingId: string;
  }>;
};

type TeachingTitle = (typeof teachingTitles)[number];

type Teaching = {
  number: string;
  title: TeachingTitle;
};

const teachingsHref = "/study-practice/dharma-wisdom/karmapa-teachings";

function getTeachingHref(index: number) {
  return `${teachingsHref}/${String(index).padStart(3, "0")}`;
}

function getTeaching(teachingId: string): Teaching | undefined {
  if (!/^\d{3}$/.test(teachingId)) {
    return undefined;
  }

  const index = Number(teachingId) - 1;
  const title = teachingTitles[index];

  return title ? { number: teachingId, title } : undefined;
}

function isSectionHeading(paragraph: string) {
  const numberedItem = paragraph.match(/^[一二三四五六七八九十]、(.*)$/);
  const isShortNumberedItem =
    numberedItem !== null && Array.from(numberedItem[1]).length <= 10;

  return (
    paragraph.startsWith("■") ||
    isShortNumberedItem ||
    paragraph === "謙卑的胸懷，含攝一切功德" ||
    paragraph === "「修心」是積極地實作" ||
    paragraph === "放下此生貪著吧，這是一切修持的起點" ||
    paragraph === "體會有情都想「離苦得樂」，是大愛的源頭" ||
    paragraph === "釋迦牟尼佛開示的一切教法，都在告訴我們調伏自心的方法" ||
    paragraph === "觀察自心" ||
    paragraph === "你是「名符其實」的佛弟子嗎？" ||
    paragraph === "別上鉤！別被魚餌般的世間假象所誘惑" ||
    paragraph === "「邪見」只是在沈睡狀態，並不代表不存在" ||
    paragraph === "輪迴中，「佛、法、僧」如同我們的醫生、藥及醫護人員" ||
    paragraph === "【關於大寶法王噶瑪巴的預言與授記】" ||
    paragraph === "佛經對噶瑪巴的授記" ||
    paragraph === "釋迦牟尼佛對噶瑪巴的授記" ||
    paragraph === "Pemakarpo的法教'中預言" ||
    paragraph === "DoLang Kar Shekpa的顯經'" ||
    paragraph === "Jampal Tsagyu的密續'斷言" ||
    paragraph === "蓮花生大士岩藏預言曾說" ||
    paragraph === "發菩提心往生淨土" ||
    [
      "金剛寶冠【黑寶冠】的由來",
      "不變的法界",
      "三身",
      "壇城之主",
      "佛之二智",
      "佛之事業",
      "四種證悟事業",
      "四無量心",
      "因皈依：皈依已成之佛",
      "果皈依：皈依自己未來現証之佛",
      "僅對佛有信心仍不夠，還要相信自己能成佛",
      "頂禮",
      "供養",
      "發露懺悔",
      "隨喜功德",
      "請佛轉法輪",
      "祈求諸佛不入涅槃，長久住世",
      "功德迴向",
      "第四部份：因緣",
      "爾時",
      "甚深",
      "明了",
      "三摩地",
      "等入",
      "復於",
      "從小乘自己的經典與論點說明",
      "從歷史事實上分析",
      "一、法輪（梵名dharma-cakra）",
      "二、法螺（梵名dharma-sankha）",
      "三、法幢（幢，梵名dhvaja , ketu , pataka）",
      "四、寶瓶（梵名kalasa）",
      "五、蓮花",
      "六、雙魚（梵名matsya）",
      "七、盤結（梵名shrivasta）",
      "八、寶蓋（梵名chattra）",
    ].includes(paragraph)
  );
}

function isCenteredVerse(paragraph: string) {
  return (
    paragraph.startsWith("三界輪迴諸眾生，") ||
    paragraph === "請轉法輪可使我們得到正知正見，消除邪見。" ||
    paragraph === "諸佛不入涅槃，可消除我們無明的障礙，引導修行。"
  );
}

const numberedListItemPattern = /^([1-9]|[1-9]\d|[１-９]|[１-９][０-９])[.．、]\s*/;

function isNumberedListItem(paragraph: string) {
  return numberedListItemPattern.test(paragraph);
}

function getNumberedListItemText(paragraph: string) {
  return paragraph.replace(numberedListItemPattern, "");
}

function getNumberedListItemNumber(paragraph: string) {
  const match = paragraph.match(numberedListItemPattern);
  const numberText = match?.[1];

  return numberText ? Number(numberText.replace(/[０-９]/g, (digit) => String(digit.charCodeAt(0) - 0xff10))) : 1;
}

function getNumberedListLines(paragraph: string) {
  const lines = paragraph
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.length > 0 && lines.every(isNumberedListItem) ? lines : undefined;
}

function renderTeachingParagraph(paragraph: string) {
  if (paragraph === "") {
    return <div aria-hidden="true" className={detailStyles.spacer} />;
  }

  const lines = paragraph.split("\n");
  const hasBullets = lines.some((line) => line.startsWith("•"));

  if (!hasBullets) {
    const className = [
      paragraph.includes("\n") ? detailStyles.verse : undefined,
      isCenteredVerse(paragraph) ? detailStyles.centeredVerse : undefined,
    ]
      .filter(Boolean)
      .join(" ");

    return <p className={className || undefined}>{paragraph}</p>;
  }

  const groups: Array<{ type: "text" | "bullets"; lines: string[] }> = [];

  for (const line of lines) {
    const type = line.startsWith("•") ? "bullets" : "text";
    const group = groups.at(-1);

    if (group?.type === type) {
      group.lines.push(line);
    } else {
      groups.push({ type, lines: [line] });
    }
  }

  return (
    <div className={detailStyles.bulletSection}>
      {groups.map((group, index) =>
        group.type === "bullets" ? (
          <ul className={detailStyles.bulletList} key={`bullets-${index}`}>
            {group.lines.map((line, lineIndex) => (
              <li key={`bullet-${index}-${lineIndex}`}>{line.slice(1)}</li>
            ))}
          </ul>
        ) : (
          group.lines.map((line, lineIndex) =>
            line ? <p key={`text-${index}-${lineIndex}`}>{line}</p> : null,
          )
        ),
      )}
    </div>
  );
}

function renderTeachingBody(paragraphs: readonly string[]) {
  const blocks = [];

  for (let index = 0; index < paragraphs.length; index += 1) {
    const paragraph = paragraphs[index];
    const numberedLines = getNumberedListLines(paragraph);

    if (numberedLines) {
      const items = [];
      const listStart = getNumberedListItemNumber(numberedLines[0]);

      while (index < paragraphs.length) {
        const currentNumberedLines = getNumberedListLines(paragraphs[index]);

        if (!currentNumberedLines) {
          break;
        }

        items.push(...currentNumberedLines.map(getNumberedListItemText));
        index += 1;
      }

      index -= 1;

      blocks.push(
        <ol
          key={`numbered-list-${index}`}
          style={listStart > 1 ? { counterReset: `article-rule ${listStart - 1}` } : undefined}
        >
          {items.map((item, itemIndex) => (
            <li key={`numbered-item-${index}-${itemIndex}`}>{item}</li>
          ))}
        </ol>,
      );
    } else if (isSectionHeading(paragraph)) {
      blocks.push(<h4 key={`heading-${index}`}>{paragraph}</h4>);
    } else {
      blocks.push(
        <Fragment key={`paragraph-${index}`}>{renderTeachingParagraph(paragraph)}</Fragment>,
      );
    }
  }

  return blocks;
}

function TeachingArticleNav({ teachingNumber }: { teachingNumber: string }) {
  const currentNumber = Number(teachingNumber);
  const previousNumber = currentNumber > 1 ? currentNumber - 1 : undefined;
  const nextNumber = currentNumber < teachingTitles.length ? currentNumber + 1 : undefined;

  return (
    <nav aria-label="法王教言文章導覽" className={detailStyles.articleNav}>
      {previousNumber ? (
        <Link className={`${detailStyles.navLink} ${detailStyles.previous}`} href={getTeachingHref(previousNumber)}>
          <span className={detailStyles.navEyebrow}>← 上一則</span>
          <span className={detailStyles.navTitle}>第{String(previousNumber).padStart(3, "0")}則</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={detailStyles.navSpacer} />
      )}

      <Link className={`${detailStyles.navLink} ${detailStyles.overview}`} href={teachingsHref}>
        <span className={detailStyles.navTitle}>返回</span>
      </Link>

      {nextNumber ? (
        <Link className={`${detailStyles.navLink} ${detailStyles.next}`} href={getTeachingHref(nextNumber)}>
          <span className={detailStyles.navEyebrow}>下一則 →</span>
          <span className={detailStyles.navTitle}>第{String(nextNumber).padStart(3, "0")}則</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={detailStyles.navSpacer} />
      )}
    </nav>
  );
}

export function generateStaticParams() {
  return teachingTitles.map((_, index) => ({
    teachingId: String(index + 1).padStart(3, "0"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { teachingId } = await params;
  const teaching = getTeaching(teachingId);

  return teaching
    ? {
        title: `${teaching.title} | 法王教言 | Kagyu`,
        description: `法王教言第 ${teaching.number} 則：${teaching.title}。`,
      }
    : { title: "法王教言 | Kagyu" };
}

export default async function Page({ params }: PageProps) {
  const { teachingId } = await params;
  const teaching = getTeaching(teachingId);

  if (!teaching) {
    notFound();
  }

  const teachingBody = await getTeachingBody(teaching.number);

  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label={`${teaching.title}橫幅`}>
        <img
          alt={`${teaching.title}橫幅`}
          className={styles.bannerImage}
          src="/study-practice/dharmawisdomhero004.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{teaching.title}</DecoratedHeading>
          </div>

          <div className={`${styles.prose} ${detailStyles.teachingProse}`}>
            <figure className={detailStyles.teachingImage}>
              <img
                alt={teaching.title}
                className={styles.articleFigureImage}
                src={getTeachingImageSrc(teaching.number)}
              />
            </figure>

            {renderTeachingBody(teachingBody ?? [])}

            <EndMarker />
            <TeachingArticleNav teachingNumber={teaching.number} />
          </div>
        </div>
      </article>
    </main>
  );
}
