import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// Custom tema mode terang
const themeLight = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'hsl(230, 17%, 14%)',
      secondary: 'hsl(228, 12%, 44%)',
    },
    primary: {
      main: 'hsl(225, 100%, 98%)',
    },
    success: {
      main: 'hsl(163, 72%, 41%)',
    },
    error: {
      main: 'hsl(356, 69%, 56%)',
    },
    background: {
      paper: 'hsl(227, 47%, 96%)',
      default: 'hsl(0, 0%, 100%)',
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    // Atur warna background card ketika hover (mode terang)
    MuiCard: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: 'hsl(230, 35%, 90%)',
          }
        }
      }
    },
    // Desain custom switch
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: '63px',
          height: '50px',
          paddingRight: '0px',
          // Warna background switch ketika dihover (mode terang)
          "&:hover > .Mui-checked + .MuiSwitch-track": {
            background: "linear-gradient(60deg, hsl(210, 78%, 56%)30%, hsl(146, 68%, 55%)60%)",
          },
        },
        switchBase: {
          padding: "15px 14px 14px 19px"
        },
        colorPrimary: {
          // Warna lingkaran switch ketika aktif (mode terang)
          "&.Mui-checked": {
            color: "hsl(225, 100%, 98%)"
          }
        },
        thumb: {
          boxShadow: 'none',
        },
        track: {
          borderRadius: '20px',
          transition: 'none',
          // Warna background switch ketika aktif (mode terang)
          ".Mui-checked.Mui-checked + &": {
            background: 'hsl(230, 22%, 74%)',
          },
        }
      }
    }
  }
})

// Custom tema mode gelap
const themeDark = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(228, 34%, 66%)',
    },
    primary: {
      main: 'hsl(232, 19%, 15%)',
    },
    success: {
      main: 'hsl(163, 72%, 41%)',
    },
    error: {
      main: 'hsl(356, 69%, 56%)',
    },
    background: {
      paper: 'hsl(228, 28%, 20%)',
      default: 'hsl(230, 17%, 14%)',
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    // Atur warna background card ketika hover (mode gelap)
    MuiCard: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: 'hsl(228, 27%, 27%)',
          }
        }
      }
    },
    // Desain custom switch
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: '63px',
          height: '50px',
          paddingRight: '0px',
        },
        switchBase: {
          padding: "15px 14px 14px 15px"
        },
        colorPrimary: {
          // Warna lingkaran switch ketika tidak aktif (mode gelap)
          color: "hsl(232, 19%, 15%)"
        },
        thumb: {
          boxShadow: 'none'
        },
        track: {
          borderRadius: '20px',
          // Warna background switch ketika tidak aktif (mode gelap)
          background: 'linear-gradient(60deg, hsl(210, 78%, 56%)30%, hsl(146, 68%, 55%)60%)',
        }
      }
    }
  }
})

export function Main() {
  const [darkMode, setDarkMode] = useState(false)

  function handleChangeMode() {
    setDarkMode(!darkMode)
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <App onChangeMode={handleChangeMode} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

// Render the Index component
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
