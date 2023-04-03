import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const categoryReducer = createReducer(initialState, {
  GET_PRODUCT_LIST: (state, action) => {
    //get list
    return {
      ...state,
      //productList
    };
  },
});

export default categoryReducer;
