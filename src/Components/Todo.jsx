import React, { useRef, useState } from "react";

export default function Todo() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [editIndex, setEditIndex] = useState(null); // To track the index of the task being edited
  const inputRef = useRef(null)
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
    setInputTask(""); // Clear input field after adding task
    inputRef.current.focus(); // Focus on input field after adding task
    
  }

  function editTodo(index) {
    setEditIndex(index);
    setInputTask(task[index]);
    inputRef.current.focus();
  }

  function deleteTodo(index) {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }


  console.log("task",task);
  console.log("editIndex",editIndex);

  return (
    <div>
      <input
       ref={inputRef}
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Enter task"
        onKeyDown={handleKeyDown}
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
