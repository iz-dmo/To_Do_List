import { useState } from "react";
import toDoLogo from "/images/to-do-list-icon.png";
import "./App.css";

function App() {

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={toDoLogo} className="logo" alt="To-Do List logo" />
        <h2>To-Do App</h2>
      </header>

      <form className="todo-form">
        <h3>New To-Do</h3>

        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="input-text"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="input-textarea"
        />
        <div className="form-row">
          <label htmlFor="deadline">Deadline</label>
          <label htmlFor="priority">Priority</label>
        </div>

        <div className="form-row">
          <input
            type="date"
            name="deadline"
            id="deadline"
            className="input-date"
          />
          <select name="priority" id="priority" className="input-select">
            <option value="none">None</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>

        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;