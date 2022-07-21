/** @format */

import React, { useState } from "react";
import "./ModalSellerStatus.css";
import { FiX } from "react-icons/fi";
import { completeOffer, rejectOffer } from "../../redux/action/transactionAction";


function ModalSellerStatus({ item }) {
  const [isOpen, setIsOpen] = useState(null);

  console.log('item_id', item.transactions.id)

  console.log("open", isOpen);
  console.log("item modal", item);

  const handleSend = (item) => {
    if (isOpen === "complete") {
      completeOffer(item.transactions.id);
    } else if (isOpen === "reject") {
      rejectOffer(item.transactions.id);
    }
  };

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalSellerStatus"
      >
        Open modal
      </button> */}
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
                  onChange={() => setIsOpen("complete")}
                />
                <label className='form-check-label' htmlFor='flexRadioDefault1'>
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
                  onChange={() => setIsOpen("reject")}
                />
                <label className='form-check-label' htmlFor='flexRadioDefault2'>
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
              style={{
                background: "#181818",
                color: "white",
                borderRadius: "16px",
              }}
              // data-bs-dismiss='modal'
              onClick={handleSend}>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSellerStatus;
