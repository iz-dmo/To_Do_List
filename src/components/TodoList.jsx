
export function TodoList({ todos }) {
    return (
        <section className="list-todo">
            <h5>To-Do's</h5>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <label>
                            <input type="checkbox" name="completed" defaultChecked={todo.completed} />
                            <span>{todo.name} | {todo.description}</span>
                        </label>
                        <p>{todo.deadline} || {todo.priority !== "none" && todo.priority}</p>
                    </li>

                ))}
            </ul>
        </section>
    );
}