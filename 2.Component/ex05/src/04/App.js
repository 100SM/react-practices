import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const date = new Date();

  const [hours, setHours] = useState(("0" + (date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12 : date.getHours())).slice(-2));
  const [minutes, setMinutes] = useState(("0" + date.getMinutes()).slice(-2));
  const [seconds, setSeconds] = useState(("0" + date.getSeconds()).slice(-2));

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours(("0" + (date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12 : date.getHours())).slice(-2));
      setMinutes(("0" + date.getMinutes()).slice(-2));
      setSeconds(("0" + date.getSeconds()).slice(-2));
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);

  // const date = new Date();

  // const [hours, setHours] = useState(("0" + (date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12 : date.getHours())).slice(-2));
  // const [minutes, setMinutes] = useState(("0" + date.getMinutes()).slice(-2));
  // const [seconds, setSeconds] = useState(("0" + date.getSeconds()).slice(-2));

  return (
    <Clock
      message={"ex05: useEffect Hook example"}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}
