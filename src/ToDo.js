import "./styles.css";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState();
  const [style, setStyle] = useState({ textDecoration: "none" });
  const addTask = () => {
    console.log(tasks);
    setTasks([...tasks, { uncompleteTask: input, taskDone: false }]);
  };
  function terminateTask(task) {
    console.log(tasks);
    task.taskDone = !task.taskDone;
    if (task.taskDone) {
      setStyle({ textDecoration: "line-through" });
      console.log(style);
    } else if (!task.taskDone) {
      setStyle({ textDecoration: "none" });
    }
    console.log(tasks);
  }
  return (
    <div className="App">
      <h2>To do list</h2>
      <input
        type="text"
        placeholder="Enter task here..."
        value={input}
        onChange={(x) => {
          setInput(x.target.value);
        }}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li
            className="tasks"
            style={
              task.taskDone
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            onClick={() => {
              terminateTask(task);
            }}
          >
            {task.uncompleteTask}
          </li>
        ))}
      </ul>
    </div>
  );
}
