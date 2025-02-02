import type { Metadata } from "next";
import {
  Noto_Sans_Mono as PageFontMono,
  Cantarell as PageFontText,
} from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/styles/globals.css";

const mono = PageFontMono({
  //weight: ["500"],
  variable: "--font-mono",
  subsets: ["cyrillic"],
});

const normal = PageFontText({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-norm",
});

export const metadata: Metadata = {
  title: "Satz",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svgs/favicon.svg" type="image/svg" />
        <GoogleAnalytics gaId="G-QY1XBQ50GP" />
      </head>

      <body
        className={`${mono.variable} ${normal.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
