// import React from "react";
// import "./VideoBlock.css";

interface VideoBlockProps {
  src: string;
  title: string;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ src, title }) => (
  <div className="video-block">
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
      className="video-block-iframe"
    ></iframe>
  </div>
);

export default VideoBlock;
