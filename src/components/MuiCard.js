import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Stack,
  Button,
  CardActionArea
} from "@mui/material";
import React from "react";

function MuiCard() {
  return (
    <div>
      <Stack direction={"row"} spacing={4} rowGap={10}>
        <Card sx={{ maxWidth: 300, border: "2px solid black", margin: "auto" }}>
          <CardContent>
            <Typography variant="h6">Card Title</Typography>
            <Typography variant="body2" color="text.secondary">
              This is a simple card with only content.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, border: "2px solid black", margin: "auto" }}>
          <CardMedia
            component="img"
            height="180"
            image="https://picsum.photos/400/200"
            alt="Random image"
          />
          <CardContent>
            <Typography variant="h6">Nature</Typography>
            <Typography variant="body2" color="text.secondary">
              A beautiful view captured in nature.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => console.log("Card clicked")}>
            <CardMedia
              component="img"
              height="160"
              image="https://picsum.photos/400/200"
              alt="Sample"
            />
            <CardContent>
              <Typography variant="h6">Clickable Card</Typography>
              <Typography variant="body2" color="text.secondary">
                The entire card is interactive.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  );
}

export default MuiCard;
