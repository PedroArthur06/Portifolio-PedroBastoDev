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
        stagger: 0.1,
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
      {/* POSICIONAMENTO DO LINK "BAIXAR CV"
         - top-9: Alinha verticalmente com o centro do botão Menu (que está em top-8)
         - right-20 (Mobile): Dá espaço para o ícone X não ficar em cima
         - md:right-28 (Desktop): Dá mais respiro em telas grandes
         - z-40: Fica acima do background, mas abaixo do menu aberto
      */}
      <div className="absolute top-9 right-20 md:top-10 md:right-28 z-40 flex items-center gap-6">
        <a
          href="/cv-pedro-arthur.pdf"
          download="CV_Pedro_Arthur_FullStack.pdf"
          className="flex items-center gap-2 text-white font-bold tracking-wide text-[10px] md:text-sm hover:text-purple-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 9.75V1.5m0 0L8.25 5.25M12 1.5 15.75 5.25"
            />
          </svg>
          BAIXAR CV
        </a>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 md:pl-20 ">
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

          <button
            className="
    /* 1. CLASSE DE ANIMAÇÃO DO GSAP */
    hero-element-left
    
    /* 2. CORES VIBRANTES & VISIBILIDADE */
    bg-[#7c3aed] hover:bg-[#6d28d9] text-white 
    opacity-100 /* Força opacidade total caso o GSAP falhe */
    
    /* 3. TIPOGRAFIA */
    font-display font-bold text-xs tracking-widest uppercase 
    
    /* 4. ESPAÇAMENTO & TAMANHO */
    px-10 py-4 md:px-12 md:py-5 mt-8 
    w-auto /* Garante que não estique */
    
    /* 5. ANIMAÇÕES DE INTERAÇÃO */
    transition-all duration-300 
    hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1
    
    /* 6. ALINHAMENTO CRÍTICO */
    /* Mobile: mx-auto força o centro se o pai permitir, mas o self-center é mais forte no flexbox */
    self-center md:self-start
  "
          >
            Conecte-se comigo
          </button>
        </div>

        {/* Lado Direito: Imagem */}
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
