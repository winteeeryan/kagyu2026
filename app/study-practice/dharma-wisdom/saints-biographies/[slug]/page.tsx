import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { saintBiographies } from "../saintData";
import detailStyles from "./page.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSaint(slug: string) {
  return saintBiographies.find((saint) => saint.slug === slug);
}

const saintsHref = "/study-practice/dharma-wisdom/saints-biographies";

function getSaintHref(index: number) {
  const saint = saintBiographies[index];

  return saint ? `${saintsHref}/${saint.slug}` : saintsHref;
}

function SaintArticleNav({ slug }: { slug: string }) {
  const currentIndex = saintBiographies.findIndex((saint) => saint.slug === slug);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : undefined;
  const nextIndex = currentIndex >= 0 && currentIndex < saintBiographies.length - 1 ? currentIndex + 1 : undefined;

  return (
    <nav aria-label="聖者行傳文章導覽" className={detailStyles.articleNav}>
      {previousIndex !== undefined ? (
        <Link className={`${detailStyles.navLink} ${detailStyles.previous}`} href={getSaintHref(previousIndex)}>
          <span className={detailStyles.navEyebrow}>← 上一則</span>
          <span className={detailStyles.navTitle}>{saintBiographies[previousIndex].order}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={detailStyles.navSpacer} />
      )}

      <Link className={`${detailStyles.navLink} ${detailStyles.overview}`} href={saintsHref}>
        <span className={detailStyles.navTitle}>返回</span>
      </Link>

      {nextIndex !== undefined ? (
        <Link className={`${detailStyles.navLink} ${detailStyles.next}`} href={getSaintHref(nextIndex)}>
          <span className={detailStyles.navEyebrow}>下一則 →</span>
          <span className={detailStyles.navTitle}>{saintBiographies[nextIndex].order}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={detailStyles.navSpacer} />
      )}
    </nav>
  );
}

export function generateStaticParams() {
  return saintBiographies.map((saint) => ({
    slug: saint.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const saint = getSaint(slug);

  if (!saint) {
    return {
      title: "聖者行傳 | Kagyu",
    };
  }

  return {
    title: `${saint.name} | 聖者行傳 | Kagyu`,
    description: `${saint.order}，八十四大成就者傳。${saint.summary}。`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const saint = getSaint(slug);

  if (!saint) {
    notFound();
  }

  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label={`${saint.name}橫幅`}>
        <img
          alt={`${saint.name}橫幅`}
          className={styles.bannerImage}
          src="/study-practice/dharmawisdomhero003.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{saint.name}</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">{saint.name}</WatermarkHeading>

            <figure className={`${styles.articleImage} ${detailStyles.detailImage}`}>
              <img alt={saint.name} src={saint.detailImage} />
              <figcaption className="imageCaption">
                八十四大成就者傳 གྲུབ་ཐོབ་བརྒྱད་བཅུ་ཙ་བཞིའི་ལོ་རྒྱུས།
              </figcaption>
            </figure>

            {saint.paragraphs.map((paragraph, index) => {
              if (paragraph === "後記" || paragraph === "後記：") {
                return (
                  <WatermarkHeading as="h2" key={`${saint.slug}-afterword-${index}`}>
                    後記
                  </WatermarkHeading>
                );
              }

              return <p key={`${saint.slug}-paragraph-${index}`}>{paragraph}</p>;
            })}

            <EndMarker />
            <SaintArticleNav slug={saint.slug} />
          </div>
        </div>
      </article>
    </main>
  );
}
