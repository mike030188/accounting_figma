import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideBar from './components/sidebar';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Accounting from './components/pages/Accounting';
import Transactions from './components/pages/Transactions';
import Reports from './components/pages/Reports';
import Agency from './components/pages/Agency';
import Settings from './components/pages/Settings';
import Trash from './components/pages/Trash';



function App() {
  return(
  <div style={{display:'flex'}}>    
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </div>
  )
}

function MainApp() {
  const tolocate = useLocation();
  const loadingPage = tolocate.pathname === "/trash";
 
  return(
    <React.Fragment>
      
    {!loadingPage && <SideBar/>}
    
      
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/accounting" element={<Accounting/>} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/agency" element={<Agency/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/trash" element={<Trash/>} />
        </Routes>
       
      </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

