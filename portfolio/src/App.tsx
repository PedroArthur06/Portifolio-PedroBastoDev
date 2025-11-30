import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Footer } from "./sections/Footer";
import { StaggeredMenu } from "./components/ui/StaggeredMenu";
import { TechMarquee } from "./components/ui/TechMarquee";
import { Header } from "./components/ui/Header";

export default function App() {
  // Itens do Menu
  const menuItems = [
    { label: "Home", link: "#", ariaLabel: "Go to Home" },
    { label: "Projects", link: "#projects", ariaLabel: "View Projects" },
    {
      label: "Contact",
      link: "mailto:pedrobasto.dev@gmail.com",
      ariaLabel: "Contact Me",
    },
  ];

  // Redes Sociais
  const socialItems = [
    { label: "LinkedIn", link: "https://linkedin.com/in/pedro-arthur-rod" },
    { label: "GitHub", link: "https://github.com/PedroArthur06" },
    { label: "Instagram", link: "#" },
  ];

  return (
    <main className="bg-[#050505] min-h-screen relative">
      <StaggeredMenu items={menuItems} socialItems={socialItems} />
      <Header />
      <Hero />
      <TechMarquee />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
