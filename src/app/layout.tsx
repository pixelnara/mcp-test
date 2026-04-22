import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "당근마켓 프로토타입",
  description: "당근마켓 디자인 시스템 기반 프로토타입",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
