"use client";

/**
 * Dream Slice Studio — Landing Page Template
 * -------------------------------------------------------------
 * Rewired to use this project's brand token utility classes
 * (bg-brand-burgundy, text-brand-cream, bg-brand-gold,
 * bg-brand-beige, text-brand-brown) instead of the shadcn
 * semantic tokens (primary/secondary/muted/accent/background).
 *
 * Assumes your tailwind config exposes these as color utilities,
 * e.g.:
 *   colors: {
 *     brand: {
 *       burgundy: "var(--brand-burgundy)",
 *       gold:     "var(--brand-gold)",
 *       cream:    "var(--brand-cream)",
 *       beige:    "var(--brand-beige)",
 *       brown:    "var(--brand-brown)",
 *     }
 *   }
 *
 * Token mapping used below (old semantic -> new brand):
 *   background / card / popover        -> brand-cream (or plain white for cards)
 *   foreground / muted-foreground      -> brand-brown
 *   primary / accent-foreground        -> brand-burgundy
 *   primary-foreground                 -> brand-cream
 *   secondary / ring                   -> brand-gold
 *   secondary-foreground               -> brand-brown
 *   muted / accent / border / input    -> brand-beige
 *
 * Requirements assumed already present in your project:
 *  - shadcn/ui installed (button, card, input, separator)
 *  - lucide-react installed
 *
 * All photography is stubbed with <PlaceholderImage /> — swap the
 * `src` props for your real product photography. Nothing else needs
 * to change.
 * -------------------------------------------------------------
 */

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ShoppingBag,
  ChevronDown,
  ArrowRight,
  Gift,
  Flower2,
  Sparkles,
  HeartHandshake,
  Star,
  Heart,
  Send,
  GiftIcon,
} from "lucide-react";
import Nav2Cake from "../Landing/2Nav";
import Logo from "../DsLogo/Logo";
import LogoStudio from "../DsLogo/LogoStudio";
import Link from "next/link";
import Fssailogo from "../fssailogo";

/* -------------------------------------------------------------- */
/*  Shared bits                                                    */
/* -------------------------------------------------------------- */

