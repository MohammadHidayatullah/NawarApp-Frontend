/** @format */

import React from "react";
import NumberFormat from "react-number-format";
import notFound from "../../assets/img/not-found.svg";
import "./CardProduk.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CardProduk({ data, loading }) {
  console.log("data", data);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleToDetail = (id) => {
    window.location.href = `/info-produk-page/${id}`;
  };

  return (
    <>
      {loading
        ? "Loading"
        : data?.map((item) => (
            <div
              data-aos='zoom-in'
              className='card-produk col-lg-2 col-md-3 col-sm-4 mt-3'>
              <div
                className='card'
                style={{
                  padding: "8px",
                  width: "100%",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => handleToDetail(item.id)}>
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
                  <p className='card-price'>
                    <NumberFormat
                      value={2456981}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp "}
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}

export default CardProduk;
