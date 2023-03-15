import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { dark, light } from "./themes";

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <div className="wrapper">
        <Header
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
        />
        <div className="container">
          <Sidebar isShowSidebar={isShowSidebar} />
          <Main isShowSidebar={isShowSidebar} />
        </div>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
