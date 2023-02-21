import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
   
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
  },

});

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
