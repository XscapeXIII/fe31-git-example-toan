import { useState } from "react";

function Sidebar(props) {
  const { isShowSidebar } = props;
  console.log("🚀 ~ file: Sidebar.jsx:5 ~ Sidebar ~ props:", props);
  return (
    <div className={isShowSidebar ? "sidebar show" : "sidebar"}>Sidebar</div>
  );
}
export default Sidebar;
