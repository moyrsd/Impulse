import type { Vector2D } from "../../../types/PhysicsTypes";

export function acceleration(forces: Vector2D[], mass: number): Vector2D {
  let Eq_force_x = 0, Eq_force_y = 0;
  for (const force of forces) {
    Eq_force_x += force.x;
    Eq_force_y += force.y;
  }

  return { x: Eq_force_x / mass, y: Eq_force_y / mass };
}
