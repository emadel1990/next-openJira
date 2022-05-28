import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300]
    },
    primary: {
      main: '#4a148c'
    },
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
      }
    }
  }
});
