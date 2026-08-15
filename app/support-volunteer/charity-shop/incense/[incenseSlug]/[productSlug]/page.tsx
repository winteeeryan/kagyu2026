import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import {
  getCharityShopRelatedProducts,
  getIncenseCategories,
  getIncenseProduct,
  getIncenseProducts,
} from "@/data/charityShop";
import styles from "@/app/subpage.module.css";
import pageStyles from "../../../page.module.css";
import { ProductDescriptionDisclosure } from "./ProductDescriptionDisclosure";
import { ProductStickyOrder } from "./ProductStickyOrder";

type IncenseProductPageProps = {
  params: Promise<{
    incenseSlug: string;
    productSlug: string;
  }>;
};

export function generateStaticParams() {
  return getIncenseCategories().flatMap((category) =>
    getIncenseProducts(category).map((product) => ({
      incenseSlug: category.slug,
      productSlug: product.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: IncenseProductPageProps): Promise<Metadata> {
  const { incenseSlug, productSlug } = await params;
  const result = getIncenseProduct(incenseSlug, productSlug);

  if (!result) {
    return {
      title: "香品 | 義賣商店 | Kagyu",
    };
  }

  return {
    title: `${result.product.title} | ${result.category.title} | 義賣商店 | Kagyu`,
    description: `義賣商店香品：${result.product.title}。`,
  };
}

export default async function Page({ params }: IncenseProductPageProps) {
  const { incenseSlug, productSlug } = await params;
  const result = getIncenseProduct(incenseSlug, productSlug);

  if (!result) {
    notFound();
  }

  const { category, product } = result;
  const productCode = product.code ?? product.slug;
  const productDisplayTitle = product.shortTitle ?? product.title;
  const productPageImage = product.productImage ?? product.image;
  const productDescription =
    product.description ??
    "此商品為義賣商店香品單品。請購送出後，將由佛學院人工確認數量、取貨方式與結緣資訊。";
  const productSummary = product.summary ?? productDescription;
  const offeringLabel = product.offeringLabel ?? "結緣金額請洽佛學院";
  const relatedProducts = getCharityShopRelatedProducts(product.href);

  return (
    <main className={`${styles.main} ${pageStyles.page} ${pageStyles.productDetailPage}`}>
      <div className={pageStyles.productDetailShell}>
        <div className={pageStyles.opener}>
          <SectionOpener />
        </div>

        <Link className={pageStyles.productBackLink} href={category.href}>
          返回商品列表
        </Link>

        <section className={pageStyles.productHero} aria-labelledby="product-title">
          <div className={pageStyles.productImagePanel}>
            {productPageImage ? (
              <img alt={product.title} className={pageStyles.productHeroImage} src={productPageImage} />
            ) : (
              <div className={pageStyles.productPlaceholder} aria-hidden="true">
                <span>{category.title}</span>
                <strong>{productCode}</strong>
              </div>
            )}
          </div>

          <div className={pageStyles.productInfoPanel}>
            <h1 id="product-title">{productDisplayTitle}</h1>
            <p className={pageStyles.productOffering}>{offeringLabel}</p>
            <div className={pageStyles.productRule} />
            <p className={pageStyles.productDescription}>{productSummary}</p>

            {product.description ? (
              <ProductDescriptionDisclosure description={productDescription} />
            ) : null}

            <div className={pageStyles.productQuickOrder}>
              <div>
                <span>商品編號</span>
                <strong>{productCode}</strong>
              </div>
              <div>
                <span>請購方式</span>
                <strong>送出後人工確認</strong>
              </div>
              <a className={pageStyles.primaryOrderButton} href="#purchase-flow">
                請購／結緣
              </a>
              <span
                aria-hidden="true"
                className={pageStyles.stickyOrderTrigger}
                id="product-order-trigger"
              />
            </div>

            <div className={pageStyles.productInlineFlow} aria-label="請購流程">
              <span>請購流程</span>
              <ol>
                <li>
                  <strong>1</strong>
                  <p>選擇數量</p>
                </li>
                <li>
                  <strong>2</strong>
                  <p>填寫資料</p>
                </li>
                <li>
                  <strong>3</strong>
                  <p>人工確認</p>
                </li>
                <li>
                  <strong>4</strong>
                  <p>取貨安排</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className={pageStyles.productCommerceBand} aria-label="推薦香品">
          <div className={pageStyles.relatedProducts}>
            <div className={pageStyles.bandHeading}>
              <span>你可能也喜歡</span>
            </div>
            <div className={pageStyles.relatedGrid}>
              {relatedProducts.map((relatedProduct) => (
                <Link className={pageStyles.relatedCard} href={relatedProduct.href} key={relatedProduct.href}>
                  <div>
                    <img alt={relatedProduct.title} src={relatedProduct.image} />
                  </div>
                  <span>{relatedProduct.categoryTitle}</span>
                  <strong>{relatedProduct.title}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <EndMarker />
      </div>

      <ProductStickyOrder
        categoryTitle={category.title}
        image={productPageImage}
        productTitle={productDisplayTitle}
        triggerId="product-order-trigger"
      />
    </main>
  );
}
