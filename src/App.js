import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDtail from "./page/ProductDtail";
import Navbar from "./component/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

//1/전체상품페이지, 로그인 , 상품상세페이지
//1-1 navigarion bar /
//2/전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르먀ㅕㄴ 로그인 페이지가 나온다.
//4.상품디테일을 눌렀으나 ,  로그인이 안되있을 경우 로그인 페이지가 먼저 나온다.
//5.로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6.로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7.로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. , 다시 로그인 페이지가 보인다
//8.로그인을 하면 로그아웃이 보이고 로그 아웃을 하면 로그인이 보인다.
//9.상품을 검색 할 수 있다.
function App() {
  const [authentication, setAuthentication] = useState(false); //true면 로그인 , false면 로그인이 안됨
  return (
    <div>
      <Navbar
        authentication={authentication}
        setAuthentication={setAuthentication}
      />
      {/* 아래의 내용은 바뀌지만 Navbar는 바뀌지 않는다 */}
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthentication={setAuthentication} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authentication={authentication} />}
        />
      </Routes>
    </div>
  );
}

export default App;
