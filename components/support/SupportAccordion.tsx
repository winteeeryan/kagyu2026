"use client";

import { useState } from "react";
import { getLinkBehavior } from "@/utils/linkBehavior";
import { EndMarker } from "@/components/ui/EndMarker";
import { PosterLightbox } from "@/components/PosterLightbox";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import styles from "./SupportAccordion.module.css";

type SupportAccordionItem = {
  title: string;
  description: string;
  content?: Array<{
    label?: string;
    text: string;
    href?: string;
    tone?: "caption";
  }>;
  tables?: Array<{
    title: string;
    rows: Array<{
      label: string;
      value: string;
    }>;
  }>;
  tableCaption?: string;
};

const supportItems: SupportAccordionItem[] = [
  {
    title: "線上刷卡護持",
    description: "適合希望快速完成單次或定期護持的使用者。",
    content: [
      {
        label: "線上刷卡入口",
        text: "https://p.ecpay.com.tw/0D6EAD8",
        href: "https://p.ecpay.com.tw/0D6EAD8",
      },
      {
        label: "銀行定期扣款刷卡單",
        text: "請點選下載",
        href: "https://www.kagyu.org.tw/images/files/%E5%88%B7%E5%8D%A1%E5%96%AE.jpeg",
      },
      {
        text: "※如需確認護持資訊或收據，請於完成後聯繫佛學院。※",
        tone: "caption",
      },
    ],
  },
  {
    title: "國內銀行匯款",
    description: "適合台灣地區使用銀行轉帳或臨櫃匯款的護持者。",
    tables: [
      {
        title: "基金會帳戶",
        rows: [
          { label: "帳戶名稱", value: "財團法人高雄市噶瑪噶舉基金會" },
          { label: "匯款銀行", value: "國泰世華銀行 民生分行" },
          { label: "銀行代號", value: "013" },
          { label: "帳號", value: "203-03-501898-9" },
        ],
      },
      {
        title: "佛學會帳戶",
        rows: [
          { label: "帳戶名稱", value: "台灣噶舉佛學會" },
          { label: "匯款銀行", value: "兆豐國際商銀 國外部" },
          { label: "銀行代號", value: "017" },
          { label: "帳號", value: "007-09-09585-0" },
        ],
      },
    ],
  },
  {
    title: "郵政劃撥",
    description: "適合習慣使用郵局劃撥的護持者。",
    tables: [
      {
        title: "帳戶資訊",
        rows: [
          { label: "劃撥帳號", value: "19816506" },
          { label: "郵政戶名", value: "台灣噶舉佛學會" },
        ],
      },
    ],
    tableCaption: "※完成劃撥後，可與佛學院聯繫確認資料。※",
  },
  {
    title: "定期護持",
    description: "適合希望以每月固定方式長期護持佛學院的使用者。",
    content: [
      {
        label: "刷卡單下載",
        text: "請點選下載",
        href: "https://www.kagyu.org.tw/tem/img/do.jpg",
      },
      {
        label: "郵局自動轉帳付款授權書 Word",
        text: "請點選下載",
        href: "https://www.kagyu.org.tw/images/files/郵局新版二聯式扣款授權書-DT8(1).doc",
      },
      {
        label: "郵局自動轉帳付款授權書 PDF",
        text: "請點選下載",
        href: "https://www.kagyu.org.tw/images/files/二聯式授權書範本-DT8.pdf",
      },
      {
        text: "※定期護持不在金額大小，而在長久穩定的發心。※",
        tone: "caption",
      },
    ],
  },
  {
    title: "海外匯款護持",
    description: "適合居住於台灣以外地區的護持者。",
    tables: [
      {
        title: "Account Information",
        rows: [
          { label: "Account Name", value: "Taiwan Kagyu Buddhist Institute" },
          {
            label: "Bank Name",
            value: "MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD.",
          },
          { label: "Bank Code", value: "ICBC TWTP 007" },
          { label: "Account Number", value: "007-09-09585-0" },
          { label: "Bank Address", value: "NO.100 CHI-LIN RD. TAIPEI CITY, TAIWAN" },
          { label: "Bank Phone", value: "886-2-2521-0959" },
        ],
      },
    ],
    tableCaption:
      "Reminder: Overseas transfer fees and required fields may vary by bank. Please contact the institute before transfer if needed.",
  },
  {
    title: "中國大陸護持",
    description: "適合中國大陸地區護持者使用。",
    tables: [
      {
        title: "帳戶資訊",
        rows: [
          { label: "銀行名稱", value: "中國工商銀行" },
          { label: "銀行戶名", value: "釋法海" },
          { label: "銀行帳號", value: "6212261001095725724" },
          { label: "微信 ID", value: "asd57885788" },
        ],
      },
    ],
    tableCaption: "※建議匯款前先透過微信確認護持方式。※",
  },
];

