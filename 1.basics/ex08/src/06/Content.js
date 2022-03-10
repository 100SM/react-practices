import React, { Fragment } from "react";
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";

function content() {
  let today = Clock01;
  return (
    <Fragment>
      <div>{`JSX Tutorials - 특징3: JSX 표현식 표기법({js expression})과 문제점`}</div>
      <Clock01 />
      <Clock02 />
    </Fragment>
  );
}

export default content;
