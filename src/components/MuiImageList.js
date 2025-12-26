import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
const images = [
  { img: "https://picsum.photos/300/300?1", title: "Image 1" },
  { img: "https://picsum.photos/300/300?2", title: "Image 2" },
  { img: "https://picsum.photos/300/300?3", title: "Image 3" },
  { img: "https://picsum.photos/300/300?4", title: "Image 4" },
];

function MuiImageList() {
    //Check for variants also
  return (
    <>
      <ImageList cols={2} rows={2} rowHeight={164}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <ImageList cols={3} rowHeight={180}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar title={item.title} subtitle="Subtitle text" />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList cols={3} rowHeight={180}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton sx={{ color: "yellow" }}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default MuiImageList;
