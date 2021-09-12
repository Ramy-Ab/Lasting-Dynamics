import "./styles.css";
import React from "react";
import useLogger from "./useLogger";
export default function App() {
  const [name, setName] = React.useState("");
  useLogger(name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
