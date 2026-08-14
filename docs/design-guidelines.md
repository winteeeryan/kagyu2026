# Design Guidelines

## Section Cards

Use `SectionCard` from `components/ui/SectionCard` as the default reusable card for image-led content under site sections. It preserves the established visual treatment used by the Karmapa cards and About teacher cards.

```tsx
import { SectionCard } from "@/components/ui/SectionCard";

<SectionCard
  href="/target-page"
  image="/path/to/image.jpg"
  subtitle="Supporting label"
  title="Card title"
/>;
```

### Visual Rule

- Use a `3 / 4` image ratio.
- Keep card text left-aligned.
- Use the warm paper background with a thin neutral border.
- Use the dark serif title style at `15.2px`, `400` weight, and deep-red supporting label at `12.48px`.
- On hover or keyboard focus, lift the card by `5px`, strengthen its shadow gently, tint the border deep red, and scale the image to `1.04`.
- Keep layout-specific grid columns and spacing in the parent section rather than inside the shared card.
- For Karmapa-lineage style card grids, use five desktop columns with a `230px` minimum card width and `clamp(0.8rem, 1vw, 1.25rem)` grid gap. Cap the content width to five cards plus four gaps so the grid keeps page margin.

### Tokens

Card styling is centralized in `app/globals.css`. Use the existing `--card-*`, `--color-accent`, `--color-card-title`, and `--font-serif-tc` tokens for bespoke card variants instead of repeating literal values.

## Image Captions

Treat any text line immediately below an image as a caption. Apply the global `imageCaption` utility class rather than defining page-specific typography.

```tsx
<figure>
  <img alt="Description" src="/path/to/image.jpg" />
</figure>
<p className="imageCaption">Caption text</p>
```

### Visual Rule

- Use the `--font-serif-tc` 思源宋體 / Source Han Serif stack.
- Use `--caption-font-size` for responsive sizing.
- Use `--caption-color` for the muted maroon text color.
- Keep captions center-aligned.
- Use the tighter `--caption-letter-spacing`.

## Karmapa Teachings Detail Images

For pages under `/study-practice/dharma-wisdom/karmapa-teachings/[teachingId]`, size the teaching image using the Karmapa lineage portrait treatment and leave generous space before the body text.

```css
.teachingImage {
  margin: clamp(2.5rem, 5vw, 4rem) auto clamp(3.5rem, 7vw, 6rem);
  max-width: 24rem;
}
```

### Visual Rule

- Keep the image centered with a `24rem` maximum width.
- Use the existing card border treatment.
- Preserve `clamp(3.5rem, 7vw, 6rem)` below the image so later body text has sufficient breathing room.

## Support And Volunteer Spacing

For pages in the `護持與志工` section, use `clamp(10rem, 18vw, 15rem)` as the standard vertical spacing between the hero area and body content, and between major body sections.

Apply this spacing at the parent layout level, such as the hero/header bottom margin and the body section grid gap. Do not use smaller mobile overrides unless a specific page has a documented layout exception.

## Support And Volunteer Background

For pages in the `護持與志工` section, use `#f8f8f8` as the page-level background color. Apply it to the route-level page wrapper and the first full-page section wrapper when both exist, so the entire viewport and body area remain visually consistent.

## Charity Shop Category Banners

For category pages under `/support-volunteer/charity-shop/[categorySlug]`, use a full-width banner at the top of the page instead of a text hero.

```css
.page {
  padding-top: 0;
}

.bannerHero {
  margin: clamp(1.5rem, 3vw, 2.75rem) auto clamp(3rem, 6vw, 5rem);
  width: 100%;
}

.bannerImage {
  display: block;
  height: auto;
  object-fit: cover;
  padding-top: 2px;
  width: 100%;
}
```

### Visual Rule

- Remove the text hero content on banner-backed category pages: no back link, English eyebrow, category title, or item count above the banner.
- Keep the banner full browser width, without a constrained content max-width or side padding.
- Use `clamp(1.5rem, 3vw, 2.75rem)` as the standard top distance above the banner.
- Use `clamp(3rem, 6vw, 5rem)` as the standard space below the banner before the product/category navigation and cards.
- Keep `padding-top: 2px` on the banner image, matching the Karmapa banner placement treatment.

## Charity Shop Product Pages

Use `/support-volunteer/charity-shop/incense/tsurphu/001` as the product-page reference format for all future charity-shop product pages.

### Page Structure

- Keep the route-level wrapper on the `護持與志工` background color `#f8f8f8`.
- Show a small top link labeled `返回商品列表` above the product hero.
- Use a two-column product hero on desktop: left product image, right product information. Collapse to one column below `980px`.
- Do not add a category eyebrow above the product title on product pages.
- Keep the right column editorial and unboxed: title, offering amount, thin divider, short description, expandable details, purchase CTA row, and inline purchase flow.
- Place `EndMarker` after the product content. Do not add footer navigation on product pages unless explicitly requested.

### Product Image

- Use one large product image, not a thumbnail gallery, unless a later product has a real multi-image requirement.
- The image panel uses `rgb(var(--color-paper))`, `var(--card-border)`, and `8px` border radius.
- On desktop, the image panel is sticky:

