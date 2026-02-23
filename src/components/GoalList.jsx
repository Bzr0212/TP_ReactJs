import { useState } from "react";

export default function GoalList({ goals }) {
  return (
    <ul>
        {goals.map((goal) => (
            <GoalItem key={goal.id} text={goal.text} />
        ))}
    </ul>
    );
}