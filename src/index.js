import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MyTees2 from './pages/mytees2';
import WhatIsTees from './pages/what-is-tees';
import Team from './pages/team';
import Technology from './pages/technology';
import Chains from './pages/chains';
import Partners from './pages/partners';
import RoyalTees from './pages/royaltees'
import CommuniTees from './pages/communitees'
import Lifestyle from './pages/lifestyle'
import Drops from './pages/drops'
import Jacket from './pages/jacket'
import Sweater from './pages/sweater'
import Yachtclub from './pages/yachtclub'
import Clokk from './pages/clokk'
import Potluck from './pages/potluck'
import Punks from './pages/punks'
import Toa from './pages/toa'
import Tomb from './pages/tomb'
import Uman from './pages/uman'
import Needle from './pages/needleandchain'


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mytees2" element={<MyTees2 />} />
      <Route path="/team" element={<Team />} />
      <Route path="/needle&chain" element={<Needle />} />
      <Route path="/about/what-is-tees" element={<WhatIsTees />} />
      <Route path="/about/technology" element={<Technology />} />
      <Route path="/about/chains" element={<Chains />} />
      <Route path="/collections/royaltees" element={<RoyalTees />} />
      <Route path="/collections/communitees" element={<CommuniTees />} />
      <Route path="/collections/lifestyle" element={<Lifestyle />} />
      <Route path="/drops" element={<Drops />} />
      <Route path="/drops/jacket" element={<Jacket />} />
      <Route path="/drops/sweater" element={<Sweater />} />
      <Route path="/drops/yachtclub" element={<Yachtclub />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/partners/clokk" element={<Clokk />} />
      <Route path="/partners/potluck" element={<Potluck />} />
      <Route path="/partners/punks" element={<Punks />} />
      <Route path="/partners/toa" element={<Toa />} />
      <Route path="/partners/tomb" element={<Tomb />} />
      <Route path="/partners/uman" element={<Uman />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();