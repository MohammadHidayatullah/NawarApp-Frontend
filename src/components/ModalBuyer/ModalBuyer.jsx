import React from "react";
import produk from "../../assets/img/produk.jpg";
import NumberFormat from "react-number-format";
import { FiX } from "react-icons/fi";

function ModalBuyer() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalBuyer"
      >
        Open modal
      </button>
      <div className="modal" id="modalBuyer">
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "360px", margin: "0 auto" }}
        >
          <div
            className="modal-content"
            style={{ padding: 32, borderRadius: "16px" }}
          >
            <div className="row text-end" style={{ marginInlineStart: "auto" }}>
              <FiX
                size={22}
                data-bs-dismiss="modal"
                style={{ cursor: "pointer" }}
              />
            </div>
            <p className="modal-title my-3" style={{ fontWeight: 500 }}>
              Masukkan harga tawarmu
            </p>
            <p style={{ color: "#8A8A8A" }}>
              Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </p>

            <div
              className="modal-body mb-4"
              style={{ background: "#EEEEEE", borderRadius: "16px" }}
            >
              <div className="row">
                <div className="d-flex ps-0 pe-0">
                  <img
                    className="mx-3"
                    style={{ width: "48px", borderRadius: "12px" }}
                    src={produk}
                    alt="produk"
                  />
                  <div className="text d-flex flex-column">
                    <p className="mb-2" style={{ margin: "0" }}>
                      Nike
                    </p>
                    <p className="p-0 m-0">
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
                <div className=" ps-0"></div>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label">Harga Tawar</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Rp 0,00"
                style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.10)" }}
              />
            </div>
            <button
              type="button"
              className="btn tawar"
              data-bs-dismiss="modal"
              style={{
                background: "#181818",
                color: "white",
                borderRadius: "16px",
              }}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalBuyer;
