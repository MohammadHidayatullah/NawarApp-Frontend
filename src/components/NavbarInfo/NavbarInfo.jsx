/** @format */

import React from "react";
import logo from "../../assets/img/logo-NawarApp.png";
import "./NavbarInfo.css";

function Navbar2() {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='' className='logo-nawar me-2' />
            <span>NawarApp</span>
          </a>
          <span className='info-penawar'>info penawar</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
