"use client";

import { useState } from "react";
import { IconCheck, IconWhatsApp } from "./Icons";

const PROGRAMME_OPTIONS = [
  "BCA", "MCA", "MBA", "O Level (NIELIT)", "CCC (NIELIT)", "DCA", "PGDCA",
  "Cyber Security", "Hardware & Networking", "NCA (Accountancy)", "Tally ERP",
  "ITI – Fitter", "ITI – Electrician", "Digital Marketing", "Fashion Design", "Other",
];

const inputCls =
  "w-full h-12 rounded-xl border border-line bg-white px-4 text-[15px] text-fg placeholder:text-ink-soft/70 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20 transition";

export default function EnquiryForm() {
  const [values, setValues] = useState({ name: "", mobile: "", programme: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  function validate() {
    const e = {};
    if (values.name.trim().length < 3) e.name = "Please enter the student's full name.";
    if (!/^[6-9]\d{9}$/.test(values.mobile.trim()))
      e.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!values.programme) e.programme = "Please select a programme.";
    if (values.message.length > 500) e.message = "Message should be under 500 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center" role="status">
        <span className="mx-auto w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
          <IconCheck className="w-7 h-7" />
        </span>
        <h3 className="display text-2xl text-maroon mt-4">Enquiry received!</h3>
        <p className="text-ink-soft mt-2 text-sm leading-relaxed">
          Thank you, <strong className="text-fg">{values.name}</strong>. Our admission team will
          call you on <strong className="text-fg">{values.mobile}</strong> shortly regarding{" "}
          <strong className="text-fg">{values.programme}</strong>.
        </p>
        <p className="text-xs text-ink-soft mt-4">
          Need an instant answer? WhatsApp us —{" "}
          <a
            className="font-bold text-green-700 underline underline-offset-2"
            href={`https://wa.me/918887244055?text=${encodeURIComponent(
              `Hello NCMET, I am ${values.name}. I want admission information for ${values.programme}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ name: "", mobile: "", programme: "", message: "" });
            setStatus("idle");
          }}
          className="mt-6 h-11 px-5 rounded-xl bg-paper-deep text-sm font-bold text-maroon hover:bg-paper-deep transition-colors cursor-pointer"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-plate">
      <h3 className="display text-2xl text-maroon">Quick Enquiry</h3>
      <p className="text-sm text-ink-soft mt-1">
        Fill this and our admission team will connect with you.
      </p>

      {/* Honeypot — hidden from humans, traps bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
        className="hidden" onChange={set("company")} value={values.company || ""} />

      <div className="mt-5 grid gap-4">
        <div>
          <label htmlFor="enq-name" className="block text-sm font-bold text-fg mb-1.5">Student Name</label>
          <input id="enq-name" className={inputCls} placeholder="Enter full name"
            value={values.name} onChange={set("name")} autoComplete="name" />
          {errors.name && <p className="text-xs font-semibold text-red-600 mt-1.5" role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="enq-mobile" className="block text-sm font-bold text-fg mb-1.5">Mobile Number</label>
          <input id="enq-mobile" className={inputCls} inputMode="numeric" maxLength={10}
            placeholder="10-digit mobile number" value={values.mobile}
            onChange={(e) => set("mobile")({ target: { value: e.target.value.replace(/\D/g, "") } })}
            autoComplete="tel-national" />
          {errors.mobile && <p className="text-xs font-semibold text-red-600 mt-1.5" role="alert">{errors.mobile}</p>}
        </div>

        <div>
          <label htmlFor="enq-prog" className="block text-sm font-bold text-fg mb-1.5">Programme</label>
          <select id="enq-prog" className={inputCls} value={values.programme} onChange={set("programme")}>
            <option value="">Select programme</option>
            {PROGRAMME_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
          {errors.programme && <p className="text-xs font-semibold text-red-600 mt-1.5" role="alert">{errors.programme}</p>}
        </div>

        <div>
          <label htmlFor="enq-msg" className="block text-sm font-bold text-fg mb-1.5">Message (optional)</label>
          <textarea id="enq-msg" rows={3} className={`${inputCls} h-auto py-3`} placeholder="Any question about fees, hostel, timings…"
            value={values.message} onChange={set("message")} />
          {errors.message && <p className="text-xs font-semibold text-red-600 mt-1.5" role="alert">{errors.message}</p>}
        </div>

        <button type="submit" disabled={status === "sending"}
          className="h-12 rounded-xl bg-maroon hover:bg-maroon-deep disabled:opacity-60 text-white text-[15px] font-bold transition-colors cursor-pointer">
          {status === "sending" ? "Sending…" : "Submit Enquiry"}
        </button>

        {status === "error" && (
          <p className="text-xs font-semibold text-red-600 text-center" role="alert">
            Could not submit right now. Please call us or use WhatsApp — we reply quickly.
          </p>
        )}

        <a
          href="https://wa.me/918887244055?text=Hello%20NCMET%2C%20I%20want%20admission%20information."
          target="_blank" rel="noopener noreferrer"
          className="h-12 rounded-xl border-2 border-green-600/70 text-green-700 flex items-center justify-center gap-2 text-[15px] font-bold hover:bg-green-50 transition-colors"
        >
          <IconWhatsApp className="w-5 h-5" /> Or WhatsApp us directly
        </a>

        <p className="text-[11px] text-ink-soft text-center">
          Your details stay with the college admission office only.
        </p>
      </div>
    </form>
  );
}
