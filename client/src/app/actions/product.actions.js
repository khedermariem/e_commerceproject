import {
  PRODUCT_LOADING,
  GET_PRODUCT,
  PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY,
  CREATE_PRODUCT,
} from "../constants/types";
import axios from "axios";

export const getProduct = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  try {
    const res = await axios.get(
      `http://localhost:8000/api/products/${productId}`
    );

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
export const getProduts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  try {
    const res = await axios.get(`http://localhost:8000/api/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};

export const createProduct = (data) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:8000/api/products/`,
      data,
      config
    );

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
export const getProducrByCategory = (categoryId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  try {
    const res = await axios.get(
      `http://localhost:8000/api/products?category=${categoryId}`
    );
    dispatch({
      type: GET_PRODUCTS_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
      dispatch({
          type: PRODUCT_ERROR,
          payload: err,
      });
  }
};
