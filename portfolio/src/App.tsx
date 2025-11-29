import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
