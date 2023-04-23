import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown, Button } from "antd";
import { ROUTES } from "../../constants/routes";
import { logoutAction } from "../../redux/actions";
import * as S from "./styles";

function AdminHeader() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <S.Headerwrapper>
      <h3>Logo</h3>
      <div className="nav-link">
        <div className="nav-link-item">
          <Link to={ROUTES.USER.HOME}>
            <h4>Home</h4>
          </Link>
        </div>
        <div className="nav-link-item">
          <Link to={ROUTES.USER.ABOUT}>
            <h4>about</h4>
          </Link>
        </div>
        <div className="nav-link-item">
          <Link to={ROUTES.USER.PRODUCT_LIST}>
            <h4>ProductListPage</h4>
          </Link>
        </div>
      </div>

      <div>
        {userInfo.data.id ? (
          <Dropdown
            menu={{
              items: [
                {
                  key: "dashboard",
                  label: <Link to={ROUTES.ADMIN.DASHBOARD}>Dashboard</Link>,
                  style: {
                    display: userInfo.data.role === "admin" ? "block" : "none",
                  },
                },
                {
                  key: "logout",
                  label: "Logout",
                  onClick: () => dispatch(logoutAction()),
                },
              ],
            }}
          >
            <h3>{userInfo.data.fullName}</h3>
          </Dropdown>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)}>Login</Button>
        )}
      </div>
    </S.Headerwrapper>
  );
}
export default AdminHeader;
