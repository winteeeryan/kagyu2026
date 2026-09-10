"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteSearch } from "@/components/search/SiteSearch";
import { navItems, navRouteMap } from "@/data/homepage";
import { getLinkBehavior } from "@/utils/linkBehavior";
import styles from "./Header.module.css";

const getGroupKey = (itemLabel: string, groupTitle: string) =>
  `${itemLabel}:${groupTitle}`;

const getNavHref = (title: string, fallback = "/") =>
  navRouteMap[title] ?? fallback;

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4 4" />
    </svg>
  );
}

export function Header() {
  // Header state controls scroll styling, mobile visibility, and desktop flyouts.
  const pathname = usePathname();
  const isSubpage = pathname !== "/";
  const previousPathname = useRef(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [transitionsReady, setTransitionsReady] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  };

  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const openSearch = () => {
    closeMobileMenu();
    setActiveMenu(null);
    setActiveGroup(null);
    setSearchOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setTransitionsReady(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;
    setMobileOpen(false);
    setOpenMobileSection(null);
    setActiveMenu(null);
    setActiveGroup(null);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop megamenu backdrop */}
      {activeMenu && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setActiveMenu(null);
            setActiveGroup(null);
          }}
        />
      )}
      <header
        className={`${styles.header} ${
          scrolled || activeMenu ? styles.scrolled : styles.top
        } ${activeMenu ? styles.megamenuOpen : ""} ${
          isSubpage ? styles.subpage : ""
        } ${transitionsReady ? "" : styles.noInitialTransition}`}
        onMouseLeave={() => {
          setActiveMenu(null);
          setActiveGroup(null);
        }}
      >
        <div className={`container ${styles.inner}`}>
          {/* Mobile search and menu controls */}
          <div className={styles.mobileHeaderActions}>
            <button
              aria-expanded={searchOpen}
              aria-haspopup="dialog"
              aria-label="搜尋本站"
              className={styles.mobileSearchLink}
              onClick={openSearch}
              type="button"
            >
              <SearchIcon />
            </button>
            <button
              className={styles.menuButton}
              type="button"
              onClick={() => {
                if (mobileOpen) {
                  setOpenMobileSection(null);
                }
                setMobileOpen((value) => !value);
              }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
            >
              <span className={mobileOpen ? styles.menuLineOpen : ""} />
              <span className={mobileOpen ? styles.menuLineOpen : ""} />
              <span className={mobileOpen ? styles.menuLineOpen : ""} />
            </button>
          </div>

          <Link
            className={styles.logo}
            href="/"
            aria-label="Taiwan Kagyu Buddhist Institute home"
            onClick={closeMobileMenu}
          >
            <img
              alt="Taiwan Kagyu Buddhist Institute"
              className={styles.logoDark}
              src="/branding-institute-logo.png"
            />
            <img
              alt="Taiwan Kagyu Buddhist Institute"
              className={styles.logoLight}
              src="/branding-institute-logo.png"
            />
          </Link>

          {/* Desktop navigation and megamenu */}
          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                return (
                  <li
                    className={styles.navItem}
                    key={item.label}
                    onMouseEnter={() => {
                      setActiveMenu(item.label);
                      setActiveGroup(null);
                    }}
                  >
                    <button
                      className={styles.navLink}
                      onFocus={() => {
                        setActiveMenu(item.label);
                        setActiveGroup(null);
                      }}
                      type="button"
                    >
                      {item.label}
                      <span className={styles.chevron}>›</span>
                    </button>
                    <div
                      className={`${styles.dropdown} ${
                        activeMenu === item.label ? styles.dropdownVisible : ""
                      }`}
                    >
                      <div className={styles.dropdownInner}>
                        {item.groups.map((group) => {
                          const groupKey = getGroupKey(item.label, group.title);
                          const groupHref = getNavHref(group.title, item.href);

                          return (
                            <div
                              className={styles.group}
                              key={group.title}
                              onMouseEnter={() =>
                                setActiveGroup(
                                  group.links.length > 0 ? groupKey : null,
                                )
                              }
                            >
                              {group.links.length > 0 ? (
                                <>
                                  <button
                                    className={`${styles.groupTrigger} ${
                                      activeGroup === groupKey
                                        ? styles.groupTriggerActive
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setActiveGroup((current) =>
                                        current === groupKey ? null : groupKey,
                                      )
                                    }
                                    onFocus={() => setActiveGroup(groupKey)}
                                    type="button"
                                  >
                                    <span>{group.title}</span>
                                    <span className={styles.flyoutChevron}>›</span>
                                  </button>
                                  <div
                                    className={`${styles.flyout} ${
                                      activeGroup === groupKey
                                        ? styles.flyoutVisible
                                        : ""
                                    }`}
                                  >
                                    <ul className={styles.flyoutList}>
                                      {group.links.map((link) => {
                                        const linkHref = getNavHref(link, item.href);

                                        return (
                                          <li key={link}>
                                            <Link
                                              href={linkHref}
                                              {...getLinkBehavior(linkHref)}
                                            >
                                              {link}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </>
                              ) : null}
                              {group.links.length === 0 ? (
                                <Link
                                  className={styles.groupLeaf}
                                  href={groupHref}
                                  {...getLinkBehavior(groupHref)}
                                >
                                  {group.title}
                                </Link>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button
              aria-expanded={searchOpen}
              aria-haspopup="dialog"
              aria-label="搜尋本站"
              className={styles.searchLink}
              onClick={openSearch}
              type="button"
            >
              <SearchIcon />
            </button>
            <Link
              className={styles.ctaButton}
              href="https://www.kagyu.org.tw/tem/data/application.doc"
              {...getLinkBehavior("https://www.kagyu.org.tw/tem/data/application.doc")}
            >
              上課報名
            </Link>
            <Link
              className={styles.ctaButton}
              href="https://p.ecpay.com.tw/0D6EAD8"
              {...getLinkBehavior("https://p.ecpay.com.tw/0D6EAD8")}
            >
              線上捐款
            </Link>
          </div>
        </div>

        {/* Mobile accordion navigation */}
        <div
          className={`${styles.mobilePanel} ${
            mobileOpen ? styles.mobileOpen : ""
          }`}
          id="mobile-nav"
        >
          <nav className="container" aria-label="Mobile" key={pathname}>
            <div className={styles.mobileActions}>
              <Link
                className={`${styles.ctaButton} ${styles.mobileCtaButton}`}
                href="https://www.kagyu.org.tw/tem/data/application.doc"
                {...getLinkBehavior("https://www.kagyu.org.tw/tem/data/application.doc")}
                onClick={closeMobileMenu}
              >
                上課報名
              </Link>
              <Link
                className={`${styles.ctaButton} ${styles.mobileCtaButton}`}
                href="https://p.ecpay.com.tw/0D6EAD8"
                {...getLinkBehavior("https://p.ecpay.com.tw/0D6EAD8")}
                onClick={closeMobileMenu}
              >
                線上捐款
              </Link>
            </div>
            {navItems.map((item) => (
              <details
                className={styles.mobileGroup}
                key={item.label}
                open={openMobileSection === item.label}
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenMobileSection((current) =>
                      current === item.label ? null : item.label,
                    );
                  }}
                >
                  {item.label}
                </summary>
                {item.groups.map((group) => (
                  <div
                    className={`${styles.mobileGroupBody} ${
                      group.links.length === 0 ? styles.mobileLeafBody : ""
                    }`}
                    key={group.title}
                  >
                    {group.links.length > 0 ? (
                      <p>{group.title}</p>
                    ) : (
                      <Link
                        className={styles.mobileLeaf}
                        href={getNavHref(group.title, item.href)}
                        {...getLinkBehavior(getNavHref(group.title, item.href))}
                        onClick={closeMobileMenu}
                      >
                        {group.title}
                      </Link>
                    )}
                    {group.links.length > 0 ? (
                      <ul>
                        {group.links.map((link) => (
                          <li key={link}>
                            <Link
                              href={getNavHref(link, item.href)}
                              {...getLinkBehavior(getNavHref(link, item.href))}
                              onClick={closeMobileMenu}
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </details>
            ))}
          </nav>
        </div>
      </header>
      <SiteSearch mode="overlay" onClose={closeSearch} open={searchOpen} />
    </>
  );
}
