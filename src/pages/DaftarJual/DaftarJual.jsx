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
  const [button, setButton] = useState(1);
  const dispatch = useDispatch();

  const { isLoading: loadingProduct, data: productData } = useSelector(
    (state) => state.product
  );

  const { isLoading: loadingWishlist, data: productWishlist } = useSelector(
    (state) => state.wishlist
  );

  const { isLoading: loadingSold, data: productSold } = useSelector(
    (state) => state.sold
  );
  // const testData = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(getProductByUser());
  // }, [dispatch]);

  // console.log("productData", testData, "data");
  console.log("productData", productData, "data");

  const handleData = (button) => {
    setButton(button);
    if (button === 1) {
      dispatch(getProductByUser());
    } else if (button === 2) {
      dispatch(getProductByUserWishlist());
    } else if (button === 3) {
      dispatch(getProductByUserSold());
    }
  };

  useEffect(() => {
    dispatch(getProductByUserSold());
  }
  , [dispatch]);

  console.log("data", button);
  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <DaftarJualHeader />
        <div className='row'>
          <SidebarDaftarJual handleData={handleData} />
          <div className='col-lg-9'>
            {button === 1 ? (
              <SemuaProduk loading={loadingProduct} data={productData} />
            ) : button === 2 ? (
              <>
                {productWishlist.length === 0 ? (
                  <DiminatiNotFound />
                ) : (
                  <Diminati loading={loadingWishlist} data={productWishlist} />
                )}
              </>
            ) : button === 3 ? (
              <>
                {productSold.length === 0 ? (
                  <TerjualNotFound />
                ) : (
                  <Terjual loading3={loadingSold} data3={productSold} />
                )}
              </>
            ) : null}
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
