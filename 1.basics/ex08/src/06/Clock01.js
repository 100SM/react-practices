import React from "react";

const Clock01 = () => {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일
  let hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours(); // 시
  let minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(); // 분
  let seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds(); // 초
  let ampm = hours >= 12 ? "PM" : "AM"; // AM or PM

  return (
    <div>
      {ampm} {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Clock01;
