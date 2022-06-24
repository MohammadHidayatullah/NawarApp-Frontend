/** @format */

import React from "react";
import logo from "../../assets/img/logo-NawarApp.png";
import login from "../../assets/icon/fi_log-in.svg";
import list from "../../assets/icon/fi_list.svg";
import user from "../../assets/icon/fi_user.svg";
import bell from "../../assets/icon/fi_bell.svg";
import search from "../../assets/icon/fi_search.svg";
import "./Navbar.css";
import ModalSeller from "../ModalSeller/ModalSeller";
import ModalSellerStatus from "../ModalSellerStatus/ModalSellerStatus";

function Navbar() {
  const token = false;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <button
            className="navbar-toggler mb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo-nawarApp" className="logo-nawar me-2" />
            <span>NawarApp</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="inner-addon right-addon d-flex align-items-center">
                <img
                  className="glyphicon glyphicon-search"
                  src={search}
                  alt=""
                />
                <input
                  type="text"
                  className="form-control search-input me-2"
                  placeholder="Cari disini ..."
                />
              </div>
            </ul>
            <form className="d-flex">
              {token === true ? (
                <ul>
                  <li>
                    <img src={list} alt="" />
                  </li>
                  <li className="ms-4">
                    <img src={bell} alt="" />
                  </li>
                  <li className="ms-4">
                    <img src={user} alt="" />
                  </li>
                </ul>
              ) : (
                <button className="btn btn-masuk" type="button" data-bs-toggle="modal" data-bs-target="#modalSeller">
                  <img src={login} alt="" /> Masuk
                </button>
              )}
            </form>
          </div>
          <ModalSeller />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
