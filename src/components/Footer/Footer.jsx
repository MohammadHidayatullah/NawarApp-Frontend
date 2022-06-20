/** @format */

import React from "react";
import facebook from "../../assets/icon/sosmed/icon_facebook.svg";
import instagram from "../../assets/icon/sosmed/icon_instagram.svg";
import mail from "../../assets/icon/sosmed/icon_mail.svg";
import twitter from "../../assets/icon/sosmed/icon_twitter.svg";
import twitch from "../../assets/icon/sosmed/icon_twitch.svg";
import logo from "../../assets/img/logo-NawarApp.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section id='footer'>
        <div className='container'>
          <div className='row'>
            <div className='address col-lg-4 col-md-6 col-12 mb-3'>
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>nawarapp@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className='sosmed col-lg-4 col-md-6 col-12 mb-3'>
              <p>Connect with us</p>

              <a className='sos-link' href='#'>
                <img src={facebook} alt='' />
              </a>

              <a className='sos-link' href='#'>
                <img src={instagram} alt='' />
              </a>

              <a className='sos-link' href='#'>
                <img src={mail} alt='' />
              </a>

              <a className='sos-link' href='#'>
                <img src={twitter} alt='' />
              </a>

              <a className='sos-link' href='#'>
                <img src={twitch} alt='' />
              </a>
            </div>
            <div className='copyright col-lg-4 col-md-6 col-12 mb-3'>
              <p>Copyright NawarApp 2022</p>
              <a className='logo-footer' href='#'>
                <img src={logo} alt='' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
