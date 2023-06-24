import React from "react";

const QuestionItem = ({ question }) => {
  return (
    <div key={question.id}>
      <input
        type="checkbox"
        checked={localStorage.getItem(question.slug) === "true"}
        onChange={(e) => {
          const isChecked = e.target.checked;
          localStorage.setItem(question.slug, isChecked);
        }}
      />
      <span>{question.title}</span>
      <span>Pattern: {question.pattern.join(", ")}</span>
      <span>Difficulty: {question.difficulty}</span>
      <span>
        Companies:{" "}
        {question.companies.map((company) => company.name).join(", ")}
      </span>
    </div>
  );
};

export default QuestionItem;
