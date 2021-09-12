import React from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeUpdateContext } from "./ThemeContext";
import {useThemeContext,useThemeUpdateContext} from "./ThemeContext"

export default function FunctioContextComponent() {
  const darkTheme = useThemeContext()
  const toggleTheme = useThemeUpdateContext()
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3.5rem",
    margin: "2rem"
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme </button>

      <div style={themeStyles}>class theme</div>
    </>
  );
}
