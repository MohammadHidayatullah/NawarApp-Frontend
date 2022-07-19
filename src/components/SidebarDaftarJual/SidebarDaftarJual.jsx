/** @format */

import React, { useEffect, useState } from "react";
import { FiBox, FiHeart, FiDollarSign, FiChevronRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import SwipeToSlide from "../../components/SwipeToSlide/SwipeToSlide";
import "./SidebarDaftarJual.css";

function SidebarDaftarJual({ handleData }) {
  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);
  return (
    <div className='col-lg-3'>
      {width <= 576 ? (
        <SwipeToSlide handleData={handleData}/>
      ) : (
        <div
          className='card sidebar-kategori d-flex flex-column justify-content-center mt-2'
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
            width: "90%",
            height: "auto",
            padding: "2.2rem 2.0rem",
          }}>
          <p className='pb-1'>Kategori</p>
          <ul
            className='sidebar-button'
            style={{ listStyleType: "none", padding: 0 }}>
            <li
              className='d-flex justify-content-between'
              style={{ cursor: "pointer" }}
              onClick={() => handleData(1)}>
              <div className='kategori'>
                <FiBox
                  className='me-2 icon-kategori'
                  size={20}
                  style={{ color: "#8A8A8A" }}
                />{" "}
                Semua Produk
              </div>
              <div className='chevron-right'>
                <IconContext.Provider value={{ color: "#D0D0D0" }}>
                  <FiChevronRight size={20} />
                </IconContext.Provider>
              </div>
            </li>
            <hr />
            <li
              className='d-flex justify-content-between'
              style={{ cursor: "pointer" }}
              onClick={() => handleData(2)}>
              <div className='kategori'>
                <FiHeart
                  className='me-2 icon-kategori'
                  size={20}
                  style={{ color: "#8A8A8A" }}
                />{" "}
                Diminati
              </div>
              <div className='chevron-right'>
                <IconContext.Provider value={{ color: "#D0D0D0" }}>
                  <FiChevronRight size={20} />
                </IconContext.Provider>
              </div>
            </li>
            <hr />
            <li
              className='d-flex justify-content-between'
              style={{ cursor: "pointer" }}
              onClick={() => handleData(3)}>
              <div className='kategori'>
                <FiDollarSign
                  className='me-2 icon-kategori'
                  size={20}
                  style={{ color: "#8A8A8A" }}
                />
                Terjual
              </div>
              <div className='chevron-right'>
                <IconContext.Provider value={{ color: "#D0D0D0" }}>
                  <FiChevronRight size={20} />
                </IconContext.Provider>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SidebarDaftarJual;
