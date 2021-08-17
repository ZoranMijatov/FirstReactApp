import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const DarkThemeProvider = ({ children }) => {
  const lightModeEnabled = useSelector((state) => state.preferences.lightModeEnabled);
  return (
    <ThemeProvider theme={{ theme: lightModeEnabled ? "light" : "dark" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;