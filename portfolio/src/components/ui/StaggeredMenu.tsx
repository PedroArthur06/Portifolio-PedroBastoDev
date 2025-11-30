import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export interface StaggeredMenuItem {
  label: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  items = [],
  socialItems = [],
}) => {
  const [, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  const animColors = ["#581c87", "#3b0764", "#1a1a1a"];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const l1 = line1Ref.current;
      const l2 = line2Ref.current;

      if (!panel || !l1 || !l2) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(
          preContainer.querySelectorAll(".sm-prelayer")
        ) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      gsap.set([panel, ...preLayers], { xPercent: 100 });

      gsap.set(l1, { y: -4, rotate: 0 });
      gsap.set(l2, { y: 4, rotate: 0 });
    });
    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(
      panel.querySelectorAll(".sm-panel-itemLabel")
    ) as HTMLElement[];
    const socialLinks = Array.from(
      panel.querySelectorAll(".sm-socials-link")
    ) as HTMLElement[];

    const layerStates = layers.map((el) => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent")),
    }));
    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 100, opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        i * 0.05
      );
    });

    const panelInsertTime = layerStates.length * 0.05 + 0.1;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: 0.6, ease: "power4.out" },
      panelInsertTime
    );

    if (itemEls.length) {
      tl.to(
        itemEls,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
        panelInsertTime + 0.2
      );
    }

    if (socialLinks.length) {
      tl.to(
        socialLinks,
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.05 },
        panelInsertTime + 0.4
      );
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false;
      });
      tl.play(0);
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        busyRef.current = false;
      },
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) playOpen();
    else playClose();

    const l1 = line1Ref.current;
    const l2 = line2Ref.current;

    if (target) {
      gsap.to(l1, { y: 0, rotate: 45, duration: 0.3, ease: "power2.out" });
      gsap.to(l2, { y: 0, rotate: -45, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(l1, { y: -4, rotate: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(l2, { y: 4, rotate: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [playOpen, playClose]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="absolute top-5 right-4 md:top-6 md:right-8 pointer-events-auto z-[60]">
        <button
          ref={toggleBtnRef}
          onClick={toggleMenu}
          className="relative w-10 h-10 flex items-center justify-center group focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span
              ref={line1Ref}
              className="absolute w-full h-[2px] bg-white rounded-full origin-center"
            />
            <span
              ref={line2Ref}
              className="absolute w-full h-[2px] bg-white rounded-full origin-center"
            />
          </div>
        </button>
      </div>

      <div
        className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden`}
      >
        <div
          ref={preLayersRef}
          className="absolute inset-y-0 right-0 w-[300px] md:w-[450px] pointer-events-none z-[5]"
        >
          {animColors.map((c, i) => (
            <div
              key={i}
              className="sm-prelayer absolute inset-0 bg-cover"
              style={{ background: c }}
            />
          ))}
        </div>

        <aside
          ref={panelRef}
          className={`staggered-menu-panel absolute inset-y-0 right-0 w-[300px] md:w-[450px] bg-[#111] flex flex-col p-8 md:p-12 pt-32 z-10 border-l border-white/10 pointer-events-auto shadow-2xl`}
        >
          <ul className="flex flex-col gap-6 md:gap-8">
            {items.map((it, idx) => (
              <li key={idx} className="overflow-hidden">
                <a
                  href={it.link}
                  onClick={toggleMenu}
                  className="sm-panel-item block font-display font-bold text-white hover:text-purple-500 transition-colors uppercase tracking-tight text-3xl md:text-5xl"
                >
                  <span className="sm-panel-itemLabel block">{it.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-4">
            <h3 className="text-purple-500 font-sans text-xs md:text-sm font-bold uppercase tracking-widest opacity-50">
              Socials
            </h3>
            <div className="flex gap-6">
              {socialItems.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="sm-socials-link text-gray-400 hover:text-white text-base md:text-lg font-sans transition-colors font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
