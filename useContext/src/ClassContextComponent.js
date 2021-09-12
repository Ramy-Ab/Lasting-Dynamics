import React from "react";
import { ThemeContext } from "./App";

export default class ClassContextComponent extends React.Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "3.5rem",
      margin: "2rem"
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>class theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
