"use client";

import { EndMarker } from "@/components/ui/EndMarker";
import { useId, useState } from "react";
import styles from "./MeritOceanSections.module.css";

const meritTableRows = [
  ["福慧委員", "林〇在"],
  ["般若委員", "詹〇慧、江〇慧"],
  ["慈悲委員", "張〇威"],
  ["金剛委員", "林〇誼、黃〇誼、黃〇皓"],
  ["蓮花委員", "陳〇玲、吳〇芳"],
  ["如意委員", "劉〇諭"],
  ["隨喜委員", "許〇豪、王〇鳳、李〇真"],
];

type DonorRow = [string, string];

type DonorMonth = {
  title: string;
  rows: DonorRow[];
};

const medicalDonorMonths2023: DonorMonth[] = [
  {
    title: "一月份功德主",
    rows: [
      ["江〇慧", "1000"],
      ["劉〇諮", "1000"],
      ["劉〇瑜", "2000"],
      ["林〇榮闔家", "500"],
      ["楊〇輝闔家", "1000"],
    ],
  },
  {
    title: "二月份功德主",
    rows: [
      ["江O慧", "1000"],
      ["劉O諾", "1000"],
      ["劉O瑜", "2000"],
      ["劉O瑄", "1000"],
      ["江O達", "1000"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
    ],
  },
  {
    title: "三月份功德主",
    rows: [
      ["江OO", "1000"],
      ["劉OO", "1000"],
      ["劉OO", "2000"],
      ["劉OO", "1000"],
      ["江OO", "1000"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["蕭O瑛", "400"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
    ],
  },
  {
    title: "四月份功德主",
    rows: [
      ["江OO", "1000"],
      ["劉OO", "1000"],
      ["劉OO", "2000"],
      ["劉OO", "1000"],
      ["江OO", "1000"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
      ["張O蓮", "500"],
    ],
  },
  {
    title: "五月份功德主",
    rows: [
      ["江OO", "1000"],
      ["劉OO", "1000"],
      ["劉OO", "2000"],
      ["劉OO", "1000"],
      ["江OO", "1000"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
    ],
  },
  {
    title: "六月份功德主",
    rows: [
      ["江OO", "1000"],
      ["劉OO", "1000"],
      ["劉OO", "2000"],
      ["劉OO", "1000"],
      ["江OO", "1000"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
      ["張O蓮", "500"],
      ["蕭O瑛闔家", "300（5.6.7月）"],
    ],
  },
  {
    title: "七月份功德主",
    rows: [
      ["江OO", "800"],
      ["劉OO", "800"],
      ["劉OO", "800"],
      ["劉OO", "600"],
      ["江OO", "600"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
      ["張O蓮", "500"],
      ["蕭O瑛闔家", "300（5.6.7月）"],
    ],
  },
  {
    title: "八月份功德主",
    rows: [
      ["江OO", "800"],
      ["劉OO", "800"],
      ["劉OO", "800"],
      ["劉OO", "600"],
      ["江OO", "600"],
      ["徐吳O枝", "100"],
      ["徐O琪", "100"],
      ["林O榮闔家", "200"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
      ["張O蓮", "500"],
    ],
  },
  {
    title: "九月份功德主",
    rows: [
      ["江OO", "1000"],
      ["劉OO", "800"],
      ["劉OO", "600"],
      ["劉OO", "600"],
      ["江OO", "600"],
      ["徐吳O枝", "200"],
      ["徐O琪", "200"],
      ["林O榮闔家", "400"],
      ["林O峰", "1000"],
      ["黃O政闔家", "1000"],
      ["楊O輝闔家", "1000"],
      ["沈O君闔家", "300"],
      ["陳O詮", "200"],
      ["呂O泉闔家", "500"],
      ["張O蓮", "500"],
    ],
  },
];

const medicalDonorMonths2022: DonorMonth[] = [
  {
    title: "一月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["林O榮闔家", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"],
    ],
  },
  {
    title: "二月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["顏O闔家", "500"], ["林O榮闔家", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"],
    ],
  },
  {
    title: "三月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["張O蓮", "500"], ["劉O柿", "3000"], ["邱O帆", "1000"], ["王O智", "1000"], ["林O榮闔家", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"],
    ],
  },
  {
    title: "四月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["林O榮闔家", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"],
    ],
  },
  {
    title: "五月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["林O榮闔家", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"],
    ],
  },
  {
    title: "六月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["林O榮闔家", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"],
    ],
  },
  {
    title: "七月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"], ["林O榮闔家", "200"],
    ],
  },
  {
    title: "八月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"], ["林O榮闔家", "200"],
    ],
  },
  {
    title: "九月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"], ["林O榮闔家", "200"], ["黃O在", "2000"],
    ],
  },
  {
    title: "十月份功德主",
    rows: [
      ["江O慧", "1000"], ["劉O諾", "1000"], ["劉O瑜", "2000"], ["劉O瑄", "1000"], ["江O達", "1000"], ["林O峰闔家", "1000"], ["黃O政闔家", "1000"], ["楊O輝闔家", "1000"], ["沈O君闔家", "300"], ["陳O詮", "200"], ["徐吳O枝", "100"], ["徐O琪", "100"], ["林O榮闔家", "200"], ["簡O蓉", "500"], ["簡O慈", "500"], ["簡O佳", "500"],
    ],
  },
];

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={`${styles.plusIcon} ${isOpen ? styles.plusIconOpen : ""}`}
      aria-hidden="true"
    />
  );
}

