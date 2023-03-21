import { useState } from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";

import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <div className="wrapper">
      <AdminHeader
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <div className="container">
        <Sidebar isShowSidebar={isShowSidebar} />
        <S.MainWrapper isFull={!isShowSidebar}>
          <Outlet />
        </S.MainWrapper>
      </div>
    </div>
  );
}
export default AdminLayout;
