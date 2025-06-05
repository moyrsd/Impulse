import { useState, useEffect } from "react";
import { PhysicsEngine } from "../physics/PhysicsEngine";
import { RenderEngine } from "./RenderEngine";
import type { InitialCondition } from "../../types/PhysicsTypes";

const initialCondition: InitialCondition = {
  position: { x: 0, y: 0 },
  velocity: { x: 70, y: 70 },
  accelaration: { x: 0, y: -9.8 },
};

export default function Animation() {
  const [time, setTime] = useState(0);
  const [position, setPosition] = useState(initialCondition.position);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setTime((prev) => prev + 0.045);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const { pos_at_t } = PhysicsEngine(initialCondition, time);
    setPosition(pos_at_t);
  }, [time]);

  return <RenderEngine x={position.x} y={position.y} radius={10} />;
}
