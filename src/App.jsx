import { useState } from "react";

function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [color, setColor] = useState("black");
  const [isOpen, setIsOpen] = useState(false);

  const handlePosition = (event) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleEnterColor = (event) => {
    event.preventDefault();
    setColor("#3b971e");
  };
  const handleExitColor = (event) => {
    event.preventDefault();
    setColor("#fc8619");
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "1400px",
          backgroundColor: "#f1f1f1",
          padding: 0,
          margin: "0 auto",
        }}
        onMouseMove={handlePosition}
        onContextMenu={handleMenu}
      >
        <p>x: {position.x}</p>
        <p>y:{position.y}</p>

        <div
          onClick={() => setColor("#696565")}
          onMouseEnter={handleEnterColor}
          onMouseLeave={handleExitColor}
          style={{
            width: "450px",
            height: "450px",
            backgroundColor: `${color}`,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h1>color: {color}</h1>
        </div>
        {isOpen && (
          <div
            style={{
              width: "500px",
              height: "40px",
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              position: "absolute",
              top: "3rem",
              right: "5rem",
            }}
          >
            <button
              onClick={() => setColor("#ec67db")}
              style={{
                backgroundColor: "#ec67db",
                color: "white",
                padding: "0.6rem 2rem",
              }}
            >
              Rosa
            </button>
            <button
              onClick={() => setColor("#204597")}
              style={{
                backgroundColor: "#204597",
                color: "white",
                padding: "0.6rem 2rem",
              }}
            >
              Azul
            </button>
            <button
              onClick={() => setColor("#5f4809")}
              style={{
                backgroundColor: "#5f4809",
                color: "white",
                padding: "0.6rem 2rem",
              }}
            >
              Marron
            </button>{" "}
            <button
              onClick={() => setColor("#000")}
              style={{
                backgroundColor: "#696565",
                color: "white",
                padding: "0.6rem 2rem",
              }}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
