import localFont from "next/font/local";
import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout";

const myFont = localFont({ src: "../../public/fonts/CircularStd-Book.woff2" });

export const metadata: Metadata = {
  title: "SOAL<>ONEST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
