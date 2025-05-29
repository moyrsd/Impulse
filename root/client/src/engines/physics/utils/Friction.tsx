import type { Vector2D } from "../../../types/PhysicsTypes";

export function gravityForce(Normal_Force: Vector2D, friction_coff: Vector2D) {
  return {
    x: -(Normal_Force.y * friction_coff.x),
    y: -(Normal_Force.x * friction_coff.y),
  };
}