export function SupportAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isWechatIdOpen, setIsWechatIdOpen] = useState(false);
  const [isCommunityQrOpen, setIsCommunityQrOpen] = useState(false);

  return (
    <>
      <section className={styles.root} aria-labelledby="support-methods-title">
        <div className={styles.inner}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>護持佛學院</p>
            <WatermarkHeading as="h2">護持資訊</WatermarkHeading>
            <p className={styles.intro}>
              推動教育是一條艱辛漫長的道路，需要永續護持佛陀的慧命與精神，我們感恩您的支持與鼓勵。菩提明燈更需要您來傳承，成佛的路上希望有您的加入，祈願大眾一起共襄盛舉!
            </p>
            <SectionOpener />
          </header>

        <div className={styles.accordion}>
          {supportItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `support-panel-${index}`;
            const triggerId = `support-trigger-${index}`;

            return (
              <div className={styles.item} key={item.title}>
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className={styles.trigger}
                  id={triggerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  <span className={styles.triggerText}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.description}>{item.description}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`${styles.plus} ${isOpen ? styles.plusOpen : ""}`}
                  >
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                  id={panelId}
                  role="region"
                >
                  <div className={styles.panelInner}>
                    {item.tables ? (
                      <div
                        className={`${styles.tableGrid} ${
                          item.tables.length === 1 ? styles.singleTableGrid : ""
                        }`}
                      >
                        {item.tables.map((table) => (
                          <table className={styles.supportTable} key={table.title}>
                            <caption>{table.title}</caption>
                            <tbody>
                              {table.rows.map((row) => (
                                <tr key={`${table.title}-${row.label}`}>
                                  <th scope="row">{row.label}</th>
                                  <td>
                                    {row.label === "微信 ID" && row.value === "asd57885788" ? (
                                      <div className={styles.wechatIdCell}>
                                        <button
                                          aria-controls="wechat-id-image"
                                          aria-expanded={isWechatIdOpen}
                                          className={styles.wechatIdButton}
                                          onClick={() => setIsWechatIdOpen((isOpen) => !isOpen)}
                                          type="button"
                                        >
                                          {row.value}
                                        </button>
                                        {isWechatIdOpen ? (
                                          <img
                                            alt="微信 ID QR Code"
                                            className={styles.wechatIdImage}
                                            id="wechat-id-image"
                                            src="/support-volunteer/support-info/wechatid.jpg"
                                          />
                                        ) : null}
                                      </div>
                                    ) : (
                                      row.value
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ))}
                      </div>
                    ) : null}
                    {item.tableCaption ? (
                      <p className={`imageCaption ${styles.tableCaption}`}>
                        {item.tableCaption}
                      </p>
                    ) : null}
                    {item.content ? (
                      <ul className={styles.contentList}>
                        {item.content.map((line, lineIndex) => (
                          <li
                            className={
                              line.tone === "caption"
                                ? `imageCaption ${styles.captionItem}`
                                : ""
                            }
                            key={`${item.title}-${line.label ?? line.text}-${lineIndex}`}
                          >
                            {line.label ? <span>{line.label}：</span> : null}
                            {line.href ? (
                              <a href={line.href} {...getLinkBehavior(line.href)}>
                                {line.text}
                              </a>
                            ) : (
                              line.text
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section className={styles.community} aria-labelledby="community-title">
          <div className={styles.communityText}>
            <h3 id="community-title">加入社群與接收最新消息</h3>
            <p>
              掃描 QR Code 加入台灣噶舉佛學院社群，接收課程、共修、法會、活動與護持消息。
            </p>
            <p className={styles.notice}>此 QR Code 為加入社群使用，非護持付款碼。</p>
          </div>
          <button
            aria-label="放大查看加入社群與接收最新消息 QR Code"
            className={styles.qrPreviewButton}
            onClick={() => setIsCommunityQrOpen(true)}
            type="button"
          >
            <img
              alt="加入社群與接收最新消息 QR Code"
              className={styles.qrImage}
              src="/support-volunteer/support-info/qrcode.png"
            />
            <span>點擊放大</span>
          </button>
        </section>

        <EndMarker />
      </div>
      </section>
      <PosterLightbox
        imageAlt="加入社群與接收最新消息 QR Code"
        imageSrc="/support-volunteer/support-info/qrcode.png"
        isOpen={isCommunityQrOpen}
        onClose={() => setIsCommunityQrOpen(false)}
      />
    </>
  );
}
