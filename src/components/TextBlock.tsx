// import React from 'react';
// import "./TextBlock.css";

interface TextBlockProps {
  content: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ content }) => (
  <div className="text-block">
    <p>{content}</p>
  </div>
);

export default TextBlock;
