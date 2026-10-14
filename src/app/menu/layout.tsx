import { Metadata } from "next";
import { cooper, roslindale } from "../fonts";
import { milkshake } from "../fonts";
export const metadata: Metadata = {
  title: "Cake Menu | Custom Cakes & Desserts | Dream Slice Studio",
  description:
    "Explore the Dream Slice Studio cake menu featuring handcrafted custom cakes and delicious desserts for birthdays, weddings, celebrations, and special occasions.",
};
export default function CakeLayout({ children } : {children: React.ReactNode}) {
  return (
    <section className={`${cooper.variable} ${milkshake.variable} ${roslindale.variable}`}>
      {children}
    </section>
  );
}