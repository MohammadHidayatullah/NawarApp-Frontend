import React from "react";
// import { useDropzone } from "react-dropzone";
import "./InfoPenawaran.css";
// import { AiOutlineCamera } from "react-icons/ai";
import { FaArrowLeft, FaPlus, FaTimes } from "react-icons/fa";
import Navbar2 from "../../components/NavbarInfo/NavbarInfo";
import ModalSeller from "../../components/ModalSeller/ModalSeller";
import ModalSellerStatus from "../../components/ModalSellerStatus/ModalSellerStatus";
import { useNavigate } from "react-router-dom";
// import ImageUploadPreviewComponent from "../../components/ImageUpload/ImageUploadPreviewComponent";
// import { useState } from "react";
import Foto from "../../assets/img/img_photo(2).jpg";
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
    status: "keranjang"
  })

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
        <div className="container" style={{ maxWidth: "568px" }}>
          <button
            className="arrow-left"
            onClick={navHome}
            // style={{ color: "#181818" }}
          >
            <FaArrowLeft size={22} />
          </button>

          <div className="container mt-4">
                  <div className="row mb-4">
                    <div className="col-lg-12">
                      <div
                        className="card w-100 p-3"
                        style={{
                          borderRadius: "16px",
                          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div className="d-flex align-items-center mx-3">
                              <img
                                className="me-3"
                                src={Foto}
                                alt=""
                                style={{
                                  maxWidth: "48px",
                                  maxHeight: "48px",
                                  borderRadius: "12px",
                                }}
                              />
                              <div className="text d-flex flex-column">
                                <h6 className="mb-2 p-0" id="pembeli">
                                  <b>Nama Pembeli</b>                                
                                </h6>
                                <p className="card-text col-2 m-0 p-0" id="kota">
                                  <small class="text-muted">Kota</small>
                                </p>
                              </div>
                            </div>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form>
    

                <div className="kotak2 mx-4">
                    <p class=""><b>Daftar Produkmu yang Ditawar</b></p>
                    <div className="row">
                        <div className="card">
                            <div className="card-body col-2">
                                <img className="card-img-top" src={Foto} alt="Card image cap"/>
                            </div>

                            <div className="card-body col-10">
                              <div className="row">
                                <p className="card-text col-9"><small class="text-muted">Penawaran Produk</small></p>
                                <p className="card-text col-3"><small class="text-muted">24 Juni,07.30</small></p>
                              </div>
                              
                              <div className="row">
                                <h6 className="card-title">
                                    <h6>Sepatu Nike</h6>
                                    <h6>Rp. 1.500.000 ribu</h6>
                                    <h6> Ditawar Rp.1.200.000</h6>                    
                                </h6>
                              </div>
                             
                            </div>
                        </div>
                    </div>
                
                </div>
            
                
                {/* awal button */}

                {/* <div className="row">
                  <div className="col-lg-9 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-outline mx-4" id="tolak"
                      
                    >
                      Tolak
                    </button>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn mb-4" id="hubungi"
                      
                    >
                      Terima
                      
                    </button>
                  </div>
                  
                </div> */}
                {/* akhir button */}

                {/* awal button */}

                 {step.status === "keranjang" && <>
                    <div className="row">
                      <div className="col-lg-9 d-flex justify-content-end">
                        <button 
                          type="submit"
                          className="btn btn-outline mx-4" id="tolak"
                          onClick={()=> setStep({
                            status: ""
                          })}
                          
                        >
                          Tolak
                        </button>
                      </div>
                      <div className="col-lg-3 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn mb-4" id="hubungi"
                          onClick={()=> setStep({
                            status: "proses"
                          })}
                        >
                          Terima
                          
                        </button>
                      </div>
                      
                    </div>
                  </>

                 }

                {/* akhir button */}


                {/* awal button */}

                {step.status === "proses" && <>
                <div className="row">
                  <div className="col-lg-9 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-outline mx-4" id="tolak"
                      onClick={()=> setStep({
                        status: "keranjang"
                      })}
                    >
                      Status
                    </button>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn mb-4" id="hubungi"
                      onClick={()=> setStep({
                        status: "appove"
                      })}
                    >
                      Hubungi di
                      <i className=""><img src={WA} alt="" className="wa" /></i>
                    </button>
                  </div>
                  
                </div>
                </>

                }

                {/* akhir button */}

                {/* awal Alert */}
                {step.status === "approve" && 
                (<p>
                tidak ada barang
                </p>)

                }

                {/* akhir alert */}

              </form>
              {/* <form className="d-flex">
              {token === true ? (
                
                <ul>
                  <li>
                    <img src={Foto} alt="" />
                  </li>
                  <li className="ms-4">
                    <img src={Foto} alt="" />
                  </li>
                  <li className="ms-4">
                    <img src={Foto} alt="" />
                  </li>
                </ul>
              ) : (
                <button className="btn btn-masuk" type="submit">
                   Masuk
                </button>
              )}
            </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPenawaran;
