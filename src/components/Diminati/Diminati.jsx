/** @format */

import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import produk from "../../assets/img/produk.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  deleteProductByUserWishlist,
  getProduct,
} from "../../redux/action/productAction";
import { FiX } from "react-icons/fi";

function Diminati({ loading, data }) {
  const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(data, "INI SUBMITTED");
  //   dispatch(deleteProductByUserWishlist(navigate));

  // };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // dispatch(getProduct());
  }, []);

  const [itemID, setItemID] = useState();

  // const navigate = useNavigate();

  // const navHome = () => {
  //   navigate("/");
  // };

  console.log(itemID, "Ini Item ID");

  return (
    <div className="row">
      {loading
        ? "Loading"
        : data?.map((item) => (
            <section className="card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2">
              <div
                className="card"
                style={{
                  padding: "8px",
                  width: "100%",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                }}
              >
                {item.product.productImages.length > 0 ? (
                  <div
                    className="img-product"
                    style={{
                      height: "100px",
                    }}
                  >
                    <img
                      src={item.product.productImages[0].url}
                      style={{ objectFit: "contain", height: "100px" }}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                ) : (
                  <div
                    className="img-product d-flex justify-content-center align-itemsproduct.-center"
                    style={{ height: "100px" }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Gambar tidak tersedia
                    </span>
                  </div>
                )}
                <div className="card-body">
                  <p
                    className="card-title m-0"
                    style={{
                      fontWeight: "400",
                      padding: "8px 0 4px 0",
                    }}
                  >
                    {item.product.name}
                  </p>
                  <p
                    className="card-text m-0"
                    style={{
                      paddingBottom: "8px",
                      fontSize: "10px",
                      color: "#8A8A8A",
                    }}
                  >
                    {item.product.productCategories.map(
                      (a, index) =>
                        `${a.category.name}` +
                        (index !== item.product.productCategories.length - 1
                          ? ", "
                          : "")
                    )}
                  </p>
                  <p className="card-price">
                    <NumberFormat
                      value={item.product.price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp "}
                    />
                  </p>
                  <div className="button-aksi d-flex justify-content-end">
                    {/* <Link to={`/dashboard/edit-produk/${item.id}`}> */}
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => setItemID(item.id)}
                      // onClick={() =>
                      //   dispatch(deleteProductByUserWishlist(item.id))
                      // }
                      style={{
                        backgroundColor: "#000000",
                        borderColor: "#000000",
                        color: "#ffffff",
                        width: "100%",
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#modalHapus"
                    >
                      Hapus
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </section>
          ))}
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
            <div className="row text-end" style={{ marginInlineStart: "auto" }}>
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
              Proses ini tidak akan bisa dikembalikan. Jika ini bukan kesalahan,
              pilih tombol hapus dibawah
            </p>
            <button
              type="button"
              className="btn tawar"
              data-bs-dismiss="modal"
              onClick={() => dispatch(deleteProductByUserWishlist(itemID))}
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
    </div>
  );
}

export default Diminati;
