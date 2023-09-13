import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#4662ad",
      contrastText: "#fff",
    },
    warning: {
      main: "#e7af22",
    },
    error: {
      main: "#f14d4d",
    },
    success: {
      main: "#3eb05a",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
