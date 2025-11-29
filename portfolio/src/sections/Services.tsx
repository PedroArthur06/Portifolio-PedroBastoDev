import { ScrollProgress } from "../components/ui/ScrollProgress";

const services = [
  {
    title: "API Development",
    description: "Construção de APIs RESTful robustas e escaláveis com Node.js",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <circle cx="16" cy="8" r="3" fill="currentColor" />
        <circle cx="8" cy="16" r="3" fill="currentColor" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Database Architecture",
    description: "Modelagem de dados eficiente com MongoDB e PostgreSQL",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="currentColor" />
        <path
          d="M4 12L12 16L20 12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16L12 20L20 16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Deploy e infraestrutura serverless utilizando AWS",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <path d="M12 22L2 12L12 2L22 12L12 22Z" fill="currentColor" />
        <path d="M12 16V8" stroke="#000" strokeWidth="2" />
        <path d="M8 12H16" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-32 px-4 md:px-20">
      <div className="container mx-auto">
        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-[#0F0F0F] border border-white/5 hover:border-purple-500/50 transition-all duration-500 flex flex-col items-start
                ${
                  index === 1
                    ? "p-12 md:-my-4 z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] scale-105"
                    : "p-10 hover:-translate-y-2"
                }
              `}
            >
              {/* Ícone */}
              <div className="mb-8 text-white group-hover:text-purple-400 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Título (Unbounded) */}
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {service.title}
              </h3>

              {/* Descrição (Poppins) */}
              <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                {service.description}
              </p>

              {/* Link com Efeito de Underline */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-display font-bold text-xs tracking-widest uppercase border-b border-white/30 pb-1 hover:text-purple-400 hover:border-purple-400 transition-all duration-300 mt-auto"
              >
                VIEW DETAILS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Flutuante de Scroll */}
      <ScrollProgress />
    </section>
  );
}
