"use client";

import { useEffect } from "react";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import bannerStyles from "@/app/subpage.module.css";
import { centers } from "@/data/centers";
import styles from "./CentersGallery.module.css";

export function CentersGallery() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    elements.forEach((element) => element.classList.add(styles.revealReady));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={`${bannerStyles.main} ${bannerStyles.bannerPage} ${styles.page}`}>
      <section className={bannerStyles.bannerSection} aria-label="全省中心橫幅">
        <img
          alt="全省中心橫幅"
          className={bannerStyles.bannerImage}
          src="/about/abouthero004.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.headingWrap}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">全省中心</DecoratedHeading>
          </div>
        </div>

        <section className={styles.gallery} aria-label="全省中心位置">
          {centers.map((center, index) => (
            <section
              className={`${styles.locationRow} ${index % 2 === 1 ? styles.reverseRow : ""} ${index === centers.length - 1 ? styles.lastRow : ""}`}
              data-reveal
              key={center.image}
            >
              <figure className={styles.locationFigure}>
                <div className={styles.imageFrame}>
                  <img
                    alt={center.alt}
                    src={center.image}
                    style={{ objectPosition: center.objectPosition }}
                  />
                </div>
              </figure>

              <div className={styles.textPanel}>
                <div className={styles.textInner}>
                  <WatermarkHeading as="h2">{center.title}</WatermarkHeading>

                  <div className={styles.contactLines}>
                    {center.contact.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  {center.transport ? (
                    <div className={styles.transport}>
                      <h3>交通資訊</h3>
                      <ul>
                        {center.transport.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ))}

          <div className={styles.endMarker}>
            <EndMarker />
          </div>
        </section>
      </article>
    </main>
  );
}
