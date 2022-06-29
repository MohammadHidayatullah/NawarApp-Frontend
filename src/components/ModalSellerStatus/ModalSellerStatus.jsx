/** @format */

import React from "react";
import "./ModalSellerStatus.css";
import { FiX } from "react-icons/fi";

function ModalSellerStatus() {
  return (
    <>
      <div className='modal' id='modalSellerStatus'>
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
            <p className='modal-title mb-3' style={{ fontWeight: "bold" }}>
              Perbarui status penjualan produkmu
            </p>

            <div
              className='modal-body mb-3 p-0'
              //   style={{ background: "#EEEEEE", borderRadius: "16px" }}
            >
              <div className='form-check mb-2'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label className='form-check-label' for='flexRadioDefault1'>
                  Berhasil terjual
                  <span>
                    Kamu telah sepakat menjual produk ini kepada pembeli
                  </span>
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                  checked
                />
                <label className='form-check-label' for='flexRadioDefault2'>
                  Batalkan transaksi
                  <span>
                    Kamu membatalkan transaksi produk ini dengan pembeli
                  </span>
                </label>
              </div>
            </div>
            <button
              type='button'
              className='btn tawar'
              data-bs-dismiss='modal'
              style={{
                background: "#181818",
                color: "white",
                borderRadius: "16px",
              }}>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSellerStatus;
