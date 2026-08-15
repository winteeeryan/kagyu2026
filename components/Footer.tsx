import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const utilityLinks = [
  { href: "https://www.kagyu.org.tw/tem/data/application.doc", label: "上課報名", external: true },
  { href: "https://p.ecpay.com.tw/0D6EAD8", label: "線上捐款", external: true },
  { href: "/activities/latest", label: "最新活動" },
  { href: "/support-volunteer/charity-shop", label: "義賣商店" },
];

const footerNavGroups = [
  {
    title: "關於學院",
    links: [
      { href: "/about/introduction", label: "學院簡介" },
      { href: "/about/origin", label: "成立緣起" },
      { href: "/about/teachers", label: "師資與上師" },
      { href: "/about/centers", label: "全省中心" },
    ],
  },
  {
    title: "聞思修學",
    links: [
      { href: "/study-practice/dharma-wisdom/scriptures", label: "聞思經典" },
      { href: "/study-practice/dharma-wisdom/masters-quotes", label: "祖師語錄" },
      { href: "/study-practice/buddhist-encyclopedia", label: "佛學小百科" },
      { href: "https://dharmaebooks.org", label: "正法電子書", external: true },
    ],
  },
  {
    title: "傳承與法王",
    links: [
      { href: "/karmapa/lineage", label: "歷代大寶法王" },
      { href: "/kagyu-lineage/texts", label: "噶舉經典" },
      { href: "/visual-media/video-channel", label: "影音頻道" },
      { href: "/visual-media/official-album", label: "官方相冊" },
    ],
  },
  {
    title: "護持與活動",
    links: [
      { href: "/activities/latest", label: "最新活動" },
      { href: "/activities/past", label: "過往活動" },
      { href: "/support-volunteer/support-info", label: "護持資訊" },
      { href: "/support-volunteer/merit-ocean", label: "功德海" },
      { href: "/support-volunteer/volunteer-recruitment", label: "志工招募" },
      { href: "/support-volunteer/charity-shop", label: "義賣商店" },
    ],
  },
];

type SocialLinkItem = {
  external?: boolean;
  href: string | null;
  icon: "line" | "youtube" | "x" | "facebook" | "email";
  label: string;
};

const socialLinks: SocialLinkItem[] = [
  { href: "https://line.me/R/ti/p/%40oxm2106l", label: "LINE", icon: "line", external: true },
  {
    href: "https://www.youtube.com/channel/UCcwy9xp_AixcowlJ_2ItjLA",
    label: "YouTube",
    icon: "youtube",
    external: true,
  },
  { href: "https://x.com/tw_kagyu?lang=zh-tw", label: "X", icon: "x", external: true },
  { href: "https://www.facebook.com/Kagyu.tw/", label: "Facebook", icon: "facebook", external: true },
  { href: "mailto:mou.a58@msa.hinet.net", label: "E-mail", icon: "email" },
] as const;

const footerCenters = [
  {
    contact: ["地址 台北市中山區民生東路一段 39 號10樓", "電話 (02) 2581-4395 / 傳真 (02) 2543-1818"],
    title: "台北中心",
  },
  {
    contact: ["地址 高雄市苓雅區光華一路226號10樓", "電話 (07) 223-7878 / 傳真 (07) 227-1919"],
    title: "高雄中心",
  },
  {
    contact: ["地址 花蓮縣吉安鄉文興街11號", "電話 (03) 854-1888"],
    title: "花蓮中心",
  },
  {
    contact: ["地址 嘉義市新生路283號8樓", "電話 0909-809908"],
    title: "噶瑪噶舉基金會［嘉義分處］",
  },
];

function CenterContact({ contact }: { contact: string[] }) {
  return (
    <>
      {contact.map((line) => (
        <small key={line}>{line}</small>
      ))}
    </>
  );
}

