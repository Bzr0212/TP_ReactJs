import { useState } from "react";

export default function GoalForm({ onAddGoal }) {
    const [enterdValue, setEnterdValue] = useState("");

    function sumbitHandler(e) {
        e.preventDefault();
        onAddGoal(enterdValue);
        setEnterdValue("");
    }
    return (
        <form onSubmit = {sumbitHandler} className= "goal-form">
            <input
                type = "text"
                placeholder="Ajouter un objectif.."
                value = {enterdValue}
                onChange = {(e) => setEnterdValue(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

