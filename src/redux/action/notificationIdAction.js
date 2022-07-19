import axios from "axios";
import { GET_NOTIFICATION_SELLER_BY_ID } from "../types";

let token = localStorage.getItem("token");

// get notificatiionSeller by id from database
export const getNotificationSellerById = (id) => {
    return (dispatch) => {
        dispatch({ type: `${GET_NOTIFICATION_SELLER_BY_ID}_LOADING` });
        axios({
        method: "GET",
        url: `https://nawar-api.herokuapp.com/api/v1/notifications/read/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            dispatch({
            type: `${GET_NOTIFICATION_SELLER_BY_ID}_FULFILLED`,
            payload: response.data.data,
            });
            console.log(response.data.data);
        })
        .catch((error) => {
            dispatch({
            type: `${GET_NOTIFICATION_SELLER_BY_ID}_ERROR`,
            error: error.message,
            });
        });
    };

}
