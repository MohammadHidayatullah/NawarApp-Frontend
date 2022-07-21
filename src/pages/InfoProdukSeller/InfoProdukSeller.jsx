import React, { useState } from "react";
import "./InfoProdukSeller.css";
import Navbar from "../../components/Navbar/Navbar";
import NumberFormat from "react-number-format";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  publishProduct,
} from "../../redux/action/productAction";
import { getAllCity } from "../../redux/action/cityAction";
import { FiX } from "react-icons/fi";
import { createTranscation } from "../../redux/action/buyerAction";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function InfoProdukPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  // Fungsi get categories
  const { data: productData } = useSelector((state) => state.product);

  const [cityId, setCityId] = useState();

  const {
    // isLoading: loadingProvince,
    data: provinceData,
  } = useSelector((state) => state.province);

  const {
    // isLoading: loadingCity,
    data: cityData,
  } = useSelector((state) => state.city);

  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [findCity, setFindCity] = useState();
  const [idTransaksi, setIdTransaksi] = useState();
  const [transaksi, setTransaksi] = useState();

  //   useEffect(() => {
  //     if (productData.length === 0) {
  //       dispatch(getProductDetail(id));
  //       return;
  //     }
  //     setProvince(productData.seller.province);
  //     setCity(productData.seller.city);
  //   }, [productData]);

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(getProductDetail(id));
      return;
    }
    setProvince(productData.seller.province);
    setCity(productData.seller.city);
    setIdTransaksi(productData.id);
  }, [productData]);

  // useEffect(() => {
  //   dispatch(getAllProvince());
  // }, []);

  useEffect(() => {
    dispatch(getAllCity(province));
  }, [province]);

  useEffect(() => {
    if (cityData.length !== 0) {
      setFindCity(
        cityData.filter((item) => {
          return item.id === city.toString();
        })
      );
    }
  }, [cityData]);

  console.log(idTransaksi, "Ini id");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const GG = parseInt(transaksi);
  //     const data = JSON.stringify({
  //       productId: idTransaksi,
  //       bidPrice: GG,
  //     });

  //     dispatch(createTranscation(data, navigate));
  //     // console.log(data);
  //   };

  const handleToEditProduct = (id) => {
    window.location.href = `/info-produk/edit/${id}`;
  };

  const handlePublish = (e) => {
    e.preventDefault();
    dispatch(publishProduct(productData.id, navigate));
    // console.log("INI HANDLE PUBLISH");
  };

  return (
    <>
      <Navbar />
      {productData.length === 0 ? (
        <p className="mt-3 ms-3 fw-bold">Loading...</p>
      ) : (
        <div
          className="container mt-5 d-flex justify-content-center"
          style={{ maxWidth: "968px" }}
        >
          <div className="content">
            <div className="row mb-1">
              <div className="col-lg-8">
                <Carousel
                  showArrows={true}
                  autoFocus={true}
                  showThumbs={false}
                  style={{ borderRadius: "16px" }}
                >
                  {productData.productImages.map((gambar) => {
                    return (
                      <div>
                        <img src={gambar.url} alt="..." />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <div className="col-lg-4">
                <div
                  className="card"
                  id="produk-card"
                  style={{
                    padding: "16px 24px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                    borderRadius: "16px",
                  }}
                >
                  <div className="card-body-2">
                    <p className="card-title">
                      {productData === "" ? "Loading" : productData.name}
                    </p>
                    <p className="card-text">
                      {productData === ""
                        ? "Loading"
                        : productData.productCategories.map((item) => {
                            // console.log(item.category.name, "ITEM WOY");
                            console.log(
                              productData.productImages[0],
                              "Ini IMAGE 0"
                            );

                            return (
                              <span
                                className="me-2"
                                style={{ color: "gray", fontSize: "8.5pt" }}
                              >
                                {item.category.name}
                              </span>
                            );
                          })}
                    </p>
                    <p className="card-price">
                      <NumberFormat
                        value={
                          productData === "" ? "Loading" : productData.price
                        }
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp "}
                      />
                    </p>
                  </div>
                  <div className="p-0 m-0">
                    {productData.published === true ? (
                      <button
                        className=" w-100"
                        style={{
                          backgroundColor: "#181818",
                          color: "#FFFF",
                          borderRadius: "16px",
                          padding: "10px 20px",
                          fontSize: "14px",
                          border: "none",
                        }}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalHapus"
                      >
                        Hapus Produk
                      </button>
                    ) : (
                      <button
                        className=" w-100"
                        style={{
                          backgroundColor: "#181818",
                          color: "#FFFF",
                          borderRadius: "16px",
                          padding: "10px 20px",
                          fontSize: "14px",
                          border: "none",
                        }}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalPublish"
                      >
                        Terbitkan
                      </button>
                    )}

                    <button
                      className="mt-2 w-100"
                      style={{
                        backgroundColor: "#FFFF",
                        color: "#181818",
                        borderRadius: "16px",
                        padding: "10px 20px",
                        fontSize: "14px",
                        border: "solid 1px #181818",
                      }}
                      type="button"
                      onClick={() => handleToEditProduct(productData.id)}
                    >
                      Edit Produk
                    </button>
                  </div>
                </div>
                <div className='p-0 m-0'>
                <button className=" w-100 mb-3" style={{ backgroundColor: "#181818", color: "#FFFF" , borderRadius: "16px" , padding : "10px 20px" , fontSize:"14px" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Terbitkan</button>
                    <button className=" w-100" style={{ backgroundColor: "#FFFF", color: "#181818" , borderRadius: "16px" , padding : "10px 20px" , fontSize:"14px" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-8">
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                    width: "600px",
                  }}
                  id="desc"
                >
                  <div className="card-body">
                    <h5 className="judul">
                      <b>Deskripsi</b>
                    </h5>
                    <p>
                      {productData === "" ? "Loading" : productData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Hapus */}

          <div className="modal" id="modalHapus">
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ width: "360px", margin: "0 auto" }}
            >
              <div
                className="modal-content"
                style={{ padding: 32, borderRadius: "16px" }}
              >
                <div
                  className="row text-end"
                  style={{ marginInlineStart: "auto" }}
                >
                  <FiX
                    size={22}
                    data-bs-dismiss="modal"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <p
                  className="modal-title my-3 text-center"
                  style={{ fontWeight: 500 }}
                >
                  Ingin Menghapus produk?
                </p>
                <p className="mb-4 text-center" style={{ color: "#8A8A8A" }}>
                  Proses ini tidak akan bisa dikembalikan. Jika ini bukan
                  kesalahan, pilih tombol hapus dibawah
                </p>
                <button
                  type="button"
                  className="btn tawar"
                  data-bs-dismiss="modal"
                  style={{
                    background: "red",
                    color: "white",
                    borderRadius: "16px",
                  }}
                  //   onClick={handleSubmit}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>

          {/* Modal Publish */}

          <div className="modal" id="modalPublish">
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ width: "360px", margin: "0 auto" }}
            >
              <div
                className="modal-content"
                style={{ padding: 32, borderRadius: "16px" }}
              >
                <div
                  className="row text-end"
                  style={{ marginInlineStart: "auto" }}
                >
                  <FiX
                    size={22}
                    data-bs-dismiss="modal"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <p
                  className="modal-title my-3 text-center"
                  style={{ fontWeight: 500 }}
                >
                  Yeay tinggal 1 langkah sebelum produkmu di publish!
                </p>
                <p className="mb-4 text-center" style={{ color: "#8A8A8A" }}>
                  Setelah menekan tombol publish, produkmu akan dapat dilihat
                  oleh seluruh pengunjung NawarinApp. Pastikan datamu sudah
                  benar ya Fellas!
                </p>
                <button
                  type="button"
                  className="btn tawar"
                  data-bs-dismiss="modal"
                  style={{
                    background: "#181818",
                    color: "white",
                    borderRadius: "16px",
                  }}
                  onClick={handlePublish}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoProdukPage;
