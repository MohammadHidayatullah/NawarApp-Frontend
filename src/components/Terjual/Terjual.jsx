/** @format */

import React from "react";
import { useEffect } from "react";
import NumberFormat from "react-number-format";
import produk from "../../assets/img/produk.jpg";
import TerjualNotFound from "../TerjualNotFound/TerjualNotFound";
import AOS from "aos";
import "aos/dist/aos.css";

function Terjual({ loading3, data3 }) {
  console.log("data3", data3);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='row' data-aos='fade-up'>
      {loading3
        ? "Loading ... ..."
        : data3?.map((item) => (
            <section className='card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2'>
              <div
                className='card'
                style={{
                  padding: "8px",
                  width: "100%",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                }}>
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
                <div className='card-body'>
                  <p className='card-title'>{item.name}</p>
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
              </div>
            </section>
          ))}
    </div>
  );
}

export default Terjual;
