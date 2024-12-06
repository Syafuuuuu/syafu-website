// import React from "react";
// import "./ImageBlock.css";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt, caption }) => (
  <div className="image-block">
    <img src={src} alt={alt} className="image-block-img" />
    {caption && <p className="image-block-caption">{caption}</p>}
  </div>
);

export default ImageBlock;
