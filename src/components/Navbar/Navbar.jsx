/** @format */

import React from "react";
import logo from "../../assets/img/logo-NawarApp.png";
import login from "../../assets/icon/fi_log-in.svg";
import list from "../../assets/icon/fi_list.svg";
import user from "../../assets/icon/fi_user.svg";
import search from "../../assets/icon/fi_search.svg";
import Notification from "../../components/Notification/Notification";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleNavHome = () => {
    navigate("/");
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
          <a className='navbar-brand' onClick={handleNavHome}>
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
                  <Notification />
                  <li>
                    <div className='btn-group'>
                      <div className='btn-group dropstart' role='group'>
                        <button
                          className='btn btn-none-style btn-lg'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'>
                          <li>
                            {/* <FiUser
                          style={{
                            size: "24px",
                          }}
                        /> */}
                            <img src={user} alt='' />
                          </li>
                        </button>
                        <ul
                          className='dropdown-menu'
                          style={{
                            padding: "24px",
                            borderRadius: "16px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                          }}>
                          <li>
                            <a className='dropdown-item' href='/dashboard'>
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <span
                              className='dropdown-item'
                              style={{
                                color: "red",
                              }}
                              onClick={
                                () => {
                                  handleLogout();
                                }
                              }>
                              Logout
                            </span>
                          </li>
                        </ul>
                      </div>
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
