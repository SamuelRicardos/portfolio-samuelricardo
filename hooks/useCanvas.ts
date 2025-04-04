'use client';
import { useEffect, useRef } from 'react';

type DrawFunction = (ctx: CanvasRenderingContext2D) => void;

export const useCanvas = (draw: DrawFunction) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const init = () => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const render = () => {
        draw(ctx);
        animationFrameId = requestAnimationFrame(render);
      };
      render();
    };

    init();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

