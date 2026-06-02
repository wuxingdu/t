"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function MotionLayer() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isDesktop: "(min-width: 860px)",
      },
      (context) => {
        const { reduceMotion, isDesktop } = context.conditions ?? {};
        if (reduceMotion) {
          gsap.set("[data-animate]", { autoAlpha: 1, y: 0 });
          return undefined;
        }

        gsap.defaults({ duration: 0.72, ease: "power3.out" });
        gsap.fromTo(
          ".hero-kicker, .hero-title, .hero-copy, .hero-ledger",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, stagger: 0.09 }
        );

        gsap.fromTo(
          ".hero-visual-piece",
          { autoAlpha: 0, y: isDesktop ? 42 : 18, rotation: -2 },
          { autoAlpha: 1, y: 0, rotation: 0, stagger: 0.08, delay: 0.16 }
        );

        const revealItems = Array.from(document.querySelectorAll("[data-animate]"));

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              gsap.fromTo(
                entry.target,
                { autoAlpha: 0, y: 32 },
                {
                  autoAlpha: 1,
                  y: 0,
                  clearProps: "opacity,visibility,transform",
                  overwrite: "auto",
                }
              );
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
        );

        revealItems.forEach((item) => observer.observe(item));

        const cards = Array.from(document.querySelectorAll<HTMLElement>(".entry-card"));
        const cleanups = cards.map((card) => {
          const image = card.querySelector(".card-image");
          const enter = () =>
            gsap.to(image, { scale: 1.045, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          const leave = () =>
            gsap.to(image, { scale: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);
          return () => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
          };
        });

        return () => {
          observer.disconnect();
          cleanups.forEach((cleanup) => cleanup());
        };
      }
    );

    return () => mm.revert();
  }, []);

  return null;
}
