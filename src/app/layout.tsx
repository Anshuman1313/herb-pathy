import type { Metadata } from "next";
import { Crimson_Text, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cooper, milkshake, roslindale } from "./fonts";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose what you need
  style: ['normal', 'italic'],
  variable: "--font-crimson",
  // optional
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dream Slice Studio | Crafted Cakes for Every Celebration",
  description:
    "Dream Slice Studio creates beautifully crafted custom cakes for every celebration. From birthdays to weddings, we turn your sweetest ideas into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2XVXY8KWYN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-2XVXY8KWYN');
    `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${crimson.variable} ${geistMono.variable} ${inter.variable} ${milkshake.variable} ${cooper.variable} ${roslindale.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
