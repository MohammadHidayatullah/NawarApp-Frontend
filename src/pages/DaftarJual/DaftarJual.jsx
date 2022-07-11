/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./DaftarJual.css";
import Footer from "../../components/Footer/Footer";
import SemuaProduk from "../../components/SemuaProduk/SemuaProduk";
import DiminatiNotFound from "../../components/DiminatiNotFound/DiminatiNotFound";
import TerjualNotFound from "../../components/TerjualNotFound/TerjualNotFound";
import Diminati from "../../components/Diminati/Diminati";
import Terjual from "../../components/Terjual/Terjual";
import DaftarJualHeader from "../../components/DaftarJualHeader/DaftarJualHeader";
import SidebarDaftarJual from "../../components/SidebarDaftarJual/SidebarDaftarJual";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  getProductByUser,
  getProductByUserSold,
  getProductByUserWishlist,
} from "../../redux/action/productAction";

function DaftarJual() {
  const [button, setButton] = useState("");
  const dispatch = useDispatch();

  const { isLoading: loadingProduct, data: productData } = useSelector(
    (state) => state.product
  );
  // const testData = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(getProductByUser());
  // }, [dispatch]);

  // console.log("productData", testData, "data");
  console.log("productData", productData, "data");

  const handleData = (button) => {
    setButton(button);
    if (button === "1") {
      dispatch(getProductByUser());
    }
    if (button === "2") {
      dispatch(getProductByUserWishlist());
    } else {
      dispatch(getProductByUserSold());
    }
  };

  console.log("data", button);
  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <DaftarJualHeader />
        <div className='row'>
          <SidebarDaftarJual handleData={handleData} />
          <div className='col-lg-9'>
            {button === "1" ? (
              <SemuaProduk loading={loadingProduct} data={productData} />
            ) : button === "2" ? (
              <>
                {productData.length === 0 ? (
                  <DiminatiNotFound />
                ) : (
                  <Diminati loading={loadingProduct} data={productData} />
                )}
              </>
            ) : (
              <>
                {productData.length === 0 ? (
                  <TerjualNotFound />
                ) : (
                  <Terjual loading3={loadingProduct} data3={productData} />
                )}
              </>
            )}
            {/* <DiminatiNotFound /> */}
            {/* <TerjualNotFound /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DaftarJual;
