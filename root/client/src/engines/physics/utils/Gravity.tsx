export function gravityForce(mass: number, g: number = 9.81) {
  return { x: 0, y: mass * -g }; // Negative y for downward force
}
