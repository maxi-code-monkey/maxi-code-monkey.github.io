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
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // This is the most common easing curve.
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
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
