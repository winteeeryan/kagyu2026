import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { SupportGuideNav } from "@/components/support/SupportGuideNav";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import pageStyles from "./page.module.css";
import { volunteerProjects } from "./projects";
import { VolunteerActivityCarousel } from "./VolunteerActivityCarousel";

export const metadata: Metadata = {
  title: "志工招募 | Kagyu",
  description: "誠徵義工職務項目與志工招募發心說明。",
};

const guideItems = [
  {
    number: "01",
    title: "志工行願初心",
    href: "#volunteer-service-intro",
    ariaLabel: "前往志工行願初心",
  },
  {
    number: "02",
    title: "義工服務類型",
    href: "#volunteer-service-types",
    ariaLabel: "前往義工服務類型",
  },
  {
    number: "03",
    title: "義工勸募專案",
    href: "#volunteer-registration",
    ariaLabel: "前往義工勸募專案",
  },
];

const volunteerSections = [
  {
    eyebrow: "Volunteer Aspiration",
    title: "志工行願初心",
    id: "volunteer-service-intro",
  },
  {
    eyebrow: "Volunteer Types",
    title: "義工服務類型",
    id: "volunteer-service-types",
  },
  {
    eyebrow: "Volunteer Fundraising Projects",
    title: "義工勸募專案",
    id: "volunteer-registration",
  },
];

const volunteerRoles = [
  {
    title: "香積義工",
    description: "協助備餐、廚房清潔等工作。",
    image: "/support-volunteer/volunteer-recruitment/volunteer001.png?v=20260704231406",
  },
  {
    title: "廣宣義工",
    description: "文案創作、廣告設計、文書處理、出版品編輯、資訊管理等工作。",
    image: "/support-volunteer/volunteer-recruitment/volunteer002.png?v=20260704231406",
  },
  {
    title: "清潔義工",
    description: "寮房打掃、公共廁所、殿堂內外環境等清潔維護。",
    image: "/support-volunteer/volunteer-recruitment/volunteer003.png?v=20260704231406",
  },
  {
    title: "總務義工",
    description: "設備資材採買、水電維修及保養等工作。",
    image: "/support-volunteer/volunteer-recruitment/volunteer004.png?v=20260704231406",
  },
  {
    title: "福田組義工",
    description: "義賣事宜規劃與執行、法友關懷、弘化勸募等工作。",
    image: "/support-volunteer/volunteer-recruitment/volunteer005.png?v=20260704231406",
  },
  {
    title: "機動義工",
    description: "櫃檯服務、機動支援各組等工作。",
    image: "/support-volunteer/volunteer-recruitment/volunteer006.png?v=20260704231406",
  },
];

const volunteerMatches = [
  {
    icon: "kitchen",
    prompt: "喜歡料理、幕後支援",
    role: "香積義工",
  },
  {
    icon: "pen",
    prompt: "擅長設計、文案、資料整理",
    role: "廣宣義工",
  },
  {
    icon: "leaf",
    prompt: "願意維護環境整潔",
    role: "清潔義工",
  },
  {
    icon: "tool",
    prompt: "熟悉採買、修繕、設備維護",
    role: "總務義工",
  },
  {
    icon: "heart",
    prompt: "擅長活動執行與人際關懷",
    role: "福田組義工",
  },
  {
    icon: "clock",
    prompt: "時間彈性、願意支援現場",
    role: "機動義工",
  },
];

function MatchIcon({ name }: { name: string }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {name === "kitchen" ? (
        <path
          {...commonProps}
          d="M7.2 10.6c-1.4-.4-2.4-1.6-2.4-3 0-1.7 1.4-3.1 3.1-3.1.5-1.4 2-2.5 3.8-2.5s3.3 1 3.8 2.5c1.7 0 3.1 1.4 3.1 3.1 0 1.4-1 2.7-2.4 3M7.5 10.4h8.9l-.8 8.9H8.3l-.8-8.9ZM9 14h6"
        />
      ) : null}
      {name === "pen" ? (
        <path
          {...commonProps}
          d="m4.3 18.9 3.4-.7L18.9 7a2.1 2.1 0 0 0-3-3L4.7 15.2l-.4 3.7ZM14.6 5.3l4.1 4.1M8 18.1l-2.1-2.2"
        />
      ) : null}
      {name === "leaf" ? (
        <path
          {...commonProps}
          d="M4.2 13.8c5.8-7.5 12-7.5 16-6.1-.3 4.4-3.2 10.6-11.2 10.6-2.2 0-3.8-.7-4.8-1.8 3.2-.5 6.5-2 9.9-5.1"
        />
      ) : null}
      {name === "tool" ? (
        <path
          {...commonProps}
          d="M14.8 5.1a4.5 4.5 0 0 0 5.1 5.1L10.1 20a2.8 2.8 0 0 1-4-4L16 6.2ZM6.9 17.1l1.9 1.9"
        />
      ) : null}
      {name === "heart" ? (
        <path
          {...commonProps}
          d="M12 19.7S5.4 15.5 4.1 10.9c-.7-2.4.7-4.6 3-4.8 1.5-.1 2.8.7 3.7 2 .9-1.3 2.2-2.1 3.7-2 2.3.2 3.7 2.4 3 4.8-1.3 4.6-5.5 8.8-5.5 8.8Z"
        />
      ) : null}
      {name === "clock" ? (
        <path
          {...commonProps}
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7.2v5.2l3.2 2"
        />
      ) : null}
    </svg>
  );
}

