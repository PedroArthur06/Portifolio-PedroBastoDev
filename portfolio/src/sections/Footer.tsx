import { SplitTextReveal } from "../components/ui/SplitTextReveal";
import { useState } from "react";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Falha ao enviar");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };
  return (
    <footer className="bg-[#551B8C] text-black py-12 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-12 md:mb-20">
          <div className="flex flex-col justify-between h-full items-center md:items-start">
            <div className="flex flex-col items-center md:items-start w-full">
              <h2 className="font-display font-black text-4xl md:text-7xl leading-[0.9] mb-6 md:mb-8 tracking-tight text-center md:text-left">
                <SplitTextReveal text="Do conceito" /> <br />
                <SplitTextReveal text="ao código —" delay={0.1} /> <br />
                <SplitTextReveal text="juntos" delay={0.2} />
              </h2>

              <p className="w-full font-sans text-black/80 text-base md:text-xl mb-8 md:mb-12 max-w-none md:max-w-md font-medium leading-relaxed text-center md:text-left">
                Se você tem uma ideia, eu tenho o código.{" "}
                <br className="hidden md:block" />
                Vamos conversar e tirá-la do papel.
              </p>

              <p className="font-sans text-sm text-black font-bold mb-6 hidden md:block">
                Copyright © 2025
              </p>
            </div>

            <div className="flex gap-6 mt-4 md:mt-auto items-center justify-center md:justify-start w-full">
              <a
                href="#"
                className="text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-271 283.9 256 235.1"
                  fill="currentColor"
                  width="23"
                  height="23"
                >
                  <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
                  <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z" />
                  <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
                </svg>
              </a>
              <a
                href="mailto:email"
                className="text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-4 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 md:gap-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="name"
                    className="text-sm font-sans font-bold text-black text-left"
                  >
                    Nome completo*
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black py-2 focus:border-black/50 focus:outline-none transition-colors text-black text-base md:text-lg placeholder-black/30"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="email"
                    className="text-sm font-sans font-bold text-black text-left"
                  >
                    Email*
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-black py-2 focus:border-black/50 focus:outline-none transition-colors text-black text-base md:text-lg placeholder-black/30"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="message"
                  className="text-sm font-sans font-bold text-black text-left"
                >
                  Deixe sua mensagem*
                </label>
                <textarea
                  required
                  id="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black py-2 focus:border-black/50 focus:outline-none transition-colors text-black text-base md:text-lg resize-none placeholder-black/30"
                  placeholder="Como posso te ajudar?"
                ></textarea>
              </div>

              <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`
                    bg-black hover:bg-gray-900 text-white font-display font-bold text-xs tracking-widest uppercase px-12 py-4 md:py-5 
                    transition-all duration-300 w-full md:w-auto shadow-lg hover:-translate-y-1
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {status === "loading"
                    ? "ENVIANDO..."
                    : status === "success"
                    ? "ENVIADO!"
                    : "ENVIAR MENSAGEM"}
                </button>

                {status === "success" && (
                  <span className="text-green-900 font-bold text-sm animate-pulse">
                    Recebi sua mensagem! Retorno em breve.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-800 font-bold text-sm">
                    Ops, algo deu errado. Tente novamente.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-black/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-lg text-black">
              Cuiabá
            </span>
            <span className="font-sans text-black/70 text-sm font-medium">
              MT, BR
            </span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <span className="font-sans text-lg font-bold text-black">
              (65) 9981-2657
            </span>
            <a
              href="mailto:pedrobasto.dev@gmail.com"
              className="font-sans text-black/70 text-sm font-medium hover:text-black transition-colors"
            >
              pedrobasto.dev@gmail.com
            </a>
          </div>

          <p className="font-sans text-sm text-black font-bold mt-4 md:hidden">
            Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
