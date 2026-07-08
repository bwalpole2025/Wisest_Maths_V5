"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; z: number; size: number; opacity: number };

function fibonacciSphere(count: number): Dot[] {
  const dots: Dot[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    const depth = (z + 1) / 2;
    dots.push({
      x,
      y,
      z,
      size: 1.4 + depth * 2.8,
      opacity: 0.25 + depth * 0.85,
    });
  }
  return dots;
}

type Orbit = { radius: number; tilt: number; speed: number; dots: number; opacity: number };

const ORBITS: Orbit[] = [
  { radius: 1.18, tilt: 0.2, speed: 0.0012, dots: 48, opacity: 0.35 },
  { radius: 1.38, tilt: -0.35, speed: -0.0008, dots: 56, opacity: 0.28 },
  { radius: 1.58, tilt: 0.55, speed: 0.0006, dots: 64, opacity: 0.22 },
  { radius: 1.78, tilt: -0.15, speed: -0.0005, dots: 72, opacity: 0.16 },
];

export function ParticleGlobe({
  className,
  sizeMultiplier = 6,
}: {
  className?: string;
  sizeMultiplier?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;

    const sphereDots = fibonacciSphere(680);
    const ambient = Array.from({ length: 120 }, () => ({
      x: (Math.random() - 0.5) * 3.2,
      y: (Math.random() - 0.5) * 3.2,
      z: Math.random() * 2 - 0.5,
      size: 0.6 + Math.random() * 1.8,
      opacity: 0.08 + Math.random() * 0.4,
      drift: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width < 1 || height < 1) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (width < 1 || height < 1) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.54;
      const baseScale = Math.min(width, height) * 0.38;
      const scale = Math.min(
        baseScale * sizeMultiplier,
        width * 0.495,
        height * 0.78,
      );

      const rotY = frame * 0.0028;
      const rotX = 0.32;

      const project = (x: number, y: number, z: number) => {
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const perspective = 2.6 / (2.6 + z2);
        return {
          px: cx + x1 * scale * perspective,
          py: cy + y1 * scale * perspective,
          depth: (z2 + 1) / 2,
          perspective,
        };
      };

      // Orbital rings
      for (const orbit of ORBITS) {
        const ringRot = frame * orbit.speed;
        for (let i = 0; i < orbit.dots; i++) {
          const angle = (i / orbit.dots) * Math.PI * 2 + ringRot;
          const x = Math.cos(angle) * orbit.radius;
          const z = Math.sin(angle) * orbit.radius;
          const y = Math.sin(angle * 2) * orbit.tilt;
          const p = project(x, y, z);
          ctx.beginPath();
          ctx.arc(p.px, p.py, 1.1 * p.perspective, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${orbit.opacity * (0.5 + p.depth * 0.5)})`;
          ctx.fill();
        }
      }

      // Ambient scatter
      for (const a of ambient) {
        const wobble = Math.sin(frame * 0.008 + a.drift) * 0.04;
        const p = project(a.x + wobble, a.y, a.z);
        ctx.beginPath();
        ctx.arc(p.px, p.py, a.size * p.perspective * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a.opacity * (0.3 + p.depth * 0.7)})`;
        ctx.fill();
      }

      // Main sphere
      const projected = sphereDots.map((d) => ({ ...d, ...project(d.x, d.y, d.z) }));
      projected.sort((a, b) => a.depth - b.depth);

      for (const d of projected) {
        const glow = d.opacity * (0.45 + d.depth * 0.55);
        ctx.beginPath();
        ctx.arc(d.px, d.py, d.size * d.perspective, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${glow})`;
        ctx.fill();
      }

      // Core glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 1.05);
      grad.addColorStop(0, "rgba(255,255,255,0.18)");
      grad.addColorStop(0.35, "rgba(120,190,255,0.08)");
      grad.addColorStop(0.7, "rgba(80,150,255,0.03)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      frame++;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [sizeMultiplier]);

  return (
    <div ref={containerRef} className={className} aria-hidden>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
