import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  charityShopCategories,
  getCharityShopItemCount,
  getCharityShopCategory,
  getProductSlug,
} from "@/data/charityShop";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import styles from "@/app/subpage.module.css";
import pageStyles from "../page.module.css";

type CategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

const categoryBanners: Partial<Record<"incense" | "malas" | "others", string>> = {
  incense: "/support-volunteer/charity-shop/charityshopbanner001.png?v=202608042241",
  malas: "/support-volunteer/charity-shop/charityshopbanner002.png?v=202608042242",
  others: "/support-volunteer/charity-shop/charityshopbanner003.png?v=202608042244",
};

export function generateStaticParams() {
  return charityShopCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCharityShopCategory(categorySlug);

  if (!category) {
    return {
      title: "義賣商店 | Kagyu",
    };
  }

  return {
    title: `${category.title} | 義賣商店 | Kagyu`,
    description: `義賣商店 ${category.title} 分類商品。`,
  };
}

export default async function Page({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCharityShopCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const bannerSrc = categoryBanners[category.slug];
  const productCardClassName =
    category.slug === "incense"
      ? `${pageStyles.productCard} ${pageStyles.incenseProductCard}`
      : pageStyles.productCard;

  return (
    <main className={`${styles.main} ${pageStyles.page}`}>
      {bannerSrc ? (
        <section className={pageStyles.bannerHero} aria-label={category.title}>
          <img
            alt=""
            className={pageStyles.bannerImage}
            src={bannerSrc}
          />
        </section>
      ) : (
        <section className={pageStyles.hero}>
          <Link className={pageStyles.backLink} href="/support-volunteer/charity-shop">
            義賣商店
          </Link>
          <p className={pageStyles.eyebrow}>CHARITY SHOP</p>
          <h1>{category.title}</h1>
          <p className={pageStyles.summary}>{category.items.length} 件商品</p>
        </section>
      )}

      <div className={pageStyles.opener}>
        <SectionOpener />
      </div>

      <nav className={pageStyles.categorySwitch} aria-label="義賣商店分類">
        {charityShopCategories.map((item) => (
          <Link
            aria-current={item.slug === category.slug ? "page" : undefined}
            className={pageStyles.switchLink}
            href={item.href}
            key={item.slug}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <section className={pageStyles.productGrid} aria-label={`${category.title} 商品`}>
        {category.items.map((item, index) => {
          const cardContent = (
            <>
              <div className={pageStyles.productMedia}>
                {item.image ? (
                  <img alt={item.title} className={pageStyles.productImage} src={item.image} />
                ) : (
                  <div className={pageStyles.productPlaceholder} aria-hidden="true">
                    <span>{category.title}</span>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                  </div>
                )}
              </div>
              <div className={pageStyles.productContent}>
                <h2>
                  {item.title}
                  {category.slug === "incense" ? (
                    <sup>{getCharityShopItemCount(item)}</sup>
                  ) : null}
                </h2>
              </div>
            </>
          );

          const itemHref =
            item.href ??
            (category.slug === "malas" || category.slug === "others"
              ? `${category.href}/${getProductSlug(index)}`
              : undefined);

          return itemHref ? (
            <Link className={productCardClassName} href={itemHref} key={item.title}>
              {cardContent}
            </Link>
          ) : (
            <article className={productCardClassName} key={item.title}>
              {cardContent}
            </article>
          );
        })}
      </section>

      <EndMarker />
    </main>
  );
}
