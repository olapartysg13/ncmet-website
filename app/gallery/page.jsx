import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Photo gallery of NCMET Ghazipur — campus, leadership and the official emblem, arranged by category.",
};

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="kicker">Photo Gallery</p>
        <h1 className="display text-4xl md:text-6xl text-ink mt-3">
          Photo gallery.
        </h1>
        <p className="text-sm text-ink-soft mt-5 max-w-xl leading-relaxed">
          Campus, leadership and the official identity — browse by category.
        </p>
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
