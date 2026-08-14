"use client";

import { useState } from "react";
import { SectionCard } from "@/components/ui/SectionCard";
import styles from "./TeacherTabs.module.css";

const tabs = ["現任師資", "歷任師資"];

const currentTeachers = [
  {
    href: "/about/teachers/khenpo-khechok",
    image: "/about/master001.png",
    name: "尊貴 金剛上師 凱筑堪布",
    title: "現任師資",
  },
  {
    href: "/about/teachers/acharya-chonyi-lhundrup",
    image: "/about/master002.png",
    name: "尊貴 傳承上師 曲尼倫珠阿闍黎",
    title: "現任師資",
  },
  {
    href: "/about/teachers/acharya-pema-rangdrol",
    image: "/about/master003.png",
    name: "尊貴的 貝瑪穰卓阿闍黎",
    title: "現任師資",
  },
];

const formerTeachers = [
  <>
    尊貴 智慧林佛學院首席
    <br />
    堪布札西蔣成仁波切
  </>,
  "尊貴 堪布仁千仁波切",
  "尊貴 堪布慈囊仁波切",
  "尊貴 圖登諾布仁波切",
  "尊貴 噶陀仁珍千寶六世 貝瑪旺晴仁波切",
  "尊貴 堪布吉美仁波切",
  "尊貴 堪布嘎瑪拉布仁波切",
  "尊貴 赤列南佳堪布",
  "尊貴 洛桑滇增堪布",
  "尊貴 金剛上師 旺九堪布（已圓寂）",
  "永明法師",
  "蕭金松教授",
].map((name, index) => ({
  href:
    index === 0
      ? "/about/teachers/tashi-jamchen-rinpoche"
      : index === 1
        ? "/about/teachers/khenpo-rinchen-rinpoche"
        : index === 2
          ? "/about/teachers/khenpo-tsenang-rinpoche"
          : index === 3
            ? "/about/teachers/thubten-norbu-rinpoche"
            : index === 4
              ? "/about/teachers/pema-wangchen-rinpoche"
              : index === 5
                ? "/about/teachers/khenpo-jigme-rinpoche"
                : index === 6
                  ? "/about/teachers/khenpo-karma-rabten-rinpoche"
                  : index === 7
                    ? "/about/teachers/khenpo-trinley-namgyal"
                    : index === 8
                      ? "/about/teachers/khenpo-losang-tenzin"
                      : index === 9
                        ? "/about/teachers/khenpo-wangchuk"
                        : index === 10
                          ? "/about/teachers/master-yongming"
                          : index === 11
                            ? "/about/teachers/professor-hsiao-chin-sung"
                            : undefined,
  id: `former-teacher-${index + 1}`,
  image: `/about/teacher${String(index + 1).padStart(3, "0")}.png`,
  name,
  title: "歷任師資",
}));

export function TeacherTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div aria-label="師資分類" className={styles.tabBar} role="tablist">
        {tabs.map((label, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              aria-controls={`teacher-panel-${index}`}
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              id={`teacher-tab-${index}`}
              key={label}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {label}
            </button>
          );
        })}
      </div>

      <section
        aria-labelledby={`teacher-tab-${activeIndex}`}
        className={styles.panel}
        id={`teacher-panel-${activeIndex}`}
        role="tabpanel"
      >
        {activeIndex === 0 ? (
          <div className={styles.cardGrid}>
            {currentTeachers.map((teacher) => (
              <SectionCard
                href={teacher.href}
                image={teacher.image}
                key={teacher.image}
                subtitle={teacher.title}
                title={teacher.name}
              />
            ))}
          </div>
        ) : (
          <div className={styles.cardGrid}>
            {formerTeachers.map((teacher) => (
              <SectionCard
                href={teacher.href}
                image={teacher.image}
                key={teacher.id}
                subtitle={teacher.title}
                title={teacher.name}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
