import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
// import { QqOutlined, HeartOutlined } from "@ant-design/icons";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import "../App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProductDetailPage from "../pages/ProductDetail";
import LoginPage from "../pages/Login";

import { dark, light } from "../themes";

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [theme, setTheme] = useState("light");
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <div className="wrapper">
          <Header
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
          <div className="container">
            <Sidebar isShowSidebar={isShowSidebar} />
            <S.MainWrapper isFull={!isShowSidebar}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </S.MainWrapper>
          </div>
          {/* <Button
            type="primary"
            shape="circle"
            style={{ fontSize: "120%" }}
            onClick={() => setTheme("light")}
          >
            {<HeartOutlined />}
          </Button>
          <Button
            type="primary"
            shape="circle"
            style={{ fontSize: "120%" }}
            onClick={() => setTheme("dark")}
          >
            {<QqOutlined />}
          </Button> */}
          <Footer />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  );
}
export default App;
