import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

import * as S from "./styles";

import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  // const role = "user";
  // 1 component chỉ return lại JSX (Không return về OBJ function hay gì khác) nên không dùng hook usenavigate đc nên dùng component navigate
  // if (role !== "admin") return <Navigate to={ROUTES.USER.HOME} />;

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
