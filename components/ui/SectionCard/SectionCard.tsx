import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { getLinkBehavior } from "@/utils/linkBehavior";
import styles from "./SectionCard.module.css";

type SectionCardProps = {
  ariaLabel?: string;
  className?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  imageStyle?: CSSProperties;
  openInNewTab?: boolean;
  subtitle?: ReactNode;
  title: ReactNode;
};

export function SectionCard({
  ariaLabel,
  className = "",
  href,
  image,
  imageAlt,
  imageStyle,
  openInNewTab,
  subtitle,
  title,
}: SectionCardProps) {
  const content = (
    <>
      <div className={styles.media}>
        {image ? (
          <img
            alt={imageAlt ?? (typeof title === "string" ? title : "")}
            className={styles.image}
            decoding="async"
            loading="lazy"
            src={image}
            style={imageStyle}
          />
        ) : null}
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </>
  );

  const cardClassName = `${styles.card} ${className}`.trim();

  if (href) {
    const linkBehavior =
      openInNewTab === undefined
        ? getLinkBehavior(href)
        : openInNewTab
          ? { rel: "noopener noreferrer" as const, target: "_blank" as const }
          : {};

    return (
      <Link
        aria-label={ariaLabel}
        className={cardClassName}
        href={href}
        {...linkBehavior}
      >
        {content}
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
