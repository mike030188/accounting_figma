import React from 'react'

const SideBar = () => {
  return (
    <div style={{backgroundColor: '#1A202E', width: '275px', height: '100vh', padding: '25px 21px'}}>
        <h1 style={{color: 'white'}}>Accounting</h1>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px', marginTop: '48px'}}>Dashboard</div>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Accounting</div>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Transactions</div>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Reports</div>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Agency</div>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Settings</div>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Trash</div>
    </div>
  )
}

export default SideBar