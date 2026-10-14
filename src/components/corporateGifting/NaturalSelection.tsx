"use client"
import { Heart } from "lucide-react";
import { motion,AnimatePresence } from "motion/react";
import  { useMemo, useState, useEffect,useRef } from "react";
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
        { category: "Tub Cakes", flavors: ["Red Velvet", "Chocolate", "Vanilla", "Oreo", "Seasonal"] },
        { category: "Bento Cakes", description: "Compact celebration cakes with custom messages and flavor options" },
        { category: "Tea Cakes", flavors: ["Vanilla", "Chocolate", "Orange", "Banana", "Lemon"] },
        { category: "Pastries & Popsicles", flavors: ["Chocolate", "Fruit", "Vanilla", "Hazelnut", "Oreo", "Seasonal"] },
        { category: "Lotus Biscoff", description: "A premium Biscoff-led celebration cake" },
        { category: "Chocolate Collection", flavors: ["Truffle", "Black Forest", "Oreo", "Mocha", "Chocolate Strawberry"] },
        { category: "Premium Chocolate", flavors: ["KitKat", "Tiramisu", "Chocolate Hazelnut"] },
        { category: "Cheesecakes", flavors: ["Classic", "Biscoff", "Blueberry", "Lotus", "Chocolate", "Seasonal"] },
        { category: "Dessert Jars", flavors: ["Red Velvet", "Chocolate", "Cookies & Cream", "Biscoff", "Seasonal"] },
      ],
    },
    {
      section: "04 / INDULGE - Dessert Collection",
      description: "Premium formats for pre-orders, meetings, celebrations, events and gifting",
      items: [],
    },
    {
      section: "05 / CORPORATE - Made for Business Moments",
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
  ],
};

/* ------------------------------------------------------------------ */
/* 2. FLATTEN → MenuItem[]                                             */
/* ------------------------------------------------------------------ */

type SectionGroup = "Signature" | "Celebrate" | "Indulge" | "Corporate";

interface MenuItem {
  id: string;
  name: string;
  sectionGroup: SectionGroup;
  subCategory: string | null; // e.g. "Brownie Collection", "Cheesecakes"
  description: string;
  color: string; // assigned per-collection, used for the swatch filter
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
  // "01 / SIGNATURE - Workplace Favorites" -> "Signature"
  const afterSlash = sectionTitle.split("/")[1] ?? sectionTitle;
  const rawGroup = afterSlash.split("-")[0].trim();
  const titled = rawGroup.charAt(0) + rawGroup.slice(1).toLowerCase();
  return titled as SectionGroup;
}

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
            });
          }
        } else {
          items.push({
            name: cat.category,
            sectionGroup,
            subCategory: cat.category,
            description: cat.description ?? "",
          });
        }
      }
    }

    if (section.services) {
      for (const svc of section.services) {
        items.push({
          name: svc.service,
          sectionGroup,
          subCategory: null,
          description: svc.description,
        });
      }
    }
  }

  // assign a stable color per subCategory (falling back to sectionGroup)
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
/* 3. UI (same interaction model as before, data-driven)               */
/* ------------------------------------------------------------------ */

const gridColumns = {
  2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4",
  5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7",
} as const;

type SortKey = "default" | "latest" | "oldest" | "nameAsc" | "nameDesc";

const SECTION_GROUPS: SectionGroup[] = ["Signature", "Celebrate", "Indulge", "Corporate"];

// unique swatches actually in use, with their collection label, for the filter
const COLLECTION_SWATCHES: { key: string; color: string }[] = Array.from(
  new Map(MENU_ITEMS.map((m) => [m.subCategory ?? m.sectionGroup, m.color])).entries()
).map(([key, color]) => ({ key, color }));

