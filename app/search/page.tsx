import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPageClient } from "./SearchPageClient";

export const metadata: Metadata = {
  title: "搜尋本站 | Kagyu",
  description: "搜尋噶瑪噶舉基金會網站內容。",
};

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchPageClient />
    </Suspense>
  );
}
