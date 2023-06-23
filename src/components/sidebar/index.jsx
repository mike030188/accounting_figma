import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChevronRight, faCirclePlay, faHouseChimney, faVideo } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div style={{backgroundColor: '#1A202E', width: '275px', height: '100vh', padding: '25px 21px'}}>
        <h1 style={{color: 'white'}}>Accounting</h1>
        <Link to='/' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px', marginTop: '48px'}}><FontAwesomeIcon icon={faHouseChimney} style={{marginRight:'10px'}}/>Dashboard</div>
        </Link>
        <Link to='/accounting' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}><FontAwesomeIcon icon={faVideo} style={{marginRight:'10px'}} />Accounting<FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'103px'}}/></div>
        </Link>
        <Link to='/transactions' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Transactions</div>
        </Link>
        <Link to='/reports' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}><FontAwesomeIcon icon={faCirclePlay} style={{marginRight:'10px'}} />Reports</div>
        </Link>
        <Link to='/agency' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Agency</div>
        </Link>
        <Link to='/settings' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}><FontAwesomeIcon icon={faChartPie} style={{marginRight:'10px'}} />Settings</div>
        </Link>
        <Link to='/trash' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>Trash</div>
        </Link>
    </div>
  )
}

export default SideBar