import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "../redux/store";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface toggleColoreModeProps {
  children?: React.ReactNode;
}

const ToggleColoreMode = (props: toggleColoreModeProps) => {
  const { children, ...other } = props;
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToggleColoreMode>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ToggleColoreMode>
  );
}
