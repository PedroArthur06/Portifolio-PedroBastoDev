import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-40 transition-all duration-300 flex items-center justify-end px-4 md:px-8 
      ${
        scrolled
          ? "bg-[#050505]/60 backdrop-blur-md border-b border-white/5"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mr-14 md:mr-20">
        <a
          href="/CV Pedro-Basto Dev.pdf"
          download="CV - Pedro Basto.pdf"
          className="
            flex items-center gap-2 
            text-white font-display font-bold text-[10px] md:text-xs tracking-widest uppercase
            bg-white/5 hover:bg-white/10 border border-white/5 
            px-4 py-2 rounded-full 
            transition-all duration-300 hover:scale-105 hover:border-purple-500/50
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-purple-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 9.75V1.5m0 0L8.25 5.25M12 1.5 15.75 5.25"
            />
          </svg>
          <span className="hidden md:inline">BAIXAR CV</span>
          <span className="md:hidden">CV</span>
        </a>
      </div>
    </header>
  );
}
