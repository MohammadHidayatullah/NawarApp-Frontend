/** @format */

import React, { useEffect } from "react";
import bell from "../../assets/icon/fi_bell.svg";
import logo from "../../assets/img/logo-NawarApp.png";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationSeller } from "../../redux/action/notificationAction";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import { Link, useNavigate } from "react-router-dom";
import { getNotificationSellerById } from "../../redux/action/notificationIdAction";
import { getNotificationBuyer } from "../../redux/action/notifBuyerAction";
// import "moment-timezone";

function Notification() {
  const { isLoading: loadingNotification, data: notificationData } =
    useSelector((state) => state.notification);

  const { isLoading: loadingNotifBuyer, data: notifBuyerData } = useSelector(
    (state) => state.notifBuyer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotificationSeller());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNotificationBuyer());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getNotificationBuyer());
  // }, [dispatch]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/info-penawaran/${id}`);
    dispatch(getNotificationSellerById(id));
    console.log("id", id);
  };
  console.log("notificationData", notificationData, "data");
  console.log("notifBuyerData", notifBuyerData, "data");
  return (
    <>
      <li>
        <div className='btn-group'>
          <div className='btn-group dropstart' role='group'>
            <button
              className='btn btn-none-style btn-lg '
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
                <span className='unread-notification'></span>
              </li>
            </button>
            <ul
              className='dropdown-menu'
              style={{
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                maxHeight: "300px",
                overflowY: "auto",
              }}>
              <span className='mb-4'>notifikasi penjualan</span>
              {notificationData.length < 1 ? (
                <li className='dropdown-item'>
                  <span>Tidak ada notifikasi</span>
                </li>
              ) : (
                notificationData?.map((item) => (
                  <>
                    {/* {item.status === "Bid" &&
                    item.transaction.status === "Pending" ? ( */}
                    {item.status === "Bid" && item.transaction !== null ? (
                      <li
                        className='dropdown-item'
                        onClick={() => {
                          handleClick(item.id);
                        }}>
                        {item?.transaction?.status === "Pending" ? (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "#8A8A8A",
                              marginBottom: "0px",
                            }}>
                            pembelian baru
                          </p>
                        ) : item?.transaction?.status === "Accepted" ? (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "green",
                              marginBottom: "0px",
                            }}>
                            hubungi pembeli
                          </p>
                        ) : item?.transaction?.status === "Rejected" ? (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "tomato",
                              marginBottom: "0px",
                            }}>
                            pembelian sudah ditolak
                          </p>
                        ) : (
                          <p
                            style={{
                              fontSize: "10px",
                              color: "#8A8A8A",
                              marginBottom: "0px",
                            }}>
                            transaksi selesai
                          </p>
                        )}

                        <div className='d-flex justify-content-between'>
                          <div className='d-flex flex-row'>
                            {item?.transaction?.productTransactions
                              ?.productImages.length > 0 ? (
                              <img
                                className='me-3'
                                src={
                                  item?.transaction?.productTransactions
                                    ?.productImages?.[0]?.url
                                }
                                alt=''
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  borderRadius: "12px",
                                }}
                              />
                            ) : (
                              <img
                                className='me-3'
                                src={logo}
                                alt=''
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  borderRadius: "12px",
                                }}
                              />
                            )}
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
                                {item?.transaction?.productTransactions?.name}
                              </p>
                              <p
                                className='m-0 p-0'
                                style={{
                                  fontSize: "14px",
                                }}>
                                <NumberFormat
                                  value={
                                    item?.transaction?.productTransactions
                                      ?.price
                                  }
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
                                Ditawar{" "}
                                <NumberFormat
                                  value={item?.transaction?.bidPrice}
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
                                  marginBottom: "0px",
                                }}>
                                {
                                  <Moment format='DD MMMM, H:mm'>
                                    {item?.notifDate}
                                  </Moment>
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </li>
                    ) : (
                      <span
                        style={{
                          display: "none",
                        }}></span>
                    )}
                  </>
                ))
              )}

              <span className='mb-4'>notifikasi pembelian</span>
              {notifBuyerData?.data?.length < 1 ? (
                <li className='dropdown-item'>
                  <span>Tidak ada notifikasi</span>
                </li>
              ) : (
                <>
                  {notifBuyerData?.data?.map((buyer) => (
                    <>
                      {buyer.status === "Buyer" &&
                      buyer.transactions !== null ? (
                        <li className='dropdown-item'>
                          {buyer?.transactions?.status === "Pending" ? (
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#8A8A8A",
                              }}>
                              penawaran belum diterima oleh penjual
                            </p>
                          ) : buyer?.transactions?.status === "Accepted" ? (
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#8A8A8A",
                              }}>
                              menunggu WhatsApp dari penjual
                            </p>
                          ) : buyer?.transactions?.status === "Rejected" ? (
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#8A8A8A",
                              }}>
                              penawaran ditolak
                            </p>
                          ) : (
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#8A8A8A",
                              }}>
                              transaksi selesai
                            </p>
                          )}
                          <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-row'>
                              {buyer?.transactions?.productTransactions
                                ?.productImages.length > 0 ? (
                                <img
                                  className='me-3'
                                  src={
                                    buyer?.transactions?.productTransactions
                                      ?.productImages?.[0]?.url
                                  }
                                  alt=''
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "12px",
                                  }}
                                />
                              ) : (
                                <img
                                  className='me-3'
                                  src={logo}
                                  alt=''
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "12px",
                                  }}
                                />
                              )}
                              <div className='text d-flex flex-column me-5'>
                                <p
                                  className='m-0 p-0'
                                  style={{
                                    fontSize: "14px",
                                  }}>
                                  {
                                    buyer?.transactions?.productTransactions
                                      ?.name
                                  }
                                </p>
                                <p
                                  className='m-0 p-0'
                                  style={{
                                    fontSize: "14px",
                                  }}>
                                  <NumberFormat
                                    value={
                                      buyer?.transactions?.productTransactions
                                        ?.price
                                    }
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
                                  Ditawar{" "}
                                  <NumberFormat
                                    value={buyer?.transactions?.bidPrice}
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
                                    marginBottom: "0px",
                                  }}>
                                  {
                                    <Moment format='DD MMMM, H:mm'>
                                      {buyer?.notifDate}
                                    </Moment>
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </li>
                      ) : (
                        <span
                          style={{
                            display: "none",
                          }}></span>
                      )}
                    </>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

export default Notification;
