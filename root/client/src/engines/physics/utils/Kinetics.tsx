import type { Vector2D } from "../../../types/PhysicsTypes";

export function position(
    position: Vector2D,
    velocity: Vector2D,
    acceleration: Vector2D,
    time: number
): Vector2D {
    return {
        x: position.x + velocity.x * time + 0.5 * acceleration.x * time * time,
        y: position.y + velocity.y * time + 0.5 * acceleration.y * time * time,
    };
}

export function velocity(
    initialVelocity: Vector2D,
    acceleration: Vector2D,
    time: number
): Vector2D {
    return {
        x: initialVelocity.x + acceleration.x * time,
        y: initialVelocity.y + acceleration.y * time,
    };
}


