import {
  Hero, QuickAccess, About, Director, Values, Infrastructure,
  Academic, Admission, Support, Gallery, Events, Contact,
} from "./components/Sections";
import Programmes from "./components/Programmes";
import { BackToTop } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <About />
      <Director />
      <Values />
      <Infrastructure />
      <Programmes />
      <Academic />
      <Admission />
      <Support />
      <Gallery />
      <Events />
      <Contact />
      <BackToTop />
    </>
  );
}
