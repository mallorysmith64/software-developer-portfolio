import React, { useState, useEffect } from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

const images = [
    "https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg",
    "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/1f/10/89/1f1089e7-6b38-1f9f-c679-7c78c696995a/contsched.voboeuui.lsr/1280x768bb.png",
    "https://ih1.redbubble.net/image.836892656.7935/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg",
    "https://coda.newjobs.com/api/imagesproxy/ms/niche/images/can/film.jpg",
    "https://cdn.shopify.com/s/files/1/1570/2069/products/tictac_1024x.jpg?v=1573322986"
]

const Carousel = () => {
    const [imageIndex, setImageIndex] = useState(0)

useEffect(() => {
    const timer = setInterval(() => {
        if (imageIndex === 4) {
            setImageIndex(0)
        } else {
            setImageIndex(prev => prev + 1)
        }
        }, 6000)
        return () => clearInterval(timer)
    }, [imageIndex])
    
    return (
    <>
    <section>
        <Gallery
        style={{
            background: "black",
            height: "80vh",
            width: "100vw"
            // className:"responsive-img"
          }}
            index={imageIndex}
            onRequestChange={i => {
            setImageIndex(i)
        }}
    >
           {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
        </Gallery>
    </section>
    </>
    )
}

export default Carousel
