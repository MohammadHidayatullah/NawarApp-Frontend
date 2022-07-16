/** @format */

import React from "react";
// import { useDropzone } from "react-dropzone";
import "./InfoPenawaran.css";
// import { AiOutlineCamera } from "react-icons/ai";
import { FaArrowLeft, FaPlus, FaTimes, FaWhatsapp } from "react-icons/fa";
import Navbar2 from "../../components/NavbarInfo/NavbarInfo";
import ModalSeller from "../../components/ModalSeller/ModalSeller";
import ModalSellerStatus from "../../components/ModalSellerStatus/ModalSellerStatus";
import { useNavigate } from "react-router-dom";
// import ImageUploadPreviewComponent from "../../components/ImageUpload/ImageUploadPreviewComponent";
// import { useState } from "react";
import Foto from "../../assets/img/img_photo(2).jpg";
import Produk from "../../assets/img/produk.jpg";
import WA from "../../assets/icon/fi_whatsapp.svg";
import { useState } from "react";

function InfoPenawaran() {
  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));
  const [step, setStep] = useState({
    status: "keranjang",
  });

  const token = false;

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };
  // const [selectedImages, setSelectedImages] = useState([]);
  // const onSelectFile = (event) => {
  //   const selectedFiles = event.target.files;
  //   const selectedFilesArray = Array.from(selectedFiles);
  //   const imagesArray = selectedFilesArray.map((file) => {
  //     return URL.createObjectURL(file);
  //   });

  //   setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  // };

  return (
    <>
      <Navbar2 />
      <div style={{ padding: "3%" }}>
        <div className='container' style={{ maxWidth: "568px" }}>
           <button className="arrow-left" onClick={navHome}>
              <FaArrowLeft size={22} />
            </button>
          <div className='containt-transaction mt-4'>
            <div
              className='card w-100 p-3'
              style={{
                borderRadius: "16px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              }}>
              <div className='row'>
                <div className='col-lg-12 d-flex justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <img
                      className='me-3'
                      src={Produk}
                      alt=''
                      style={{
                        maxWidth: "48px",
                        maxHeight: "48px",
                        borderRadius: "12px",
                      }}
                    />
                    <div className='text d-flex flex-column'>
                      <h6 className='mb-2 p-0' id='pembeli'>
                        <b>Nama Pembeli</b>
                      </h6>
                      <p className='card-text m-0 p-0' id='kota'>
                        <small class='text-muted'>Kota</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <p className="trnsaction-title my-3">
                  <b>Daftar Produkmu yang Ditawar</b>
                </p>
                <div className='d-flex justify-content-between mb-3'>
                  <img
                    className=''
                    src={Produk}
                    alt=''
                    style={{
                      maxWidth: "48px",
                      maxHeight: "48px",
                      borderRadius: "12px",
                      margin: "16px, 16px, 16px, 0",
                    }}
                  />
                  <div
                    className='text d-flex flex-column'
                    style={{
                      marginRight: "40%",
                    }}>
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
                      Sepatu Nike
                    </p>
                    <p
                      className='m-0 p-0'
                      style={{
                        fontSize: "14px",
                      }}>
                      Sepatu Nike
                    </p>
                    <p
                      className='m-0 p-0'
                      style={{
                        fontSize: "14px",
                      }}>
                      Ditawar Rp.1.200.000
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#8A8A8A",
                      }}>
                      24 Juni,07.30
                    </p>
                  </div>
                </div>
                {step.status === "keranjang" && (
                  <>
                    <div className='btn-transaction d-flex justify-content-end'>
                      <button
                        type='button'
                        className='btn me-3 px-5'
                        style={{
                          backgroundColor: "white",
                          border: "1px solid #7126B5",
                          paddingRight: "10%",
                          paddingLeft: "10%",
                          color: "black",
                        }}
                        data-bs-toggle='modal'
                        data-bs-target='#modalSeller'
                        onClick={() => setStep({ status: "" })}>
                        Tolak
                      </button>
                      <button
                        type='button'
                        className='btn'
                        style={{
                          backgroundColor: "#7126B5",
                          border: "1px solid #7126B5",
                          padding: "auto",
                          color: "#ffffff",
                          paddingRight: "10%",
                          paddingLeft: "10%",
                        }}
                        data-bs-toggle='modal'
                        data-bs-target='#modalSeller'
                        onClick={() =>
                          setStep({
                            status: "proses",
                          })
                        }>
                        Terima
                      </button>
                    </div>
                  </>
                )}

                {/* akhir button */}

                {/* awal button */}

                {step.status === "proses" && (
                  <>
                    <div className='btn-transaction d-flex justify-content-end'>
                      <button
                        type='button'
                        className='btn me-3'
                        style={{
                          backgroundColor: "white",
                          border: "1px solid #7126B5",
                          padding: "auto",
                          color: "black",
                          paddingRight: "10%",
                          paddingLeft: "10%",
                        }}
                        data-bs-toggle='modal'
                        data-bs-target='#modalSellerStatus'
                        // onClick={()=> setStep({
                        //   status: "approve"
                        // })}
                      >
                        Status
                      </button>
                      <button
                        type='submit'
                        className='btn d-flex align-items-center'
                        style={{
                          backgroundColor: "#7126B5",
                          border: "1px solid #7126B5",
                          padding: "auto",
                          color: "#ffffff",
                          paddingRight: "10%",
                          paddingLeft: "10%",
                        }}
                        onClick={() =>
                          setStep({
                            status: "appove",
                          })
                        }>
                        Hubungi di &nbsp;
                        <FaWhatsapp size={14} />
                      </button>
                    </div>
                  </>
                )}

                {/* akhir button */}
                {step.status === "approve" && <p>tidak ada barang</p>}

                <ModalSeller />
                <ModalSellerStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPenawaran;
