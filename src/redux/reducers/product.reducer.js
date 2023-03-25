import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productDetail: {},
};

const productReducer = createReducer(initialState, {
  GET_PRODUCT_LIST: (state, action) => {
    //get list
    return {
      ...state,
      productList: action.payload,
    };
  },
  GET_PRODUCT_DETAIL: (state, action) => {
    //get detail
    return {
      ...state,
      //productList
    };
  },
});

export default productReducer;
