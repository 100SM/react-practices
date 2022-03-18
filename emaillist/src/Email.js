import React from "react";
import styles from "./assets/scss/Email.scss";
import Emaillist from "./Emaillist";

const Email = ({firstName, lastName, email}) => {
  return (
    <li className={styles.Email}>
      <h4>
        {firstName}
        {lastName}
      </h4>
      <br />
      <span>{email}</span>
    </li>
  );
};

export default Email;
