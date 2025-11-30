import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const RevealOnScroll = ({ children, delay = 0 }: RevealProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Começa quando o topo do elemento estiver em 85% da viewport
          toggleActions: "play none none reverse", // Toca ao entrar, reverte ao sair (opcional, ou use 'play none none none' para ficar fixo)
        },
      }
    );
  }, [delay]);

  return <div ref={ref}>{children}</div>;
};
