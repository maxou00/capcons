import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MouseTracker } from "../src/components/MouseTracker";
import { Appbar } from "../src/components/Navigation/Appbar";
import { Footer } from "../src/components/Footer";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import appTheme from "../src/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="app">
        <CssBaseline />
        <Appbar />
        <Component {...pageProps} />
        <MouseTracker />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
