import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const QuestionItem = ({ question }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (localStorage.getItem(question.slug) !== null) {
      setChecked(localStorage.getItem(question.slug) === "true");
    }
  }, []);

  return (
    <TableRow key={question.id}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={checked}
          onChange={(e) => {
            const isChecked = e.target.checked;
            localStorage.setItem(question.slug, isChecked);
            setChecked(isChecked);
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
