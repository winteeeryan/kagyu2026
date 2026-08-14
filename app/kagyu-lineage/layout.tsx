import type { ReactNode } from "react";
import { LineageTermAutoLinks } from "./_components/LineageTermAutoLinks";

export default function KagyuLineageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <LineageTermAutoLinks />
    </>
  );
}
