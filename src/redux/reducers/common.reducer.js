import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const commonReducer = createReducer(initialState, {
  CHANGE_THEME: (state, action) => {
    //get list
    return {
      ...state,
      theme: action.payload,
    };
  },
});

export default commonReducer;
