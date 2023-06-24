import { Alert, Grid, TextField } from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pixar from "../data/seed";
import { updateSolved } from "../features/exerciseSlice";
import pixar1 from "../solutions/pixar-1.json";
import pixar2 from "../solutions/pixar-2.json";
import pixar3 from "../solutions/pixar-3.json";
import SQLOutputTable from "./SQLOutputTable";

const SQLRunner = ({ db }) => {
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const solved = useSelector((state) => state.exercise.solved);

  useEffect(() => {
    if (db && pixar) {
      pixar.forEach((sql) => {
        db.exec(sql);
      });
    }
  }, [db, pixar]);

  useEffect(() => {
    if (results && results[0]) {
      const { values } = results[0];
      if (_.isEqual(values, pixar1)) {
        dispatch(updateSolved(1));
      }
      if (_.isEqual(values, pixar2) && solved.includes(1)) {
        dispatch(updateSolved(2));
      }
      if (_.isEqual(values, pixar3) && solved.includes(2)) {
        dispatch(updateSolved(3));
      }
    }
  }, [results]);

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
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              onChange={(e) => exec(e.target.value)}
              placeholder="Just write some SQL here, box will expand as you type ;)"
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
  );
};

export default SQLRunner;
