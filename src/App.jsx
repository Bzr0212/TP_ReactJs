import { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import WelcomeModal from "./components/WelcomeModal";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [background, setBackground] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  function addGoalHandler(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const id = Date.now().toString() + Math.random().toString(16).slice(2);
    setGoals((prev) => [{ id, text: trimmed }, ...prev]);
  }

  function backgroundHandler(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setBackground(reader.result);
      setShowWelcome(false);
    };
    reader.readAsDataURL(file);
  }

  function deleteGoalHandler(id) {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  }

  function skipWelcome() {
    setShowWelcome(false);
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
      {showWelcome && !background && (
        <WelcomeModal onPickBackground={backgroundHandler} onSkip={skipWelcome} />
      )}

    <div className="card">
      <h1>Objectifs de vie</h1>

      <div className="toolbar">
        <label className="file-button">
          {background ? "Modifier le fond" : "Mettre un fond d’écran"}
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