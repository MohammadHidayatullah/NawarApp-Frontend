/** @format */

import React from "react";
import logo from "../../assets/img/logo-NawarApp.png";
import login from "../../assets/icon/fi_log-in.svg";
import list from "../../assets/icon/fi_list.svg";
import user from "../../assets/icon/fi_user.svg";
import { FiBell, FiUser } from "react-icons/fi";
import bell from "../../assets/icon/fi_bell.svg";
import search from "../../assets/icon/fi_search.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const access_token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light py-3'>
        <div className='container'>
          <button
            className='navbar-toggler mb-3'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <a className='navbar-brand' href='/'>
            <img src={logo} alt='logo-nawarApp' className='logo-nawar me-2' />
            <span>NawarApp</span>
          </a>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <div className='inner-addon right-addon d-flex align-items-center'>
                <img
                  className='glyphicon glyphicon-search'
                  src={search}
                  alt=''
                />
                <input
                  type='text'
                  className='form-control search-input me-2'
                  placeholder='Cari disini ...'
                />
              </div>
            </ul>
            <form className='menu-navbar'>
              {access_token !== null ? (
                <ul className='d-flex align-items-center'>
                  <li className='mt-1'>
                    {/* <FiBell
                      style={{
                        size: "24px",
                      }}
                    /> */}
                    <img src={bell} alt='' />
                  </li>
                  <li>
                    <div class='btn-group'>
                      <button
                        class='btn btn-lg dropdown-toggle'
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                        style={{
                          decoration: "none",
                        }}>
                        <li>
                          {/* <FiUser
                          style={{
                            size: "24px",
                          }}
                        /> */}
                          <img src={user} alt='' />
                        </li>
                      </button>
                      <ul class='dropdown-menu'>
                        <li>
                          <a className='dropdown-item' href='/info-profil'>
                            Info Profile
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='/daftar-jual'>
                            Daftar Jual
                          </a>
                        </li>
                        <li>
                          <span
                            className='dropdown-item'
                            onClick={handleLogout}>
                            Logout
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : (
                <Link to='/login'>
                  <button className='btn btn-masuk' type='button'>
                    <img src={login} alt='' /> Masuk
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
