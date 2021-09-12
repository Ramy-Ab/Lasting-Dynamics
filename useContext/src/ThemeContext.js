// import React from "react";

// export const ThemeContext = React.createContext();
// export const ThemeUpdateContext = React.createContext();

// export function ThemeProvider({ children }) {
//   const [darkTheme, setDarkTheme] = React.useState(true);

//   function toggleTheme() {
//     setDarkTheme((prevDarkTheme) => !prevDarkTheme);
//   }
//   return (
//     <ThemeContext.Provider value={darkTheme}>
//       <ThemeUpdateContext.Provider value={toggleTheme}>
//         {children}
//       </ThemeUpdateContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

import React from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useThemeContext = () => {
  return React.useContext(ThemeContext);
};
export const useThemeUpdateContext = () => {
  return React.useContext(ThemeUpdateContext);
};

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
