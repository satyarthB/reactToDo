import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const t = event.target.value;
    setTask(t);
  }
  function setChange() {
    setItems((prevItem) => {
      return [...prevItem, task];
    });
    setTask("");
  }

  return (
    <div className="card">
      <h1>To-do list</h1>
      <input
        value={task}
        placeholder="Enter-Task"
        type="text"
        name="naam"
        onChange={handleChange}
      ></input>
      <button onClick={setChange}>Add</button>
      <ul>
        {items.map((todoitem) => (
          <li>{todoitem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
