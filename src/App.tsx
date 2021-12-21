import React from 'react';
import Login from './screens/login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-styled';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Routes>
          <Route path={LoginPath} element={<Login/>}/>
        </Routes>
      </ThemeProvider>     
  </div>
  );
}

export default App;
