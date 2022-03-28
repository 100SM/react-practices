import React, { useEffect, useState } from "react";
import styles from "./assets/css/TaskList.css";
import Task from "./Task";

const TaskList = ({ /*tasks*/ }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch("/api/task", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: null,
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks(json.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => (
          <Task key={task.no} name={task.name} done={task.done} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
