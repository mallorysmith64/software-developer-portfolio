import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import reddit from "./carousel_images/reddit.jpg";
import spacex from "./carousel_images/spacex.jpg";
import github from "./carousel_images/github_photo.png";
import minesweeper from "./carousel_images/minesweeper.png";
import tv from "./carousel_images/tv_guide.jpg";
import tic_tac_toe from "./carousel_images/tic_tac_toe.jpg";

const images = [reddit, spacex, github, minesweeper, tv, tic_tac_toe];

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (imageIndex === 5) {
        setImageIndex(0);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    }, 120000); //2 minutes
    return () => clearInterval(timer);
  }, [imageIndex]);

  return (
    <>
      <section>
        <Gallery
          style={{
            background: "black",
            height: "80vh",
            width: "98.8vw",
          }}
          index={imageIndex}
          onRequestChange={(i) => {
            setImageIndex(i);
          }}
        >
          {images.map((image) => (
            <GalleryImage objectFit="contain" key={image} src={image} />
          ))}
        </Gallery>
      </section>
    </>
  );
};

export default Carousel;
