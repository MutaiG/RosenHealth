import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2C3E50', contrastText: '#FDFBF7' },
    secondary: { main: '#D4AF37', contrastText: '#2C3E50' },
    background: { default: '#FDFBF7', paper: '#FDFBF7' },
    text: { primary: '#2C3E50', secondary: '#5a6a7a' },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Georgia", serif',
    h1: { fontWeight: 600, letterSpacing: '-0.5px' },
    h2: { fontWeight: 600, letterSpacing: '-0.3px' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: { fontFamily: '"Lato", "Helvetica", sans-serif', lineHeight: 1.8 },
    body2: { fontFamily: '"Lato", "Helvetica", sans-serif', lineHeight: 1.7 },
    button: { fontFamily: '"Lato", "Helvetica", sans-serif', letterSpacing: '1.5px', fontWeight: 700 },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'uppercase', borderRadius: 2, padding: '12px 32px' },
        containedSecondary: { color: '#2C3E50', '&:hover': { backgroundColor: '#c9a227' } },
        outlinedPrimary: { borderColor: '#D4AF37', color: '#2C3E50', '&:hover': { borderColor: '#c9a227', backgroundColor: 'rgba(212,175,55,0.08)' } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 2, boxShadow: '0 2px 20px rgba(44,62,80,0.08)' },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#D4AF37' },
      },
    },
  },
});

export default theme;
