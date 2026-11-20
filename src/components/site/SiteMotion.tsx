import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const motionEase = [0.22, 1, 0.36, 1] as const;

// Select structural elements on every page. Each observed element is played once;
// content stays visible if JavaScript or IntersectionObserver is unavailable.
export function usePageMotion(pathname: string) {
  useEffect(() => {
    if (!window.IntersectionObserver || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.setAttribute("data-seen", "");
        observer.unobserve(target);
      }
    }, { rootMargin: "0px 0px -12px 0px" });

    const selectors = "section:not([data-no-reveal]) > :is(h2, .grid > *, .space-y-3 > *, .space-y-5 > *), [data-reveal]";
    const nodes = document.querySelectorAll<HTMLElement>(selectors);
    nodes.forEach((node) => {
      if (node.closest("[data-no-reveal]")) return;
      const position = Array.from(node.parentElement?.children ?? []).indexOf(node);
      node.style.setProperty("--stagger", `${Math.min(position, 5) * 80}ms`);
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [pathname]);
}

export function SiteControls() {
  const bar = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    let frame = 0;
    let wasVisible = false;
    function update() {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(1, Math.max(0, y / max)) : 0})`);
      document.documentElement.toggleAttribute("data-scrolled", y > 32);
      const show = y > 400;
      if (show !== wasVisible) { setShowTop(show); wasVisible = show; }
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);
  return <>
    <div aria-hidden="true" ref={bar} className="reading-progress fixed inset-x-0 top-0 z-[45] h-0.5 origin-left bg-brand-green" />
    <div className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-center gap-2 lg:bottom-6 lg:right-6">
      {showTop && <Button type="button" size="icon" variant="outline" className="site-pop size-10 rounded-full" aria-label="Retour en haut" title="Retour en haut" onClick={() => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}><ArrowUp /></Button>}
      <Button asChild size="icon" className="whatsapp-halo size-11 rounded-full bg-brand-green text-brand-foreground hover:bg-brand-green/90">
        <a href="https://wa.me/237686204678" target="_blank" rel="noreferrer" aria-label="Écrire à Solumed sur WhatsApp" title="WhatsApp"><MessageCircle /></a>
      </Button>
    </div>
  </>;
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (!ref.current || !window.IntersectionObserver || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      function animate(now: number) {
        const progress = Math.min(1, (now - start) / 650);
        setCurrent(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      }
      frame = requestAnimationFrame(animate);
    });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref} className="tabular-nums"><span className="sr-only">{value}{suffix}</span><span aria-hidden="true">{current}{suffix}</span></span>;
}