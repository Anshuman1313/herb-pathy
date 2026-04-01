import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-[#fff5f2] py-6 relative ">
      <div className="flex whitespace-nowrap animate-marquee">
        
        {/* Repeat this block 2x for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-6">
            
            <h2 className="text-4xl font-milkshake text-[#ff7a59]">
              CAKES
            </h2>

            <img
              src="/hero/1.png"
              className="w-16 h-16 rounded-full object-cover"
            />

            <h2 className="text-4xl font-milkshake text-[#ff7a59]">
              PASTRIES
            </h2>

            <img
              src="/hero/2.png"
              className="w-16 h-16 rounded-full object-cover"
            />

            <h2 className="text-4xl font-milkshake text-[#ff7a59]">
              DESSERTS
            </h2>

            <img
              src="/hero/3.png"
              className="w-16 h-16 rounded-full object-cover"
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;