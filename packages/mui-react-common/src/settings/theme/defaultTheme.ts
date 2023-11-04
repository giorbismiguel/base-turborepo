import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
  customLayout
} from './themeColors';
import { THEMES } from './themes';

const fontSize = 14;

export const defaultTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px'
        },
        sizeLarge: {
          padding: '0.6rem 1.5rem'
        },
        // outlinedPrimary: {
        //   borderColor: primary.main,
        //   color: primary.main,
        // },
        containedPrimary: {
          color: 'white',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%'
        },
        body: {
          height: '100%'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        '#root': {
          height: '100%'
        },
        '#nprogress .bar': {
          zIndex: '9999 !important',
          backgroundColor: '#61A9FF !important',
          width: '100%',
          position: 'fixed'
        },
        'input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
          {
            WebkitAppearance: 'none',
            margin: 0
          }
      }
    },
    // MuiCardHeader: {
    //   defaultProps: {
    //     titleTypographyProps: {
    //       variant: "h6",
    //     },
    //   },
    // },
    // MuiLinearProgress: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 3,
    //       overflow: "hidden",
    //       backgroundColor: "#E5EAF2",
    //     },
    //   },
    // },
    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: {
    //       minWidth: "auto",
    //       marginRight: "16px",
    //     },
    //   },
    // },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundImage: "none",
    //     },
    //   },
    // },
    // MuiAccordion: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "transparent",
    //       boxShadow: "none",
    //     },
    //   },
    // },
    // MuiAccordionSummary: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //       minHeight: 0,
    //       "&.Mui-expanded": {
    //         minHeight: "auto",
    //       },
    //       ".MuiAccordionSummary-content": {
    //         margin: 0,
    //       },
    //       ".MuiAccordionSummary-content.Mui-expanded": {
    //         margin: 0,
    //       },
    //     },
    //   },
    // },
    // MuiAccordionDetails: {
    //   styleOverrides: {
    //     root: {
    //       paddingLeft: 0,
    //       paddingRight: 0,
    //     },
    //   },
    // },
    MuiRating: {
      styleOverrides: {
        root: {
          color: '#FFD600'
        }
      }
    },
    // MuiTableBody: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiTableRow-root:last-of-type": {
    //         "& .MuiTableCell-root": {
    //           borderBottom: 0,
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       color: "#94A4C4",
    //       textTransform: "none",
    //       fontSize: 12,
    //       fontWeight: 600,
    //       padding: 0,
    //       minWidth: "auto",
    //       marginLeft: "1rem",
    //       marginRight: "1rem",
    //     },
    //   },
    // },
    // MuiTabs: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiButtonBase-root:first-of-type": {
    //         marginLeft: 0,
    //       },
    //       "& .MuiButtonBase-root:last-of-type": {
    //         marginRight: 0,
    //       },
    //     },
    //   },
    // },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       "&:hover": {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //   },
    // },
    // MuiPopover: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiPopover-paper": {
    //         boxShadow: "none",
    //         borderRadius: "8px",
    //         border: "1px solid #E5EAF2",
    //       },
    //     },
    //   },
    // },
    // MuiTabPanel: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //     },
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       "& input::placeholder": {
    //         color: secondary[400],
    //         opacity: 1,
    //       },
    //       "& label": {
    //         color: secondary[400],
    //         opacity: 1,
    //         fontWeight: 500,
    //       },
    //     },
    //   },
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  },
  typography: {
    fontSize: 14,
    h1: {
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.25rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '1rem'
    },
    h4: {
      fontWeight: 600,
      fontSize
    },
    h5: {
      fontWeight: 600,
      fontSize
    },
    h6: {
      fontWeight: 500,
      fontSize
    },
    p: {
      fontSize
    },
    overline: {
      fontWeight: 600
    },
    body1: {
      fontSize
    },
    body2: {
      fontSize
    }
  }
};

export const themesOptions = {
  [THEMES.LIGHT]: {
    palette: {
      // primary,
      secondary,
      // error,
      //
      // warning,
      // success,
      // info,
      // divider: secondary[300],
      background: {
        default: '#ffffff'
      },
      text: {
        primary: secondary[500],
        secondary: secondary[450],
        disabled: secondary[400],
      },
      ...customLayout.light,
      mode: 'light'
    },
    components: {

    }
  },
  [THEMES.DARK]: {
    palette: {
      primary,
      error,
      warning,
      success,
      info,
      background: {
        default: '#1e2732',
        paper: '#222b36'
      },
      ...customLayout.dark,
      mode: 'dark'
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: 'none'
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            '& .MuiPopover-paper': {
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }
          }
        }
      }
    }
  }
};
