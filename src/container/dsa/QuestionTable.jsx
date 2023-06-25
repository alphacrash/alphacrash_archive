import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionTable = ({ questions = [] }) => {
  return (
    <>
      <h2>Question List</h2>
      {questions.length === 0 ? (
        <p>No questions found matching the selected filters.</p>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Done</TableCell>
                <TableCell>Question</TableCell>
                <TableCell>Pattern</TableCell>
                <TableCell>Difficulty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((question) => (
                <QuestionItem key={question.id} question={question} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default QuestionTable;
