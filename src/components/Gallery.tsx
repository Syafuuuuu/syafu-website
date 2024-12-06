// import React from "react";
import "./Gallery.css";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="gallery">
    {images.map((image, index) => (
      <div key={index} className="gallery-item">
        <img src={image.src} alt={image.alt} className="gallery-img" />
      </div>
    ))}
  </div>
);

export default Gallery;
