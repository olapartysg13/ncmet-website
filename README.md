# NCMET — NICE College of Management and e-Technology, Ghazipur

Official college website (redesigned 2026). Built with **Next.js 15 + Tailwind CSS 4**,
design system generated with the *ui-ux-pro-max* skill (Swiss Modernism 2.0 —
institutional navy `#1E3A5F` + gold `#A16207`, EB Garamond serif headings).

## What's inside

- Complete single-page site: Hero, About (real founder portrait), Director's Message
  (real portrait), Vision/Mission/Quality, Infrastructure (real library photo),
  15 filterable programmes, Academic services, Admissions with a **working enquiry API**,
  Student Support + Portal (launching soon), Gallery (**real photos only**), Events, Contact.
- `/api/enquiry` — validated server-side (name, 10-digit Indian mobile, programme whitelist,
  honeypot for bots). Optionally forwards to any webhook/CRM:

  ```bash
  # In Vercel project Settings → Environment Variables
  ENQUIRY_WEBHOOK_URL=https://your-zapier-or-sheet-endpoint
  ```

- SEO: metadata, OpenGraph, robots.txt, sitemap.xml. Accessibility: skip link, focus rings,
  labelled forms, reduced-motion support.

## Photos — real only

All photographs in `public/images/` are genuine college assets (campus, library, founder,
director, emblem). **To add new real photos** (labs, teachers, events): drop a file into
`public/images/` and reference it in `app/components/Sections.jsx` (Gallery section).
No stock/AI imagery is used anywhere.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Deploy

Push to GitHub, then in Vercel import the repo (framework preset: Next.js). Or CLI:

```bash
vercel --prod --yes
```

## Security notes for the college (important)

1. **Rotate all shared tokens** (GitHub PAT, Vercel, 21st.dev) — they were pasted in chat once.
2. On the old Apache host (ncomet.in) still fix: HTTPS redirect + HSTS, security headers,
   the 404-page third-party script (`directfwd`), and add SPF/DMARC once email is set up.
   Details in `ncomet_audit/NCMET_Security_Audit_Report.md`.
3. Point DNS of `ncomet.in` to Vercel when ready (Vercel project → Domains → add ncomet.in,
   then A/CNAME records as Vercel shows). Vercel gives free HTTPS + HTTP→HTTPS redirect,
   fixing findings #3 automatically for the new site.
