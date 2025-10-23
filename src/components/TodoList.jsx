import { ToDoListItem } from "./ToDoListItem";
export function TodoList({ todos,onUpdate,onDelete }) {
    return (
        <section className="list-todo">
            <h5>To-Do's</h5>
            <ul>
                {todos.map((todo) => 
                (
                    <ToDoListItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>

                ))}
            </ul>
        </section>
    );
}