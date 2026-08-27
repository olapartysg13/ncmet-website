"use client";

import { useState } from "react";
import { IconLock, IconSparkles } from "./Icons";

export default function Portal() {
  const [note, setNote] = useState(false);

  return (
    <div className="relative rounded-2xl border border-line bg-white p-6 md:p-8 shadow-plate overflow-hidden">
      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wide px-3 py-1">
        <IconSparkles className="w-3 h-3" /> Launching Soon
      </span>

      <div className="w-12 h-12 rounded-xl bg-maroon text-white flex items-center justify-center">
        <IconLock className="w-6 h-6" />
      </div>
      <h3 className="display text-2xl text-maroon mt-4">Student &amp; Admin Portal</h3>
      <p className="text-sm text-ink-soft mt-2 leading-relaxed">
        Login for results, downloads, assignments and institutional services. The online portal is
        being prepared — until it launches, the college office provides results, forms and records
        on request.
      </p>

      <form
        className="mt-5 grid gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          setNote(true);
        }}
      >
        <input
          type="text"
          placeholder="Username / Student ID"
          aria-label="Username or Student ID"
          className="h-12 rounded-xl border border-line bg-white px-4 text-sm focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
        />
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          className="h-12 rounded-xl border border-line bg-white px-4 text-sm focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
        />
        <button
          type="submit"
          className="h-12 rounded-xl bg-maroon hover:bg-maroon-deep text-white text-sm font-bold transition-colors cursor-pointer"
        >
          Login
        </button>
      </form>

      {note && (
        <p className="mt-3 rounded-xl bg-paper-deep px-4 py-3 text-xs font-semibold text-maroon" role="status">
          The portal is launching soon. For results, downloads or records today, please contact the
          college office — call 88872 44055.
        </p>
      )}
    </div>
  );
}
