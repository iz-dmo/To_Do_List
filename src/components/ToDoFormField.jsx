import { Priorities, Priorities_Default } from "../constants/priorities";

export function ToDoFormField({ todo = {},showAllFields = true }) {
    return (
        <>
            <input
                type="text"
                name="name"
                placeholder="Name*"
                className="input-text"
                autoComplete="off"
                defaultValue={todo.name}
            />
            {showAllFields && (
                <>
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="input-textarea"
                        defaultValue={todo.description}
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
                            defaultValue={todo.deadline}
                        />
                        <select defaultValue={todo.priority ?? Priorities_Default} name="priority" id="priority" className="input-select">
                            {Object.entries(Priorities).map(([key, { label }]) => (
                                <option key={key} value={key}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>


                </>
            )}
        </>
    );
}