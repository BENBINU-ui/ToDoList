import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import "../components/styles.css";
import EditToDoForm from "./EditToDoForm";

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
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

  const editTodo = (id) =>
  {
        setTodos(todos.map(todo => todo.id === id ? {...todo , isEditing : !todo.isEditing} : todo))
  }

  const editTask = (task,id) =>
  {
    setTodos(todos.map(todo => todo.id === id ? {...todo , task , isEditing : !todo.isEditing} : todo))
  }

  return (
    <div className="TodoWrapper">
      <h1 className="text-center">Get Things Done? </h1>

      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
            todo.isEditing ?  (
                <EditToDoForm editTodo={editTask} task={todo}/> 
            ) : (
                <ToDo task={todo} key={index} toggleCompleted={toggleCompleted} deleteToDo = {deleteToDo} editTodo={editTodo} />
            )
          
        );
      })}
    </div>
  );
}

export default ToDoWrapper;
