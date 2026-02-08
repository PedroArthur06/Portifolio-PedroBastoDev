import { useState, useEffect } from "react";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { SplitTextReveal } from "../components/ui/SplitTextReveal";

const testimonials = [
  {
    id:1,
    quote:"O sistema eliminou as divergências manuais de caixa e unificou a gestão complexa de Convênios, iFood e Pix. O que antes consumia horas de conferência e retrabalho, hoje temos em um painel financeiro preciso e automatizado.",
    name: "Aline Monteiro",
    Role: "Proprietária - Villa Bistrô",
  },
  {
    id: 2,
    quote:
      "O resultado foi excelente. Ele entendeu nossas necessidades de personalização e transformou nosso processo de vendas em uma experiência de compra fluida e intuitiva.",
    name: "Lauren Cristhina",
    role: "Proprietária - Alpha Odonto",
  },
  {
    id: 3,
    quote:
      "A landing page foi fundamental para nossa estratégia digital. Ela profissionalizou nossa presença online e se tornou uma ferramenta essencial para alcançar e captar novos clientes.",
    name: "Antônio Junior",
    role: "Fundador - Iceberg Ar-condicionado",
  },
  {
    id: 4,
    quote:
      "Antes eu anotava tudo no caderno e acabava me perdendo nos pedidos. Agora consigo organizar as roupas, prazos e pagamentos com muito mais facilidade. O sistema deixou minha lavanderia mais organizada e meu dia a dia bem mais tranquilo",
    name: "Thaís Monteiro",
    role: "Proprietária - Lavanderia",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]); 
  

  return (
    <section className="bg-[#050505] py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-20 text-center">
          <RevealOnScroll>
            <div className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex justify-center">
              <SplitTextReveal text="Testimonials" />
            </div>
          </RevealOnScroll>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2"
                >
                  {testimonials
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        className="h-full"
                      >
                        <div className="group bg-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 relative h-full flex flex-col">
                          <div className="mb-6 md:mb-8 text-[#FFFF00] opacity-100">
                            <svg
                              viewBox="0 0 349.078 349.078"
                              fill="currentColor"
                              className="w-8 h-8 md:w-10 md:h-10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M198.779,322.441v-58.245c0-7.903,6.406-14.304,14.304-14.304c28.183,0,43.515-28.904,45.643-85.961h-45.643 c-7.897,0-14.304-6.41-14.304-14.304V26.64c0-7.9,6.406-14.301,14.304-14.301h121.69c7.896,0,14.305,6.408,14.305,14.301v122.988 c0,27.349-2.761,52.446-8.181,74.611c-5.568,22.722-14.115,42.587-25.398,59.049c-11.604,16.917-26.132,30.192-43.155,39.437 c-17.152,9.304-37.09,14.026-59.267,14.026C205.186,336.745,198.779,330.338,198.779,322.441z M14.301,249.887 C6.404,249.887,0,256.293,0,264.185v58.257c0,7.896,6.404,14.298,14.301,14.298c22.166,0,42.114-4.723,59.255-14.026 c17.032-9.244,31.558-22.508,43.161-39.437c11.29-16.462,19.836-36.328,25.404-59.061c5.423-22.165,8.178-47.263,8.178-74.6V26.628 c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404,12.327,0,18.734,0,26.628v122.988c0,7.899,6.404,14.304,14.304,14.304h45.002 C57.201,220.982,42.09,249.887,14.301,249.887z" />
                            </svg>
                          </div>

                          <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 relative z-10 flex-grow">
                            “{item.quote}”
                          </p>
                          <div>
                            <h4 className="font-display font-bold text-white text-xl mb-1">
                              {item.name}
                            </h4>
                            <p className="font-sans text-gray-500 text-sm font-medium uppercase tracking-wider">
                              {item.role}
                            </p>
                          </div>

                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none" />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10 md:mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-500 scale-125"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}