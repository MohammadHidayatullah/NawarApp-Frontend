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
                  <li>
                    <div class='btn-group'>
                      <div class='btn-group dropstart' role='group'>
                        <button
                          class='btn btn-none-style btn-lg '
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'>
                          <li>
                            {/* <FiUser
                          style={{
                            size: "24px",
                          }}
                        /> */}
                            <img src={bell} alt='' />
                            <span class='unread-notification'></span>
                          </li>
                        </button>
                        <ul
                          class='dropdown-menu'
                          style={{
                            padding: "24px",
                            borderRadius: "16px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                          }}>
                          <li className='dropdown-item'>
                            <div className='row'>
                              <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-row'>
                                  <img
                                    className='me-3'
                                    src={logo}
                                    alt=''
                                    style={{
                                      maxWidth: "48px",
                                      maxHeight: "48px",
                                      borderRadius: "12px",
                                    }}
                                  />
                                  <div className='text d-flex flex-column me-5'>
                                    <p
                                      className='mb-0 p-0'
                                      style={{
                                        fontSize: "10px",
                                        color: "#8A8A8A",
                                      }}>
                                      Penawaran produk
                                    </p>
                                    <p
                                      className='m-0 p-0'
                                      style={{
                                        fontSize: "14px",
                                      }}>
                                      Nike Jordan
                                    </p>
                                    <p
                                      className='m-0 p-0'
                                      style={{
                                        fontSize: "14px",
                                      }}>
                                      Rp. 200000
                                    </p>
                                    <p
                                      className='m-0 p-0'
                                      style={{
                                        fontSize: "14px",
                                      }}>
                                      Ditawar Rp. 200000
                                    </p>
                                  </div>
                                  <div>
                                    <p
                                      style={{
                                        fontSize: "10px",
                                        color: "#8A8A8A",
                                      }}>
                                      20 Apr, 14:04
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='btn-group'>
                      <div class='btn-group dropstart' role='group'>
                        <button
                          class='btn btn-none-style btn-lg'
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
                          class='dropdown-menu'
                          style={{
                            padding: "24px",
                            borderRadius: "16px",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                          }}>
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
