import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const QuestionItem = ({ question }) => {
  return (
    <TableRow key={question.id}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={localStorage.getItem(question.slug) === "true"}
          onChange={(e) => {
            const isChecked = e.target.checked;
            localStorage.setItem(question.slug, isChecked);
          }}
        />
      </TableCell>

      <TableCell>{question.title}</TableCell>
      <TableCell>{question.pattern.join(", ")}</TableCell>
      <TableCell>{question.difficulty}</TableCell>
    </TableRow>
  );
};

export default QuestionItem;
