import type { Vector2D } from "../../types/PhysicsTypes";

export function DrawRect(
  context: CanvasRenderingContext2D,
  point: Vector2D,
  width: number,
  height: number
) {
  context.fillStyle = "grey";
  context.fillRect(point.x, point.y, width, height); // left top corner of rectangle
}

export function DrawCircle(
  context: CanvasRenderingContext2D,
  point: Vector2D,
  radius: number
) {
  context.fillStyle = "grey";
  context.beginPath();
  context.arc(point.x, point.y, radius, 0, 2 * Math.PI);
  context.fill();
}
