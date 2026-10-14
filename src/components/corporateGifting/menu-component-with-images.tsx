"use client"
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

/* ------------------------------------------------------------------ */
/* 1. RAW MENU DATA — paste your JSON here whenever it changes         */
/* ------------------------------------------------------------------ */

interface RawSimpleItem {
  name: string;
  description: string;
}

interface RawCategory {
  category: string;
  description?: string;
  flavors?: string[];
}

interface RawService {
  service: string;
  description: string;
}

interface RawSection {
  section: string;
  description: string;
  items?: RawSimpleItem[];
  categories?: RawCategory[];
  services?: RawService[];
}

const MENU_DATA: { menu_sections: RawSection[] } = {
  menu_sections: [
    {
      section: "01 / SIGNATURE - Workplace Favorites",
      description:
        "Elegant individual portions designed for pantry counters, canteens, meetings and everyday team treats",
      items: [
        { name: "Chocolate Pudding", description: "Smooth and indulgent chocolate dessert in an easy individual serving" },
        { name: "Mango Pudding", description: "A light, silky mango dessert with a refreshing finish" },
        { name: "Oreo Pudding", description: "Creamy pudding layered with familiar Oreo flavor and texture" },
        { name: "Cupcakes", description: "Fresh eggless cupcakes with rotating flavors and refined finishes" },
        { name: "Muffins", description: "Freshly baked individual treats, ideal alongside tea and coffee" },
        { name: "Curated Counter Selection", description: "A rotating mix can be planned for recurring workplace requirements" },
      ],
    },
    {
      section: "02 / SIGNATURE - Brownie Collection",
      description:
        "Rich, fudgy and beautifully portioned - equally suited to meetings, counters and curated dessert boxes",
      items: [
        { name: "Walnut", description: "Classic chocolate brownie with the texture of walnuts" },
        { name: "Red Velvet", description: "Soft red velvet-style brownie with a rich finish" },
        { name: "Cream Cheese", description: "Chocolate brownie paired with a smooth cream cheese layer" },
        { name: "Nutella", description: "Fudgy brownie with a hazelnut-chocolate finish" },
        { name: "Lotus Biscoff", description: "Rich brownie with the distinctive warmth of Lotus Biscoff" },
        { name: "Oreo", description: "Chocolate brownie finished with Oreo crunch" },
      ],
    },
    {
      section: "03 / CELEBRATE - Celebration Bespoke Cakes",
      description:
        "Fresh, 100% eggless cakes crafted for birthdays, work anniversaries, achievements and important team milestones",
      categories: [
        { category: "Vanilla Collection", flavors: ["Mix Fruit", "Pineapple", "Strawberry", "Caramel", "Butterscotch", "And more"] },
        { category: "Premium Vanilla", flavors: ["Fresh Fruits", "Rasmalai", "Blueberry", "Gulab Jamun"] },
        { category: "Customized Cakes", description: "Personalized messages, themes, colors and occasion-led concepts" },
        { category: "Bento Cakes", description: "Compact celebration cakes with custom messages and flavor options" },
        { category: "Pastries & Popsicles", flavors: ["Chocolate", "Fruit", "Vanilla", "Hazelnut", "Oreo", "Seasonal"] },
        { category: "Lotus Biscoff", description: "A premium Biscoff-led celebration cake" },
        { category: "Premium Chocolate", flavors: ["KitKat", "Tiramisu", "Chocolate Hazelnut"] },
        { category: "Cheesecakes", flavors: ["Classic", "Biscoff", "Blueberry", "Lotus", "Chocolate", "Seasonal"] },
        { category: "Dessert Jars", flavors: ["Red Velvet", "Chocolate", "Cookies & Cream", "Biscoff", "Seasonal"] },
      ],
    },
    {
      section: "04 / CORPORATE - Made for Business Moments",
      description: "A flexible dessert partnership for teams, clients, events and recurring workplace needs",
      services: [
        { service: "Employee Celebrations", description: "Birthdays, work anniversaries, promotions and personal milestones" },
        { service: "Team Meetings", description: "Curated selections of brownies, puddings, jars, pastries and more" },
        { service: "Corporate Events", description: "Customized cakes, coordinated dessert selections and dessert-table options" },
        { service: "Festive Gifting", description: "Premium dessert boxes, brownie boxes and thoughtfully curated sweet hampers" },
        { service: "Recurring Requirements", description: "Planned selections for office counters, canteens and regular team needs" },
        { service: "Branded & Personalized", description: "Messages, themes, brand colours and selected presentation options where suitable" },
      ],
    },
    {
      section: "05 / LUXURY - Signature Luxury Cakes",
      description: "Exclusive statement cakes designed for premium celebrations and special occasions",
      items: [
        { name: "Blush Ombre Bloom Cake", description: "An elegant luxury cake featuring soft ombre tones and floral detailing" },
        { name: "Gold Leaf Lavender Cake", description: "A refined lavender cake finished with elegant gold-leaf accents" },
        { name: "Ivory Ruffle Rose Cake", description: "A sophisticated ivory cake with delicate ruffle and rose detailing" },
        { name: "Princess Doll Fantasy Cake", description: "A whimsical luxury cake designed around an elegant princess theme" },
        { name: "Royal Navy Gold Crown Cake", description: "A regal navy and gold statement cake with crown-inspired detailing" },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. FLATTEN → MenuItem[]                                             */
/* ------------------------------------------------------------------ */

type SectionGroup = "Signature" | "Celebrate" | "Corporate" | "Luxury";

interface MenuItem {
  id: string;
  name: string;
  sectionGroup: SectionGroup;
  subCategory: string | null;
  description: string;
  image?: string;
  color: string;
  addedAt: number;
}

const COLOR_SWATCHES: string[] = [
  "green-400", "pink-400", "emerald-500", "rose-500", "violet-500", "stone-400",
  "lime-500", "orange-500", "cyan-500", "indigo-500", "teal-400", "fuchsia-500",
  "yellow-400", "slate-400", "blue-500", "pink-500", "red-500", "green-600",
];

const COLOR_CLASSES: Record<string, string> = {
  "green-400": "bg-green-400", "pink-400": "bg-pink-400", "emerald-500": "bg-emerald-500",
  "rose-500": "bg-rose-500", "violet-500": "bg-violet-500", "stone-400": "bg-stone-400",
  "lime-500": "bg-lime-500", "orange-500": "bg-orange-500", "cyan-500": "bg-cyan-500",
  "indigo-500": "bg-indigo-500", "teal-400": "bg-teal-400", "fuchsia-500": "bg-fuchsia-500",
  "yellow-400": "bg-yellow-400", "slate-400": "bg-slate-400", "blue-500": "bg-blue-500",
  "pink-500": "bg-pink-500", "red-500": "bg-red-500", "green-600": "bg-green-600",
};

function parseSectionGroup(sectionTitle: string): SectionGroup {
  const afterSlash = sectionTitle.split("/")[1] ?? sectionTitle;
  const rawGroup = afterSlash.split("-")[0].trim();
  const titled = rawGroup.charAt(0) + rawGroup.slice(1).toLowerCase();
  return titled as SectionGroup;
}

const MENU_IMAGE_MAP: Record<string, string> = {
  // LUXURY — Signature Luxury Cakes
  "Luxury|Signature Luxury Cakes|Blush Ombre Bloom Cake": "/ds/luxury/BlushOmbreBloomCake.webp",
  "Luxury|Signature Luxury Cakes|Gold Leaf Lavender Cake": "/ds/luxury/GoldLeafLavenderCake.webp",
  "Luxury|Signature Luxury Cakes|Ivory Ruffle Rose Cake": "/ds/luxury/IvoryRuffleRoseCake.webp",
  "Luxury|Signature Luxury Cakes|Princess Doll Fantasy Cake": "/ds/luxury/PrincessDollFantasyCake.webp",
  "Luxury|Signature Luxury Cakes|Royal Navy Gold Crown Cake": "/ds/luxury/RoyalNavyGoldCrownCake.webp",

  // CORPORATE — Made for Business Moments
  "Corporate|Made for Business Moments|Employee Celebrations": "/ds/menu/corporate/Celebration_Cake.webp",
  "Corporate|Made for Business Moments|Team Meetings": "/ds/menu/corporate/Classic_Office_Cake.webp",
  "Corporate|Made for Business Moments|Corporate Events": "/ds/menu/corporate/Coffee_Cream_Cake.webp",
  "Corporate|Made for Business Moments|Festive Gifting": "/ds/menu/corporate/Festive_Gift_Cake.webp",
  "Corporate|Made for Business Moments|Recurring Requirements": "/ds/menu/corporate/Signature_Celebration_Cake.webp",
  "Corporate|Made for Business Moments|Branded & Personalized": "/ds/menu/corporate/Custom_Signature_Cake.webp",

  // SIGNATURE — Workplace Favorites
  "Signature|Workplace Favorites|Chocolate Pudding": "/ds/menu/signature/WorkplaceFavourites/Chocolate_Pudding.webp",
  "Signature|Workplace Favorites|Mango Pudding": "/ds/menu/signature/WorkplaceFavourites/Mango_Pudding.webp",
  "Signature|Workplace Favorites|Oreo Pudding": "/ds/menu/signature/WorkplaceFavourites/Oreo_Pudding.webp",
  "Signature|Workplace Favorites|Cupcakes": "/ds/menu/signature/WorkplaceFavourites/Cupcakes.webp",
  "Signature|Workplace Favorites|Muffins": "/ds/menu/signature/WorkplaceFavourites/Muffins.webp",
  "Signature|Workplace Favorites|Curated Counter Selection": "/ds/menu/signature/WorkplaceFavourites/Curated_Counter_Selection.webp",

  // SIGNATURE — Brownie Collection
  "Signature|Brownie Collection|Walnut": "/ds/menu/signature/BrownieCollection/Walnut.webp",
  "Signature|Brownie Collection|Red Velvet": "/ds/menu/signature/BrownieCollection/Red_Velvet.webp",
  "Signature|Brownie Collection|Cream Cheese": "/ds/menu/signature/BrownieCollection/Cream_Cheese.webp",
  "Signature|Brownie Collection|Nutella": "/ds/menu/signature/BrownieCollection/Nutella.webp",
  "Signature|Brownie Collection|Lotus Biscoff": "/ds/menu/signature/BrownieCollection/Lotus_Biscoff.webp",
  "Signature|Brownie Collection|Oreo": "/ds/menu/signature/BrownieCollection/Oreo.webp",

  // CELEBRATE — Vanilla Collection
  "Celebrate|Vanilla Collection|Mix Fruit": "/ds/menu/celebrate/VanillaCollection/MixFruit.webp",
  "Celebrate|Vanilla Collection|Pineapple": "/ds/menu/celebrate/VanillaCollection/Pineapple.webp",
  "Celebrate|Vanilla Collection|Strawberry": "/ds/menu/celebrate/VanillaCollection/Strawberry.webp",
  "Celebrate|Vanilla Collection|Caramel": "/ds/menu/celebrate/VanillaCollection/Caramel.webp",
  "Celebrate|Vanilla Collection|Butterscotch": "/ds/menu/celebrate/VanillaCollection/Butterscotch.webp",
  "Celebrate|Vanilla Collection|And more": "/ds/menu/celebrate/VanillaCollection/AndMore.webp",

  // CELEBRATE — Bento Cakes
  "Celebrate|Bento Cakes|Bento Cakes": "/ds/menu/celebrate/BentoCakes/Bento_Cake.png",

  // CELEBRATE — Custom Cake
  "Celebrate|Customized Cakes|Customized Cakes": "/ds/menu/celebrate/CustomCake/Custom_Cake.webp",

  // CELEBRATE — Premium Vanilla
  "Celebrate|Premium Vanilla|Fresh Fruits": "/ds/menu/celebrate/PremiumVanilla/Fresh_Fruits.webp",
  "Celebrate|Premium Vanilla|Rasmalai": "/ds/menu/celebrate/PremiumVanilla/Rasmalai.webp",
  "Celebrate|Premium Vanilla|Blueberry": "/ds/menu/celebrate/PremiumVanilla/Blueberry.webp",
  "Celebrate|Premium Vanilla|Gulab Jamun": "/ds/menu/celebrate/PremiumVanilla/Gulab_Jamun.webp",

  // CELEBRATE — Premium Chocolate
  "Celebrate|Premium Chocolate|KitKat": "/ds/menu/celebrate/PremiumChocolate/KitKat.webp",
  "Celebrate|Premium Chocolate|Tiramisu": "/ds/menu/celebrate/PremiumChocolate/Tiramisu.webp",
  "Celebrate|Premium Chocolate|Chocolate Hazelnut": "/ds/menu/celebrate/PremiumChocolate/Chocolate_Hazelnut.webp",

  // CELEBRATE — Pastries & Popsicles
  "Celebrate|Pastries & Popsicles|Chocolate": "/ds/menu/celebrate/PastriesPopsicles/Chocolate.webp",
  "Celebrate|Pastries & Popsicles|Fruit": "/ds/menu/celebrate/PastriesPopsicles/Fruit.webp",
  "Celebrate|Pastries & Popsicles|Vanilla": "/ds/menu/celebrate/PastriesPopsicles/Vanilla.webp",
  "Celebrate|Pastries & Popsicles|Hazelnut": "/ds/menu/celebrate/PastriesPopsicles/Hazelnut.webp",
  "Celebrate|Pastries & Popsicles|Oreo": "/ds/menu/celebrate/PastriesPopsicles/Oreo.webp",
  "Celebrate|Pastries & Popsicles|Seasonal": "/ds/menu/celebrate/PastriesPopsicles/Seasonal.webp",

  // CELEBRATE — Lotus Biscoff
  "Celebrate|Lotus Biscoff|Lotus Biscoff": "/ds/menu/celebrate/LotusBiscoff/LotusBiscoff.webp",

  // CELEBRATE — Cheesecakes
  "Celebrate|Cheesecakes|Classic": "/ds/menu/celebrate/CheeseCakes/Classic.webp",
  "Celebrate|Cheesecakes|Biscoff": "/ds/menu/celebrate/CheeseCakes/Biscoff.webp",
  "Celebrate|Cheesecakes|Blueberry": "/ds/menu/celebrate/CheeseCakes/BlueBerry.webp",
  "Celebrate|Cheesecakes|Lotus": "/ds/menu/celebrate/CheeseCakes/Lotus.webp",
  "Celebrate|Cheesecakes|Chocolate": "/ds/menu/celebrate/CheeseCakes/Chocolate.webp",
  "Celebrate|Cheesecakes|Seasonal": "/ds/menu/celebrate/CheeseCakes/Seasonal.webp",

  // CELEBRATE — Dessert Jars
  "Celebrate|Dessert Jars|Red Velvet": "/ds/menu/celebrate/DessertJars/Red_Velvet.webp",
  "Celebrate|Dessert Jars|Chocolate": "/ds/menu/celebrate/DessertJars/Chocolate.webp",
  "Celebrate|Dessert Jars|Cookies & Cream": "/ds/menu/celebrate/DessertJars/Cookies_cream.webp",
  "Celebrate|Dessert Jars|Biscoff": "/ds/menu/celebrate/DessertJars/Biscoff.webp",
  "Celebrate|Dessert Jars|Seasonal": "/ds/menu/celebrate/DessertJars/Seasonal.webp",
};

function buildMenuItems(): MenuItem[] {
  const items: Omit<MenuItem, "id" | "addedAt" | "color">[] = [];

  for (const section of MENU_DATA.menu_sections) {
    const sectionGroup = parseSectionGroup(section.section);
    const collectionLabel = section.section.split("-").slice(1).join("-").trim() || null;

    if (section.items) {
      for (const item of section.items) {
        items.push({
          name: item.name,
          sectionGroup,
          subCategory: collectionLabel,
          description: item.description,
          image: MENU_IMAGE_MAP[`${sectionGroup}|${collectionLabel}|${item.name}`],
        });
      }
    }

    if (section.categories) {
      for (const cat of section.categories) {
        if (cat.flavors && cat.flavors.length > 0) {
          for (const flavor of cat.flavors) {
            items.push({
              name: flavor,
              sectionGroup,
              subCategory: cat.category,
              description: `${cat.category} flavor`,
              image: MENU_IMAGE_MAP[`${sectionGroup}|${cat.category}|${flavor}`],
            });
          }
        } else {
          items.push({
            name: cat.category,
            sectionGroup,
            subCategory: cat.category,
            description: cat.description ?? "",
            image: MENU_IMAGE_MAP[`${sectionGroup}|${cat.category}|${cat.category}`],
          });
        }
      }
    }

    if (section.services) {
      for (const svc of section.services) {
        items.push({
          name: svc.service,
          sectionGroup,
          subCategory: collectionLabel,
          description: svc.description,
          image: MENU_IMAGE_MAP[`${sectionGroup}|${collectionLabel}|${svc.service}`],
        });
      }
    }
  }

  const colorMap = new Map<string, string>();
  let cursor = 0;
  const colorFor = (key: string) => {
    if (!colorMap.has(key)) {
      colorMap.set(key, COLOR_SWATCHES[cursor % COLOR_SWATCHES.length]);
      cursor++;
    }
    return colorMap.get(key)!;
  };

  const total = items.length;
  return items.map((item, i) => ({
    ...item,
    id: `${item.sectionGroup}-${i}`,
    addedAt: total - i,
    color: colorFor(item.subCategory ?? item.sectionGroup),
  }));
}

const MENU_ITEMS: MenuItem[] = buildMenuItems();

/* ------------------------------------------------------------------ */
/* 3. UI                                                               */
/* ------------------------------------------------------------------ */

// Mobile is always 2 columns. The slider only controls columns from md (768px) up.
// Full literal class names are required so Tailwind can detect them.
const gridColumns = {
  2: "grid-cols-2 md:grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-5",
  6: "grid-cols-2 md:grid-cols-6",
  7: "grid-cols-2 md:grid-cols-7",
} as const;

type SortKey = "default" | "latest" | "oldest" | "nameAsc" | "nameDesc";

const SECTION_GROUPS: SectionGroup[] = ["Signature", "Celebrate", "Corporate", "Luxury"];

const COLLECTION_SWATCHES: { key: string; color: string }[] = Array.from(
  new Map(MENU_ITEMS.map((m) => [m.subCategory ?? m.sectionGroup, m.color])).entries()
).map(([key, color]) => ({ key, color }));

export default function NaturalSelection1() {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState<SectionGroup | "All">("All");
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [columns, setColumns] = useState<keyof typeof gridColumns>(4);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false); // mobile bottom sheet

  const cardRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cardRef as React.RefObject<HTMLElement>, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveItem(null);
        setFiltersOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // lock page scroll while the mobile filter sheet is open
  useEffect(() => {
    document.body.style.overflow = filtersOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [filtersOpen]);

  const toggleColor = (color: string) => {
    setActiveColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const subOptions = useMemo(() => {
    if (activeGroup === "All") return [];
    const seen = new Set<string>();
    const opts: string[] = [];
    for (const m of MENU_ITEMS) {
      if (m.sectionGroup === activeGroup && m.subCategory && !seen.has(m.subCategory)) {
        seen.add(m.subCategory);
        opts.push(m.subCategory);
      }
    }
    return opts;
  }, [activeGroup]);

  const filtered = useMemo(() => {
    let list = MENU_ITEMS.map((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.description.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = activeGroup === "All" || m.sectionGroup === activeGroup;
      const matchesSub = !activeSub || m.subCategory === activeSub;
      const matchesColor = activeColors.length === 0 || activeColors.includes(m.color);
      return { ...m, matched: matchesSearch && matchesGroup && matchesSub && matchesColor };
    });

    const byMatch = (a: typeof list[number], b: typeof list[number]) =>
      Number(b.matched) - Number(a.matched);

    switch (sortKey) {
      case "latest":
        list = [...list].sort((a, b) => byMatch(a, b) || b.addedAt - a.addedAt);
        break;
      case "oldest":
        list = [...list].sort((a, b) => byMatch(a, b) || a.addedAt - b.addedAt);
        break;
      case "nameAsc":
        list = [...list].sort((a, b) => byMatch(a, b) || a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        list = [...list].sort((a, b) => byMatch(a, b) || b.name.localeCompare(a.name));
        break;
      default:
        list = [...list].sort(byMatch);
        break;
    }
    return list;
  }, [search, activeGroup, activeSub, sortKey, activeColors]);

  const sortOptions: { key: SortKey; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "latest", label: "Menu Order" },
    { key: "oldest", label: "Reverse Order" },
    { key: "nameAsc", label: "Name: A → Z" },
    { key: "nameDesc", label: "Name: Z → A" },
  ];

  // number of active filters, shown as a badge on the mobile Filters button
  const activeFilterCount =
    (activeGroup !== "All" ? 1 : 0) + (activeSub ? 1 : 0) + (sortKey !== "default" ? 1 : 0);

  const resetFilters = () => {
    setActiveGroup("All");
    setActiveSub(null);
    setSortKey("default");
  };

  /* ---------- shared blocks (used by desktop sidebar AND mobile sheet) ---------- */

  const searchBox = (
    <div className="border-b border-stone-300 pb-2 flex items-center gap-2 text-stone-400">
      <span>⌕</span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-full outline-none placeholder:text-stone-400 text-stone-700 bg-transparent"
      />
    </div>
  );

  const navBlock = (
    <nav className="flex flex-col gap-1">
      <button
        onClick={() => {
          setActiveGroup("All");
          setActiveSub(null);
        }}
        className={`text-left cursor-pointer max-md:py-2 ${
          activeGroup === "All" && !activeSub ? "text-brand-cream font-bold" : "text-stone-400 hover:text-brand-cream/90"
        }`}
      >
        All
      </button>

      {SECTION_GROUPS.map((group) => {
        const active = activeGroup === group;
        return (
          <div key={group} className="flex flex-col gap-1 ">
            <button
              onClick={() => {
                setActiveGroup(group);
                setActiveSub(null);
              }}
              className={`text-left flex justify-between items-center cursor-pointer max-md:py-2 ${
                active && !activeSub ? "text-brand-cream font-bold" : "text-stone-400 hover:text-brand-cream/90"
              }`}
            >
              {group}
              {!active ? (
                <Heart className="h-3 w-3 text-brand-gold" />
              ) : (
                <Heart className="h-3 w-3 fill-brand-gold text-brand-gold" />
              )}
            </button>
            {active && subOptions.length > 0 && (
              <div className="pl-3 flex flex-col gap-1">
                {subOptions.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSub(sub)}
                    className={`text-left cursor-pointer max-md:py-1.5 ${
                      activeSub === sub ? "text-brand-cream font-bold" : "text-stone-400 hover:text-brand-cream/90"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  const sortBlock = (
    <div className="flex flex-col gap-1">
      <span className="font-bold text-brand-cream">Sort</span>
      {sortOptions.slice(1).map((opt) => (
        <button
          key={opt.key}
          onClick={() => setSortKey(opt.key)}
          className={`text-left max-md:py-1.5 ${
            sortKey === opt.key ? "text-brand-cream font-bold" : "text-stone-400 hover:text-brand-cream/90"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-burgundy font-sans text-brand-cream text-sm">
      {/* ================= MOBILE TOP BAR (hidden from md up) ================= */}
      <header className="md:hidden sticky top-0 z-30 bg-brand-burgundy px-4 pt-4 pb-3 flex flex-col gap-3 border-b border-brand-cream/10">
        <div className="flex items-center justify-between">
          <h1 className="text-base-cream font-bold tracking-tight text-base">The Menu</h1>
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 rounded-full border border-brand-cream/30 px-4 py-1.5 text-brand-cream"
          >
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-gold px-1 text-[10px] font-bold text-brand-burgundy">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {searchBox}

        {/* quick group chips: horizontal scroll */}
        <div className="-mx-4 px-4 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(["All", ...SECTION_GROUPS] as const).map((group) => {
            const active = activeGroup === group;
            return (
              <button
                key={group}
                onClick={() => {
                  setActiveGroup(group);
                  setActiveSub(null);
                }}
                className={`shrink-0 rounded-full px-4 py-1.5 border ${
                  active
                    ? "bg-brand-cream text-brand-burgundy border-brand-cream font-bold"
                    : "border-brand-cream/30 text-stone-300"
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>

        {/* sub-collection chips for the selected group */}
        {subOptions.length > 0 && (
          <div className="-mx-4 px-4 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {subOptions.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSub(activeSub === sub ? null : sub)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs border ${
                  activeSub === sub
                    ? "bg-brand-gold text-brand-burgundy border-brand-gold font-bold"
                    : "border-brand-cream/20 text-stone-300"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ================= MOBILE FILTER BOTTOM SHEET ================= */}
      <AnimatePresence>
        {filtersOpen && (
          <>
            <motion.div
              key="sheet-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFiltersOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 z-40"
            />
            <motion.div
              key="sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="md:hidden fixed bottom-0 inset-x-0 z-50 max-h-[85vh] flex flex-col rounded-t-2xl bg-brand-burgundy border-t border-brand-cream/10"
            >
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <span className="font-bold text-brand-cream text-base">Filters</span>
                <button onClick={resetFilters} className="text-stone-400 hover:text-brand-cream/90 text-xs">
                  Reset
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 pb-4 flex flex-col gap-8">
                {navBlock}
                {sortBlock}
              </div>

              <div className="px-5 py-4 border-t border-brand-cream/10">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full rounded-full bg-brand-cream py-3 font-bold text-brand-burgundy"
                >
                  Show {filtered.filter((m) => m.matched).length} items
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="mx-auto w-full px-4 py-6 md:px-6 md:py-10 flex flex-col md:flex-row gap-6 md:gap-14">
        {/* ================= DESKTOP SIDEBAR (unchanged, hidden on mobile) ================= */}
        <aside className="hidden md:flex w-56 shrink-0 flex-col gap-8 sticky top-20 self-start">
          <h1 className="text-base-cream font-bold tracking-tight">The Menu</h1>

          {searchBox}
          {navBlock}
          {sortBlock}

          {/* Columns */}
          <div className="flex flex-col gap-2">
            <input
              type="range"
              min={2}
              max={7}
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value) as keyof typeof gridColumns)}
            />
            <div className="flex justify-between text-stone-400">
              <span>Columns: {columns}</span>
            </div>
          </div>

          {/* Collection filter (color-coded) */}
          <div className="flex flex-col gap-2 hidden">
            <div className="flex items-center justify-between">
              <span className="text-brand-cream font-bold">Collections</span>
              {activeColors.length > 0 && (
                <button
                  onClick={() => setActiveColors([])}
                  className="text-stone-400 hover:text-brand-cream/90 text-xs"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="grid grid-cols-6 gap-2">
              {COLLECTION_SWATCHES.map(({ key, color }) => {
                const active = activeColors.includes(color);
                return (
                  <button
                    key={key}
                    onClick={() => toggleColor(color)}
                    aria-label={key}
                    title={key}
                    className={`h-5 w-5 rounded-full ${COLOR_CLASSES[color]} ${
                      active ? "ring-2 ring-offset-2 ring-brand-cream" : "ring-1 ring-stone-200"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </aside>

        {/* ================= ITEM DETAIL MODAL ================= */}
        <AnimatePresence>
          {activeItem ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
            />
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {activeItem ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              <motion.div
                layoutId={`card-${activeItem.id}`}
                ref={cardRef}
                className="bg-brand-burgundy w-full max-w-md max-h-[90vh] overflow-y-auto flex flex-col gap-3 p-4"
                style={{ borderRadius: 16 }}
              >
                <motion.img
                  layoutId={`image-${activeItem.id}`}
                  src={activeItem.image ?? "/ds/luxury/IvoryRuffleRoseCake.webp"}
                  className={`aspect-[4/5] w-full rounded-sm ${COLOR_CLASSES[activeItem.color]} border border-black/5`}
                  style={{ borderRadius: 12 }}
                />
                <motion.div layoutId={`title-${activeItem.id}`} className="text-brand-cream font-bold text-base">
                  {activeItem.name}
                </motion.div>
                {activeItem.subCategory && (
                  <motion.div
                    layoutId={`subcategory-${activeItem.id}`}
                    className="text-[10px] uppercase tracking-wide text-brand-cream/50"
                  >
                    {activeItem.subCategory}
                  </motion.div>
                )}
                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="text-sm text-brand-cream/80"
                >
                  {activeItem.description}
                </motion.p>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* ================= GRID ================= */}
        <main className="flex-1 min-w-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div layout className={`grid ${gridColumns[columns]} gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10`}>
            {filtered.map((m) => (
              <motion.div
                key={m.id}
                layout
                initial={false}
                animate={{ opacity: m.matched ? 1 : 0.25 }}
                transition={{ layout: { duration: 0.4, ease: "easeInOut" }, opacity: { duration: 0.25 } }}
                onClick={() => m.matched && setActiveItem(m)}
                className={`flex flex-col gap-2 ${m.matched ? "cursor-pointer" : "pointer-events-none"}`}
              >
                <motion.img
                  layoutId={`image-${m.id}`}
                  src={m.image ?? "/ds/luxury/IvoryRuffleRoseCake.webp"}
                  className="aspect-[4/5] w-full rounded-sm"
                  style={{ borderRadius: 12 }}
                />
                <motion.div layoutId={`title-${m.id}`} className="text-xs text-brand-cream truncate">
                  {m.name}
                </motion.div>
                {m.subCategory && (
                  <motion.div
                    layoutId={`subcategory-${m.id}`}
                    className="text-[10px] uppercase tracking-wide text-brand-cream/50 truncate"
                  >
                    {m.subCategory}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}