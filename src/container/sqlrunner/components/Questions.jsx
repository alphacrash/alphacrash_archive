import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Questions = () => {
  const solved = useSelector((state) => state.exercise.solved);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">Exercise 1 — Tasks</Typography>
      </Grid>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={solved.includes(1)} />}
          label="Find the title of each film"
        />
        <FormControlLabel
          control={<Checkbox checked={solved.includes(2)} />}
          label="Find the director of each film"
        />
        <FormControlLabel
          control={<Checkbox checked={solved.includes(3)} />}
          label="Find the title and director of each film"
        />
      </FormGroup>
    </Grid>
  );
};

export default Questions;
