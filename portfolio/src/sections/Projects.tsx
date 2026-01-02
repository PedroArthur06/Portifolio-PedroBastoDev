import vendrixImg from "../assets/projects/vendrix-project.png";
import alphaImg from "../assets/projects/alpha-project.png";
import icebergImg from "../assets/projects/iceberg-project.png";
import otimizadorImg from "../assets/projects/otimizador-project.png";
import lavanderiaImg from "../assets/projects/lavanderia-project.png";
import { SplitTextReveal } from "../components/ui/SplitTextReveal";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

const projects = [
  {
    id: 1,
    category: "Full Stack / ERP / Business Intelligence", 
    title: "CleanFlow ERP - Laundry System", 
    description: "Plataforma centralizada que substituiu planilhas manuais por gestão automatizada de ciclo de vida de pedidos e financeiro. Reduziu o tempo operacional em 40% e eliminou inconsistências de caixa.",
    image: lavanderiaImg,
    link: "https://github.com/PedroArthur06/cleanflow-erp#",
  },
  {
    id: 2,
    category: "Full Stack / E-commerce / UX",
    title: "Vendrix - The Future of Sneakers",
    description:
      "Ecossistema de e-commerce imersivo focado em alta performance. Desenvolvido com arquitetura moderna para garantir carregamento instantâneo.",
    image: vendrixImg,
    link: "https://vendrix-rosy.vercel.app/",
  },
  {
    id: 3,
    category: "Branding / Business Logic",
    title: "Alpha Odonto - Loja Virtual",
    description:
      "Plataforma especializada com motor de personalização de produtos em tempo real e integração com gateway de pagamento.",
    image: alphaImg,
    link: "https://alphaodonto.shop/",
  },
  {
    id: 4,
    category: "Frontend / SEO",
    title: "Iceberg - Soluções em Climatização",
    description:
      "Landing Page de alta conversão focada em captação de leads. Otimizada para SEO técnico e Core Web Vitals.",
    image: icebergImg,
    link: "https://iceberg-three.vercel.app/",
  },
  {
    id: 5,
    category: "Algorithms",
    title: "Intelligent Route Optimizer",
    description:
      "Solução algorítmica para o problema do Caixeiro Viajante (TSP) reduzindo custos operacionais.",
    image: otimizadorImg,
    link: "https://github.com/PedroArthur06/route-optima-engine/tree/desafio-03",
  },
];

export function Projects() {
  return (
    <section className="bg-[#050505] py-12 md:py-24 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-24 text-center">
          <span className="font-sans text-purple-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block">
            Selected Works
          </span>
          <div className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex justify-center">
            <SplitTextReveal text="Featured Projects" />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, index) => (
            <RevealOnScroll
              key={project.id}
              delay={index % 2 === 0 ? 0 : 0.2} 
            >
              <div
                className="group relative w-full h-auto md:h-[600px] rounded-2xl overflow-hidden border border-white/5 bg-[#111] flex flex-col md:block"
              >

                <div className="w-full aspect-video md:h-full md:aspect-auto overflow-hidden relative bg-[#1a1a1a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105 opacity-100 md:opacity-80 md:group-hover:opacity-100"
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                <div className="relative md:absolute md:inset-0 flex flex-col md:justify-end p-6 md:p-12 bg-[#111] md:bg-transparent border-t md:border-t-0 border-white/5 pointer-events-auto md:pointer-events-none">
                  <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="font-sans text-purple-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-4xl text-white leading-tight max-w-3xl mb-3 md:mb-0">
                      {project.title}
                    </h3>
                  </div>

                  <div className="block md:grid md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:transition-[grid-template-rows] md:duration-500 md:ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-0 md:pt-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-700 md:delay-100">
                        <p className="font-sans text-gray-400 text-xs md:text-base leading-relaxed max-w-xl">
                          {project.description}
                        </p>
                        <div className="md:hidden mt-4">
                          <a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase border-b border-purple-500 pb-1"
                          >
                            View Project
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-10 right-10 overflow-hidden pointer-events-auto">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-white font-display font-bold text-xs tracking-widest uppercase border-b border-white/30 pb-1 hover:border-purple-500 hover:text-purple-400 transition-colors translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-200"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
