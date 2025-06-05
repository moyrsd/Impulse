// RenderEngine.tsx

import { useRef, useEffect } from "react";

type RenderProps = {
  x: number;
  y: number;
  radius: number;
};

export function RenderEngine({ x, y, radius }: RenderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeAndDraw = () => {
      const canvas = canvasRef.current;
      const parent = parentRef.current;
      if (!canvas || !parent) return;

      // Get parent size
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(radius + x, canvas.height - radius - y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
        ctx.strokeStyle = "#000";
        ctx.stroke();
      }
    };

    resizeAndDraw();
    window.addEventListener("resize", resizeAndDraw);
    return () => window.removeEventListener("resize", resizeAndDraw);
  }, [x, y, radius]);

  return (
    <div ref={parentRef} style={{ width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