export default function NaturalSelection() {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState<SectionGroup | "All">("All");
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [columns, setColumns] = useState<keyof typeof gridColumns>(4);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  if(cardRef != null){

    useOnClickOutside(cardRef as React.RefObject<HTMLElement>, () => setActiveItem(null));
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveItem(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleColor = (color: string) => {
    setActiveColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // sub-collections available for the currently selected group
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

  //old filter without opacity 
  // const filtered = useMemo(() => {
  //   let list = MENU_ITEMS.filter((m) => {
  //     const matchesSearch =
  //       m.name.toLowerCase().includes(search.toLowerCase()) ||
  //       m.description.toLowerCase().includes(search.toLowerCase());
  //     const matchesGroup = activeGroup === "All" || m.sectionGroup === activeGroup;
  //     const matchesSub = !activeSub || m.subCategory === activeSub;
  //     const matchesColor = activeColors.length === 0 || activeColors.includes(m.color);
  //     return matchesSearch && matchesGroup && matchesSub && matchesColor;
  //   });

  //   switch (sortKey) {
  //     case "latest":
  //       list = [...list].sort((a, b) => b.addedAt - a.addedAt);
  //       break;
  //     case "oldest":
  //       list = [...list].sort((a, b) => a.addedAt - b.addedAt);
  //       break;
  //     case "nameAsc":
  //       list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  //       break;
  //     case "nameDesc":
  //       list = [...list].sort((a, b) => b.name.localeCompare(a.name));
  //       break;
  //     default:
  //       break;
  //   }
  //   return list;
  // }, [search, activeGroup, activeSub, sortKey, activeColors]);

  const sortOptions: { key: SortKey; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "latest", label: "Menu Order" },
    { key: "oldest", label: "Reverse Order" },
    { key: "nameAsc", label: "Name: A → Z" },
    { key: "nameDesc", label: "Name: Z → A" },
  ];

  return (
    <div className="h-screen overflow-hidden bg-brand-burgundy font-sans text-brand-cream text-sm ">
      <div className="mx-auto h-full w-full px-6 py-10 flex gap-14">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 flex flex-col gap-8 ">
          <h1 className="text-base-cream font-bold tracking-tight">The Menu</h1>

          {/* Search */}
          <div className="border-b border-stone-300 pb-2 flex items-center gap-2 text-stone-400">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full outline-none placeholder:text-stone-400 text-stone-700 bg-transparent"
            />
          </div>

          {/* Section nav */}
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => {
                setActiveGroup("All");
                setActiveSub(null);
              }}
              className={`text-left cursor-pointer ${
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
                    className={`text-left flex justify-between items-center cursor-pointer ${
                      active && !activeSub ? "text-brand-cream font-bold" : "text-stone-400 hover:text-brand-cream/90"
                    }`}
                  >
                    {group}{!active ? <Heart className="h-3 w-3 text-brand-gold" />: <Heart className="h-3 w-3 fill-brand-gold text-brand-gold" />}
                  </button>
                  {active && subOptions.length > 0 && (
                    <div className="pl-3 flex flex-col gap-1">
                      {subOptions.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setActiveSub(sub)}
                          className={`text-left ${
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

          {/* Sort */}
          <div className="flex flex-col gap-1">
            <span className="font-bold text-brand-cream">Sort</span>
            {sortOptions.slice(1).map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortKey(opt.key)}
                className={`text-left ${
                  sortKey === opt.key ? "text-brand-cream font-bold" : "text-stone-400 hover:text-brand-cream/90"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

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
          <div className="flex flex-col gap-2">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              layoutId={`card-${activeItem.id}`}
              ref={cardRef}
              className="bg-brand-burgundy w-full max-w-md flex flex-col gap-3 p-4"
              style={{ borderRadius: 16 }}
            >
              <motion.img
                layoutId={`image-${activeItem.id}`}
                src={"/ds/luxury/IvoryRuffleRoseCake.webp"}
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
               {/* Grid */}
        <main className="flex-1 overflow-y-auto min-h-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div layout className={`grid ${gridColumns[columns]} gap-x-6 gap-y-10`}>
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
                  src={"/ds/luxury/IvoryRuffleRoseCake.webp"}
                  // className={`aspect-[4/5] w-full rounded-sm ${COLOR_CLASSES[m.color]} border border-black/5`}
                  className={`aspect-[4/5] w-full rounded-sm  `}
                  style={{ borderRadius: 12 }}
                />
                <motion.div layoutId={`title-${m.id}`} className="text-xs text-brand-cream truncate">
                  {m.name}
                </motion.div>
                {m.subCategory && (
                  <motion.div
                    layoutId={`subcategory-${m.id}`}
                    className="text-[10px] uppercase tracking-wide text-brand-cream/50"
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