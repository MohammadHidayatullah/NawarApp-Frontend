/** @format */

import axios from "axios";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router";
import {
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  CREATE_PRODUCT,
  DRAFT_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_USER,
  GET_PRODUCT_BY_USER_SOLD,
  GET_PRODUCT_BY_USER_WISHLIST,
  DELETE_PRODUCT_BY_USER_WISHLIST,
  GET_PRODUCT_ID,
  PUBLISH_PRODUCT,
} from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

let token = localStorage.getItem("token");

//====================== React Toastify =====================
const notify = () =>
  toast.success("Produk berhasil di terbitkan", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notifyDraft = () =>
  toast.success("Produk berhasil dimasukkan ke draft", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notifyEdit = () =>
  toast.success("Perubahan Produk berhasil disimpan", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notifyDeleteWishlist = () =>
  toast.success("Wishlist berhasil dihapus", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// get all product from database
export const getProduct = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT}_LOADING` });

    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/products",
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT}_FULFILLED`,
          payload: response.data.list.data,
        });
        console.log(response.data.list.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT}_ERROR`,
          error: error.message,
        });
      });
  };
};

// get product filter by category from database
export const getProductByCategory = (data) => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_CATEGORY}_LOADING` });
    const baseUrl = "https://nawar-api.herokuapp.com/api/v1/products/filter/";
    let url = baseUrl + data;
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_CATEGORY}_FULFILLED`,
          payload: response.data.list.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_CATEGORY}_ERROR`,
          error: error.message,
        });
      });
  };
};

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

// delete product by user wishlist
export const deleteProductByUserWishlist = (id, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${DELETE_PRODUCT_BY_USER_WISHLIST}_LOADING` });

    axios({
      method: "DELETE",
      url: `https://nawar-api.herokuapp.com/api/v1/wishlist/delete/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        dispatch({
          type: `${DELETE_PRODUCT_BY_USER_WISHLIST}_FULFILLED`,
        });
        // dispatch(getProduct());
        notifyDeleteWishlist();
        

        // if (res.status === 200) {
        //   navigate("/dashboard");
        // }
      })
      .catch((error) => {
        dispatch({
          type: `${DELETE_PRODUCT_BY_USER_WISHLIST}_ERROR`,
          error: error.message,
        });
      });
  };
};

// get product filter by user from database
export const getProductByUser = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_USER}_LOADING` });
    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/products/user",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER}_FULFILLED`,
          payload: response.data.list.data,
        });
        console.log(response.data.list.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER}_ERROR`,
          error: error.message,
        });
      });
  };
};

// get product filter by user filter by sold from database
export const getProductByUserSold = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_USER_SOLD}_LOADING` });
    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/products/user/sold",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER_SOLD}_FULFILLED`,
          payload: response.data.list.data,
        });
        console.log(response.data.list.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER_SOLD}_ERROR`,
          error: error.message,
        });
      });
  };
};

// create product to database
export const createProduct = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_PRODUCT}_LOADING` });

    axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/products/create",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: `${CREATE_PRODUCT}_FULFILLED`,
          // // payload: response.data,
        });
        // dispatch(navigate("/daftar-jual"));
        if (res.status === 201) {
          navigate("/dashboard");
          notify();
        }
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_PRODUCT}_ERROR`,
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

// DRAFT product
export const draftProduct = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${DRAFT_PRODUCT}_LOADING` });

    axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/products/draft",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: `${DRAFT_PRODUCT}_FULFILLED`,
          // // payload: response.data,
        });
        // dispatch(navigate("/daftar-jual"));
        if (res.status === 201) {
          navigate("/dashboard");
          notifyDraft();
        }
      })
      .catch((error) => {
        dispatch({
          type: `${DRAFT_PRODUCT}_ERROR`,
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

export const editProduct = (id, datas, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${EDIT_PRODUCT}_LOADING` });

    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/products/${id}`,
      data: datas,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({
          type: `${EDIT_PRODUCT}_FULFILLED`,
          // payload: response.data,
        });
        // dispatch(getProduct());
        if (res.status === 200) {
          navigate("/dashboard");
          notifyEdit();
        }
      })
      .catch((error) => {
        dispatch({
          type: `${EDIT_PRODUCT}_ERROR`,
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

export const getProductDetail = (id) => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_ID}_LOADING` });

    axios({
      method: "GET",
      url: `https://nawar-api.herokuapp.com/api/v1/products/${id}`,
    })
      .then((response) => {
        console.log(response.data.data, "ini produk ACTION");
        dispatch({
          type: `${GET_PRODUCT_ID}_FULFILLED`,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_ID}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: `${DELETE_PRODUCT}_LOADING` });

    axios({
      method: "DELETE",
      url: `https://nawar-api.herokuapp.com/api/v1/products/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        dispatch({
          type: `${DELETE_PRODUCT}_FULFILLED`,
          // payload: response.data,
        });
        dispatch(getProduct());
      })
      .catch((error) => {
        dispatch({
          type: `${DELETE_PRODUCT}_ERROR`,
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

export const publishProduct = (id, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${PUBLISH_PRODUCT}_LOADING` });

    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/products/publish/${id}`,
      // data: datas,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({
          type: `${PUBLISH_PRODUCT}_FULFILLED`,
          // payload: response.data,
        });
        // dispatch(getProduct());
        if (res.status === 200) {
          navigate("/dashboard");
          notify();
        }
      })
      .catch((error) => {
        dispatch({
          type: `${PUBLISH_PRODUCT}_ERROR`,
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
