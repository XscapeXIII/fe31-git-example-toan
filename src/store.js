import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./redux/reducers/todolist.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import commonReducer from "./redux/reducers/common.reducer";

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
    category: categoryReducer,
    common: commonReducer,
  },
});
