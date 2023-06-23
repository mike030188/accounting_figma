import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div style={{backgroundColor: '#1A202E', width: '275px', height: '100vh', padding: '25px 21px'}}>
        <h1 style={{color: 'white'}}>Accounting</h1>
        <Link to='/' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px', marginTop: '48px'}}>Dashboard</div>
        </Link>
        <Link to='/accounting' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Accounting</div>
        </Link>
        <Link to='/transactions' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Transactions</div>
        </Link>
        <Link to='/reports' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Reports</div>
        </Link>
        <Link to='/agency' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Agency</div>
        </Link>
        <Link to='/settings' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Settings</div>
        </Link>
        <Link to='/trash' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Trash</div>
        </Link>
    </div>
  )
}

export default SideBar