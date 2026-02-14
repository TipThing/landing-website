"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function NotFoundVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const initializedRef = useRef(false);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Offscreen canvas to sample "404" text pixel positions
    const offscreen = document.createElement("canvas");
    const offW = rect.width;
    const offH = rect.height;
    offscreen.width = offW;
    offscreen.height = offH;
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    // Draw "404" text centered
    const fontSize = Math.min(offW * 0.28, offH * 0.55);
    offCtx.fillStyle = "#fff";
    offCtx.font = `900 ${fontSize}px system-ui, -apple-system, sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText("404", offW / 2, offH / 2);

    // Sample pixels to find text positions
    const imageData = offCtx.getImageData(0, 0, offW, offH);
    const pixels = imageData.data;
    const positions: { x: number; y: number }[] = [];
    const gap = Math.max(3, Math.round(fontSize / 50));

    for (let y = 0; y < offH; y += gap) {
      for (let x = 0; x < offW; x += gap) {
        const i = (y * offW + x) * 4;
        if (pixels[i + 3] > 128) {
          positions.push({ x, y });
        }
      }
    }

    // Create particles from sampled positions
    particlesRef.current = positions.map((pos) => {
      const bright = Math.random() < 0.08;
      return {
        x: pos.x + (Math.random() - 0.5) * rect.width * 0.8,
        y: pos.y + (Math.random() - 0.5) * rect.height * 0.8,
        homeX: pos.x,
        homeY: pos.y,
        vx: 0,
        vy: 0,
        radius: bright ? 2 + Math.random() : 1 + Math.random() * 0.8,
        opacity: bright ? 0.4 + Math.random() * 0.3 : 0.06 + Math.random() * 0.14,
      };
    });

    initializedRef.current = true;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    initParticles();

    const handleResize = () => {
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        mouseRef.current = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    const dpr = window.devicePixelRatio || 1;
    const REPULSE_RADIUS = 100;
    const REPULSE_FORCE = 8;
    const SPRING = 0.04;
    const DAMPING = 0.88;
    let time = 0;

    const animate = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx || !initializedRef.current) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      time += 0.01;

      for (const p of particlesRef.current) {
        if (!prefersReduced) {
          // Mouse repulsion
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < REPULSE_RADIUS && dist > 0) {
            const force =
              ((REPULSE_RADIUS - dist) / REPULSE_RADIUS) * REPULSE_FORCE;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          // Ambient drift
          const noiseX =
            Math.sin(time * 0.5 + p.homeX * 0.01 + p.homeY * 0.008) * 0.15;
          const noiseY =
            Math.cos(time * 0.4 + p.homeY * 0.01 + p.homeX * 0.008) * 0.15;

          // Spring back to home
          p.vx += (p.homeX - p.x) * SPRING + noiseX;
          p.vy += (p.homeY - p.y) * SPRING + noiseY;

          // Damping
          p.vx *= DAMPING;
          p.vy *= DAMPING;

          // Update position
          p.x += p.vx;
          p.y += p.vy;
        } else {
          // Reduced motion: snap to home
          p.x = p.homeX;
          p.y = p.homeY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair"
      style={{ touchAction: "none" }}
    />
  );
}

export { NotFoundVisual };
