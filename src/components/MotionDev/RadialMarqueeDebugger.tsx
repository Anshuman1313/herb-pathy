"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import "./RadialMarqueeDebugger.css";

const ITEM_HEIGHT = 44;
const ITEM_LABELS = [
  "Pixelate FX",
  "List Hover",
  "Card Slider",
  "Face Cursor",
  "Smooth Scroll",
  "Logo Wall",
  "MatterJS",
  "3D Carousel",
  "Inertia Hover",
  "Item 10",
  "Item 11",
  "Item 12",
];

interface Overlays {
  ring: boolean;
  pivot: boolean;
  lines: boolean;
  labels: boolean;
}

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

export default function RadialMarqueeDebugger() {
  const [yPct, setYPct] = useState(481);
  const [count, setCount] = useState(9);
  const [itemW, setItemW] = useState(145);
  const [rotOffset, setRotOffset] = useState(0);
  const [overlays, setOverlays] = useState<Overlays>({
    ring: true,
    pivot: true,
    lines: true,
    labels: true,
  });

  const stageRef = useRef<HTMLDivElement>(null);
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

  const toggleOverlay = useCallback((key: keyof Overlays) => {
    setOverlays((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const { w: sw, h: sh } = stageDims;
  const cx = sw / 2;
  const cy = sh / 2;

  const pivotY = cy - ITEM_HEIGHT / 2 + (yPct / 100) * ITEM_HEIGHT;
  const R = pivotY - cy;
  const yCircPx = ((-yPct + 50) / 100) * ITEM_HEIGHT;

  const items = Array.from({ length: count }, (_, i) =>
    computeItem(i, count, yPct, itemW, rotOffset, cx, cy)
  );

  const overlayKeys: (keyof Overlays)[] = ["ring", "pivot", "lines", "labels"];

  return (
    <div className="rmd-root">
      <h2 className="rmd-title">Radial marquee debugger</h2>

      <div className="rmd-controls">
        {[
          { id: "yPct", label: "--y (transform-origin %)", min: 100, max: 900, value: yPct, set: setYPct, suffix: "%" },
          { id: "count", label: "item count", min: 2, max: 18, value: count, set: setCount, suffix: "" },
          { id: "itemW", label: "item width (px)", min: 60, max: 240, value: itemW, set: setItemW, suffix: "px" },
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
      </div>

      <p className="rmd-section-label">show / hide debug overlays</p>
      <div className="rmd-toggle-row">
        {overlayKeys.map((key) => (
          <button
            key={key}
            className={`rmd-pill ${overlays[key] ? "on" : ""}`}
            onClick={() => toggleOverlay(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="rmd-stage" ref={stageRef}>
        {/* SVG overlays */}
        <svg className="rmd-svg-overlay">
          {/* Ring guide */}
          {overlays.ring && (
            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="var(--rmd-border)"
              strokeWidth={0.5}
              strokeDasharray="4 4"
            />
          )}

          {/* Pivot lines */}
          {overlays.lines &&
            items.map(({ finalX, finalY }, i) => (
              <line
                key={i}
                x1={cx}
                y1={pivotY}
                x2={finalX}
                y2={finalY}
                stroke="var(--rmd-border)"
                strokeWidth={0.5}
                strokeDasharray="3 3"
              />
            ))}
        </svg>

        {/* White center dot */}
        <div
          className="rmd-dot rmd-dot--center"
          style={{ left: cx, top: cy }}
          title="stage center (white dot)"
        />

        {/* Red pivot dot */}
        {overlays.pivot && (
          <div
            className="rmd-dot rmd-dot--pivot"
            style={{ left: cx, top: pivotY }}
            title="transform-origin pivot (red dot)"
          />
        )}

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
            <div
              className="rmd-item-inner"
              style={{ transform: `rotate(${-angleDeg}deg)` }}
            >
              <span className="rmd-item-name">
                {ITEM_LABELS[i % ITEM_LABELS.length]}
              </span>
              {overlays.labels && (
                <span className="rmd-item-angle">{Math.round(angleDeg)}°</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Info bar */}
      <div className="rmd-infobar">
        {[
          { k: "--y", v: `${yPct}%` },
          { k: "--y-circ", v: `calc(${yPct}% × -1 + 50%) = ${Math.round(yCircPx)}px` },
          { k: "pivot from item top", v: `${Math.round((yPct / 100) * ITEM_HEIGHT)}px` },
          { k: "radius", v: `${Math.round(R)}px` },
          { k: "angle step", v: `${Math.round(360 / count)}°` },
        ].map(({ k, v }) => (
          <div className="rmd-badge" key={k}>
            <span className="rmd-badge-key">{k}:</span>
            <span className="rmd-badge-val">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
