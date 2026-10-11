import { useEffect, useState } from "react";
import Editorial from "./Editorial";
import Panel from "./Panel";
import Forest from "./Forest";

// Temporary: lets us compare layouts via ?v=editorial|panel|forest.
// Once one is picked, render it directly from main.jsx and delete this file.
const VERSIONS = {
  editorial: { label: "Editorial", Component: Editorial },
  panel: { label: "Panel", Component: Panel },
  forest: { label: "Forest", Component: Forest },
};

function Preview() {
  const initial = new URLSearchParams(window.location.search).get("v");
  const [version, setVersion] = useState(VERSIONS[initial] ? initial : "editorial");
  const { Component } = VERSIONS[version];

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("v", version);
    window.history.replaceState(null, "", url);
    window.scrollTo(0, 0);
  }, [version]);

  return (
    <>
      <Component />
      <div
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 50,
          display: "flex",
          gap: 4,
          padding: 4,
          borderRadius: 999,
          background: "rgba(20,20,20,0.85)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 13,
        }}
      >
        {Object.entries(VERSIONS).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setVersion(key)}
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              color: key === version ? "#111" : "#ddd",
              background: key === version ? "#fff" : "transparent",
              fontWeight: 500,
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Preview;
