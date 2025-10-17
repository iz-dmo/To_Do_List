import { useState } from "react";
import { Priorities,Priorities_Default } from "../constants/priorities";
import { ToDoFormField } from "./ToDoFormField";

export default function ToDoForm({ onCreate }) {
    const [showAllFields, setShowAllFields] = useState(false);
    return (
        <>
            <button onClick={() => setShowAllFields(!showAllFields)}>
                {showAllFields ? "Hide" : "Show"}
            </button>
            <form className="todo-form" onSubmit={handleSubmit}>
                <h3>New To-Do</h3>

                <ToDoFormField showAllFields={showAllFields}/>
                <button type="submit" className="btn-add">
                    Add
                </button>
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
