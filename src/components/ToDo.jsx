import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../components/styles.css";

function ToDo({ toggleCompleted,deleteToDo, editTodo , task } ) {
  return (
    <div className="Todo">
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
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)} className="text-primary" />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} className="text-danger" />
      </div>
    </div>
  );
}
export default ToDo;
