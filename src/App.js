import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
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
    <Provider store={store}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Body></Body>
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  );
}

export default App;
