import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

// import { Button } from "antd";

function Header(props) {
  const { setIsShowSidebar, isShowSidebar } = props;

  const navigate = useNavigate();
  const handleLogOut = () => {
    // window.location.href = "/login";
    navigate("/login");
  };

  return (
    <S.Headerwrapper>
      <S.Buttonsidebar
        type="primary"
        width="75px"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        Menu
      </S.Buttonsidebar>
      <a href="trang-home.html">
        <S.Title>Logo</S.Title>
      </a>
      <div className="nav-link">
        <div className="nav-link-item">
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </div>
        <div className="nav-link-item">
          <Link to="/about">
            <h4>about</h4>
          </Link>
        </div>
      </div>
      <div>
        <button onClick={() => handleLogOut()}>Log Out</button>
      </div>
    </S.Headerwrapper>
  );
}
export default Header;
