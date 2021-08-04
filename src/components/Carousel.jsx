import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import reddit from "./images/reddit.jpg"
import spacex from "./images/spacex.jpg"
import github from "./images/github_photo.png"
import minesweeper from "./images/minesweeper.png"
import tv from "./images/tv_guide.jpg"
import tic_tac_toe from "./images/tic_tac_toe.jpg"

const images = [
  reddit,
  spacex,
  github,
  minesweeper,
  tv,
  tic_tac_toe
];

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

export default Carousel