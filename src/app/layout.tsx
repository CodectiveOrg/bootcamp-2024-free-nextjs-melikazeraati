import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "رزرو",
  description: "سامانه جامع رزرو آنلاین",
};

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
