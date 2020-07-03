import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  // reddit
  "https://media.wired.com/photos/5abece0a9ccf76090d775185/master/pass/hangoutsscreen_2.jpg",
  // spaceX
  "https://media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/B4378357-9066-4F7A-8EFD-706EC464A684.jpg?itok=30cfdSJh",
  // github
  "https://www.leanrob.com/img/github-logo-with-text.10e0d140.png",
  // minesweeper
  "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/1f/10/89/1f1089e7-6b38-1f9f-c679-7c78c696995a/contsched.voboeuui.lsr/1280x768bb.png",
  // tv guide
  "http://colourmenina.ca/wordpress/wp-content/uploads/2018/03/toptvshows.png",
  // tic-tac-toe
  "https://images-na.ssl-images-amazon.com/images/I/61kjGo7vPtL._SL1500_.jpg"
  // tetris
  // "https://wallpapercave.com/wp/wp2675354.jpg",
];

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (imageIndex === 6) {
        setImageIndex(0);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    }, 10000);
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