export type Vector2D = { x: number; y: number };

export type Circle = {
  radius: number;
  center: Vector2D;
};

export type Box = {
  leftBottomcorner: Vector2D;
  length: number;
  height: number;
};

export type Wegde = {
  direction: "left" | "right";
  bottomCorner: Vector2D;
  height: number;
  length: number;
};

export type InitialCondition = {
  position: Vector2D;
  velocity: Vector2D;
  accelaration: Vector2D;
};

export interface State {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  time: number;
}
