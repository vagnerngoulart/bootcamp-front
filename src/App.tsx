import Login from './screens/login/login.screen';
import { Route, Routes} from 'react-router-dom';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-styled';
import { Provider } from 'react-redux';
import store from './store/store/store';
import { HomePath } from './screens/home/home.types';
import Home from './screens/home/home.screen';
import UserGuard from './components/routers/user-guard/user-guard.component';

function App() {  

  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Routes>
            <Route path={LoginPath} element={<Login/>}/>
            <Route path={HomePath} element={<UserGuard children={<Home/>} />}/>
          </Routes>
        </ThemeProvider>  
      </Provider>      
  );
}

export default App;
