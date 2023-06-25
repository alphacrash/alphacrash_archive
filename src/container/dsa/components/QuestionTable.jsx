import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionTable = ({ questions = [] }) => {
  return (
    <Grid>
      {questions.length === 0 ? (
        <Typography>
          No questions found matching the selected filters.
        </Typography>
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
    </Grid>
  );
};

export default QuestionTable;
