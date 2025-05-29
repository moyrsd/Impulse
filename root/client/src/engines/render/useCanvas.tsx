import { useEffect, useRef } from "react";
import { DrawCircle } from "./Draw";
import type { Vector2D } from "../../types/PhysicsTypes";

export function useCanvas(center: Vector2D, radius: number) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log(center);
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;

    let animationID: number;

    const renderFrame = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      DrawCircle(context, center, radius);
      animationID = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => cancelAnimationFrame(animationID);
  }, [center, radius]);

  return canvasRef;
}
