import React from "react";
import { Snackbar, Button } from "@mui/material";
import { useState } from "react";
const MuiSnackBar = () => {
  const [SBstate, setSBstate] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setSBstate(true);
        }}
      >
        SUBMIT
      </Button>
      <Snackbar
        message="Submission Success"
        autoHideDuration={5000}
        onClose={() => {
          setSBstate(false);
        }}
        open={setSBstate}
      />
    </div>
  );
};

export default MuiSnackBar;
