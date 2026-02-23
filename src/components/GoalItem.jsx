export default function GoalItem({ id, text, onDelete }) {
  return (
    <li className="goal-item">
      <span>{text}</span>
      <button type="button" className="delete-btn" onClick={() => onDelete(id)}>
        Supprimer
      </button>
    </li>
  );
}