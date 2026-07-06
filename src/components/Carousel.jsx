import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import github from "./images/carousel_images/github_photo.png";
import minesweeper from "./images/carousel_images/minesweeper.png";
import reddit from "./images/carousel_images/reddit.jpg";
import spacex from "./images/carousel_images/spacex.jpg";
import tic_tac_toe from "./images/carousel_images/tic_tac_toe.jpg";
import tv from "./images/carousel_images/tv_guide.jpg";

const images = [reddit, spacex, github, minesweeper, tv, tic_tac_toe];

// Inline SVG placeholder shown whenever a carousel image fails to load.
// Using a data URI means there's no extra asset to manage/import.
const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23222'/%3E%3Ctext x='50%25' y='50%25' fill='%23999' font-family='sans-serif' font-size='28' text-anchor='middle' dominant-baseline='middle'%3EImage unavailable%3C/text%3E%3C/svg%3E";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  // Tracks which slide indices had an image fail to load
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    }, 10000); //change image every 10 seconds i.e. (10 seconds = 10,000 milliseconds)
    return () => clearInterval(timer);
  }, [imageIndex]);

  // Preload every image up front so we know if one is broken *before*
  // it ever gets rendered in the gallery (avoids the flash of a broken-image icon).
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.onerror = () => {
        setFailedImages((prev) => ({ ...prev, [i]: true }));
      };
      img.src = src;
    });
  }, []);

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
                src={failedImages[i] ? FALLBACK_IMAGE : image}
                alt={
                  failedImages[i]
                    ? "Image unavailable"
                    : `Image ${i + 1} of ${images.length}`
                }
              />
            ))}
          </Gallery>
        </section>
      </main>
    </>
  );
};

export default Carousel;
