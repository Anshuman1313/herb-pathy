import { cooper } from "../fonts";

export default function CakeLayout({ children } : {children: React.ReactNode}) {
  return (
    <section className={cooper.variable}>
      {children}
    </section>
  );
}