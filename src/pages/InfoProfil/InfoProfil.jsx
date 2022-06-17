import React from "react";
import { useDropzone } from "react-dropzone";
import "./InfoProfil.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

function InfoProfil(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div style={{ padding: "3%" }}>
      <div className="container" style={{ maxWidth: "568px" }}>
        <button className="arrow-left">
          <FaArrowLeft size={22} />
        </button>
        <div className="row">
          <div className="col-lg-12">
            <section className="container d-flex justify-content-center">
              <div
                {...getRootProps({
                  className: "dropzone d-flex justify-content-center",
                })}
                style={{ width: "20%" }}
              >
                <label
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#fafafa",
                    cursor: "pointer",
                    padding: 15,
                    borderRadius: 12,
                    width: "96px",
                    height: "96px",
                  }}
                >
                  <AiOutlineCamera size={22} />
                  <input {...getInputProps()} />
                  {/* <aside>
                    <ul>{files}</ul>
                  </aside> */}
                </label>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama*</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nama"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Provinsi*</label>
                <select
                  className="form-select"
                  aria-label=".form-select-sm multiple select example"
                  style={{ height: "28,5pt" }}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Kota*</label>
                <select
                  className="form-select"
                  aria-label=".form-select-sm multiple select example"
                  style={{ height: "28,5pt" }}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat*</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">No Handphone*</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="contoh: +628123456789"
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "#181818", color: "#FFFF" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProfil;
