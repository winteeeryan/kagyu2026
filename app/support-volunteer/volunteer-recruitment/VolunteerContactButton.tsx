"use client";

import { useState } from "react";
import { instituteCenters } from "@/data/centers";
import styles from "./page.module.css";

export function VolunteerContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.volunteerContactsDisclosure}>
      <button
        aria-controls="volunteer-center-contacts"
        aria-expanded={isOpen}
        className={styles.registrationButton}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? "收起各中心聯絡方式" : "查看各中心聯絡方式"}
      </button>
      {isOpen ? (
        <address
          aria-label="各中心聯絡方式"
          className={styles.volunteerCenterContacts}
          id="volunteer-center-contacts"
        >
          {instituteCenters.map((center) => (
            <p key={center.title}>
              <strong>{center.title}</strong>
              {center.contact.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          ))}
        </address>
      ) : null}
    </div>
  );
}
