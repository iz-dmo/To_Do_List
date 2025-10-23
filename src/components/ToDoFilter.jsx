import { useEffect, useState } from "react";
import { Completed_Filter,Priority_Filter } from "../constants/filter";

export function ToDoFilter({onFilter}){
    const [completed,setCompleted] = useState("all");
    const [priority,setPriority] = useState("all");

    useEffect(() => {
        const filter = {
            completed : Completed_Filter[completed].value,
            priority : Priority_Filter[priority].value
        };
        onFilter(filter);
    },[completed,priority]);
    return (
        <section className="filter-section">
            <h3>Filter</h3>
            <div className="Filter">
                <label htmlFor="completed">Completed</label>
                <select name="" 
                id="completed"
                defaultValue={completed}
                onChange={(event) => setCompleted(event.target.value)}>

                    {Object.entries(Completed_Filter).map(([key,{label}]) => (
                        <option value={key} key={key}>{label}</option>
                    ))}
                </select>

                <label htmlFor="priority">Priority</label>
                <select name="" 
                id="priority"
                defaultValue={priority}
                onChange={(event) => setPriority(event.target.value)}>

                    {Object.entries(Priority_Filter).map(([key,{label}]) => (
                        <option value={key} key={key}>{label}</option>
                    ))}
                </select>
            </div>
            
        </section>
    );
}