
export default function ToDoForm({onCreate}) {
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <h3>New To-Do</h3>

            <input
                type="text"
                name="name"
                placeholder="Name*"
                className="input-text"
                autoComplete="off"
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
                <select defaultValue="none" name="priority" id="priority" className="input-select">
                    <option value="none">None</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <button type="submit" className="btn-add">
                Add
            </button>
        </form>
    );

    function handleSubmit(event) {
        event.preventDefault();
        const { elements } = event.target;
        if (elements.name.value === "") return;

        onCreate(
            {
                name: elements.name.value,
                description: elements.description.value,
                deadline: elements.deadline.value,
                priority: elements.priority.value,
                completed: false
            }
        );
        event.target.reset();
    }

}
