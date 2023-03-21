import { useNavigate } from "react-router-dom";
import * as S from "./styles";

function AdminHeader(props) {
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
      <div>
        <button onClick={() => handleLogOut()}>Log Out</button>
      </div>
    </S.Headerwrapper>
  );
}
export default AdminHeader;
