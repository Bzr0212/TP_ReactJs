import { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [background, setBackground] = useState(null);

  function addGoalHandler(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setGoals((prev) => [
      { id: crypto.randomUUID(), text: trimmed },
      ...prev,
    ]);
  }

  function backgroundHandler(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setBackground(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div
      className="app"
      style={{
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card">
        <h1>Objectifs de vie</h1>

        <input
          type="file"
          accept="image/*"
          onChange={backgroundHandler}
        />

        <GoalForm onAddGoal={addGoalHandler} />
        <GoalList goals={goals} />
      </div>
    </div>
  );
}

