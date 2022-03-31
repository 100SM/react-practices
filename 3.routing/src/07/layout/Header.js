import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/layout/Header.scss";

export default function Header() {
  return (
    <header>
      <h1>
        <NavLink to={"/"}>Header</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to={"/user/login"}>로그인</NavLink>
        </li>
        <li>
          <NavLink to={"/user/settings"}>회원정보수정</NavLink>
        </li>
        <li>
          <NavLink to={"/user/join"}>회원가입</NavLink>
        </li>
      </ul>
    </header>
  );
}
