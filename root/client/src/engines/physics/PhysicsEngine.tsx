// PhysicsEngine.tsx

import type { InitialCondition } from "../../types/PhysicsTypes";
import { position, velocity } from "./utils/Kinetics";

export function PhysicsEngine(initialCondition: InitialCondition, t: number) {
  const pos = position(
    initialCondition.position,
    initialCondition.velocity,
    initialCondition.accelaration,
    t
  );
  const vel = velocity(
    initialCondition.velocity,
    initialCondition.accelaration,
    t
  );
  console.log(pos);

  return { pos_at_t: pos, vel_at_t: vel };
}