```css
.productImagePanel {
  position: sticky;
  top: clamp(5.5rem, 9vw, 7rem);
}
```

- Use `min-height: min(44rem, calc(100vh - 8rem))` for the sticky image panel and keep the image `object-fit: contain`.
- Disable sticky behavior below `980px` by switching the panel back to `position: relative` and `top: auto`.
- Prefer product images with a clean light background, enough resolution for large display, complete product edges, and a horizontal composition for long incense products.

### Product Information

- Product title uses `var(--font-serif-tc)`, `rgb(var(--color-card-title))`, `400` weight, and a single-line desktop treatment when the title length allows.
- Offering amount uses the guideline accent red `rgb(var(--color-accent))`.
- The short description appears before the expandable detail control.
- Product details use an expandable control:
  - Initial label: `香品詳情 +`
  - Expanded ending label: `收起詳情 -`
  - `+` and `-` use `#bd1517`.
  - The open label disappears after expansion; the close label appears after the detail text.
  - Hover/focus uses the same left-to-right underline animation as charity-shop card text.

### Purchase UI

- The visible purchase row contains product code, purchase handling text, and the primary `請購／結緣` button.
- Product code may differ from the URL slug. For example, route `/001` can display code `C0001`.
- The `請購／結緣` button uses `rgb(var(--color-accent))`, white text, and the same pill radius used by existing site buttons (`border-radius: 999px`).
- Inline purchase flow appears in the product information column as a quiet text list:
  1. `選擇數量`
  2. `填寫資料`
  3. `人工確認`
  4. `取貨安排`

### Sticky Purchase CTA

- Product pages may use a compact floating purchase CTA, but it must not appear immediately on page load.
- Show the floating CTA only after the user has scrolled past the in-page `請購／結緣` button.
- Place the floating CTA at the lower-right as a compact card, not as a full-width bottom bar, so it does not block reading.
- Hide it again when the in-page purchase button is visible.
- When hidden, it must not receive keyboard focus.

### Related Products

- If showing recommendations, use a quiet `你可能也喜歡` section below the hero.
- The heading should only use the small label `你可能也喜歡`; do not add a second larger heading with the same text.
- Use thin dividers and restrained image-led product links. Avoid equal-weight boxed cards that make the page feel templated.

## Support And Volunteer Guide Nav

Use `SupportGuideNav` from `components/support/SupportGuideNav` for `本頁導覽` blocks in the `護持與志工` section. This preserves the guide-nav treatment established on the `功德海` page.

```tsx
import { SupportGuideNav } from "@/components/support/SupportGuideNav";

<SupportGuideNav
  items={[
    {
      number: "01",
      title: "Section title",
      href: "#section-id",
      ariaLabel: "前往 Section title",
    },
  ]}
/>;
```

### Visual Rule

- Place the guide nav outside shared article `.prose` wrappers so article link and numbered-list styles do not affect it.
- Keep the `本頁導覽` title in the dark-red serif style.
- Use a max-width `760px` content column with thin warm divider lines.
- Use serif guide links, no underline, and the downward line-arrow indicator.
- Use deep-red hover and keyboard-focus states for the row, number, text, and arrow.
- Include two-digit numbers when the destination order is part of the page structure, as on `功德海`; omit numbers for label-only navigation.

## Page Footer Navigation

Article-end and page-end navigation should share one quiet treatment across `articleNav`, `TeachersArticleNav`, `pageFooterNavigation`, and `LineageArticleNav`.

- Do not use a top divider line above these navigations.
- Main title text must be set directly on the title element with deep red `#70231e`; hover and keyboard focus use `#a62c24`.
- Small direction labels use warm text gray `rgba(47, 41, 35, 0.52)` and shift to `rgba(47, 41, 35, 0.68)` on hover or focus.
- Use the established serif display face, regular weight, and restrained letter spacing.
- Match the `articleNav` scale from saints biography pages: label `0.62rem`, title `clamp(0.88rem, 1.15vw, 1rem)`.
- Keep underline effects minimal and only on the active link text itself when a local page pattern already uses it.
- Treat these as page navigation, not the global site footer. Do not reuse global footer colors or social-link styling here.

## Article H4 And Lists

For article pages in the Karmapa, About, and Kagyu Lineage sections, use the shared prose rules in `app/subpage.module.css`. Do not create page-specific H4 or list spacing unless a layout has a clear exception.

### H4 Spacing Rule

- H4 titles use the shared serif heading style.
- H4 titles must have generous breathing room above and below.
- Keep at least `3rem` between an H4 title and its following body paragraph. Karmapa Teachings pages apply this through their local `.teachingProse h4` bottom margin.
- H4 after a numbered or bullet list receives extra top spacing so it does not visually collide with the list.
- Keep H4 titles centered, while body text remains left-aligned.

### Numbered List Rule

- Numbered lists use the `參學規則` treatment as the standard article pattern.
- Each numbered item has a deep-red left rule using `--color-accent`.
- The counter appears as a small deep-red two-digit number, such as `01`, `02`, `03`.
- Numbered list items must have enough vertical gap to avoid looking compressed.

### Bullet List Rule

- Bullet lists remain simple and left-aligned.
- Bullet lists must have clear spacing above the list and between items.
- Text following a bullet or numbered list must have additional top spacing.
