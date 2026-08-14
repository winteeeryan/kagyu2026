import type { ReactNode } from "react";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import styles from "@/app/subpage.module.css";

type AboutBannerPageProps = {
  alt: string;
  children?: ReactNode;
  imageSrc: string;
  title: string;
};

export function AboutBannerPage({
  alt,
  children,
  imageSrc,
  title,
}: AboutBannerPageProps) {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label={alt}>
        <img alt={alt} className={styles.bannerImage} src={imageSrc} />
      </section>

      <article className={`karmapaArticleStart ${styles.aboutArticle}`}>
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>

          <section className={styles.blankContent}>
            {children ?? <>{/* Main Content Starts Here */}</>}
          </section>

          <EndMarker />
        </div>
      </article>
    </main>
  );
}
