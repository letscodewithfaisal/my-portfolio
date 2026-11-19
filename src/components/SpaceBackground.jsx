import { useEffect, useRef } from "react";

const STAR_COLORS = ["#ffffff", "#ffffff", "#ffffff", "#c4b5fd", "#f9a8d4", "#93c5fd"];

/*
  Fixed, full-page space background:
  - twinkling stars that drift slightly as you scroll (parallax, like flying through space)
  - soft nebula clouds
  - a couple of shooting stars
  It sits behind everything (z-0) and ignores the mouse.
*/
const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let stars = [];
    let raf = 0;
    let scrollY = window.scrollY;
    let lastWidth = 0;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      lastWidth = w;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(220, (w * h) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.4,
        depth: 0.05 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.8,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const y = (((s.y - scrollY * s.depth) % h) + h) % h;
        ctx.globalAlpha = reduceMotion
          ? 0.7
          : 0.3 + 0.7 * Math.abs(Math.sin((t / 1000) * s.speed + s.phase));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      if (reduceMotion) draw(0);
    };

    // Only rebuild when the width changes (mobile address bars change the height constantly)
    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      setup();
      draw(0);
    };

    setup();
    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(loop);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05040b]"
    >
      {/* Nebula clouds */}
      <div
        className="absolute -left-24 -top-32 size-112 animate-nebula rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.34), transparent 70%)",
        }}
      />
      <div
        className="absolute -right-28 top-1/3 size-112 animate-nebula rounded-full [animation-delay:-6s]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.26), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-44 left-1/3 size-120 animate-nebula rounded-full [animation-delay:-11s]"
        style={{
          background:
            "radial-gradient(circle, rgba(219,39,119,0.24), transparent 70%)",
        }}
      />

      {/* Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Shooting stars */}
      <span className="absolute right-[10%] top-[14%] h-0.5 w-24 animate-shoot bg-linear-to-l from-white to-transparent opacity-0" />
      <span className="absolute right-[45%] top-[34%] h-0.5 w-20 animate-shoot bg-linear-to-l from-white to-transparent opacity-0 [animation-delay:4.5s]" />
    </div>
  );
};

export default SpaceBackground;