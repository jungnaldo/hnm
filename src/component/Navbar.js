import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authentication, setAuthentication }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속 가능성",
  ];
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      //이벤트 값(입력한 값)을 읽어와서
      navigate(`/?q=${keyword}`);
      //URL을 바꿔준다
    }
  };
  return (
    <div>
      <div>
        {authentication ? (
          <div
            className="login-button"
            onClick={() => {
              setAuthentication(false);
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        ) : (
          <div className="login-button" onClick={gotoLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section" onClick={() => navigate("/")}>
        <img
          width={100}
          src="data:image/png;base64,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"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="search"
            type="text"
            placeholder="제품검색"
            onKeyUp={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
