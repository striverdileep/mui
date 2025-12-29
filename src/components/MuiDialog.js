import React from "react";
import {
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setState(true);
        }}
      >
        SUBMIT
      </Button>
      <Dialog open={state}>
        <DialogContent>
          <DialogTitle textAlign="left">Submission Confirm</DialogTitle>
          <DialogContentText>Are you sure submit the test?</DialogContentText>
          <DialogActions>
            <Button
              onClick={() => {
                setState(false);
              }}
            >
              YES
            </Button>
            <Button
              onClick={() => {
                setState(false);
              }}
            >
              NO
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MuiDialog;