type AccordionProps = {
  title: string;
  children?: React.ReactNode;
  nested?: boolean;
};

function Accordion({ title, children, nested = false }: AccordionProps) {
  const panelId = useId();
  const triggerId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${nested ? styles.nestedAccordion : ""}`}>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className={styles.summary}
        id={triggerId}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span>{title}</span>
        <PlusIcon isOpen={isOpen} />
      </button>
      <div
        aria-hidden={!isOpen}
        aria-labelledby={triggerId}
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        id={panelId}
        role="region"
      >
        <div className={styles.panelInner}>{children}</div>
      </div>
    </div>
  );
}

function MeritDonorTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">功德項目</th>
          <th scope="col">姓名</th>
        </tr>
      </thead>
      <tbody>
        {meritTableRows.map(([title, names]) => (
          <tr key={title}>
            <th scope="row">{title}</th>
            <td>{names}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MedicalDonorTable({ rows }: { rows: DonorRow[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">姓名</th>
          <th scope="col">金額（新台幣）</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([name, amount], index) => (
          <tr key={`${name}-${amount}-${index}`}>
            <th scope="row">{name}</th>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MedicalYearAccordion({
  title,
  months,
}: {
  title: string;
  months: DonorMonth[];
}) {
  return (
    <Accordion title={title}>
      <div className={styles.nestedStack}>
        {months.map((month) => (
          <Accordion
            title={month.title}
            key={`${title}-${month.title}`}
            nested
          >
            <MedicalDonorTable rows={month.rows} />
          </Accordion>
        ))}
      </div>
    </Accordion>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className={styles.sectionHeader}>
      <p className={styles.sectionEyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
}

export function MeritOceanSections() {
  return (
    <>
      <div className={styles.sections}>
        <section className={styles.section} id="gongdehai">
          <SectionHeader
            eyebrow="Sea of Merits"
            title="功德海名錄"
            subtitle="彙整年度與每月功德主名錄，感念護持，迴向共修，共成佛道。"
          />

          <div className={styles.accordionStack}>
            <Accordion title="什麼是功德海？">
              <p>
                「功德海」彙整本院每年度與每月的功德主名錄，記錄十方善信的發心護持，以感恩與迴向，齊心成就佛學院與弘法志業。
              </p>
            </Accordion>

            <Accordion title="功德主名錄如何閱讀？">
              <p>
                名錄依年度、月份與護持項目整理，方便功德主與大眾查閱，共同迴向護持善願。
              </p>
            </Accordion>

            <Accordion title="2025 年功德主名錄">
              <div className={styles.nestedStack}>
                <Accordion title="一月份功德主" nested>
                  <p>一月份功德主名錄整理中。</p>
                </Accordion>

                <Accordion title="二月份功德主" nested>
                  <MeritDonorTable />
                </Accordion>
              </div>
            </Accordion>
          </div>
        </section>

      <section className={styles.section} id="sangha-medical">
        <div className={styles.medicalGrid}>
          <div>
            <SectionHeader
              eyebrow="Sangha Medical Care"
              title="僧伽醫護捐款專戶"
              subtitle="護持僧伽醫療與身心照護，祈願僧眾身心安康，法務常佳，正法久住。"
            />

            <div className={styles.accordionStack}>
              <Accordion title="涓滴善念福至心靈">
                <p>
                  諸行無常，輪迴可怖，生老病死是人直接感受到的痛苦，也是每一個人都無法避免的，身披袈裟僧伽也亦然。
                </p>
                <p>
                  生死是否安然、衰老是快是慢，都與疾病相關，在現實社會中所遇到的種種苦難中，人生眾苦之中，疾病之苦是根本。
                </p>
                <p>
                  感念僧伽在修行道上、默默的無私奉獻、為國祈安為民祈福，承蒙佛光加被，百姓得以安樂，社稷得以太平，也使整個世界變得和諧安定。
                </p>
                <p>
                  時光無語、歲月足履就這樣靜靜地生命的從容也不可免色身的苦厄災恙，《身安方能道隆》祈願~諸佛菩薩慈悲力加持、全心奉獻佛教的僧伽，法體安康，續佛慧命，讓弘法利生的志業，綿延不斷，善願圓滿。
                </p>
              </Accordion>

              <Accordion title="《功德迴向》">
                <p>
                  願以殊勝諸功德，上供三寶菩薩眾
                  <br />
                  所獲無邊之功德，上報累世四重恩
                  <br />
                  報恩功德再迴向，十方三世全法界
                  <br />
                  四聖六凡盡無餘，消災除障增福慧
                  <br />
                  願一切病苦眾生，佛光普照除病苦
                  <br />
                  事事如意恆吉祥，速證諸佛圓滿位
                </p>
              </Accordion>

              <Accordion title="收支明細">
                <p>
                  <a download href="https://www.kagyu.org.tw/images/files/醫護1105.xlsx">
                    請點選下載
                  </a>
                </p>
              </Accordion>

              <MedicalYearAccordion
                title="2023 年功德主名錄"
                months={medicalDonorMonths2023}
              />

              <MedicalYearAccordion title="2022 年功德主名錄" months={medicalDonorMonths2022} />
            </div>
          </div>

          <aside className={styles.bankCard} aria-label="僧伽醫療專戶帳戶資訊">
            <div className={styles.lotusMark} aria-hidden="true">
              <span />
            </div>
            <h3>僧伽醫療專戶</h3>
            <dl>
              <div>
                <dt>帳戶名稱</dt>
                <dd>財團法人高雄市噶瑪噶舉基金會</dd>
              </div>
              <div>
                <dt>匯款銀行</dt>
                <dd>國泰世華銀行（民生分行）</dd>
              </div>
              <div>
                <dt>銀行代號</dt>
                <dd>013</dd>
              </div>
              <div>
                <dt>帳號</dt>
                <dd>203-03-51898-9</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className={styles.thanksCard} id="thanks-3000">
        <div className={styles.watermark} aria-hidden="true" />
        <div className={styles.thanksContent}>
          <p className={styles.date}>2023 年 9 月 26 日</p>
          <h3>對 3000 美元捐贈的致謝和感謝</h3>
          <p>
            我們謹此感謝並確認收到了 3000 美元的捐款，作為堪布凱筑、曲尼倫珠阿闍黎和法海師父為仁欽泰佐灌頂和開示的捐款。
          </p>

          <Accordion title="閱讀完整致謝內容" nested>
            <div className={styles.letterContent}>
              <p>主題：對 3000 美元捐贈的致謝和感謝</p>
              <p>親愛的堪布拉：</p>
              <p>
                我們謹此感謝並確認收到了 3000 美元的捐款，作為堪布凱筑、曲尼倫珠阿闍黎和法海師父為仁欽泰佐灌頂和開示的捐款。
              </p>
              <p>我們非常感謝您的捐贈和支持，儘管您知道授權及其地位。</p>
              <p>
                謹向您更新錫金隆德寺竹旺桑吉年巴仁波切的仁欽泰佐教授和灌頂的最新情況，目前已進入最後階段，可能還需要三個星期才能完成。
              </p>
              <p>截止目前該計劃已成功使成千上萬的信徒受益。</p>
              <p>再次感謝您，請透過回信確認您的捐款用途。</p>
              <p>
                此致，
                <br />
                致建慶慈善信託基金
                <br />
                授權簽署
              </p>

              <div className={styles.letterImages}>
                <img
                  alt="3000 美元捐贈致謝函第一頁"
                  src="/support-volunteer/3000usdthanks001.jpg"
                />
                <img
                  alt="3000 美元捐贈致謝函第二頁"
                  src="/support-volunteer/3000usdthanks002.jpg"
                />
              </div>
            </div>
          </Accordion>
        </div>
      </section>
      </div>

      <EndMarker />
    </>
  );
}
