import { blue, grey, pink, red } from '@material-ui/core/colors'
import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles'

export type Theme = MuiTheme

export const Colors = {
  icon: grey[500],
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiLink: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      root: {
        fontFamily: '"Google Sans", sans-serif',
        wordBreak: 'break-word',
      },
      h6: {
        fontSize: '1rem',
      },
      h5: {
        fontSize: '1.3rem',
      },
    },
    MuiAppBar: {
      positionFixed: {
        zIndex: 10,
      },
      colorDefault: {
        boxShadow: 'none',
        color: '#212121',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#fff',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
    MuiPaper: {
      root: {
        color: '#212121',
      },
      elevation1: {
        boxShadow: '0px 2px 5px -2px rgba(0,0,0,0.2)',
      },
    },
    MuiSvgIcon: {
      root: {
        color: 'inherit',
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: Colors.icon,
      },
    },
    MuiButton: {
      root: {
        borderRadius: '4px',
        boxShadow: 'none !important',
        fontWeight: 500,
        textTransform: 'none',
        color: Colors.icon,
      },
    },
  },
})

export default theme
