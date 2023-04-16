import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import { ThemeProvider } from "styled-components";

import "../App.css";

import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import FormLayout from "../layouts/FormLayout";

import Dashboard from "../pages/admin/Dashboard";
import TodoList from "../pages/admin/TodoList";
import ToDoList from "../pages/admin/ToDoList2";
import ToDoDetailPage from "../pages/admin/ToDoDetail";

import { ROUTES } from "../constants/routes";

import HomePage from "../pages/user/Home";
import ProductListPage from "../pages/user/ProductList";
import AboutPage from "../pages/user/About";
import ProductDetailPage from "../pages/user/ProductDetail";

import LoginPage from "../pages/Login";

import { dark, light } from "../themes";

import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.common);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.ADMIN.TODO_LIST} element={<TodoList />} />
            <Route path={ROUTES.ADMIN.TODO_LIST2} element={<ToDoList />} />
            <Route
              path={ROUTES.ADMIN.TODO_DETAIL}
              element={<ToDoDetailPage />}
            />
          </Route>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.USER.HOME} element={<HomePage />} />
            <Route
              path={ROUTES.USER.PRODUCT_LIST}
              element={<ProductListPage />}
            />
            <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
            <Route
              path={ROUTES.USER.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
          </Route>
          <Route element={<FormLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </ThemeProvider>
    </ConfigProvider>
  );
}
export default App;
