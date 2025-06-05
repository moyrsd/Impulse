// App.tsx

import "./App.css";
import { TopBar } from "./components/TopBar/TopBar";
import Animation from "./engines/render/Animation";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        boxSizing: "border-box", // Ensures borders are included in dimensions
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          borderBottom: "2px solid white",
          background: "#181f22",
          color: "white",
          flex: "0 0 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TopBar />
      </div>

      {/* Bottom Section */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Section */}
        <div
          style={{
            background: "#181f22",
            color: "white",
            flex: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Animation></Animation>
          </div>
          <div
            style={{
              borderTop: "2px solid white",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Bottom Box
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            borderLeft: "2px solid white",
            background: "#181f22",
            color: "white",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Right Box
        </div>
      </div>
    </div>
  );
}

export default App;
