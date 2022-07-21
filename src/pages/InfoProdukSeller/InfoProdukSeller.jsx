import React from 'react'
import "./InfoProdukSeller.css";
import Navbar from "../../components/Navbar/Navbar";
import Produk from "../../assets/img/produk.jpg";
import Arrow from "../../assets/icon/panah.png";
import Panah from "../../assets/icon/panah-before.png";
import NumberFormat from "react-number-format";
import User from "../../assets/icon/infouser.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function InfoProdukSeller() {
  return (
    <>
    <Navbar/>
    <div className="container mt-5 d-flex justify-content-center" style={{ maxWidth: "968px" }}>
        <div className="content">
            <div className="row mb-1 ">
          <div className="col-lg-8">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{borderRadius: "16px"}}>
                    <div className="carousel-item active">
                        <img src={Produk} className="d-block w-100" alt="produkinfo"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Produk} className="d-block w-100" alt="produkinfo"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Produk} className="d-block w-100" alt="produk"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <img src={Panah} aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <img src={Arrow} aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
        <div className="col-lg-4">
            <div className="card" id='produk-card' style={{ padding:"16px 24px", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.15)", borderRadius: "16px"}}>
                <div className="card-body-2">
                    <p className='card-title'>Sepatu Nike</p>
                    <p className='card-text'>Aksesoris</p>
                    <p className='card-price'>
                    <NumberFormat
                        value={750000}
                        displayType={'text'}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp "}
                    />
                    </p>
                </div>
                <div className='p-0 m-0'>
                <button className=" w-100 mb-3" style={{ backgroundColor: "#181818", color: "#FFFF" , borderRadius: "16px" , padding : "10px 20px" , fontSize:"14px" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Terbitkan</button>
                    <button className=" w-100" style={{ backgroundColor: "#FFFF", color: "#181818" , borderRadius: "16px" , padding : "10px 20px" , fontSize:"14px" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
                </div>
            </div>
            <div className="card mt-3" style={{ borderRadius: "16px" }}>
                <div className="row">
                <div className="d-flex ps-0 pe-0">
                  <img
                    className="mx-3"
                    style={{ width: "48px", borderRadius: "12px", boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "12px" }}
                    src={User}
                    alt="produk"
                  />
                  <div className="text d-flex flex-column">
                    <p className="mb-2" style={{ margin: "0" }}>
                      Nama Penjual
                    </p>
                    <p className="p-0 m-0">
                        Kota
                    </p>
                  </div>
                </div>
                <div className=" ps-0"></div>
              </div>
            </div>
        </div>
            </div>
            <div className="row mb-1">
        <div className="col-lg-8">
        <div className="card" style={{boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.15)"}} id='desc'>
                <div className="card-body">
                    <h5 className="judul"><b>Deskripsi</b></h5>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InfoProdukSeller