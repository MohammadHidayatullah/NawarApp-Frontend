/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Footer from "../../components/Footer/Footer";
import CardProduk from "../../components/CardProduk/CardProduk";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  getProductByCategory,
} from "../../redux/action/productAction";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState("null");
  const dispatch = useDispatch();

  const { isLoading: loadingProduct, data: productData } = useSelector(
    (state) => state.product
  );

  const handleData = (data) => {
    setData(data);
    if (data === "all") {
      dispatch(getProduct());
    } else {
      dispatch(getProductByCategory(data));
    }
  };
  console.log("data", data, "data");
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log("productData", productData, "data");

  return (
    <>
      <Navbar />
      <Slider />
      <CategoryFilter handleData={handleData} />
      <div className='container mt-4'>
        <div className='produk row'>
          {productData.length < 1 ? (
            <div className='col-12'>
              <div className='text-center'>
                <h5>Belum ada produk yang dijual</h5>
              </div>
            </div>
          ) : (
            <CardProduk loading={loadingProduct} data={productData} />
          )}
        </div>
        <div
          style={{
            padding: "0px",
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: "28px",
          }}
          className='button-fixed d-flex justify-content-center align-items-end mt-4'>
          <Link to='/daftar-jual'>
            <button
              type='button'
              className='btn btn-jual'
              style={{
                background: "#181818",
                color: "#fafafa",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "12px",
              }}>
              <FiPlus />
              &nbsp;&nbsp; Jual
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
