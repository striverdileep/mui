import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  return (
    <>
      <Accordion sx={{ width: 500, margin: "auto" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is MUI?</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ width: 500, margin: "auto" }}>
          <Typography>
            MUI is a React UI library that implements Material Design.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React is a JavaScript library for building user interfaces.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is MUI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            MUI provides prebuilt React components following Material Design.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
