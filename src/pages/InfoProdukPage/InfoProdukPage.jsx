import React, { useState } from "react";
import "./InfoProdukPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Produk from "../../assets/img/produk.jpg";
import Profile from "../../img/profile.jpg";
import Arrow from "../../assets/icon/panah.png";
import Panah from "../../assets/icon/panah-before.png";
import NumberFormat from "react-number-format";
import User from "../../assets/icon/infouser.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/action/productAction";
import productReducer from "../../redux/reducer/productReducer";
import { getProfile } from "../../redux/action/profileAction";
import { getAllProvince } from "../../redux/action/provinceAction";
import { getAllCity } from "../../redux/action/cityAction";
import ModalBuyer from "../../components/ModalBuyer/ModalBuyer";
import { FiX } from "react-icons/fi";
import { createTranscation } from "../../redux/action/buyerAction";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createWishlist } from "../../redux/action/productWishlistAction";

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

  //   console.log(cityData.cityId.name);

  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [findCity, setFindCity] = useState();
  const [idTransaksi, setIdTransaksi] = useState();
  const [transaksi, setTransaksi] = useState();

  // useEffect(() => {
  //   if (productData.length === 0) {
  //     dispatch(getProductDetail(id));
  //     return;
  //   }
  //   setProvince(productData.seller.province);
  //   setCity(productData.seller.city);
  // }, [productData]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const GG = parseInt(transaksi);
    const data = JSON.stringify({
      productId: idTransaksi,
      bidPrice: GG,
    });

    dispatch(createTranscation(data, navigate));
    // console.log(data);
  };

  const handleWishlist = () => {
    const data = JSON.stringify({
      productId: idTransaksi,
    });

    dispatch(createWishlist(data));
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
                    <p
                      className="card-text"
                      style={{ color: "gray", fontSize: "8.5pt" }}
                    >
                      Size {productData === "" ? "Loading" : productData.size}
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
                      data-bs-target="#modalBuyer"
                    >
                      Saya Tertarik dan Ingin Nego
                    </button>
                    <button
                      className=" w-100 mt-2"
                      style={{
                        backgroundColor: "#FFFF",
                        color: "#181818",
                        borderRadius: "16px",
                        padding: "10px 20px",
                        fontSize: "14px",
                        border: "solid 1px #181818",
                      }}
                      onClick={handleWishlist}
                      type="button"
                    >
                      Wishlist
                    </button>
                  </div>
                </div>
                <div
                  className="card mt-3"
                  style={{
                    borderRadius: "16px",
                    padding: "16px 24px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="row">
                    <div className="d-flex ps-0 pe-0">
                      <img
                        className="mx-3"
                        style={{
                          width: "48px",
                          borderRadius: "12px",
                          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.05)",
                          borderRadius: "12px",
                        }}
                        src={productData.seller.avatar}
                        alt="produk"
                      />
                      <div className="text d-flex flex-column">
                        <p className="mb-2" style={{ margin: "0" }}>
                          {productData.seller.name}
                        </p>
                        <p className="p-0 m-0">
                          {findCity === undefined
                            ? "Loading"
                            : findCity[0].name}
                        </p>
                      </div>
                    </div>
                    <div className=" ps-0"></div>
                  </div>
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
          {/* <ModalBuyer /> */}
          <div className="modal" id="modalBuyer">
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
                <p className="modal-title my-3" style={{ fontWeight: 500 }}>
                  Masukkan harga tawarmu
                </p>
                <p style={{ color: "#8A8A8A" }}>
                  Harga tawaranmu akan diketahui penjual, jika penjual cocok
                  kamu akan segera dihubungi penjual.
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
                        src={productData?.productImages[0]?.url}
                        alt="produk"
                      />

                      <div className="text d-flex flex-column">
                        <p className="mb-2" style={{ margin: "0" }}>
                          {productData.name}
                        </p>
                        <p className="p-0 m-0">
                          <NumberFormat
                            value={productData.price}
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
                    value={transaksi}
                    onChange={(e) => {
                      setTransaksi(e.target.value);
                    }}
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
                  onClick={handleSubmit}
                >
                  Kirim
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
