import { useState } from "react";
import toDoLogo from "/images/to-do-list-icon.png";
import "./App.css";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [todos,setTodos] = useState([]);
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={toDoLogo} className="logo" alt="To-Do List logo" />
        <h2>To-Do App</h2>
      </header>

      <ToDoForm onCreate={handleCreate}/>
      {JSON.stringify(todos)}
    </div>
  );

  function handleCreate(newTodo){
    setTodos((prevTodos) => [
      ...prevTodos,
      {id:`${prevTodos.length+1}`,...newTodo},
    ]);
  }
}

export default App;