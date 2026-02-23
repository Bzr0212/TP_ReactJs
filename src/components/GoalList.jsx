import GoalItem from "./GoalItem";

export default function GoalList({ goals = [], onDeleteGoal }) {
  if (!Array.isArray(goals) || goals.length === 0) {
    return <p className="empty">Aucun objectif pour l’instant.</p>;
  }

  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
          onDelete={onDeleteGoal}
        />
      ))}
    </ul>
  );
}