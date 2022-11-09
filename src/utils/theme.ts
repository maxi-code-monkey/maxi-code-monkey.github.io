import { createTheme } from "@mui/material/styles";

export const getTheme = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#57cbff",
        light: "#45a29e",
        dark: "#0b0c10",
      },
      secondary: {
        main: "#57cbff",
        dark: "#112240",
      },
      background: {
        default: "#434", // Modules Background
        paper: "#ccd6f6", // Header Border
      },
      text: {
        primary: "#ccd6f6", // Name & Section´s Title
        secondary: "#8892b0", // Title and Section´s Text
        disabled: "#57cbff", // Links & Other Stuff
      },
    },
  });

  theme.typography.h1 = {
    fontSize: "3rem",
    lineHeight: "3rem",
    "@media (min-width:600px)": {
      fontSize: "4.25rem",
      lineHeight: "4.25rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "6rem",
      lineHeight: "6rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "2rem",
    lineHeight: "2rem",
    fontWeight: "normal",
    "@media (min-width:600px)": {
      fontSize: "2.25rem",
      lineHeight: "2.25rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "2.5rem",
      lineHeight: "2.5rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    fontWeight: "normal",
    paddingBottom: "10px",
    "@media (min-width:600px)": {
      fontSize: "1.75rem",
      lineHeight: "1.75rem",
    },
  };

  theme.typography.body1 = {
    fontSize: "1.25rem",
    lineHeight: "1.25rem",
  };

  return theme;
};
