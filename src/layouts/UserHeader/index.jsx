import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import * as S from "./styles";

function AdminHeader() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    // window.location.href = "/login";
    navigate("/login");
  };

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
      </div>
      <div>
        <button onClick={() => navigate(ROUTES.ADMIN.DASHBOARD)}>
          Dashboard
        </button>
        <button onClick={() => handleLogOut()}>Log Out</button>
      </div>
    </S.Headerwrapper>
  );
}
export default AdminHeader;