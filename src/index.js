import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from './components/sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Accounting from './components/pages/Accounting';
import Transactions from './components/pages/Transactions';
import Reports from './components/pages/Reports';
import Agency from './components/pages/Agency';
import Settings from './components/pages/Settings';
import Trash from './components/pages/Trash';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{display:'flex'}}>    
    <BrowserRouter>
    <SideBar />   
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/accounting" element={<Accounting/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/agency" element={<Agency/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/trash" element={<Trash/>} />
      </Routes>
    </BrowserRouter>
  </div>
);
