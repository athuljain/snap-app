import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [editIndex, setEditIndex] = useState(null); // To track the index of the task being edited

  function addTodo() {
    if (editIndex !== null) {
      // editIndex is not null, it means we are editing an existing task
      const updatedTask = [...task];
      updatedTask[editIndex] = inputTask;
      setTask(updatedTask);
      setEditIndex(null); // Reset editIndex after editing
    } else {
      setTask([...task, inputTask]);
    }
    
  }

  function editTodo(index) {
    setEditIndex(index);
    setInputTask(task[index]);
  }

  function deleteTodo(index) {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  }

  console.log("task",task);
  console.log("editIndex",editIndex);

  return (
    <div>
      <input
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>
      
        {editIndex !== null ? "Edit task" : "Add task"}
      </button>
      <br />
      <ul>
        {task.map((data, index) => (
          <div key={index}>
            <li>
              {data}
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
