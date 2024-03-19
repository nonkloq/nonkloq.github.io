import type { Metadata } from "next";
import { Noto_Sans_Mono as PageFont } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';

import "@/styles/globals.css";

const pagefont = PageFont({
  // weight: ["400"],
  subsets: ['cyrillic']  
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
        <GoogleAnalytics gaId="G-QY1XBQ50GP"/>
      </head>

      <body className={pagefont.className}  suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
