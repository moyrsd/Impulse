import { useState, useEffect } from "react";
import { useCanvas } from "./useCanvas";
import { PhysicsEngine } from "../physics/PhysicsEngine";
import type { InitialCondition } from "../../types/PhysicsTypes";

export function RenderEngine({
  initialCondition,
  radius,
  duration,
  width,
  height,
}: {
  initialCondition: InitialCondition;
  radius: number;
  duration: number;
  width: number;
  height: number;
}) {
  const FPS = 60;
  const [time, setTime] = useState(0);
  const frameTime = 1000 / FPS;
  const canvasRef = useCanvas(
    PhysicsEngine(initialCondition, time).pos_at_t,
    radius
  );

  useEffect(() => {
    let animationFrame: number;
    let lastUpdate = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = now - lastUpdate;

      if (delta > frameTime) {
        setTime((prev) => {
          const newTime = prev + delta / 1000;
          return newTime > duration ? duration : newTime;
        });
        lastUpdate = now;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, frameTime]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}
