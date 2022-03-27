import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/styles/custom.css';
import Container from './views/Container';
import AppProvider from "../src/context/AppProvider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Container />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

