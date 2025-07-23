import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../components/styles.css";

function ToDo({ toggleCompleted,deleteToDo, editTodo , task } ) {

  const [isEditing , setIsEditing] = useState(false);
  const [editText , setEditText] = useState(task.task);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(editText, task.id);
    setIsEditing(false);
  }
    return (
    <div className="Todo">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="Todo-edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="Todo-edit-input"
          />
          <button type="submit" className="Todo-edit-btn save">Save</button>
          <button
            type="button"
            className="Todo-edit-btn cancel"
            onClick={() => {
              setIsEditing(false);
              setEditText(task.task); // Reset text if cancelled
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <p
            onClick={() => toggleCompleted(task.id)}
            className={`${
              task.completed ? "text-decoration-line-through text-muted" : ""
            } m-0`}
            style={{ cursor: "pointer", flex: 1 }}
          >
            {task.task}
          </p>
          <div className="d-flex gap-3" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => setIsEditing(true)} className="text-primary" />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} className="text-danger" />
          </div>
        </>
      )}
    </div>
  );
}
export default ToDo;
