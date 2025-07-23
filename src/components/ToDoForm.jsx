import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles.css";

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };

  return (
    <div className="container mt-5">
      <div className=" TodoForm">
        <form
          className="todoform d-flex"
          onSubmit={handleSubmit}
          style={{ gap: "10px", alignItems: "center" }}
        >
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="What is the Task Today?"
            className="todo-input"
            style={{ flex: 1 }}
          /> 

          <button
            to
            type="submit"
            className=" todo-btn"
            style={{ whiteSpace: "nowrap" }}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default ToDoForm;

 