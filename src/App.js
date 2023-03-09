import { useState } from "react";
import "./App.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <div className="wrapper">
      <Header
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <div className="container">
        <Sidebar isShowSidebar={isShowSidebar} />
        <Main isShowSidebar={isShowSidebar} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
