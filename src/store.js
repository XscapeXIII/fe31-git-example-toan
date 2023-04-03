import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/reducers/product.reducer";
import todoListReducer from "./redux/reducers/todolist.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import commonReducer from "./redux/reducers/common.reducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    todo: todoListReducer,
    category: categoryReducer,
    common: commonReducer,
  },
});
