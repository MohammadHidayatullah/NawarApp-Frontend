/** @format */

import React from "react";
import person from "../../assets/img/logo-NawarApp.png";
import produk from "../../assets/img/produk.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router";

function ModalSeller({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=${item.transactions.buyer.phone}`;
  };

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalSeller"
      >
        Open modal
      </button> */}
      <div className='modal' id='modalSeller'>
        <div
          className='modal-dialog modal-dialog-centered'
          style={{ width: "360px", margin: "0 auto" }}>
          <div
            className='modal-content'
            style={{ padding: 32, borderRadius: "16px" }}>
            <div className='row text-end' style={{ marginInlineStart: "auto" }}>
              <FiX
                size={22}
                data-bs-dismiss='modal'
                style={{ cursor: "pointer" }}
              />
            </div>
            <p className='modal-title my-2' style={{ fontWeight: "bold" }}>
              Yeay kamu berhasil mendapat harga <br /> yang sesuai
            </p>
            <p style={{ color: "#8A8A8A" }}>
              Segera hubungi pembeli melalui <br /> whatsapp untuk transaksi
              selanjutnya
            </p>

            <div
              className='modal-body mb-4'
              style={{ background: "#EEEEEE", borderRadius: "16px" }}>
              <div className='row'>
                <div className='col-12 text-center'>
                  <p style={{ fontWeight: "bold" }}>Product Match</p>
                </div>
                <div className='d-flex ps-0 pe-0 mb-2'>
                  <img
                    className='mx-3'
                    src={person}
                    alt='person'
                    style={{ width: "48px", borderRadius: "12px" }}
                  />
                  <div className='C'>
                    <p style={{ margin: "0", fontWeight: "bold" }}>
                      Nama Pembeli
                    </p>
                    <p>Kota</p>
                  </div>
                </div>
                <div className='d-flex ps-0 pe-0'>
                  <img
                    className='mx-3'
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                    }}
                    src={produk}
                    alt='produk'
                  />
                  <div className='C'>
                    <p style={{ margin: "0" }}>Nike</p>
                    <p style={{ margin: "0", textDecoration: "line-through" }}>
                      <NumberFormat
                        value={250000}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp "}
                      />
                    </p>
                    <p>
                      Ditawar{" "}
                      <NumberFormat
                        value={200000}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp "}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type='button'
              className='btn tawar'
              // data-bs-dismiss='modal'
              style={{
                background: "#181818",
                color: "white",
                borderRadius: "16px",
              }}
              onClick={handleClick}>
              Hubungi via Whatsapp <FaWhatsapp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSeller;
