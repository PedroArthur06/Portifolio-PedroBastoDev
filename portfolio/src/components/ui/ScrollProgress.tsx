import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Cálculo da altura total scrollável
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // 2. Quanto já foi scrollado
      const currentScroll = window.scrollY;

      // 3. Regra de três simples para achar a porcentagem (0 a 100)
      const scrollPercentage = (currentScroll / totalHeight) * 100;

      setScrollProgress(scrollPercentage);

      // Só mostra o botão depois de descer 100px
      if (currentScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="relative w-14 h-14 flex items-center justify-center bg-[#0a0a0a] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:scale-110 transition-transform duration-300">
        {/* SVG do Progresso (Anel Externo) */}
        <svg
          className="absolute top-0 left-0 w-full h-full -rotate-90 transform"
          width="56"
          height="56"
        >
          {/* Círculo de fundo */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="transparent"
            stroke="#222"
            strokeWidth="2"
          />
          {/* Círculo de progresso (Roxo Brilhante) */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="transparent"
            stroke="#a855f7"
            strokeWidth="2"
            strokeDasharray={2 * Math.PI * 26}
            strokeDashoffset={
              2 * Math.PI * 26 - (scrollProgress / 100) * (2 * Math.PI * 26)
            }
            strokeLinecap="round"
            className="transition-all duration-100 ease-linear"
          />
        </svg>

        {/* Seta interna */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </div>
    </button>
  );
}
