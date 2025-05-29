import "./App.css";
import { RenderEngine } from "./engines/render/RenderEngine";
import type { InitialCondition } from "./types/PhysicsTypes";

function App() {
  const intialkinetics: InitialCondition = {
    position: { x: 100, y: 800 },
    velocity: { x: 1, y: 5 },
    accelaration: { x: 0, y: -9.8 },
  };
  return (
    <>
      <RenderEngine
        initialCondition={intialkinetics}
        radius={10}
        duration={30}
        width={1000}
        height={1000}
      ></RenderEngine>
    </>
  );
}

export default App;
