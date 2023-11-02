import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online shopping with Shrihari",
  description: "shri hari project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://www.koskii.com/cdn/shop/files/Asset_3_32x32.png?v=1614357021"
        type="image/x-icon"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
