import { THEMES } from "mui-react-common";
import { grey } from "@mui/material/colors";

export const common = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "normal",
          ".MuiChip-root": {
            height: "17px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".MuiInputBase-input:not(.MuiInputBase-inputSizeSmall)": {
            padding: "13px 14px;",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          // borderRadius: '2px'
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          ".MuiButtonBase-root": {
            minWidth: 20,
            textTransform: "none",
          },
        },
      },
    },
  },
  typography: {
    // fontSize: 12,
    h1: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h2: {
      fontSize: 22,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
    },
  },
};

const LIGHT = {
  palette: {
    mode: THEMES.LIGHT,
    sidebar: {
      background: "#fff",
      color: "secondary.main",
      activeColor: "secondary.main",
      active: "primary.light",
    },
    spaceSelector: "#f3f4f9",
    primary: {
      main: "#2196f3",
      light: "#D3F5FE",
    },
    // success: {
    //     main: '#2cc5bd'
    // },
    secondary: {
      ...grey,
      main: grey["900"],
    },
    background: {
      default: "#f3f4f9",
      paper: "#fff",
    },
  },
  ...common,
};

const DARK = {
  palette: {
    mode: THEMES.DARK,
    sidebar: "#111827",
    spaceSelector: "#222b36",
    background: {
      default: "#1e2732",
      paper: "#222b36",
    },
    primary: {
      main: "#2196f3",
      light: "#5b5959",
    },
  },
  ...common,
};

export const THEME_SETTING = {
  [THEMES.LIGHT]: LIGHT,
  [THEMES.DARK]: DARK,
};
