import type { ReactNode } from "react";
import { KarmapaTermAutoLinks } from "./_components/KarmapaTermAutoLinks";

export default function LineageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <KarmapaTermAutoLinks />
    </>
  );
}
