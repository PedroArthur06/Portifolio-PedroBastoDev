import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const SplitTextReveal = ({
  text,
  className = "",
  delay = 0,
  width = "fit-content",
}: SplitTextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll(".split-char");

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
        rotate: 10,
      },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.05,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} overflow-hidden inline-block`}
      style={{ width }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="split-char inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
