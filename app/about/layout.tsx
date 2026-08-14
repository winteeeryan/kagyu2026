import type { ReactNode } from "react";
import { AboutKarmapaTermAutoLinks } from "./_components/AboutKarmapaTermAutoLinks";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <AboutKarmapaTermAutoLinks />
    </>
  );
}
