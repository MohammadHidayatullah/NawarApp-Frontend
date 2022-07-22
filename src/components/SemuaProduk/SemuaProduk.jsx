/** @format */

import React from "react";
import { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import NumberFormat from "react-number-format";
import produk from "../../assets/img/produk.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/action/productAction";
import { useDispatch } from "react-redux";

function SemuaProduk({ loading, data }) {
  const dispatch = useDispatch();
  // console.log("data", data);
  // console.log("token", localStorage.getItem("token"));
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleToEdit = (id) => {
    window.location.href = `/info-produk-seller/${id}`;
  };

  return (
    <>
      <div className='row' data-aos='fade-up'>
        <div className='card-tambah-produk col-lg-4 col-md-6 col-sm-6 mt-2'>
          <Link to='/dashboard/tambah-produk'>
            <div
              className='card d-flex justify-content-center align-items-center'
              style={{ padding: "8px", width: "100%", height: "100%" }}>
              <div className='content d-flex '>
                <FiPlus
                  className='plus text-center mb-2'
                  size={20}
                  style={{ color: "#8A8A8A" }}
                />
                <p className='text-center' style={{ color: "#8A8A8A" }}>
                  Tambah Produk
                </p>
              </div>
            </div>
          </Link>
        </div>
        {loading
          ? "Loading"
          : data?.map((item) => (
              <section className='card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2'>
                <div
                  className='card'
                  style={{
                    padding: "8px",
                    width: "100%",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                  }}
                  onClick={() => handleToEdit(item.id)}
                  >
                  {item.productImages.length > 0 ? (
                    <div
                      className='img-product'
                      style={{
                        height: "100px",
                      }}>
                      <img
                        src={item.productImages[0].url}
                        style={{ objectFit: "contain", height: "100px" }}
                        className='card-img-top'
                        alt='...'
                      />
                    </div>
                  ) : (
                    <div
                      className='img-product d-flex justify-content-center align-items-center'
                      style={{ height: "100px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "red",
                        }}>
                        Gambar tidak tersedia
                      </span>
                    </div>
                  )}
                  <div className='card-body p-0'>
                    <p
                      className='card-title m-0'
                      style={{
                        fontWeight: "400",
                        padding: "8px 0 4px 0",
                      }}>
                      {item.name}
                    </p>
                    <p
                      className='card-text m-0'
                      style={{
                        paddingBottom: "8px",
                        fontSize: "10px",
                        color: "#8A8A8A",
                      }}>
                      {item.productCategories.map(
                        (a, index) =>
                          `${a.category.name}` +
                          (index !== item.productCategories.length - 1
                            ? ", "
                            : "")
                      )}
                    </p>
                    {item.published === true ? (
                      <p
                        style={{
                          fontWeight: "400",
                          padding: "8px 0 4px 0",
                          color: "green",
                        }}>
                        produk telah diterbitkan
                        {/* {console.log("item", item.published)} */}
                      </p>
                    ) : (
                      <p
                        style={{
                          fontWeight: "400",
                          padding: "8px 0 4px 0",
                          color: "red",
                        }}>
                        produk belum diterbitkan
                        {/* {console.log("item", item.published)} */}
                      </p>
                    )}
                    <p className='card-price'>
                      <NumberFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp "}
                      />
                    </p>
                  </div>
                  {/* <div className='button-response'>
                    <button
                      className='w-50'
                      type='button'
                      onClick={() => handleToEdit(item.id)}
                      style={{
                        backgroundColor: "#F1F0F0",
                        color: "#181818",
                        borderRadius: "16px",
                        padding: "5px 10px",
                        fontSize: "14px",
                      }}>
                      Edit
                    </button>
                    <button
                      className='w-50'
                      type='button'
                      onClick={() => dispatch(deleteProduct(item.id))}
                      style={{
                        backgroundColor: "#181818",
                        color: "#FFFF",
                        borderRadius: "16px",
                        padding: "5px 10px",
                        fontSize: "14px",
                      }}>
                      Hapus
                    </button>
                  </div> */}
                </div>
              </section>
            ))}
      </div>
    </>
  );
}

export default SemuaProduk;
