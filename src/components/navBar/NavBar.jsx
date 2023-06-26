import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <div>
        <div style={{height:'65px', display: 'flex', backgroundColor:'#FFF',boxShadow: '0px 4px 3px -2px rgba(0, 0, 0, 0.06)'}}>
            <div className="icon" style={{display:'flex', flex:'1'}}>
                <FontAwesomeIcon icon={faBars} style={{padding: '24px 30px'}}/>
            </div>
            <div className="profile" style={{display: 'flex', flex:'1', justifyContent:"right", alignItems: 'center', fontSize: '12px'}}>
                <img src="assets/images/mike.jpg" height="35px" width="35px"alt="mike030188"/>
            <div style={{paddingLeft:'8px'}}>
                <h4>Ma`murjon Mamadaliev</h4>
                <p>Admin</p>
            </div>
                <div><FontAwesomeIcon icon={faChevronDown} style={{padding:'23px 30px', cursor:'pointer'}}/></div>
            </div>        
      </div>
    </div>
  )
}

export default NavBar