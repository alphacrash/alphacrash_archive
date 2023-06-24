import { Alert, Grid, TextField } from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCompletedQuestion,
  updateCurrentQuestion,
} from "../features/exerciseSlice";
import SQLOutputTable from "./SQLOutputTable";

const Runner = ({ db = null, currentSet = [] }) => {
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const currentQuestionId = useSelector(
    (state) => state.exercise.currentQuestion
  );

  useEffect(() => {
    if (currentSet && currentQuestionId && results && results[0]) {
      const solutionArray = currentSet.filter(
        (question) => question.id === currentQuestionId
      );
      if (solutionArray && solutionArray[0]) {
        const solution = solutionArray[0].solution;
        const solutionResult = db.exec(solution);
        if (_.isEqual(results, solutionResult)) {
          dispatch(updateCurrentQuestion(currentQuestionId + 1));
          dispatch(updateCompletedQuestion(currentQuestionId));
        }
      }
    }
  }, [currentQuestionId, currentSet, results]);

  function exec(statement) {
    try {
      setResults(db.exec(statement));
      setError(null);
    } catch (err) {
      setError(err);
      setResults([]);
    }
  }

  return (
    <>
      {db && (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  onChange={(e) => exec(e.target.value)}
                  placeholder="type here.."
                />
              </Grid>
              <Grid item xs={12}>
                {error && (
                  <Alert severity="warning">{(error || "").toString()}</Alert>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {results.map(({ columns, values }, i) => (
              <SQLOutputTable key={i} columns={columns} values={values} />
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Runner;
