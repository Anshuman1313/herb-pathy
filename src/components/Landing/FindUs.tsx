"use client";

const locations = [
  {
    name: "Dream Slice Studio",
    tag: "Bakery & Pickup",
    address: "Sector 23, Chandigarh",
    description: "Freshly baked cakes, ready for pickup & delivery.",
    directionsUrl: "https://maps.app.goo.gl/PXmDPaM9np4FdVTe6",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4243759130927!2d76.7632026!3d30.7345789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedf4ec68d535%3A0x3ce5c0f4d062e1d1!2sDream%20Slice%20Studio!5e0!3m2!1sen!2sin!4v1777892873999!5m2!1sen!2sin",
  },
  {
    name: "Corporate Office",
    tag: "Head Office",
    address:
      "707, 7th Floor, Vista Tower 2, E-302, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 140307",
    description: "Our administrative and corporate headquarters.",
    directionsUrl:
      "https://maps.app.goo.gl/G3sUHFH5qpBeyNgm6",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6861.389770302654!2d76.68225429357906!3d30.6988597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef00107aa1fd%3A0xed5ef9f37bda3810!2sVISTA%20TOWERS!5e0!3m2!1sen!2sin!4v1789361131322!5m2!1sen!2sin",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="w-full pt-40 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-brand-burgundy font-semibold mb-3">
            Visit Us
          </h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto">
            Find us at our bakery for fresh pickups, or reach our corporate
            office for business inquiries.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-2xl border border-brand-burgundy/10 bg-white/60 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Map */}
              <div className="w-full h-[260px]">
                <iframe
                  src={loc.mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map to ${loc.name}`}
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit text-xs font-medium uppercase tracking-wide text-brand-burgundy/70 bg-brand-burgundy/10 px-2.5 py-1 rounded-full mb-3">
                  {loc.tag}
                </span>

                <h3 className="text-xl text-brand-burgundy font-semibold mb-2">
                  {loc.name}
                </h3>

                <p className="text-brand-brown/80 text-sm mb-2">
                  📍 {loc.address}
                </p>

                <p className="text-brand-brown/70 text-sm mb-5">
                  {loc.description}
                </p>

                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center px-5 py-3 bg-brand-burgundy text-brand-cream rounded-lg hover:opacity-90 transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}