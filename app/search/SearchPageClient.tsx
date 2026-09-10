"use client";

import { useSearchParams } from "next/navigation";
import { SiteSearch } from "@/components/search/SiteSearch";

export function SearchPageClient() {
  const searchParams = useSearchParams();
  return <SiteSearch initialQuery={searchParams.get("q") ?? ""} mode="page" />;
}
