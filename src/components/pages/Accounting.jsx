import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../navBar/NavBar';
import {CiSearch} from 'react-icons/ci';
import {FaPlus} from 'react-icons/fa';


function Accounting() {
  return (
    <div>     
      <NavBar/> 
      <div className="accounting" style={{display:'flex', backgroundColor:'#F1F5F9', height:'125px', width:'100%'}}>
          <div className="accounting-left" style={{display:'flex', flexDirection:'column', flex:'2', padding:'40px 30px'}}>
            <h1 style={{fontSize:'20px', }}>Accounting</h1>
            <div style={{fontSize:'12px', color:'#5850EC'}}>Dashboard <FontAwesomeIcon icon={faChevronRight} size="2xs" style={{paddingLeft:'3px' }}/> Agency <FontAwesomeIcon icon={faChevronRight} size="2xs" style={{paddingLeft:'3px' }}/> Acconting</div>
          </div>
          <div className="accounting-right" style={{display:'flex', flex:'3', alignItems: 'center', justifyContent: 'right'}}>
            <div style={{display:'flex', alignItems: 'center', backgroundColor:'#fff', border: '1px solid #D6D6D6', borderRadius: '5px', width: '200px', height:"42px", marginRight:"12px"}}>
              <CiSearch style={{marginLeft:'10px'}}></CiSearch>
              <p style={{paddingLeft:'10px', fontSize:'14px', color:'#969BA0'}}>Search...</p>
            </div>
            <div style={{display:'flex', alignItems: 'center', backgroundColor:'#fff', border: '1px solid #D6D6D6', borderRadius: '5px', width: '112px', height:"42px", marginRight:"12px"}}>
              <FontAwesomeIcon icon={faChevronDown} size="xs" style={{paddingLeft:'10px', cursor:'pointer'}}/>
              <p style={{paddingLeft:'8px', fontSize:'14px', color:'#212121'}}>New first</p>
            </div>
            <div style={{display:'flex', alignItems: 'center', backgroundColor:'#fff', border: '1px solid #D6D6D6', borderRadius: '5px', width: '118px', height:"42px", marginRight:"12px"}}>
              <FontAwesomeIcon icon={faChevronDown} size="xs" style={{paddingLeft:'9px', cursor:'pointer'}}/>
              <p style={{paddingLeft:'8px', fontSize:'14px', color:'#212121'}}>Show only</p>
            </div>
            <div style={{display:'flex', alignItems: 'center', fontWeight:'600px', backgroundColor:'#5850EC', border: '1px solid #2BACE2', borderRadius: '5px', width: '144px', height:"42px", marginRight:"30px"}}>
              <FaPlus style={{color: 'white', marginLeft:'10px'}} ></FaPlus>
              <p style={{paddingLeft:'10px', fontSize:'14px', color:'white'}}>Add account</p>
            </div>
          </div>
        </div>
      <div style={{backgroundColor:'#F1F5F9', height:'782px', width:'1165px'}}>
        
        <div className="grid" style={{backgroundColor:'#fff', border: '1px solid #D6D6D6', borderRadius: '5px', width: '1105px', height:"782px", marginLeft:"30px", marginRight:"30px"}}></div>
        
      </div>
      
    </div>
    
  )
}

export default Accounting