function PlaceholderImage({
  label,
  className = "",
  src,
}: {
  label: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label} className={className} />;
  }
  return (
    <div
      className={`flex items-center justify-center bg-brand-beige text-brand-burgundy/60 ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-3 text-center text-xs font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-brand-gold" />
      <span className="text-xs max-md:text-center font-semibold tracking-[0.25em] text-brand-burgundy">
        {children}
      </span>
      <span className="h-px w-10 bg-brand-gold" />
    </div>
  );
}

/* -------------------------------------------------------------- */
/*  Top utility bar                                                 */
/* -------------------------------------------------------------- */

function TopBar() {
  return (
    <div className="hidden bg-brand-burgundy text-brand-cream md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          <span>Chandigarh, India</span>
        </div>
        <p className="tracking-wide">
          Bespoke Cakes &nbsp;|&nbsp; Premium Desserts &nbsp;|&nbsp; Corporate Gifting
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <span>hello@dreamslicestudio.com</span>
          </div>
          <div className="flex items-center gap-3 text-brand-cream/80">
            {/* <Instagram className="h-3.5 w-3.5" />
            <Facebook className="h-3.5 w-3.5" />
            <Linkedin className="h-3.5 w-3.5" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- */
/*  Primary nav                                                     */
/* -------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Our Cakes", href: "#cakes", dropdown: true },
  { label: "Desserts", href: "#desserts" },
  { label: "Corporate Gifting", href: "#corporate" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-beige bg-white/95 backdrop-blur">
      <TopBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="shrink-0">
<img src="dslogo.jpeg" width={120} height={120}/>

          {/* <span className="block font-serif text-2xl italic text-brand-burgundy">
            Dream Slice
          </span>
          <span className="block text-[10px] font-semibold tracking-[0.35em] text-brand-brown/80">
            STUDIO
          </span> */}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-burgundy ${
                link.active
                  ? "border-b-2 border-brand-burgundy pb-1 text-brand-burgundy"
                  : "text-brand-brown/80"
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-brand-brown/70 transition-colors hover:text-brand-burgundy"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative text-brand-brown/70 transition-colors hover:text-brand-burgundy"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-brown">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------- */
/*  Hero                                                            */
/* -------------------------------------------------------------- */

function  Hero() {
  return (
    <section className="overflow-hidden  relative  z-50">
      <img src="/hero5.webp" alt="hero" className="absolute w-full z-50 max-md:h-full max-md:object-cover" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24  z-100 relative  h-155 ">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-brand-gold hidden">
            DREAM SLICE STUDIO
          </p>
          <h1 className="font-serif text-[44px] italic leading-[1.05] text-brand-burgundy sm:text-6xl">
            Crafting Sweet
            <br />
            Moments.
          </h1>
          <p className="mt-6 max-w-md max-md:pr-8 text-sm leading-relaxed text-brand-brown/70  text-pretty">
            Bespoke cakes, premium desserts &amp; thoughtful gifting crafted
            for life&apos;s sweetest celebrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={"/our-menu"}>
            <Button  className="rounded-none bg-brand-burgundy cursor-pointer px-7 py-6 text-xs font-semibold tracking-wide text-brand-cream hover:bg-brand-burgundy/90">
              EXPLORE OUR CAKES <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
            <Link href={"/corporate-gifting"}>
            <Button
              variant="outline"
              className="rounded-none cursor-pointer border-brand-burgundy px-7 py-6 text-xs font-semibold tracking-wide text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-cream"
            >
              CORPORATE GIFTING <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>

       {/* <PlaceholderImage
  label="Signature chocolate berry cake — hero photograph"
  src="/menu-cakes/CheeseCake/LotusBiscoffCheesecake_converted.avif"
  className="aspect-[6/5] w-full rounded-2xl border border-brand-beige object-cover hidden"
/> */}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Signature collection                                            */
/* -------------------------------------------------------------- */
const COLLECTION = [
  { id: "cakes", title: "Custom Cakes", subtitle: "Designed for your moment.", src: "/ds/cs2.webp", dark: false },
  { id: "luxury", title: "Luxury Cakes", subtitle: "Indulgence, layered to perfection.", src: "/ds/lx1.webp", dark: false },
  { id: "desserts", title: "Desserts", subtitle: "Everyday indulgence, beautifully made.", src: "/ds/ds1.webp", dark: false },
  { id: "gifting", title: "Corporate Gifting", subtitle: "Thoughtfully crafted for your people.", src: "/ds/gift1.webp", dark: false },
];

function SignatureCollection() {
  return (
    <section className="bg-brand-cream pt-16" id="cakes">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow>OUR SIGNATURE COLLECTION</SectionEyebrow>
        <Heart className="mx-auto mb-10 h-4 w-4 fill-brand-gold text-brand-gold" />

        <div className="grid max-md:grid-cols-1 grid-cols-2 gap-5 lg:grid-cols-4">
          {COLLECTION.map((item) => (
            <Card
              key={item.title}
              className={`overflow-hidden rounded-xl border-brand-beige p-0 ${
                item.dark ? "bg-brand-burgundy text-brand-cream" : "bg-white"
              }`}
            >
              <PlaceholderImage
                label={item.title}
                src={item.src}
                className={`aspect-[3/3] object-cover ${item.dark ? "bg-brand-burgundy/80" : ""}`}
              />
              <CardContent className="p-5 max-md:p-1 text-center">
                <h3
                  className={`font-serif text-lg max-md:text-pretty ${
                    item.dark ? "text-brand-cream" : "text-brand-burgundy"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-1 text-xs ${
                    item.dark ? "text-brand-cream/80" : "text-brand-brown/70"
                  }`}
                >
                  {item.subtitle}
                </p>
                <Link
                  href={`${item.id === "gifting" ? '/corporate-gifting' : `/menu#${item.id}` }`}
                  className={`mt-3 inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide ${
                    item.dark ? "text-brand-gold" : "text-brand-burgundy"
                  }`}
                >
                  EXPLORE <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Banner () {
  return (
    <div className="w-full h-100 bg-[url(/banner2.png)] object-cover">

    </div>
  )
}

/* -------------------------------------------------------------- */
/*  Corporate gifting band                                          */
/* -------------------------------------------------------------- */

function CorporateBand() {
  return (
    <section className="bg-brand-burgundy py-14 text-brand-cream" id="corporate">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <PlaceholderImage
          label="Corporate hamper — gift box with jars and thank-you card"
          className="aspect-[4/3] w-full rounded-xl"
          src="/menu-cakes/CheeseCake/LotusBiscoffCheesecake_converted.avif"
        />
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-gold">
            <Gift className="h-4 w-4" />
            CORPORATE GIFTING
          </div>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Thoughtfully Crafted.
            <br />
            Beautifully Presented.
          </h2>
          <p className="mt-4 text-sm text-brand-cream/80">
            Corporate hampers &nbsp;•&nbsp; Festive gifting &nbsp;•&nbsp; Client
            gifts &nbsp;•&nbsp; Employee celebrations
          </p>
          <Button className="mt-7 rounded-none bg-brand-gold px-7 py-6 text-xs font-semibold tracking-wide text-brand-brown hover:bg-brand-gold/90">
            EXPLORE CORPORATE GIFTING <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Story / values                                                  */
/* -------------------------------------------------------------- */

const VALUES = [
  { icon: Flower2, title: "BESPOKE", copy: "Designed around your story." },
  { icon: Sparkles, title: "PREMIUM", copy: "Quality ingredients. Exceptional taste." },
  { icon: HeartHandshake, title: "CRAFTED", copy: "Thoughtful design in every detail." },
];

function StorySection() {
  return (
    <section className="relative overflow-clip w-full h-140 bg-brand-cream" >
      <img src={"/ds/gift1.webp"} className="absolute size-full object-cover top-30"/>

    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Testimonials                                                    */
/* -------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "The cake was absolutely stunning and tasted even better! It made our celebration so special.",
    name: "Priya S.",
  },
  {
    quote:
      "Beautifully crafted hampers and on-time delivery. Perfect for our corporate festive gifting.",
    name: "Rohan Mehta",
  },
  {
    quote:
      "The custom cake exceeded our expectations. Every detail was just perfect.",
    name: "Neha & Arjun",
  },
];

function Testimonials() {
  return (
    <section className="bg-brand-beige/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow>WHAT OUR CLIENTS SAY</SectionEyebrow>
        <Heart className="mx-auto mb-10 h-4 w-4 fill-brand-gold text-brand-gold" />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="border-brand-beige bg-white">
              <CardContent className="p-6 text-center">
                <span className="font-serif text-3xl text-brand-gold">&ldquo;</span>
                <div className="mb-3 flex justify-center gap-0.5 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand-gold" />
                  ))}
                </div>
                <p className="text-sm italic text-brand-brown/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-xs font-semibold text-brand-burgundy">
                  — {t.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Instagram-style gallery                                         */
/* -------------------------------------------------------------- */

const GALLERY_LABELS = [
  "Berry cupcakes",
  "Wrapped gift box",
  "Chocolate birthday cake",
  "Cake pops",
  "Red velvet slice",
  "Blueberry cupcakes",
];

function Gallery() {
  return (
    <section className="bg-brand-cream py-16" id="gallery">
      <div className="mx-auto max-w-7xl px-6">
        <SectionEyebrow>FOLLOW US @DREAMSLICESTUDIO</SectionEyebrow>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY_LABELS.map((label) => (
            <PlaceholderImage
              key={label}
              label={label}
              className="aspect-square w-full rounded-lg border border-brand-beige"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Footer                                                          */
/* -------------------------------------------------------------- */

const QUICK_LINKS = [
  "Home",
  "Our Cakes",
  "Desserts",
  "Corporate Gifting",
  "Our Story",
  "Contact Us",
];

const SERVICES = [
  "Custom Cakes",
  "Desserts & Bakes",
  "Corporate Gifting",
  "Baking Classes",
];

export function Footer() {
  return (
    <footer className="bg-brand-burgundy text-brand-cream" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-md:-translate-x-4">
            <Logo hexcolor2="#f9eed7" height="h-30" />
            {/* <span className="block font-serif text-2xl italic">Dream Slice</span>
            <span className="block text-[10px] font-semibold tracking-[0.35em] text-brand-cream/80">
              STUDIO
            </span>
            <p className="mt-3 text-xs italic text-brand-cream/70">
              Crafting sweet moments.
            </p> */}
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-brand-gold">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm text-brand-cream/85">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-brand-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-brand-gold">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-brand-cream/85">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <Heart className="h-3 w-3 text-brand-gold" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-brand-gold">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-sm text-brand-cream/85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />

                Sector 23, Chandigarh 
                </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" /> Corporate office : 707, 7th Floor, Vista Tower 2, E-302, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 140307
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                +91 62842 19963
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold" />
                info@dreamslicestudio.com
              </li>
              <div className="flex gap-2 items-center text-brand-gold">

            <p className="font-medium text-brand-gold  w-12"><Fssailogo/></p>
                         <p className="mt-1 text-xs text-brand-bold">
                License No | 22126676000886
              </p>
            {/* <a target="blank" href="google.com"  className="pt-px" >
            <IconXTwitter size="22"/>
            </a> */}
              </div>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-brand-cream/15" />

        <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
          <div className="relative ">
            <h4 className="mb-1 text-xs font-semibold tracking-[0.2em] text-brand-gold">
              NEWSLETTER
            </h4>
            <p className="text-xs text-brand-cream/70">
              Subscribe to get updates on new collections and offers.
            </p>
            <div className="flex items-center gap-2  text-brand-gold absolute -bottom-7 max-md:relative max-md:pt-2 max-md:bottom-0">

                        <a target="blank" href="https://www.instagram.com/dreamslicestudio/" className="pt-px" >
             <IconInstagram size="22"/>
            </a>
            <a target="blank" href="https://www.linkedin.com/company/dream-slice-studio/" className="pt-px" >
             <IconLinkedin size="22"/> 
            </a>
            </div>
          </div>
          <form className="flex max-w-sm gap-2 sm:ml-auto" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-brand-cream/20 bg-brand-cream/10 text-brand-cream placeholder:text-brand-cream/50"
            />
            <Button size="icon" className="shrink-0 bg-brand-gold text-brand-brown hover:bg-brand-gold/90">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-brand-cream/15 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-brand-cream/70 sm:flex-row">
          <span>© 2026 Dream Slice Studio. All Rights Reserved.</span>
          <div className="flex items-center gap-1 justify-center">
              <span>Made with </span>
          <Heart className="h-3 w-3 fill-brand-gold text-brand-gold mt-px" />
          <span>by <a href="https://www.seatechnologies.in/" target="blank" className="underline">Sea Technologies</a></span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------- */
/*  Page                                                             */
/* -------------------------------------------------------------- */

export default function DreamSliceLanding() {
  return (
    <div className="min-h-screen relative bg-white font-sans text-brand-brown">
      {/* <Header /> */}
      <Nav2Cake/>
      <Hero />
      <SignatureCollection />
      {/* <Banner/> */}
      {/* <CorporateBand /> */}
      <StorySection />
      {/* <Testimonials />
      <Gallery />
      <Footer /> */}
    </div>
  );
}


 interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
}

function IconXTwitter({size = '32px', ...props}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" {...props}><g className="nc-icon-wrapper" fill="currentColor"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></g></svg>
  );
};

function IconInstagram({size = '32px', ...props}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" {...props}><g className="nc-icon-wrapper" fill="currentColor"><path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path></g></svg>
  );
};


function IconLinkedin({size = '32px', ...props}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" {...props}><g className="nc-icon-wrapper" fill="currentColor"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></g></svg>
  );
};

