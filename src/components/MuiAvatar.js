import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MuiAvatar = () => {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          border: "2px solid black",
          padding: "50px",
          margin: "auto",
          width: "500px",
        }}
      >
        <Avatar sx={{ bgcolor: "success.light" }}>DK</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>DK</Avatar>
        <Avatar sx={{ bgcolor: "info.light" }}>DK</Avatar>
        <Avatar src="https://picsum.photos/200/300">DK</Avatar>
        <Avatar
          src="https://picsum.photos/200/300"
          sx={{
            height: "48px",
            width: "48px",
          }}
        >
          DK
        </Avatar>
        <Avatar
          src="https://picsum.photos/200/300"
          sx={{
            height: "72px",
            width: "72px",
          }}
        >
          DK
        </Avatar>
      </Stack>
      <Stack
        sx={{
          margin: "auto",
          marginTop: "50px",
          border: "2px solid black",
          width: "500px",
        }}
        direction="row"
        spacing={1}
      >
        <AvatarGroup>
          <Avatar src="https://picsum.photos/200/300">DK</Avatar>
          <Avatar src="https://picsum.photos/200/300" variant="square">
            DK
          </Avatar>
        </AvatarGroup>
        <AvatarGroup max={3}>
          <Avatar src="https://picsum.photos/200/300">DK</Avatar>
          <Avatar src="https://picsum.photos/200/300">DK</Avatar>
          <Avatar src="https://picsum.photos/200/300">DK</Avatar>
          <Avatar src="https://picsum.photos/200/300">DK</Avatar>
          <Avatar src="https://picsum.photos/200/300" variant="square">
            DK
          </Avatar>
        </AvatarGroup>
      </Stack>
    </>
  );
};

export default MuiAvatar;
