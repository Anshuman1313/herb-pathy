import React from "react"

const StickyGrid = () => {
  return (
    <div className="w-full px-5 md:px-60">
        <div className="max-w-6xl py-20 mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Crafted With Passion & Precision
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
      From artisan cakes to delicate pastries, every creation is crafted to deliver comfort, flavor, and a sense of indulgence.
        </p>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-2 border-b"
        >
          {/* LEFT (Sticky Content) */}
          <div className="md:sticky top-15 self-start py-10 bg-white ">
            <div className="flex items-start gap-3">
              <div className="size-10 flex items-center justify-center rounded-md bg-black text-white text-sm font-semibold">
                {item.badge}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-800 max-w-[30ch]">
                  {item.heading}
                </h2>
                <p className="mt-3 text-neutral-600 max-w-[40ch]">
                  {item.subheading}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT (Scrollable Image Area) */}
          <div className="py-10">
            <div className="h-[80vh] rounded-xl overflow-hidden border">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StickyGrid

const items = [
  {
    id: 1,
    badge: "01",
     heading: "Lotus Biscoff Delight",
  subheading: "Creamy Lotus Biscoff dessert layered with caramelized biscuit flavor and a velvety smooth finish.",
    image: "/newtheme/timisu.avif",
  },
  {
    id: 2,
    badge: "02",
    heading: "Custom Cakes",
    subheading: "Personalized cakes of all types, designed to match your occasion and style.",
    image: "/occasion/wd1.jpeg",
  },
  {
    id: 3,
    badge: "03",
    heading: "Luxury Cakes",
    subheading: "Premium cakes with elegant designs and refined details for special celebrations.",
    image: "/occasion/lx1.jpeg",
  },
]