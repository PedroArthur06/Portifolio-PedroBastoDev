import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import profilePic from "../assets/profile/hero-transp.png";

export function Hero() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animação Texto
      tl.from(".hero-element-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.1, // Adicionei um stagger pequeno para ficar mais fluido
        ease: "power3.out",
      });

      // Animação Imagem
      tl.from(
        ".hero-element-right",
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="w-full min-h-screen bg-gradient-to-r from-[#262325] to-[#443C4E] flex items-center justify-center overflow-hidden px-4 py-10 md:py-0 relative"
    >
      {/* HEADER / NAVBAR:
        - Mudei de 'p-6 md:p-10' para 'p-5 md:p-8' (Subiu um pouco)
        - top-0 right-0 mantém ele fixo no canto
      */}
      <div className="absolute top-0 right-0 p-5 md:p-8 flex items-center gap-6 z-20">
        <a
          href="#"
          className="flex items-center gap-2 text-white font-bold tracking-wide text-xs md:text-sm hover:text-purple-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 9.75V1.5m0 0L8.25 5.25M12 1.5 15.75 5.25"
            />
          </svg>
          BAIXAR CV
        </a>
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#3d3546] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 pl-4 md:pl-16">
        {/* Lado Esquerdo: Conteúdo de Texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl z-10 font-sans">
          <h2 className="hero-element-left font-display text-sm md:text-base text-gray-200 font-semibold mb-4 tracking-[0.2em] uppercase">
            Hi, I'm Pedro Arthur
          </h2>

          <h1 className="hero-element-left font-display font-black text-white text-4xl md:text-7xl leading-[0.9] tracking-tighter mb-6">
            Junior <br />
            Developer <br />
            Full Stack
          </h1>

          <p className="hero-element-left text-gray-400 text-sm md:text-[15px] max-w-[480px] mb-8 leading-relaxed font-normal">
            Desenvolvo ecossistemas, não apenas sites. Especialista em criar
            arquiteturas escaláveis com Node.js, TypeScript e AWS. Transformo
            regras de negócio complexas em código limpo e performático.
          </p>

          <button className="hero-element-left bg-[#5a2d8c] hover:bg-[#4a2475] text-white text-xs md:text-sm px-8 py-3 md:px-8 md:py-3.5 rounded font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(90,45,140,0.5)]">
            Conecte-se comigo
          </button>
        </div>

        <div className="hero-element-right relative w-full md:w-1/2 flex justify-center md:justify-center md:mt-16">
          <img
            src={profilePic}
            alt="Pedro Arthur"
            className="w-[320px] md:w-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
