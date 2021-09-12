import "./styles.css";
import React from "react";
import List from "./List.js";

export default function App() {
  const [number, setNumber] = React.useState(1);
  const [dark, setDark] = React.useState(false);

  const getItems = React.useCallback((incr) => {
    return [number+incr, number + 1+incr, number + 2+incr];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
