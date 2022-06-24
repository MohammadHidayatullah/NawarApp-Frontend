/** @format */

import React from "react";
import logo from "../../assets/img/logo-NawarApp.png";
import "./NavbarInfo.css";

function Navbar2() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='' className='logo-nawar me-2' />
            <span>NawarApp</span>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav d-flex justify-content-center'>
              <p className='info-penawar'>Info Penawar</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
