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

  function deleteGoalHandler(id) {
  setGoals((prev) => prev.filter((g) => g.id !== id));
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

        <div className="file-row">
          <label className="file-button">
            Changer le fond
            <input
              type="file"
              accept="image/*"
              onChange={backgroundHandler}
              hidden
            />
          </label>
        </div>
        <GoalForm onAddGoal={addGoalHandler} />
        <GoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
      </div>
    </div>
  );
}

