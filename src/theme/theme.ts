import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    // Add custom theme properties here if needed
  }
  interface ThemeOptions {
    // Add custom theme options here if needed
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8B5CF6', // Your custom purple color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;