import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import "../components/styles.css";

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false },
    ]);
    console.log(todos);
  };
  useEffect(() => {
    console.log("Todos updated", todos);
  }, [todos]);

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) =>
  {
        setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task } : todo));
  };

  return (
    <div className="TodoWrapper">
      <h1 className="text-center">Get Things Done? </h1>

      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
          <ToDo
            task={todo}
            key={index}
            toggleCompleted={toggleCompleted}
            deleteToDo={deleteToDo}
            editTodo={editTask}
          />
        );
      })}
    </div>
  );
}

export default ToDoWrapper;


