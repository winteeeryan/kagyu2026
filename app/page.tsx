import Link from "next/link";
import { ActivityTabbedGallery } from "@/components/ActivityTabbedGallery";
import { Hero } from "@/components/Hero";
import { PopularCollectionsTabs } from "@/components/PopularCollectionsTabs";
import {
  activityCategories,
  hero,
  popularCollectionGroups,
} from "@/data/homepage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero {...hero} />

      <section className={styles.section} id="new-arrivals">
        <div className="container">
          <div className={styles.heading}>
            <p className="eyebrow">LATEST EVENTS</p>
            <h2 className={styles.homeSectionTitle}>共修活動</h2>
          </div>
          <ActivityTabbedGallery categories={activityCategories} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.visualMediaSection}`} id="visual-media">
        <div className="container">
          <div className={`${styles.heading} ${styles.mediaGatewayHeading}`}>
            <p className="eyebrow">VISUAL MEDIA</p>
            <h2 className={styles.homeSectionTitle}>影音圖片</h2>
          </div>
          <div className={styles.mediaGatewayShell}>
            <div className={styles.mediaGatewayGrid}>
              <Link
                className={`${styles.mediaPanel} ${styles.mediaPanelVideo}`}
                href="/visual-media/video-channel"
                rel="noreferrer"
                target="_blank"
              >
                <div className={styles.mediaPanelVisual} aria-hidden="true">
                  <img
                    className={styles.mediaPanelImage}
                    src="/media/video-channel.png"
                    alt=""
                  />
                </div>
                <div className={styles.mediaPanelContent}>
                  <h2 className={styles.mediaPanelTitle}>影音頻道</h2>
                  <span className={styles.mediaPanelSubLink}>探索頻道</span>
                </div>
              </Link>

              <Link
                className={`${styles.mediaPanel} ${styles.mediaPanelAlbum}`}
                href="/visual-media/official-album"
                rel="noreferrer"
                target="_blank"
              >
                <div className={styles.mediaPanelVisual} aria-hidden="true">
                  <img
                    className={styles.mediaPanelImage}
                    src="/media/official-album.png"
                    alt=""
                  />
                </div>
                <div className={styles.mediaPanelContent}>
                  <h2 className={styles.mediaPanelTitle}>官方相冊</h2>
                  <span className={styles.mediaPanelSubLink}>瀏覽相冊</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.charityShopSection}`} id="charity-shop">
        <div className="container">
          <div className={styles.popularCollectionsBlock}>
            <div className={styles.popularCollectionsHeading}>
              <p className={`eyebrow ${styles.popularCollectionsEyebrow}`}>
                CHARITY SHOP
              </p>
              <h2 className={styles.popularCollectionsTitle}>義賣商店</h2>
            </div>
            <PopularCollectionsTabs groups={popularCollectionGroups} />
          </div>
        </div>
      </section>
    </main>
  );
}
