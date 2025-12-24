import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { FormatBold } from "@mui/icons-material";
function ToggleBtn() {
  const [format, setFormat] = useState([]);
  const handleFormatChange = (event, updatedFormats) => {
    setFormat(updatedFormats);
  };

  return (
    <div>
      <Stack direction="row">
        <ToggleButtonGroup
          value={format}
          onChange={handleFormatChange}
          size="large"
          color="info"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="uderline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
}

export default ToggleBtn;
