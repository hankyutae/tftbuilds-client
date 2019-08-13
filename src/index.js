import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {TftProvider} from './contexts/TftContext';

ReactDOM.render(
  <TftProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TftProvider>
  ,
  document.getElementById('root')
);
