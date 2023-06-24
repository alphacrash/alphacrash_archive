import { Grid, Typography } from "@mui/material";
import PixarSample from "./PixarSample";
import Questions from "./Questions";

const ProblemStatements = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">SQL Lesson 1: SELECT queries 101</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Below is the Pixar database schema. We will use this database to learn
          SQL. Try to solve below questions.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <PixarSample />
      </Grid>
      <Grid item xs={12}>
        <Questions />
      </Grid>
    </Grid>
  );
};

export default ProblemStatements;
