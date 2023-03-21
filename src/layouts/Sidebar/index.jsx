import { useLocation } from "react-router-dom";
import * as S from "./styles";

import { ROUTES } from "../../constants/routes";

const SIDEBAR_ITEMS = [
  {
    label: "Home",
    path: ROUTES.USER.HOME,
  },
  {
    label: "About",
    path: ROUTES.USER.ABOUT,
  },
  {
    label: "Login",
    path: ROUTES.LOGIN,
  },
  {
    label: "Register",
    path: ROUTES.REGISTER,
  },
];

function Sidebar(props) {
  const { isShowSidebar } = props;

  const { pathname } = useLocation();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          to={item.path}
          active={pathname === item.path}
        >
          {item.label}
        </S.SidebarItem>
      );
    });
  };

  return (
    <S.SidebarWrapper isShow={isShowSidebar}>
      {renderSidebarItems()}
    </S.SidebarWrapper>
  );
}
export default Sidebar;
