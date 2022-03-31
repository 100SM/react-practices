import React, { useState, useEffect } from "react";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
  const [route, setRoute] = useState("");
  const handlerChange = () => {
    console.log(window.location.hash);
    setRoute(window.location.hash.substring(1));
  };
  useEffect(() => {
    window.addEventListener("hashchange", handlerChange);
    return () => {
      window.removeEventListener("hashchange", handlerChange);
    };
  });
  return (function () {
    switch (route) {
      case "/":
        return <Main />;
      case "/guestbook":
        return <Guestbook />;
      case "/gallery":
        return <Gallery />;
      default:
        return null;
    }
  })();
}
