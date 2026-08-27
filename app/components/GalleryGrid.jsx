"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CATS = ["All", "Campus", "Leadership", "Brand & Identity"];

/* ONLY genuine photographs — each reviewed before inclusion. */
const PHOTOS = [
  { src: "/images/campus.webp", w: 1402, h: 1122, cat: "Campus", cap: "The campus building — Bandhwa, Peer Nagar, Ghazipur.", tilt: "rotate-[0.6deg]", hClass: "h-64 md:h-80" },
  { src: "/images/founder.webp", w: 600, h: 667, cat: "Leadership", cap: "Mr. Ram Janam Singh — Founder, Nuva Computer Education Society.", tilt: "-rotate-[1deg]", hClass: "h-72" },
  { src: "/images/director.webp", w: 450, h: 489, cat: "Leadership", cap: "Amar N. Singh — Director, NCMET.", tilt: "rotate-[1deg]", hClass: "h-72" },
  { src: "/images/logo.webp", w: 336, h: 336, cat: "Brand & Identity", cap: "The official NCMET emblem.", tilt: "-rotate-[0.8deg]", hClass: "h-64 object-contain bg-white p-8" },
  { src: "/images/logo-brand.webp", w: 200, h: 200, cat: "Brand & Identity", cap: "Emblem with wordmark — Learn · Lead · Transform.", tilt: "rotate-[1.2deg]", hClass: "h-64 object-contain bg-white p-8" },
];

export default function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  return (
    <>
      <div className="flex flex-wrap gap-x-7 gap-y-3 border-y border-line py-4">
        {CATS.map((c) => (
          <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`u-ink text-sm font-extrabold transition-colors cursor-pointer ${
              cat === c ? "text-maroon" : "text-ink-soft hover:text-ink"
            }`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {list.map((p, i) => (
          <Reveal key={p.src + cat} delay={(i % 3) * 70}>
            <figure className={`postcard ${p.tilt}`}>
              <img src={p.src} alt={p.cap} width={p.w} height={p.h}
                loading="lazy" decoding="async"
                className={`w-full ${p.hClass} object-cover`} />
              <figcaption className="pt-3">
                <span className="block text-sm font-bold text-ink">{p.cap}</span>
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-gold mt-1">{p.cat}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-12 rounded-sm border border-dashed border-line bg-card p-5 text-sm text-ink-soft leading-relaxed">
        Only photographs that genuinely belong to the college are published here. Event, classroom
        and student photographs will be added under new categories as the college shares them —
        no stock or AI imagery is used anywhere on this website.
      </p>
    </>
  );
}
