import { useState } from "react";
import { Priorities, Priorities_Default } from "../constants/priorities";
import { ToDoFormField } from "./ToDoFormField";
export function ToDoListItem({ todo, onUpdate }) {

    const [editing, setEditing] = useState(false);

    function handleCompleted(event) {
        onUpdate(todo.id, { ...todo, completed: event.target.checked });
    }

    const viewTemplate =
        (
            <>
                <label>
                    <input type="checkbox" name="completed"
                        data-completed={todo.completed}
                        checked={todo.completed}
                        onChange={handleCompleted}
                    />
                    <span>{todo.name} | {todo.description}</span>
                </label>
                <p>
                    {todo.deadline}
                    {" || "}
                    {todo.priority !== Priorities_Default && (
                        <span style={{ color: Priorities[todo.priority].color }}>
                            {Priorities[todo.priority].label}
                        </span>
                    )}
                    <button onClick={() => setEditing(true)} className="btn-small">🔄️</button>

                </p>
            </>
        );

    const editTemplate =
        (
            <form className="todo-form" onReset={() => setEditing(false)}>
                <ToDoFormField todo={todo} />
                <button type="submit" className="btn-small">🔁</button>
                <button type="reset" className="btn-small">❌</button>
            </form>
        );

    return (

        <li key={todo.id}>

            {editing ? editTemplate : viewTemplate}
        </li>
    );

}