import { grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',

    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#4a148c'
        }
      }
    }
  }
});
