/** @format */

import React from "react";
import NumberFormat from "react-number-format";
import produk from "../../assets/img/produk.jpg";

function Diminati({ loading, data }) {
  return (
    <div className='row'>
      {loading
        ? "Loading"
        : data?.map((item) => (
            <section className='card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2'>
              <div className='card'>
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

export default Diminati;
