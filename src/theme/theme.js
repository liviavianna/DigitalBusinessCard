import { createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: {
          textTransform: 'none'
        }
      },
    palette: {
      primary: {
        main: '#5093E2',
      },
      secondary: {
        main: '#fff',
      },
    },
  });
export default theme
