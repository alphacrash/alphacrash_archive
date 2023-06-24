import React from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import seed from "../../data/seed";
import { updateCurrentSet } from "../features/exerciseSlice";
import Runner from "./Runner";
import Tasks from "./Tasks";
import Completed from "./Completed";

const Main = () => {
  const dispatch = useDispatch();
  const exerciseId = 2;

  const db = useSelector((state) => state.app.db);
  const currentSet = useSelector((state) => state.exercise.currentSet);

  useEffect(() => {
    if (db && seed) {
      seed.forEach((sql) => {
        db.exec(sql);
      });
    }
  }, [db, seed]);

  useEffect(() => {
    dispatch(updateCurrentSet(exerciseId));
  }, [exerciseId]);

  return (
    <>
      <Grid container my={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <Tasks id={exerciseId} currentSet={currentSet} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100vh",
          }}
        >
          <Runner db={db} currentSet={currentSet} />
        </Grid>
      </Grid>
      <Completed />
    </>
  );
};

export default Main;
