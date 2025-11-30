import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const techs = [
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "AWS",
  "DOCKER",
  "POSTGRESQL",
  "NESTJS",
  "MONGODB",
  "NEXT.JS",
  "TAILWIND",
];

export function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      // Calcula a largura total do conteúdo para animar corretamente
      // A lógica: Movemos o container de x: 0% até x: -50% (metade, já que duplicamos a lista)
      gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 20, // Ajuste a velocidade aqui (maior = mais lento)
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // Container Pai: Overflow hidden para esconder o que sai da tela
    <div className="w-full bg-[#050505] border-y border-white/5 py-6 overflow-hidden relative z-10">
      {/* Container Animado: Flex com largura suficiente para não quebrar */}
      <div
        ref={containerRef}
        className="flex w-fit whitespace-nowrap items-center"
      >
        {/* Renderiza a lista DUAS VEZES para criar o loop visual */}
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-8 md:gap-16 px-4 md:px-8 group cursor-default"
          >
            {/* Texto Tech */}
            <span
              className="font-display font-bold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 
              transition-all duration-300 group-hover:from-purple-400 group-hover:to-purple-600 group-hover:opacity-100"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }} // Efeito Outline sutil
            >
              {tech}
            </span>

            {/* Separador (pode ser um ponto, barra ou ícone) */}
            <span className="text-purple-500/30 text-xl">✦</span>
          </div>
        ))}
      </div>

      {/* Opcional: Gradiente nas laterais para suavizar a entrada/saída (Fade) */}
      <div className="absolute top-0 left-0 h-full w-10 md:w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-10 md:w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
}
