import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import github from "./images/carousel_images/github_photo.png";
import minesweeper from "./images/carousel_images/minesweeper.png";
import reddit from "./images/carousel_images/reddit.jpg";
import spacex from "./images/carousel_images/spacex.jpg";
import tic_tac_toe from "./images/carousel_images/tic_tac_toe.jpg";
import tv from "./images/carousel_images/tv_guide.jpg";

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
    }, 10000); //change image every 10 seconds i.e. (10 seconds = 10,000 milliseconds)
    return () => clearInterval(timer);
  }, [imageIndex]);

  return (
    <>
      <main>
        <section
          title="image gallery"
          style={{ height: "80vh", overflow: "hidden" }}
        >
          <Gallery
            key={imageIndex}
            style={{
              background: "black",
              height: "80vh",
              width: "100vw",
            }}
            index={imageIndex}
            onRequestChange={(i) => {
              setImageIndex(i);
            }}
          >
            {images.map((image, i) => (
              <GalleryImage
                objectFit="contain"
                key={i}
                src={image}
                alt={`Image ${i + 1} of ${images.length}`}
              />
            ))}
          </Gallery>
        </section>
      </main>
    </>
  );
};

export default Carousel;
