import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../features/exerciseSlice";

const Completed = () => {
  const dispatch = useDispatch();

  const exerciseId = 2;
  const [open, setOpen] = useState(false);
  const isCompleted = useSelector((state) => state.exercise.isCompleted);

  useEffect(() => {
    if (isCompleted) {
      handleClickOpen(true);
    }
  }, [isCompleted]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reset = () => {
    handleClose();
    dispatch(resetState());
  };

  const next = () => {
    reset();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Hey, nice work!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          You have completed the lesson. You can continue to next lesson. If you
          want, hit the reset button to start over.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button variant="outlined" color="warning" onClick={() => reset()}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="success" onClick={() => next()}>
              Next
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Completed;
