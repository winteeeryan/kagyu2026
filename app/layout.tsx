import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "財團法人 噶瑪噶舉基金會",
  description: "財團法人 噶瑪噶舉僅基金會網站",
  icons: {
    icon: "/logo.png?v=20260815",
    shortcut: "/logo.png?v=20260815",
    apple: "/logo.png?v=20260815",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
