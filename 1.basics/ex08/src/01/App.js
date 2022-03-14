import React from "react";

const App = function () {
  return (
    <div>
      <h2>App01</h2>
      <p>JSX Tutorials - 특징1: HTML과 차이점</p>
      {/*
        1. 속성은 Camel Case
      */}
      <input type="text" maxLength="10" />
      {/*
        2. Element는 꼭 닫는다.
        오류) <br>, <hr>, <input type="text">, <img src="">
      */}
      <br />
      <hr />
      <img src="https://item.kakaocdn.net/do/c6da697d32943268c295c0417c45356e7154249a3890514a43687a85e6b6cc82" />
      {/*
        3. 속성 이름은 DOM API 기반 (HTML Tag 기반 X)
        <div id="box" class="box" >...</div>
        document.getElementById("box").className = "box";
      */}
      <div id="box" className="box">
        box 입니다.
      </div>
    </div>
  );
};

export default App;