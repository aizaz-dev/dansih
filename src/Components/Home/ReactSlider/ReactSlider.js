import React from "react";
import "./ReactSlider.scss";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
const ReactSlider = (props) => {
  const items = [
    {
      bg_image:
        "./products/E1.jpg",
      bg_image_small: "./Slider/seconddsmall.JPG",
    },
    {
      bg_image:
        "./products/G4.jpg",
      bg_image_small: "./Slider/firstsmall.JPG",
    },
  ];
  return (
    <div>
      <Carousel navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

const Item = ({ bg_image, bg_image_small }) => {
  return (
    <Paper style={{ height: "70vh" }}>
      <img
        src={bg_image}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        srcSet={`${bg_image_small} 300w, ${bg_image_small} 768w, ${bg_image_small} 1280w, ${bg_image} 3200w`}
      />
    </Paper>
  );
};

export default ReactSlider;
