import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./InfoProduk.css";
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import ImageUploadPreviewComponent from "../../components/ImageUpload/ImageUploadPreviewComponent";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  // getProduct,
  createProduct,
  // editProduct,
  // deleteProduct,
} from "../../redux/action/productAction";

function InfoProduk() {
  // Fungsi untuk handle fungsi input image

  // Image yang di submit
  const [images, setImages] = useState([]);

  // Image yang ditampilkan
  const [selectedImages, setSelectedImages] = useState([]);

  // Value Image
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setImages((previousImages) => [...previousImages, event.target.files[0]]);
  };

  console.log(images);

  // Fungsi untuk handle react redux
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  // const [id, setId] = useState();

  const dispatch = useDispatch();

  const { isLoading: loadingProduct, data: productData } = useSelector(
    (state) => state.product
  );

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

  const resetForm = () => {
    setSelectedImages("");
    setImages("");
    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    // setId("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    // Loop untuk append gambar (Karena gambar bukan array)
    images.forEach((result) => {
      formData.append("images", result);
    });
    // Append data form
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);

    dispatch(createProduct(formData));
    resetForm();
  };

  // Fungsi untuk handle responsive mobile

  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);

  // Fungsi untuk handle navigasi

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  // Fungsi redux
  return (
    <>
      {width >= 576 && <Navbar />}
      <div style={{ padding: "3%" }}>
        <div className="container" style={{ maxWidth: "568px" }}>
          <button className="d-none d-sm-block arrow-left" onClick={navHome}>
            <FiArrowLeft size={22} />
          </button>
          {width <= 576 && (
            <div className="d-flex justify-content-between">
              <button className=" arrow-left" onClick={navHome}>
                <FiArrowLeft size={22} />
              </button>
              <p className="mb-4" style={{ marginLeft: "-28.84px" }}>
                <b>Lengkapi Detail Produk</b>
              </p>
              <p></p>
            </div>
          )}
          <div className="row">
            <div className="col-lg-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama Produk</label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaProduk"
                    aria-describedby="namaHelp"
                    placeholder="Nama Produk"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategori</label>
                  <select
                    className="form-select"
                    aria-label=".form-select-sm multiple select example"
                    style={{ height: "28,5pt" }}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Foto Produk</label>
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
                  <div className="images">
                    <div className="grid">
                      <label className="image-uploader">
                        <FiPlus />
                        {/* <br /> */}
                        <input
                          className="input-image"
                          type="file"
                          name="images"
                          onChange={onSelectFile}
                          accept="image/png, image/jpeg, image/webp"
                        />
                      </label>
                    </div>
                    {selectedImages &&
                      selectedImages.map((image, index) => {
                        return (
                          <div key={index} className="grid">
                            <div className="image">
                              <img id="img" src={image} alt="upload" />
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  console.log(index, "ini index");
                                  setSelectedImages(
                                    selectedImages.filter((e) => e !== image)
                                  );
                                  setImages(
                                    images.filter((value, f) => f !== index)
                                  );
                                }}
                              >
                                <FiX /> Delete
                              </button>
                              {/* <p className="pt-1">{index + 1}</p> */}
                            </div>
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
                      // onClick={() => (id ? handleEditSubmit() : handleSubmit())}
                      onClick={handleSubmit}
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
