import { useEffect, useRef } from "react";

const TILT = 0.48; // how flat the galaxy looks (1 = face-on, smaller = more edge-on)
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

/*
  A slowly rotating spiral galaxy.
  Place it inside a `relative` wrapper: it centers itself on that wrapper,
  so it always sits exactly behind your profile photo.
*/
const GalaxyCore = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let R = 0;
    let W = 0;
    let H = 0;
    let particles = [];
    let raf = 0;
    let lastWidth = 0;

    const build = () => {
      const vw = window.innerWidth;
      lastWidth = vw;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      R = Math.max(150, Math.min(vw * 0.42, 400));
      W = Math.round(R * 2);
      H = Math.round(R * 2 * TILT + 24);

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = vw < 768 ? 700 : 1500; // fewer particles on phones
      particles = Array.from({ length: count }, (_, i) => {
        const f = Math.pow(Math.random(), 0.65) * 0.96; // distance from center, 0..1
        const spread = 0.22 + 0.5 * (1 - f) * (1 - f);
        return {
          f,
          angle: (i % 3) * 2.0944 + f * 5.7 + gauss() * spread, // 3 spiral arms
          size: 0.5 + Math.random() * 1.5,
          alpha: 0.35 + Math.random() * 0.55,
          color:
            f < 0.18
              ? "#fde7ff"
              : f < 0.45
              ? "#f472b6"
              : f < 0.75
              ? "#c084fc"
              : "#60a5fa",
        };
      });
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const cy = H / 2;

      ctx.globalCompositeOperation = "lighter";

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.4);
      glow.addColorStop(0, "rgba(244,114,182,0.35)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      const rot = reduceMotion ? 0 : t / 14000;
      for (const p of particles) {
        const a = p.angle + rot * (1.6 - p.f); // inner stars spin faster
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(
          cx + p.f * R * Math.cos(a),
          cy + p.f * R * Math.sin(a) * TILT,
          p.size,
          p.size
        );
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      build();
      draw(0);
    };

    build();
    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(loop);

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12"
    />
  );
};

export default GalaxyCore;
