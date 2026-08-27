import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://ncomet.in"),
  title: {
    default:
      "NCMET Ghazipur — NICE College of Management and e-Technology | Admissions Open 2026-27",
    template: "%s | NCMET Ghazipur",
  },
  description:
    "NICE College of Management and e-Technology (NCMET), Ghazipur — established 1999. BCA, MCA, MBA, DCA, PGDCA, NIELIT O Level & CCC, Tally ERP, ITI and career-focused programmes with practical learning, modern labs and placement assistance.",
  keywords: [
    "NCMET Ghazipur",
    "NICE College of Management and e-Technology",
    "BCA college Ghazipur",
    "O Level Ghazipur",
    "CCC course Ghazipur",
    "NIELIT",
    "Tally ERP",
    "ITI Ghazipur",
    "computer courses Ghazipur",
    "admission 2026",
  ],
  openGraph: {
    title: "NCMET Ghazipur — Learn. Lead. Transform.",
    description:
      "Admissions open 2026-27 at NICE College of Management and e-Technology, Ghazipur. BCA, MCA, MBA, O Level, CCC, Tally ERP, ITI & more.",
    url: "https://ncomet.in/",
    siteName: "NCMET Ghazipur",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/campus.jpg", width: 1402, height: 1122, alt: "NCMET Campus" }],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
