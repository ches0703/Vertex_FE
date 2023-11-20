import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Body from './Body';

const theme = createTheme({
  
  palette: {
    mode: 'dark',
    black: {
      main: '#2c2c2c',
    },
    gray: {
      main: '#585858',
    },
    white: {
      main: "#FFFFFF"
    }
  },
});

function App() {

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Body></Body>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
