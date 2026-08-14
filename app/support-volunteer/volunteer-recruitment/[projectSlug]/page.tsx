import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { MediaStoryVideo } from "./MediaStoryVideo";
import { volunteerProjects } from "../projects";
import styles from "./page.module.css";

type VolunteerProjectPageProps = {
  params: Promise<{
    projectSlug: string;
  }>;
};

function getProject(slug: string) {
  return volunteerProjects.find((project) => project.slug === slug);
}

function getProjectHref(index: number) {
  return volunteerProjects[index]?.href ?? "/support-volunteer/volunteer-recruitment";
}

function VolunteerProjectNav({ slug }: { slug: string }) {
  const currentIndex = volunteerProjects.findIndex((project) => project.slug === slug);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : undefined;
  const nextIndex = currentIndex >= 0 && currentIndex < volunteerProjects.length - 1 ? currentIndex + 1 : undefined;

  return (
    <nav aria-label="義工勸募專案導覽" className={styles.projectNav}>
      {previousIndex !== undefined ? (
        <Link className={`${styles.navLink} ${styles.previous}`} href={getProjectHref(previousIndex)}>
          <span className={styles.navEyebrow}>← 前一則</span>
          <span className={styles.navTitle}>{volunteerProjects[previousIndex].title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.navSpacer} />
      )}

      <Link className={`${styles.navLink} ${styles.overview}`} href="/support-volunteer/volunteer-recruitment#volunteer-registration">
        <span className={styles.navTitle}>返回義工勸募專案</span>
      </Link>

      {nextIndex !== undefined ? (
        <Link className={`${styles.navLink} ${styles.next}`} href={getProjectHref(nextIndex)}>
          <span className={styles.navEyebrow}>下一則 →</span>
          <span className={styles.navTitle}>{volunteerProjects[nextIndex].title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className={styles.navSpacer} />
      )}
    </nav>
  );
}

export function generateStaticParams() {
  return volunteerProjects.map((project) => ({
    projectSlug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: VolunteerProjectPageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = getProject(projectSlug);

  if (!project) {
    return {
      title: "義工勸募專案 | Kagyu",
    };
  }

  return {
    title: `${project.title} | 義工勸募專案 | Kagyu`,
    description: project.excerpt,
  };
}

export default async function VolunteerProjectPage({
  params,
}: VolunteerProjectPageProps) {
  const { projectSlug } = await params;
  const project = getProject(projectSlug);

  if (!project) {
    notFound();
  }

  if (project.layoutVariant === "mediaStory") {
    const galleryPlaceholders = project.galleryImages?.length
      ? []
      : Array.from({ length: project.galleryPlaceholders ?? 0 }, (_, index) => index + 1);

    return (
      <main className={`${styles.page} ${styles.mediaStoryPage}`}>
        <article className={styles.mediaStoryArticle}>
          <section className={styles.videoHero} aria-label={`${project.title}影片`}>
            <MediaStoryVideo label={project.video?.label ?? project.title} youtubeId={project.video?.youtubeId} />
          </section>

          <header className={styles.storyHeader}>
            <WatermarkHeading as="h2">{project.title}</WatermarkHeading>
          </header>

          <section className={styles.storyOverview} aria-label={`${project.title}介紹`}>
            {(project.body ?? [project.excerpt]).map((paragraph, index) => (
              <p className={paragraph.includes("\n") ? styles.centeredVerse : undefined} key={`${project.slug}-story-paragraph-${index}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {project.galleryImages?.length ? (
            <section className={styles.storyGallery} aria-label={`${project.title}圖片`}>
              {project.galleryImages.map((imageSrc, index) => (
                <figure className={styles.galleryImageFrame} key={imageSrc}>
                  <Image
                    alt={`${project.title}照片 ${index + 1}`}
                    className={styles.galleryImage}
                    height={960}
                    src={imageSrc}
                    width={1440}
                  />
                </figure>
              ))}
            </section>
          ) : galleryPlaceholders.length > 0 ? (
            <section className={styles.storyGallery} aria-label={`${project.title}圖片`}>
              {galleryPlaceholders.map((item) => (
                <figure className={styles.galleryPlaceholder} key={`${project.slug}-gallery-${item}`} aria-label={`圖片待補 ${item}`} />
              ))}
            </section>
          ) : null}

          <EndMarker />
          <VolunteerProjectNav slug={project.slug} />
        </article>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <WatermarkHeading as="h2">{project.title}</WatermarkHeading>
        </header>

        <div className={styles.content}>
          {(project.body ?? [project.excerpt]).map((paragraph, index) => (
            <p
              className={project.centeredBodyIndexes?.includes(index) ? styles.centeredParagraph : undefined}
              key={`${project.slug}-paragraph-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
