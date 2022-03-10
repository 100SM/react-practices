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
     * HTML 태그를 동적으로 생성하여 JSX Element의 특정 속성(dangerouslySetInnerHTML)
     * 으로 렌더링하는 작업은 금지하고 있지만,
     * XSS(Cross-Site Scripting) 보호기능을 끄고 사용 가능
     */
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Clock;
