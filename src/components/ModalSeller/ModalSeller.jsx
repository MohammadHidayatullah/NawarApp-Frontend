/** @format */

import React from "react";
import person from "../../assets/img/person.svg";
import produk from "../../assets/img/produk.jpg";
import { FaWhatsapp } from "react-icons/fa";
import NumberFormat from "react-number-format";

function ModalSeller() {
  return (
    <>
      <div class='modal' id='modalSeller'>
        <div
          class='modal-dialog modal-dialog-centered'
          style={{ width: "25%", borderRadius: "16px" }}>
          <div class='modal-content' style={{ padding: 32 }}>
            <p class='modal-title' style={{ fontWeight: "bold" }}>
              Yeay kamu berhasil mendapat harga <br /> yang sesuai
            </p>
            <p style={{ color: "#8A8A8A" }}>
              Segera hubungi pembeli melalui <br /> whatsapp untuk transaksi
              selanjutnya
            </p>

            <div
              class='modal-body mb-3'
              style={{ background: "#EEEEEE", borderRadius: "16px" }}>
              <div class='row'>
                <div className='col-12 text-center'>
                  <p style={{ fontWeight: "bold" }}>Product Match</p>
                </div>
                <div class='col-sm-3'>
                  <img
                    src={person}
                    alt='person'
                    style={{ width: "48px", borderRadius: "12px" }}
                  />
                </div>
                <div class='col-sm-8'>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    Nama Pembeli
                  </p>
                  <p>Kota</p>
                </div>
                <div class='col-sm-3'>
                  <img
                    style={{ width: "48px", borderRadius: "12px" }}
                    src={produk}
                    alt='produk'
                  />
                </div>
                <div class='col-sm-8'>
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
            <button
              type='button'
              class='btn tawar'
              data-bs-dismiss='modal'
              style={{
                background: "#181818",
                color: "white",
                borderRadius: "16px",
              }}>
              Hubungi via Whatsapp <FaWhatsapp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSeller;