function FooterLink({
  children,
  external,
  href,
  className,
}: {
  children: string;
  className?: string;
  external?: boolean;
  href: string;
}) {
  return (
    <Link
      className={className}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ icon }: { icon: SocialIconName }) {
  switch (icon) {
    case "line":
      return (
        <svg
          aria-hidden="true"
          className={`${styles.socialSvg} ${styles.socialSvgLine}`}
          viewBox="0 0 24 24"
        >
          <path d="M4.3 11.1c0-3.3 3.4-6 7.7-6s7.7 2.7 7.7 6-3.4 6-7.7 6c-.5 0-1.1 0-1.6-.1L6.8 19.5l1-3.2c-2.1-1.1-3.5-3-3.5-5.2Z" />
          <path d="M8.2 10.1v3.2h1.7" />
          <path d="M11.2 10.1v3.2" />
          <path d="M12.9 13.3v-3.2l2 3.2v-3.2" />
          <path d="M17.1 10.1h-1.8v3.2h1.8" />
          <path d="M15.3 11.7h1.5" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" className={styles.socialSvg} viewBox="0 0 24 24">
          <path d="M4.8 8.5c.2-1 1-1.8 2-1.9 1.5-.2 3.4-.3 5.2-.3s3.7.1 5.2.3c1 .1 1.8.9 2 1.9.2 1 .3 2.2.3 3.5s-.1 2.5-.3 3.5c-.2 1-1 1.8-2 1.9-1.5.2-3.4.3-5.2.3s-3.7-.1-5.2-.3c-1-.1-1.8-.9-2-1.9-.2-1-.3-2.2-.3-3.5s.1-2.5.3-3.5Z" />
          <path d="m10.4 9.5 4.2 2.5-4.2 2.5v-5Z" />
        </svg>
      );
    case "x":
      return (
        <svg aria-hidden="true" className={styles.socialSvg} viewBox="0 0 24 24">
          <path d="m5.2 5.5 13.6 13" />
          <path d="m18.8 5.5-5.6 6.3-8 6.7" />
          <path d="M5.2 5.5h3.9l9.7 13h-3.9L5.2 5.5Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg aria-hidden="true" className={styles.socialSvg} viewBox="0 0 24 24">
          <path d="M14.3 8.1h2.2V4.8h-2.6c-3 0-4.7 1.8-4.7 4.7v2H6.8v3.6h2.4v5.1H13v-5.1h2.9l.5-3.6H13V9.9c0-1.2.5-1.8 1.3-1.8Z" />
        </svg>
      );
    case "email":
      return (
        <svg aria-hidden="true" className={styles.socialSvg} viewBox="0 0 24 24">
          <path d="M4.7 7.2h14.6v10.1H4.7V7.2Z" />
          <path d="m5.2 7.7 6.8 5.5 6.8-5.5" />
          <path d="m9.6 11.3-4.4 5.4" />
          <path d="m14.4 11.3 4.4 5.4" />
        </svg>
      );
  }
}

export function Footer() {
  return (
    <>
      <section className={styles.preFooterVisual} aria-label="依止傳承，聞思修行，廣結善緣">
        <div className={styles.preFooterImageLayer}>
          <Image
            alt=""
            className={styles.preFooterImage}
            fill
            sizes="100vw"
            src="/about/center002.png"
          />
        </div>
        <div className={styles.preFooterBody}>
          <div className={styles.preFooterShadow} aria-hidden="true" />
          <p className={styles.preFooterText}>
            <span>依止傳承，</span>
            <span>聞思修行，</span>
            <span>廣結善緣。</span>
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.information}>
            <address
              aria-label="中心聯絡資訊"
              className={styles.centerList}
              id="site-footer-address"
            >
              {footerCenters.map((center) => (
                <p key={center.title}>
                  <span>{center.title}</span>
                  <CenterContact contact={center.contact} />
                </p>
              ))}
            </address>
          </div>

          <nav className={styles.footerNav} aria-label="頁尾網站導覽">
            <div className={styles.navColumns}>
              {footerNavGroups.map((group) => (
                <section className={styles.navGroup} key={group.title}>
                  <h2>{group.title}</h2>
                  <ul>
                    {group.links.map((link) => (
                      <li key={`${group.title}-${link.label}`}>
                        <FooterLink external={link.external} href={link.href}>
                          {link.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </nav>

          <ul className={styles.utilityLinks} aria-label="主要行動">
            {utilityLinks.map((item) => (
              <li key={item.label}>
                <FooterLink external={item.external} href={item.href}>
                  {item.label}
                </FooterLink>
              </li>
            ))}
          </ul>

          <div className={styles.socialArea}>
            <ul className={styles.socialLinks} aria-label="社群連結">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      aria-label={item.label}
                      className={styles.socialLink}
                      href={item.href}
                      rel={"external" in item && item.external ? "noreferrer" : undefined}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      title={item.label}
                    >
                      <SocialIcon icon={item.icon} />
                    </Link>
                  ) : (
                    <span
                      aria-label={`${item.label} 尚未提供連結`}
                      className={styles.socialPlaceholder}
                      role="img"
                      title={`${item.label} 尚未提供連結`}
                    >
                      <SocialIcon icon={item.icon} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.bottomRow}>
            <p>
              <span>台灣噶舉佛學院</span>
              <span>Copyright 2026.</span>
              <span>@Taiwan Kagyu Buddhist Institute All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
