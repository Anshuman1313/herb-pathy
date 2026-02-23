import { cooper, roslindale } from "../fonts";
import { milkshake } from "../fonts";

export default function CakeLayout({ children } : {children: React.ReactNode}) {
  return (
    <section className={`${cooper.variable} ${milkshake.variable} ${roslindale.variable}`}>
      {children}
    </section>
  );
}