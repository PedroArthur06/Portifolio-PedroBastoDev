import { ScrollProgress } from "../components/ui/ScrollProgress";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiRender,
  SiPrisma,
} from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const services = [
  {
    title: "API Development",
    description:
      "Backends de alta performance com Node.js. Foco em segurança, baixa latência e padrões de arquitetura limpa (SOLID).",
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
    techs: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database Architecture",
    description:
      "Modelagem inteligente SQL e NoSQL. Otimização de queries para garantir integridade dos dados e velocidade de resposta.",
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
    techs: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <GrMysql /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Infraestrutura escalável e pipelines de CI/CD. Arquiteturas que crescem automaticamente junto com a demanda do negócio.",
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
    techs: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
];

export function Services() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-32 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div
                className={`group bg-[#0F0F0F] border border-white/5 hover:border-purple-500/50 transition-all duration-500 flex flex-col items-start h-full
                ${
                  index === 1
                    ? "p-12 md:-my-4 z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] scale-105"
                    : "p-10 hover:-translate-y-2"
                }
              `}
              >
                <div className="mb-8 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  {service.title}
                </h3>

                <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5 w-full">
                  {service.techs?.map((tech, i) => (
                    <div
                      key={i}
                      className="text-2xl text-gray-500 hover:text-purple-400 transition-colors duration-300 cursor-help"
                      title={tech.name}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <ScrollProgress />
    </section>
  );
}
