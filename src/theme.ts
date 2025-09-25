import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // custom blue
    },
    secondary: {
      main: "#9c27b0", // custom purple
    },
    background: {
      default: "#f5f5f5", // page background
      paper: "#ffffff",   // card & surface background
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
