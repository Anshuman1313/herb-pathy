"use client";

export default function  
LocationSection() {
  return (
    <section
    id="location"
    className="w-full   pt-25  pb-16 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Visit Our Bakery
          </h2>

          <p className="text-gray-600 mb-2">
            📍 Sector 23, Chandigarh
          </p>

          <p className="text-gray-500 mb-4">
            Freshly baked cakes, ready for pickup & delivery.
          </p>

          <a
            href="https://maps.app.goo.gl/PXmDPaM9np4FdVTe6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
          >
            Get Directions
          </a>
        </div>

        {/* Map */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4243759130927!2d76.7632026!3d30.7345789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedf4ec68d535%3A0x3ce5c0f4d062e1d1!2sDream%20Slice%20Studio!5e0!3m2!1sen!2sin!4v1777892873999!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}