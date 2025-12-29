import React from 'react'
import {Grid,Box} from "@mui/material"
function MuiGrid() {
  // rowSpacing, Column Spacing, 
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Box>A</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>B</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>C</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>D</Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>Item 1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>Item 2</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default MuiGrid
