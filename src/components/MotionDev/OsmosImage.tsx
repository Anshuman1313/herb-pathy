"use client"
import { useEffect, useRef, useState } from "react";
// import styles from "./OsmosImage.module.css"
import "./OsmosImage.css"
import { TextReveal } from "../ui/text-reveal";
const data : OsmosImage[] = [
    {
        title: "Cup cakes",
        img_src: "/3.png"
    },
    {
        title: "Tri misu",
        img_src: "/4.png"
    },
    {
        title: "Cake Green",
        img_src: "/6.png"
    },
]
      const ITEM_HEIGHT = 44;

  
const ITEM_LABELS = [
  {
    img: "/menu-cakes/Chocolate Mayonnaise Cake.webp",
    title: "Chocolate Mayonnaise Cake",
  },
  {
    img: "/menu-cakes/Italian Cream Cake.webp",
    title: "Italian Cream Cake",
  },
  {
    img: "/menu-cakes/Coconut Chiffon Cake.webp",
    title: "Coconut Chiffon Cake",
  },
  {
    img: "/menu-cakes/Cranberry-Orange Cake With Orange Buttercream.webp",
    title: "Cranberry-Orange Cake ",
  },
  {
    img: "/menu-cakes/Classic Red Velvet Cake With Cream Cheese Frosting.webp",
    title: "Classic Red Velvet Cake ",
  },
  {
    img: "/menu-cakes/Macaron.jpg",
    title: "Macaron",
  },
  {
    img: "/menu-cakes/Tiramisu.jpg",
    title: "Tiramisu",
  },
];


interface ItemPosition {
  finalX: number;
  finalY: number;
  angleDeg: number;
  cssLeft: number;
  cssTop: number;
}
function computeItem(
  i: number,
  count: number,
  yPct: number,
  itemW: number,
  rotOffset: number,
  cx: number,
  cy: number
): ItemPosition {
  const angleDeg = (360 / count) * i + rotOffset;
  const angleRad = (angleDeg * Math.PI) / 180;

  const yCircPx = ((-yPct + 50) / 100) * ITEM_HEIGHT;
  const pivotY = cy - ITEM_HEIGHT / 2 + (yPct / 100) * ITEM_HEIGHT;

  const itemCY = cy + yCircPx;
  const dy = itemCY - pivotY;

  const finalX = cx + 0 - dy * Math.sin(angleRad);
  const finalY = pivotY + dy * Math.cos(angleRad);

  return {
    finalX,
    finalY,
    angleDeg,
    cssLeft: cx - itemW / 2,
    cssTop: cy - ITEM_HEIGHT / 2,
  };
}

const OsmosImage = () => {
     const stageRef = useRef<HTMLDivElement>(null);
     const [paused, setPaused] = useState(false)
  const [yPct, setYPct] = useState(2739); 
//   2171 18 227
  const [count, setCount] = useState(18);
  const [itemW, setItemW] = useState(335);
  const [rotOffset, setRotOffset] = useState(0);


      const [stageDims, setStageDims] = useState({ w: 600, h: 480 });
    
      useEffect(() => {
        const el = stageRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => {
          setStageDims({ w: el.offsetWidth, h: el.offsetHeight });
        });
        ro.observe(el);
        setStageDims({ w: el.offsetWidth, h: el.offsetHeight });
        return () => ro.disconnect();
      }, []);
       const { w: sw, h: sh } = stageDims;
  const cx = sw / 2;
  const cy = sh / 2;
  const pivotY = cy - ITEM_HEIGHT / 2 + (yPct / 100) * ITEM_HEIGHT;


  const items = Array.from({ length: count }, (_, i) =>
    computeItem(i, count, yPct, itemW, rotOffset, cx, cy)
  );


  return (
    <>  

    <div className="relative h-180   w-full  overflow-hidden  ">
       <div className="absolute top-[58%] left-1/2 w-[50%]  text-5xl  text-center text-heading-cake  -translate-x-1/2 ">
       Freshly baked with premium ingredients and balanced sweetness, our cakes bring comfort, flavor, and a homemade touch in every slice.
       {/* <TextReveal>Magic UI will change the way you design.</TextReveal> */}
       </div>
      <div className="h-full w-full ">

    <div ref={stageRef} className='absolute top-1/2  right-1/2 translate-x-1/2 -translate-y-[18.5%] overflow-hidden   size-780 border-0  animate-[spin_90s_linear_infinite] origin-center '
     onClick={() => setPaused(!paused)}
     style={{
        animationPlayState: paused ? "paused" : "running",
      }}
    >
          {/* White center dot */}
        <div
          className="rmd-dot rmd-dot--center"
          style={{ left: cx, top: cy }}
          title="stage center (white dot)"
        />
             {/* Red pivot dot */}
        
          <div
            className="rmd-dot rmd-dot--pivot will-change-transform"
            style={{ left: cx, top: pivotY }}
            title="transform-origin pivot (red dot)"
          />
       
             {/* Items */}
        {items.map(({ cssLeft, cssTop, angleDeg }, i) => (
          <div
            key={i}
            className="rmd-item"
            style={{
              width: itemW,
              height: ITEM_HEIGHT,
              left: cssLeft,
              top: cssTop,
              transformOrigin: `center ${yPct}%`,
              transform: `translateY(${-yPct + 50}%) rotate(${angleDeg}deg)`,
            }}
          >
              <div className='flex flex-col p-1 h-70  bg-heading-cake rounded-[8px] cursor-pointer'>
            <div className="img w-full h-[80%]  rounded-[4px] overflow-clip"> <img src={ITEM_LABELS[i % ITEM_LABELS.length].img} alt={"hi"} className='object-cover size-full'/>    </div>
            <div className="heading w-full px-2 text-lg font-semibold  text-white flex-1 flex justify-start items-center"> <span>{ITEM_LABELS[i % ITEM_LABELS.length].title}</span>   </div>
        </div>
          </div>
        ))}
    </div>
      </div>
    </div>
       
     {/* <div className="w-fit hidden fixed  p-2 font-inter absolute top-0 left-0 rounded-xl overflow-hidden bg-gray-100 z-100">
        {[
          { id: "yPct", label: "--y (transform-origin %)", min: 100, max: 4000, value: yPct, set: setYPct, suffix: "%" },
          { id: "count", label: "item count", min: 2, max: 24, value: count, set: setCount, suffix: "" },
          { id: "itemW", label: "item width (px)", min: 60, max: 1240, value: itemW, set: setItemW, suffix: "px" },
          { id: "rotOffset", label: "rotation offset (°)", min: -180, max: 180, value: rotOffset, set: setRotOffset, suffix: "°" },
        ].map(({ id, label, min, max, value, set, suffix }) => (
          <div className="rmd-ctrl" key={id}>
            <label className="rmd-ctrl-label">{label}</label>
            <div className="rmd-ctrl-row">
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => set(Number(e.target.value))}
              />
              <span className="rmd-ctrl-val">{value}{suffix}</span>
            </div>
          </div>
        ))}
      </div> */}
     </>
  )
}

export default OsmosImage

type OsmosImage = {
    title: string,
    img_src: string
}

const OsmosImageCard  = ({title,img_src}: OsmosImage) => {
    return (
        <div className='flex flex-col p-1 h-55 w-70 bg-neutral-800 rounded-[8px]'>
            <div className="img w-full h-[80%]  rounded-[4px] overflow-clip"> <img src={img_src} alt={title} className='object-cover'/>    </div>
            <div className="heading w-full px-2 text-sm font-semibold  text-white flex-1 flex justify-start items-center"> <span>{title}</span>   </div>
        </div>
    )
}