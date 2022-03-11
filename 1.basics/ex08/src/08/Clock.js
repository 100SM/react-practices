import React from "react";

const Clock = () => {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초

  const html =
    "<span>" +
    ("0" + (hours > 12 ? hours - 12 : hours)).slice(-2) +
    " : " +
    ("0" + minutes).slice(-2) +
    " : " +
    ("0" + seconds).slice(-2) +
    " " +
    (hours > 12 ? "PM" : "AM") +
    "</span>";

  return (
    /**
     * comment01: Component 안이기 때문에 javascript 구문 가능
     */
    <div
      /**
       * comment02: 여기서도 다중행 주석 가능, 하지만 비추
       */
      className="clock"
      title="시계"
    >
      {("0" + (hours > 12 ? hours - 12 : hours)).slice(-2)}
      {" : "}
      {/**
       * comment03: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 함 -> 추천
       */}
      {("0" + minutes).slice(-2)}
      {/**
       * JSX는 HTML이 아니다 !!! <!-- --> 주석은 사용 불가
       */}
      {" : "}
      {("0" + seconds).slice(-2)} {hours > 12 ? "PM" : "AM"}
      // comment04: JSX 안에서 이 주석을 사용하면 화면에 그대로 출력됨
    </div>
  );
};

export default Clock;
