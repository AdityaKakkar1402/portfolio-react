import '../Styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-body">

      
      
      

      <span className="nav-title">Aditya</span>

      <div className="navham" id="navham">
      <input type="checkbox" name="" id="check" />

      <ul className="navitems" id="navitems">
          <span className="navitem">Home</span>
          <span className="navitem">Projects</span>
          <span className="navitem">Achivements</span>
          <span className="navitem" id="lastnavitem">Contact</span>
          </ul>
         
     
      <label htmlFor="check" className="checkbtn" id="checkbtn">
      <GiHamburgerMenu className="hamicon"/>
      </label>

    
     
      </div>
      
      

      <div className="navcontact">
      <button className="nav-button">Contact</button>
      </div>

   
     
     
    
  

      
    </div>
  )
}

export default Navbar