export default function Page() {
  return (
    <main className={`${styles.main} ${pageStyles.page}`}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <h1 className="visuallyHidden">志工招募</h1>

          <header className={pageStyles.header}>
            <p className={pageStyles.eyebrow}>志工招募</p>
            <WatermarkHeading as="h2">誠徵義工職務項目</WatermarkHeading>
          </header>

          <div className={styles.prose}>
            <p className={pageStyles.quote}>
              竭誠邀請您加入護法志工，
              <br />
              請逕向佛學院各中心報名。
            </p>
            <EndMarker />
          </div>

          <SupportGuideNav items={guideItems} />

          <div className={pageStyles.sections}>
            {volunteerSections.map((section) => (
              <section
                className={pageStyles.section}
                id={section.id}
                key={section.id}
              >
                <header className={pageStyles.sectionHeader}>
                  <p className={pageStyles.sectionEyebrow}>{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                </header>

                {section.id === "volunteer-service-intro" ? (
                  <div className={pageStyles.serviceIntro}>
                    <div className={pageStyles.introImageBox}>
                      <img
                        alt=""
                        aria-hidden="true"
                        className={pageStyles.introImage}
                        src="/support-volunteer/volunteer-recruitment/volunteerintroduction.png?v=202607052143"
                      />
                    </div>

                    <div className={pageStyles.serviceCopy}>
                      <p>
                        乘載上師的悲願，實踐利他，不必等待有錢有勢；
                        <br />
                        帶著充滿希望與善的身語意，即是發心菩薩的利他工具。
                        <br />
                        臺灣噶舉佛學院誠摯邀請您加入菩薩行的行列。
                      </p>
                    </div>
                  </div>
                ) : null}

                {section.id === "volunteer-service-types" ? (
                  <>
                    <div className={pageStyles.roleGrid}>
                      {volunteerRoles.map((role) => (
                        <article className={pageStyles.roleCard} key={role.title}>
                          <div className={pageStyles.roleIconBox}>
                            <img
                              alt=""
                              aria-hidden="true"
                              className={pageStyles.roleIcon}
                              src={role.image}
                            />
                          </div>
                          <div className={pageStyles.roleContent}>
                            <h3>{role.title}</h3>
                            <p>{role.description}</p>
                          </div>
                        </article>
                      ))}
                    </div>

                    <div className={pageStyles.roleGuidePanels}>
                      <section
                        aria-labelledby="volunteer-match-title"
                        className={pageStyles.matchPanel}
                      >
                        <h3 id="volunteer-match-title">不知道適合哪一組？</h3>
                        <div className={pageStyles.matchRows}>
                          {volunteerMatches.map((item) => (
                            <div className={pageStyles.matchRow} key={item.role}>
                              <span className={pageStyles.matchIcon}>
                                <MatchIcon name={item.icon} />
                              </span>
                              <span className={pageStyles.matchPrompt}>
                                {item.prompt}
                              </span>
                              <span
                                aria-hidden="true"
                                className={pageStyles.matchArrow}
                              >
                                →
                              </span>
                              <span className={pageStyles.matchRole}>
                                {item.role}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section
                        aria-labelledby="volunteer-register-title"
                        className={pageStyles.registrationPanel}
                      >
                        <h3 id="volunteer-register-title">如何報名</h3>
                        <div
                          className={pageStyles.registrationOrnament}
                          aria-hidden="true"
                        />
                        <div className={pageStyles.registrationContent}>
                          <div
                            className={pageStyles.prayerMark}
                            aria-hidden="true"
                          />
                          <div className={pageStyles.registrationText}>
                            <p>
                              如欲發心服務，請逕向各中心執事聯絡。
                              <br />
                              您可以依所在地址選擇鄰近中心，透過電話洽詢志工服務與報名方式。
                            </p>
                            <a
                              className={pageStyles.registrationButton}
                              href="#volunteer-registration"
                            >
                              查看各中心聯絡方式
                            </a>
                          </div>
                        </div>
                        <span className={pageStyles.panelLotus} aria-hidden="true" />
                      </section>
                    </div>
                  </>
                ) : null}

                {section.id === "volunteer-registration" ? (
                  <VolunteerActivityCarousel items={volunteerProjects} />
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
