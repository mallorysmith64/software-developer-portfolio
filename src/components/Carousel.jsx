import React, { useState, useEffect } from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

const images = [
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
    "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
                    index={imageIndex}
                    onRequestChange={i => {
                        setImageIndex(i)
                    }}
                >
                    {images.map(image => (
                        <GalleryImage objectFit="contain"
                        src={image}  
                      />
                    ))}
                </Gallery>
            </section>
            </>
        )
    }

export default Carousel
