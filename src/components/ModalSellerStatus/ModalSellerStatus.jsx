/** @format */

import React from "react";
import './ModalSellerStatus.css';

function ModalSellerStatus() {
  return (
    <>
      <div class='modal' id='modalSellerStatus'>
        <div
          class='modal-dialog modal-dialog-centered'
          style={{ width: "25%", borderRadius: "16px" }}>
          <div class='modal-content' style={{ padding: 32 }}>
            <p class='modal-title text-center' style={{ fontWeight: "bold" }}>
              Perbarui status penjualan produkmu
            </p>

            <div
              class='modal-body mb-3'
            //   style={{ background: "#EEEEEE", borderRadius: "16px" }}
              >
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label class='form-check-label' for='flexRadioDefault1'>
                  <span>Berhasil terjual</span>
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                  checked
                />
                <label class='form-check-label' for='flexRadioDefault2'>
                  Batalkan transaksi
                </label>
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
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSellerStatus;
