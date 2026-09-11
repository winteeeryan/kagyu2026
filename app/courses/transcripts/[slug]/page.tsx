import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLinkBehavior } from "@/utils/linkBehavior";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import styles from "@/app/subpage.module.css";
import transcripts from "@/data/courseTranscripts.json";
import detailStyles from "./page.module.css";

type Transcript = (typeof transcripts)[number];

function renderTranscriptParagraph(paragraph: string, key: string) {
  const httpsIndex = paragraph.indexOf("https://");
  const httpIndex = paragraph.indexOf("http://");
  const linkStart = httpsIndex >= 0 ? httpsIndex : httpIndex;
  const className = paragraph.includes("\n") ? detailStyles.verse : undefined;

  if (linkStart < 0) {
    return <p className={className} key={key}>{paragraph}</p>;
  }

  const prefix = paragraph.slice(0, linkStart);
  const url = paragraph.slice(linkStart).trim();

  return (
    <p className={className} key={key}>
      {prefix}
      <a href={url} {...getLinkBehavior(url)}>
        {url}
      </a>
    </p>
  );
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getTranscript(slug: string): Transcript | undefined {
  return transcripts.find((transcript) => transcript.slug === slug);
}

export function generateStaticParams() {
  return transcripts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const transcript = getTranscript(slug);

  return transcript
    ? {
        title: `${transcript.title}・文字版 | Kagyu`,
        description: `${transcript.title}逐字稿。`,
      }
    : { title: "法王開示課程文字版 | Kagyu" };
}

export default async function CourseTranscriptPage({ params }: PageProps) {
  const { slug } = await params;
  const transcript = getTranscript(slug);

  if (!transcript) {
    notFound();
  }

  return (
    <main className={styles.main + " " + detailStyles.page}>
      <article className="karmapaArticleStart">
        <div className={`${styles.articleInner} ${detailStyles.articleInner}`}>
          <header className={detailStyles.header}>
            <p className={detailStyles.eyebrow}>法王開示課程・文字版</p>
            <WatermarkHeading as="h2">{transcript.title}</WatermarkHeading>
          </header>

          <div className={`${styles.prose} ${detailStyles.transcriptProse}`}>
            {transcript.paragraphs.map((paragraph, index) =>
              renderTranscriptParagraph(paragraph, transcript.slug + "-" + index),
            )}
          </div>

          <EndMarker />
          <nav aria-label="文字版頁面導覽" className={detailStyles.backNav}>
            <Link href="/courses">返回法王開示課程</Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
