import type { Metadata } from "next";
import Link from "next/link";
import {
  charityShopCategories,
  getCharityShopCategoryItemCount,
} from "@/data/charityShop";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import supportStyles from "../page.module.css";
import pageStyles from "./page.module.css";

export const metadata: Metadata = {
  title: "義賣商店 | Kagyu",
  description: "噶瑪噶舉基金會義賣商店分類。",
};

export default function Page() {
  return (
    <main className={supportStyles.page}>
      <section className={pageStyles.overviewPage}>
        <header className={pageStyles.overviewHeader}>
          <p className={pageStyles.eyebrow}>護持佛學院</p>
          <WatermarkHeading as="h2">義賣商店</WatermarkHeading>
          <p className={pageStyles.intro}>
            如果我們能夠帶著一個完全清淨的動機來發願，
            <br />
            我們的祈願就不再是一種符號性的象徵，
            <br />
            而是能真正地獲得實現。
          </p>
          <SectionOpener />
        </header>

        <nav className={pageStyles.categoryGrid} aria-label="義賣商店分類">
          {charityShopCategories.map((category) => (
            <Link className={pageStyles.categoryCard} href={category.href} key={category.slug}>
              <div className={pageStyles.categoryMedia}>
                {category.image ? (
                  <img alt="" className={pageStyles.categoryImage} src={category.image} />
                ) : (
                  <div className={pageStyles.categoryPlaceholder} aria-hidden="true">
                    {category.title}
                  </div>
                )}
              </div>
              <div className={pageStyles.categoryContent}>
                <h2>
                  {category.title}
                  <sup>{getCharityShopCategoryItemCount(category)}</sup>
                </h2>
              </div>
            </Link>
          ))}
        </nav>

        <EndMarker />
      </section>
    </main>
  );
}
