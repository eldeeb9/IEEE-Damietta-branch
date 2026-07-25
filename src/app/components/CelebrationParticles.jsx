"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#fde047",
  "#fbbf24",
  "#f97316",
  "#38bdf8",
  "#ec4899",
  "#22c55e",
  "#a855f7",
  "#fb7185",
];

function createParticle(side, width, height) {
  const fromLeft = side === "left";
  const spread = height * 0.55;

  return {
    x: fromLeft ? -12 : width + 12,
    y: height * 0.15 + Math.random() * spread,
    vx: (fromLeft ? 1 : -1) * (Math.random() * 10 + 8),
    vy: -(Math.random() * 8 + 3),
    w: Math.random() * 6 + 3,
    h: Math.random() * 22 + 10,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 14,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 1,
    gravity: 0.18,
    drag: 0.985,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: Math.random() * 0.12 + 0.04,
  };
}

const CelebrationParticles = ({ active = false, duration = 4200 }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    startedRef.current = true;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [
      ...Array.from({ length: 55 }, () => createParticle("left", width, height)),
      ...Array.from({ length: 55 }, () => createParticle("right", width, height)),
    ];

    const startTime = performance.now();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    const drawParticle = (particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.globalAlpha = particle.opacity;

      const gradient = ctx.createLinearGradient(0, -particle.h / 2, 0, particle.h / 2);
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, `${particle.color}88`);
      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.roundRect(-particle.w / 2, -particle.h / 2, particle.w, particle.h, 2);
      ctx.fill();

      ctx.restore();
    };

    const tick = (now) => {
      const elapsed = now - startTime;
      const fadeStart = duration * 0.65;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.vx *= particle.drag;
        particle.vy *= particle.drag;
        particle.vy += particle.gravity;
        particle.x += particle.vx + Math.sin(particle.wobble) * 0.6;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.wobble += particle.wobbleSpeed;

        if (elapsed > fadeStart) {
          particle.opacity = Math.max(
            0,
            1 - (elapsed - fadeStart) / (duration - fadeStart),
          );
        }

        if (particle.opacity > 0.01) {
          drawParticle(particle);
        }
      });

      if (elapsed < duration) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [active, duration]);

  if (!active && !startedRef.current) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
};

export default CelebrationParticles;
