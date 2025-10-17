import { useState } from "react";
import { Priorities,Priorities_Default } from "../constants/priorities";

export default function ToDoForm({ onCreate }) {
    const [showAllFields, setShowAllFields] = useState(false);
    return (
        <>
            <button onClick={() => setShowAllFields(!showAllFields)}>
                {showAllFields ? "Hide" : "Show"}
            </button>
            <form className="todo-form" onSubmit={handleSubmit}>
                <h3>New To-Do</h3>

                <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className="input-text"
                    autoComplete="off"
                />
                {showAllFields && (
                    <>
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
                            <select defaultValue={Priorities_Default} name="priority" id="priority" className="input-select">
                                {Object.entries(Priorities).map(([key, { label }]) => (
                                    <option key={key} value={key}>
                                    {label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn-add">
                            Add
                        </button>

                    </>
                )}
            </form>
        </>
    );

    function handleSubmit(event) {
        event.preventDefault();
        const { elements } = event.target;
        if (elements.name.value === "") return;

        onCreate(
            {
                name: elements.name?.value ?? "",
                description: elements.description?.value ?? "",
                deadline: elements.deadline?.value ?? "",
                priority: elements.priority?.value ?? "none",
                completed: false
            }
        );
        event.target.reset();
    }

}
