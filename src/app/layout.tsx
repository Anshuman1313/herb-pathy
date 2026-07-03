import type { Metadata } from "next";
import { Crimson_Text, Geist, Geist_Mono,Inter } from "next/font/google";
import "./globals.css";
import { cooper, milkshake, roslindale } from "./fonts";

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
      <body
        className={`${geistSans.variable} ${crimson.variable} ${geistMono.variable} ${inter.variable} ${milkshake.variable} ${cooper.variable} ${roslindale.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
