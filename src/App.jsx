import { useState } from "react";
import toDoLogo from "/images/to-do-list-icon.png";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const Todos_default = [
    {
      id: "1",
      name: "Buy Car",
      description: "The White one",
      deadline: "2025-02-09",
      priority: "high",
      completed: false
    },
    {
      id: "2",
      name: "Buy Car",
      description: "The Blue one",
      deadline: "2025-02-09",
      priority: "low",
      completed: true
    },
    {
      id: "3",
      name: "Buy Car",
      description: "The Black one",
      deadline: "2025-02-09",
      priority: "none",
      completed: false
    },
    {
      id: "4",
      name: "Buy Car",
      description: "The Green one",
      deadline: "2025-02-09",
      priority: "medium",
      completed: true
    },
  ];


  const [todos, setTodos] = useState([]);
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={toDoLogo} className="logo" alt="To-Do List logo" />
        <h2>To-Do App</h2>
      </header>

      <ToDoForm onCreate={handleCreate} />
      {/* {JSON.stringify(todos)} */}
      <TodoList todos={todos} onUpdate={handleUpdate} />
    </div>
  );

  function handleCreate(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },
    ]);
  }

  function handleUpdate(id, newTodo) {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? newTodo : todo)));
  }
}

export default App;