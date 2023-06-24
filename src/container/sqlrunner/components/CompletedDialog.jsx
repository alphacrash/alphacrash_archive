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
import { resetSolved } from "../features/exerciseSlice";

const CompletedDialog = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const solved = useSelector((state) => state.exercise.solved);

  useEffect(() => {
    if (solved.includes(1) && solved.includes(2) && solved.includes(3)) {
      handleClickOpen(true);
    }
  }, [solved]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reset = () => {
    setOpen(false);
    dispatch(resetSolved());
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
          You have completed the first lesson. You can continue to next lesson.
          If you want, hit the reset button to start over.
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
            <Button variant="outlined" color="success" onClick={handleClose}>
              Next
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default CompletedDialog;
