import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MyTeesApp from './pages/mytees';
import WhatIsTees from './pages/what-is-tees';
import Team from './pages/team';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mytees" element={<MyTeesApp />} />
      <Route path="/about/what-is-tees" element={<WhatIsTees />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();