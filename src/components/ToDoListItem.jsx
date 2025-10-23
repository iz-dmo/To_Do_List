import { useState } from "react";
import { Priorities, Priorities_Default } from "../constants/priorities";
import { ToDoFormField } from "./ToDoFormField";
export function ToDoListItem({ todo, onUpdate,onDelete }) {

    const [editing, setEditing] = useState(false);

    function handleCompleted(event) {
        onUpdate(todo.id, { ...todo, completed: event.target.checked });
    }

    function handleEdit(event){
        event.preventDefault();
        const {elements} = event.target;
        if(elements.name.value === "") return;
        onUpdate(todo.id,{
            name : elements.name.value,
            description : elements.description.value,
            deadline : elements.deadline.value,
            priority : elements.priority.value,
            completed : todo.completed
        });

        setEditing(false);
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
                    <button onClick={() => onDelete(todo.id)} className="btn-small">🗑️</button>
                </p>
            </>
        );

    const editTemplate =
        (
            <form className="todo-form" onReset={() => setEditing(false)} onSubmit={handleEdit}>
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