import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import profilePic from "../assets/profile/hero-transp.png";
import { SplitTextReveal } from "../components/ui/SplitTextReveal";

export function Hero() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-element-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

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
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 md:pl-20 ">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl z-10 font-sans">
          <h2 className="hero-element-left font-display text-sm md:text-base text-gray-200 font-semibold mb-4 tracking-[0.2em] uppercase">
            Hi, I'm Pedro Arthur
          </h2>

          <h1 className="hero-element-left font-display font-black text-white text-4xl md:text-7xl leading-[0.9] tracking-tighter mb-6">
            <SplitTextReveal text="Junior" /> <br />
            <SplitTextReveal text="Developer" delay={0.1} /> <br />
            <SplitTextReveal text="Full Stack" delay={0.2} />
          </h1>

          <p className="hero-element-left text-gray-400 text-sm md:text-[15px] max-w-[480px] mb-8 leading-relaxed font-normal">
            Desenvolvo ecossistemas, não apenas sites. Especialista em criar
            arquiteturas escaláveis com Node.js, TypeScript e AWS. Transformo
            regras de negócio complexas em código limpo e performático.
          </p>

          <button
            className="hero-button-anim
              bg-[#7c3aed] hover:bg-[#6d28d9] text-white 
              opacity-100 
              font-display font-bold text-xs tracking-widest uppercase 
              px-10 py-4 md:px-12 md:py-5 mt-8 
              w-auto 
              transition-all duration-300 
              hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1
              self-center mx-auto md:mx-0 md:self-start
            "
          >
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
