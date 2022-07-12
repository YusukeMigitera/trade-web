import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from './Hello';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" children={<Hello />} />
      <Route path="page1" children={<Page1 />} />
      <Route path="page2" children={<Page2 />} />
      <Route path="page3" children={<Page3 />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);
