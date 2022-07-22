/** @format */

import axios from "axios";
import Swal from "sweetalert2";
import { ADD_WISHLIST, GET_PRODUCT_BY_USER_WISHLIST } from "../types";

let token = localStorage.getItem("token");

// get product by user wishlist
export const getProductByUserWishlist = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_USER_WISHLIST}_LOADING` });
    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/wishlist",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER_WISHLIST}_FULFILLED`,
          payload: response.data.data,
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER_WISHLIST}_ERROR`,
          error: error.message,
        });
      });
  };
};

// create wishlist to database
export const createWishlist = (data) => {
  return (dispatch) => {
    dispatch({ type: `${ADD_WISHLIST}_LOADING` });

    axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/wishlist/add",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({
          type: `${ADD_WISHLIST}_FULFILLED`,
          // // payload: response.data,
        });
        Swal.fire(
          "Sukses!",
          "Produk berhasil ditambahkan ke Wishlist! Kamu bisa lihat daftarnya di dashboard ya!",
          "success"
        );
      })
      .catch((error) => {
        dispatch({
          type: `${ADD_WISHLIST}_ERROR`,
          error: error.message,
        });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
};
