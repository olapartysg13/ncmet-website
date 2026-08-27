import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Genuine photographs of NCMET Ghazipur — campus, leadership and the official emblem, arranged by category.",
};

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="kicker">Photo Gallery</p>
        <h1 className="display text-4xl md:text-6xl text-ink mt-3">
          The campus, as it is.
          <br />
          <span className="italic text-maroon">Real photographs only.</span>
        </h1>
        <p className="text-sm text-ink-soft mt-5 max-w-xl leading-relaxed">
          Every image below is a genuine photograph of the college or its official identity.
          Browse by category.
        </p>
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
