import React, { useState } from 'react'

function EditToDoForm({editTodo , task}) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
   editTodo(value ,task.id)

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
            placeholder="Update the task?"
            className="todo-input"
            style={{ flex: 1 }}
          />

          <button
            to
            type="submit"
            className=" todo-btn"
            style={{ whiteSpace: "nowrap" }}
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditToDoForm
