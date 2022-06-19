import React from "react";
import { useDropzone } from "react-dropzone";
import "./InfoProduk.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FaArrowLeft, FaPlus, FaTimes } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import ImageUploadPreviewComponent from "../../components/ImageUpload/ImageUploadPreviewComponent";
import { useState } from "react";

function InfoProduk() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "3%" }}>
        <div className="container" style={{ maxWidth: "568px" }}>
          <button
            className="arrow-left"
            onClick={navHome}
            // style={{ color: "#181818" }}
          >
            <FaArrowLeft size={22} />
          </button>
          <div className="row">
            <div className="col-lg-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama Produk</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Nama Produk"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Harga Produk</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Rp 0,00"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategori</label>
                  <select
                    className="form-select"
                    aria-label=".form-select-sm multiple select example"
                    style={{ height: "28,5pt" }}
                  >
                    <option selected>Pilih Kategori</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Foto Produk</label>
                  <div className="images">
                    <label className="image-uploader">
                      <FaPlus />
                      <br />
                      <input
                        className="input-image"
                        type="file"
                        name="images"
                        onChange={onSelectFile}
                        multiple
                        accept="image/png, image/jpeg, image/webp"
                      />
                    </label>
                    {selectedImages.length <= 10 ? (
                      ""
                    ) : (
                      <p className="pt-3">
                        Anda hanya boleh upload 10 gambar! Hapus{" "}
                        <b className="error">
                          {selectedImages.length - 10} gambar
                        </b>
                      </p>
                    )}
                    {selectedImages &&
                      selectedImages.map((image, index) => {
                        return (
                          <div key={image} className="image">
                            <img
                              id="img"
                              src={image}
                              height="200"
                              alt="upload"
                            />
                            <button
                              onClick={() =>
                                setSelectedImages(
                                  selectedImages.filter((e) => e !== image)
                                )
                              }
                            >
                              <FaTimes /> Delete
                            </button>
                            {/* <p className="pt-1">{index + 1}</p> */}
                          </div>
                        );
                      })}
                    {/* <div className="images"></div> */}
                  </div>
                  {/* <ImageUploadPreviewComponent /> */}
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <button
                      type="submit"
                      className="btn btn-outline w-100 mb-3"
                      style={{ borderColor: "#181818", color: "#181818" }}
                    >
                      Preview
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      type="submit"
                      className="btn w-100 mb-3"
                      style={{ backgroundColor: "#181818", color: "#FFFF" }}
                    >
                      Terbitkan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProduk;
