import React, { useState } from "react";
import styles from "./assets/scss/Card.scss";
import TaskList from "./TaskList";

const Card = ({ title, description, tasks }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.Card}>
      <div
        className={styles.Card__Title}
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {title}
      </div>
      {showDetails ? (
        <div className={styles.Card__Details}>
          {description}
          {/* <TaskList tasks={tasks} /> */}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
