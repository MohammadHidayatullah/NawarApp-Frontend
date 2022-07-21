/** @format */

import React from "react";
// import { useDropzone } from "react-dropzone";
import "./InfoPenawaran.css";
// import { AiOutlineCamera } from "react-icons/ai";
import { FaArrowLeft, FaPlus, FaTimes, FaWhatsapp } from "react-icons/fa";
import Navbar2 from "../../components/NavbarInfo/NavbarInfo";
import ModalSeller from "../../components/ModalSeller/ModalSeller";
import ModalSellerStatus from "../../components/ModalSellerStatus/ModalSellerStatus";
import { useNavigate, useParams } from "react-router-dom";
// import ImageUploadPreviewComponent from "../../components/ImageUpload/ImageUploadPreviewComponent";
// import { useState } from "react";
import Foto from "../../assets/img/img_photo(2).jpg";
import Produk from "../../assets/img/produk.jpg";
import WA from "../../assets/icon/fi_whatsapp.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNotificationSellerById } from "../../redux/action/notificationIdAction";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import {
  acceptOffer,
  completeOffer,
  rejectOffer,
} from "../../redux/action/transactionAction";
// import { getNotificationSellerById } from "../../redux/action/notificationIdAction";

function InfoPenawaran() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [step, setStep] = useState({
    status: "keranjang",
  });

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const { isLoading: loadingNotification, data: item } = useSelector(
    (state) => state.notificationId
  );

  useEffect(() => {
    if (item.length === 0) {
      dispatch(getNotificationSellerById(id));
    }
  }, [dispatch]);

  console.log("detailnotificationData", item, "data");

  const handleAcceptOffer = (data) => {
    dispatch(acceptOffer(data.transactions.id));
    //refresh page
    window.location.reload(
      (window.location.href = "/info-penawaran/" + data.id)
    );
  };

  const handleCompleteOffer = (data) => {
    dispatch(completeOffer(data.transactions.id));
    //refresh page
    window.location.reload(
      (window.location.href = "/info-penawaran/" + data.id)
    );
  };

  const handleRejectOffer = (data) => {
    dispatch(rejectOffer(data.transactions.id));
    //refresh page
    window.location.reload(
      (window.location.href = "/info-penawaran/" + data.id)
    );
  };

  const handleHome = () => {
    window.location.reload(navigate("/"));
  };

  return (
    <>
      <Navbar2 />
      <div style={{ padding: "3%" }}>
        <div className='container' style={{ maxWidth: "568px" }}>
          <button className='arrow-left' onClick={handleHome}>
            <FaArrowLeft size={22} />
          </button>
          {loadingNotification ? (
            "loading"
          ) : (
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
                          <b>{item.transactions.buyer.name}</b>
                        </h6>
                        <p className='card-text m-0 p-0' id='kota'>
                          <small className='text-muted'>
                            {item.transactions.buyer.address}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-12 col-md-12'>
                  <p className='trnsaction-title my-3'>
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
                        {item.transactions.productTransactions.name}
                      </p>
                      <p
                        className='m-0 p-0'
                        style={{
                          fontSize: "14px",
                        }}>
                        <NumberFormat
                          value={item.transactions.productTransactions.price}
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          prefix={"Rp "}
                        />
                      </p>
                      <p
                        className='m-0 p-0'
                        style={{
                          fontSize: "14px",
                        }}>
                        Ditawar &nbsp;
                        <NumberFormat
                          value={item.transactions.bidPrice}
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                          prefix={"Rp "}
                        />
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "#8A8A8A",
                          marginBottom: "0",
                        }}>
                        {
                          <Moment format='DD MMMM, H:mm'>
                            {item.notifDate}
                          </Moment>
                        }
                      </p>
                      <p>{item.transactions.status}</p>
                    </div>
                  </div>
                  {item.transactions.status === "Pending" ? (
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
                          onClick={() => handleRejectOffer(item)}>
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
                          // data-bs-toggle='modal'
                          // data-bs-target='#modalSeller'
                          onClick={() => handleAcceptOffer(item)}>
                          Terima
                        </button>
                      </div>
                    </>
                  ) : item.transactions.status === "Accepted" ? (
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
                          type='button'
                          className='btn d-flex align-items-center'
                          style={{
                            backgroundColor: "#7126B5",
                            border: "1px solid #7126B5",
                            padding: "auto",
                            color: "#ffffff",
                            paddingRight: "10%",
                            paddingLeft: "10%",
                          }}
                          data-bs-toggle='modal'
                          data-bs-target='#modalSeller'>
                          Hubungi di &nbsp;
                          <FaWhatsapp size={14} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {/* akhir button */}

                  <ModalSeller item={item} />
                  <ModalSellerStatus
                    handleCompleteOffer={handleCompleteOffer}
                    handleRejectOffer={handleRejectOffer}
                    item={item}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InfoPenawaran;
