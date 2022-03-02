import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Components/App';
// import { ThemeProvider } from '@mui/material/styles';
// import { ThemeApp } from './Utilities/ThemeApp';
import AppOptional from './Components/AppOptional';

ReactDOM.render(
  // <ThemeProvider theme={ThemeApp}>
  //   <App />
  // </ThemeProvider>
  <AppOptional />,
  document.getElementById('root')
);
