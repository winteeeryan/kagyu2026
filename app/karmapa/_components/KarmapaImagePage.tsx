import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import styles from "./KarmapaImagePage.module.css";

type KarmapaImagePageProps = {
  imageSrc: string;
  title: string;
};

export function KarmapaImagePage({ imageSrc, title }: KarmapaImagePageProps) {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.imageSection} aria-label={`${title}圖像`}>
          <img alt={`${title}圖像`} className={styles.headerImage} src={imageSrc} />
        </section>
        <section className={`karmapaArticleStart ${styles.content}`}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>
          {/* Main Content Starts Here */}
          <EndMarker />
        </section>
      </main>
    </>
  );
}
