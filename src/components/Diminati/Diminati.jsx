/** @format */

import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from 'react-redux';
import produk from "../../assets/img/produk.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { deleteProductByUserWishlist } from "../../redux/action/productAction";

function Diminati({ loading, data }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='row' data-aos='fade-up'>
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
                }}>
                {item.product.productImages.length > 0 ? (
                  <div
                    className='img-product'
                    style={{
                      height: "100px",
                    }}>
                    <img
                      src={item.product.productImages[0].url}
                      style={{ objectFit: "contain", height: "100px" }}
                      className='card-img-top'
                      alt='...'
                    />
                  </div>
                ) : (
                  <div
                    className='img-product d-flex justify-content-center align-itemsproduct.-center'
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
                    {item.product.name}
                  </p>
                  <p
                    className='card-text m-0'
                    style={{
                      paddingBottom: "8px",
                      fontSize: "10px",
                      color: "#8A8A8A",
                    }}>
                    {item.product.productCategories.map(
                      (a, index) =>
                        `${a.category.name}` +
                        (index !== item.product.productCategories.length - 1
                          ? ", "
                          : "")
                    )}
                  </p>
                  <p className='card-price'>
                    <NumberFormat
                      value={item.product.price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp "}
                    />
                  </p>
                  <div className='button-aksi d-flex justify-content-end'>
                    {/* <Link to={`/dashboard/edit-produk/${item.id}`}> */}
                      <button className='btn btn-danger'
                        type="button"
                        onClick={() => dispatch(deleteProductByUserWishlist(item.id))}
                        style={{ 
                          backgroundColor: "#000000", 
                          borderColor: "#000000", 
                          color: "#ffffff",
                          width: "100%",
                        }}>
                        Hapus
                      </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </section>
          ))}
    </div>
  );
}

export default Diminati;
