import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChevronRight, faCirclePlay, faHouseChimney, faVideo} from '@fortawesome/free-solid-svg-icons';
import { SiManageiq} from 'react-icons/si';
import { BsFillTrash3Fill } from 'react-icons/bs';
import '../../index.css';

const SideBar = () => {
  return (
    <div style={{backgroundColor: '#1A202E', width: '275px', height: '972px', padding: '25px 21px'}}>
        <h1 style={{color: 'white'}}>Accounting</h1>
        <Link to='/' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px', marginTop: '48px'}}>
          <FontAwesomeIcon icon={faHouseChimney} style={{marginRight:'10px'}}/>
          Dashboard
          <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'105px'}}/>
        </div>
        </Link>
        <Link to='/accounting' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>
          <FontAwesomeIcon icon={faVideo} style={{marginRight:'10px'}} />
          Accounting
          <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'103px'}}/>
        </div>
        </Link>
        <Link to='/transactions' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>
          <SiManageiq style={{marginRight:'10px'}}/>
          Transactions
          <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'95px'}}/>
        </div>
        </Link>
        <Link to='/reports' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>
          <FontAwesomeIcon icon={faCirclePlay} style={{marginRight:'10px'}} />
          Reports
          <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'131px'}}/>
        </div>
        </Link>
        <Link to='/agency' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>
          <img src="assets/images/ic_promotion.svg" alt="Promotion" height="18px" width="18px" style={{marginRight:'8px'}}/>
          Agency
          <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'127px'}}/>
        </div>
        </Link>
        <Link to='/settings' style={{textDecoration:'none'}}>
        <div style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px',}}>
          <FontAwesomeIcon icon={faChartPie} style={{marginRight:'10px'}} />
          Settings
          <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'123px'}}/>
        </div>
        </Link>
        <Link to='/trash' style={{textDecoration:'none'}}>
        <div className="trash" style={{color: '#CFD8E3', fontSize: '14px', cursor: 'pointer', height: '43px', }}>
          <BsFillTrash3Fill style={{marginRight:'10px'}}/>
           Trash 
           <FontAwesomeIcon icon={faChevronRight} style={{marginLeft:'142px'}}/>
        </div>
        </Link>
    </div>
  )
}

export default SideBar