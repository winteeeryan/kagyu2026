import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import {
  getIncenseCategories,
  getIncenseCategory,
  getIncenseProducts,
} from "@/data/charityShop";
import styles from "@/app/subpage.module.css";
import pageStyles from "../../page.module.css";

type IncenseCategoryPageProps = {
  params: Promise<{
    incenseSlug: string;
  }>;
};

const incenseBanner = "/support-volunteer/charity-shop/charityshopbanner001.png?v=202608042241";

export function generateStaticParams() {
  return getIncenseCategories().map((category) => ({
    incenseSlug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: IncenseCategoryPageProps): Promise<Metadata> {
  const { incenseSlug } = await params;
  const category = getIncenseCategory(incenseSlug);

  if (!category) {
    return {
      title: "香品 | 義賣商店 | Kagyu",
    };
  }

  return {
    title: `${category.title} | 香品 | 義賣商店 | Kagyu`,
    description: `義賣商店香品分類：${category.title}。`,
  };
}

export default async function Page({ params }: IncenseCategoryPageProps) {
  const { incenseSlug } = await params;
  const category = getIncenseCategory(incenseSlug);
  const incenseCategories = getIncenseCategories();

  if (!category) {
    notFound();
  }

  const products = getIncenseProducts(category);

  return (
    <main className={`${styles.main} ${pageStyles.page}`}>
      <section className={pageStyles.bannerHero} aria-label="香品">
        <img alt="" className={pageStyles.bannerImage} src={incenseBanner} />
      </section>

      <div className={pageStyles.opener}>
        <SectionOpener />
      </div>

      <nav className={pageStyles.categorySwitch} aria-label="香品分類">
        {incenseCategories.map((item) => (
          <Link
            aria-current={item.slug === category.slug ? "page" : undefined}
            className={pageStyles.switchLink}
            href={item.href}
            key={item.slug}
            rel="noreferrer"
            target="_blank"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <section className={pageStyles.productGrid} aria-label={`${category.title} 商品`}>
        {products.map((product, index) => (
          <Link className={pageStyles.productCard} href={product.href} key={product.slug} rel="noreferrer" target="_blank">
            <div className={pageStyles.productMedia}>
              {product.image ? (
                <img alt={product.title} className={pageStyles.productImage} src={product.image} />
              ) : (
                <div className={pageStyles.productPlaceholder} aria-hidden="true">
                  <span>{category.title}</span>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                </div>
              )}
            </div>
            <div className={pageStyles.productContent}>
              <h2>{product.title}</h2>
            </div>
          </Link>
        ))}
      </section>

      <EndMarker />

      <nav className={pageStyles.pageFooterNavigation} aria-label="香品頁面導覽">
        <Link className={pageStyles.pageFooterNavigationLink} href="/support-volunteer/charity-shop/incense">
          <span className={pageStyles.pageFooterNavigationTitle}>返回上頁</span>
        </Link>
      </nav>
    </main>
  );
}
