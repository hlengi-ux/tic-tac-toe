import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { GameContextProvider } from "./contexts/GameContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <GameContextProvider>
      <ThemeProvider theme={mode}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </GameContextProvider>
  );
}

export default App;
