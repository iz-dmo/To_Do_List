import { Priorities,Priorities_Default } from "../constants/priorities";
export function ToDoListItem({ todo, onUpdate }) {

    function handleCompleted(event) {
        onUpdate(todo.id, { ...todo, completed: event.target.checked });
    }

    return (

        <li key={todo.id}>
            <label>
                <input type="checkbox" name="completed" 
                defaultChecked={todo.completed} 
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
            </p>
        </li>
    );

}