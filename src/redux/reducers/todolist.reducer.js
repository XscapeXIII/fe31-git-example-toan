import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDoList: [],
};

const productReducer = createReducer(initialState, {
  ADD_TO_DO: (state, action) => {
    const newValues = {
      ...action.payload,
      id: uuidv4(),
    };
    const newToDoList = [newValues, ...state.toDoList];
    return {
      ...state,
      productList: newToDoList,
    };
  },
  EDIT_TO_DO: (state, action) => {
    console.log(action.payload);
    const newToDoList = [...state.toDoList];
    const index = newToDoList.findIndex(
      (item) => item.id === action.payload.id
    );
    newToDoList.splice(index, 1, action.payload);
    return {
      ...state,
      productList: newToDoList,
    };
  },
  REMOVE_TO_DO: (state, action) => {
    const newToDoList = [...state.toDoList];
    const index = newToDoList.findIndex(
      (item) => item.id === action.payload.id
    );
    newToDoList.splice(index, 1);
    return {
      ...state,
      productList: newToDoList,
    };
  },
});

export default productReducer;
