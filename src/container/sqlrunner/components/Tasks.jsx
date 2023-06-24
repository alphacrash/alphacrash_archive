import React from "react";
import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircularProgressWithLabel from "./utils/CircularProgressWithLabel.jsx";

const Tasks = ({ id = 0, currentSet = [] }) => {
  const completedQuestionId = useSelector(
    (state) => state.exercise.completedQuestion
  );
  const currentQuestionId = useSelector(
    (state) => state.exercise.currentQuestion
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Number(completedQuestionId / currentSet.length) * 100);
  }, [completedQuestionId, currentSet]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <CircularProgressWithLabel value={progress} />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Exercise #{id}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        {currentSet.map((question) => {
          return (
            <Typography
              key={question.id}
              style={{
                color:
                  question.id === currentQuestionId ? grey[900] : grey[500],
              }}
            >
              - {question.text} {question.id <= completedQuestionId && "✅"}
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Tasks;
