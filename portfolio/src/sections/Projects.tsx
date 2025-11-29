import vendrixImg from "../assets/projects/vendrix-project.png";
import alphaImg from "../assets/projects/alpha-project.png";
import icebergImg from "../assets/projects/iceberg-project.png";
import otimizadorImg from "../assets/projects/otimizador-project.png";

const projects = [
  {
    id: 1,
    category: "Full Stack / E-commerce / UX",
    title: "Vendrix - The Future of Sneakers",
    description:
      "Ecossistema de e-commerce imersivo focado em alta performance. Desenvolvido com arquitetura moderna para garantir carregamento instantâneo.",
    image: vendrixImg,
    link: "#",
  },
  {
    id: 2,
    category: "Branding / Business Logic",
    title: "Alpha Odonto - Loja Virtual",
    description:
      "Plataforma especializada com motor de personalização de produtos em tempo real e integração com gateway de pagamento.",
    image: alphaImg,
    link: "#",
  },
  {
    id: 3,
    category: "Frontend / SEO",
    title: "Iceberg - Soluções em Climatização",
    description:
      "Landing Page de alta conversão focada em captação de leads. Otimizada para SEO técnico e Core Web Vitals.",
    image: icebergImg,
    link: "#",
  },
  {
    id: 4,
    category: "Algorithms",
    title: "Intelligent Route Optimizer",
    description:
      "Solução algorítmica para o problema do Caixeiro Viajante (TSP) reduzindo custos operacionais.",
    image: otimizadorImg,
    link: "#",
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
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            Discover My <br /> Selected Projects
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-32">
          {projects.map((project) => (
            <div
              key={project.id}
              // MOBILE: h-auto (altura automática para caber imagem + texto empilhados)
              // DESKTOP: h-[600px] (altura fixa para o card com hover)
              className="group relative w-full h-auto md:h-[600px] rounded-2xl overflow-hidden border border-white/5 bg-[#111] flex flex-col md:block"
            >
              {/* --- ÁREA DA IMAGEM --- */}
              {/* Mobile: aspect-video (16:9) garante que o print caiba perfeitamente sem cortes laterais e sem faixas pretas gigantes */}
              <div className="w-full aspect-video md:h-full md:aspect-auto overflow-hidden relative bg-[#1a1a1a]">
                <img
                  src={project.image}
                  alt={project.title}
                  // Mobile: object-cover (preenche o retângulo 16:9)
                  // Desktop: Mantém o efeito de zoom
                  className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105 opacity-100 md:opacity-80 md:group-hover:opacity-100"
                />

                {/* Overlay só existe no Desktop agora */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              </div>

              {/* --- ÁREA DE CONTEÚDO --- */}
              {/* Mobile: position relative (bloco normal embaixo da imagem), p-6 padding menor
                  Desktop: absolute inset-0 (overlay), flex justify-end
              */}
              <div className="relative md:absolute md:inset-0 flex flex-col md:justify-end p-6 md:p-12 bg-[#111] md:bg-transparent border-t md:border-t-0 border-white/5 pointer-events-auto md:pointer-events-none">
                {/* Título e Categoria */}
                <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="font-sans text-purple-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  {/* Diminuí o texto no mobile para text-xl */}
                  <h3 className="font-display font-bold text-xl md:text-4xl text-white leading-tight max-w-3xl mb-3 md:mb-0">
                    {project.title}
                  </h3>
                </div>

                {/* Descrição */}
                <div className="block md:grid md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:transition-[grid-template-rows] md:duration-500 md:ease-out">
                  <div className="overflow-hidden">
                    <div className="pt-0 md:pt-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-700 md:delay-100">
                      <p className="font-sans text-gray-400 text-xs md:text-base leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      {/* Botão Mobile (Link simples e limpo) */}
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

              {/* BOTÃO FLUTUANTE (SÓ DESKTOP) */}
              <div className="hidden md:block absolute bottom-10 right-10 overflow-hidden pointer-events-auto">
                <a
                  href={project.link}
                  className="
                    flex items-center gap-2 text-white font-display font-bold text-xs tracking-widest uppercase 
                    border-b border-white/30 pb-1 hover:border-purple-500 hover:text-purple-400 transition-colors
                    translate-y-full opacity-0 
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-500 ease-out delay-200
                  "
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
          ))}
        </div>
      </div>
    </section>
  );
}
