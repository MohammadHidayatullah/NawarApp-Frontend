/** @format */

import React from "react";
import person from "../../assets/img/logo-NawarApp.png";
import produk from "../../assets/img/produk.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import NumberFormat from "react-number-format";

function ModalSeller() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalSeller"
      >
        Open modal
      </button>
      <div className='modal' id='modalSeller'>
        <div
          className='modal-dialog modal-dialog-centered'
          style={{ width: "500px", margin: "0 auto" }}>
          <div className = "container">
            <div className="row">
              <div className='modal-content'
                style={{ padding: "16 px, 24px, 16px, 24 px", borderRadius: "12px" }}>
                <div className='col-2 row text-end' style={{ marginInlineStart: "auto" }}>
                  <FiX
                    size={22}
                    data-bs-dismiss='modal'
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className='col-10 modal-title text-center my-2' style={{ fontWeight: "bold" }}>
                <p>Status produk berhasil diperbarui</p>

                </div>

              </div>


            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSeller;
