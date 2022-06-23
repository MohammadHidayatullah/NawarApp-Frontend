import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import tes from "../../img/profile.jpg";
import "./DaftarJual.css";
import { FiBox, FiHeart, FiDollarSign, FiChevronRight } from "react-icons/fi";
import { IconContext } from "react-icons";

function DaftarJual() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-lg-12">
            <h1 className="judul mb-4">Daftar Jual Saya</h1>
            <div
              className="card w-100 p-3"
              style={{
                borderRadius: "16px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-3"
                      src={tes}
                      alt=""
                      style={{
                        maxWidth: "48px",
                        maxHeight: "48px",
                        borderRadius: "12px",
                      }}
                    />
                    <div className="text d-flex flex-column">
                      <p className="m-0 p-0">Nama Penjual</p>
                      <p className="m-0 p-0">Kota</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="edit">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div
              className="card sidebar-kategori d-flex flex-column justify-content-center"
              style={{
                borderRadius: "16px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                width: "90%",
                height: "100%",
                padding: "2.2rem 2.0rem",
              }}
            >
              <p className="pb-1">Kategori</p>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="d-flex justify-content-between">
                  <div className="kategori" style={{ color: "purple" }}>
                    <FiBox className="me-2" size={20} /> Semua Produk
                  </div>
                  <div className="chevron-right" style={{ color: "purple" }}>
                    <FiChevronRight size={20} />
                  </div>
                </li>
                <hr />
                <li className="d-flex justify-content-between">
                  <div className="kategori">
                    <FiHeart
                      className="me-2"
                      size={20}
                      style={{ color: "#8A8A8A" }}
                    />{" "}
                    Diminati
                  </div>
                  <div className="chevron-right">
                    <IconContext.Provider value={{ color: "#D0D0D0" }}>
                      <FiChevronRight size={20} />
                    </IconContext.Provider>
                  </div>
                </li>
                <hr />
                <li className="d-flex justify-content-between">
                  <div className="kategori">
                    <FiDollarSign
                      className="me-2"
                      size={20}
                      style={{ color: "#8A8A8A" }}
                    />
                    Terjual
                  </div>
                  <div className="chevron-right">
                    <IconContext.Provider value={{ color: "#D0D0D0" }}>
                      <FiChevronRight size={20} />
                    </IconContext.Provider>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9"></div>
        </div>
      </div>
    </div>
  );
}

export default DaftarJual;
