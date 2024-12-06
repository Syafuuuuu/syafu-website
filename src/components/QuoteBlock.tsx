import React from "react";
import "./QuoteBlock.css";

interface QuoteBlockProps {
  quote: string;
  author: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author }) => (
  <div className="quote-block">
    <blockquote>
      <p>"{quote}"</p>
      <footer>- {author}</footer>
    </blockquote>
  </div>
);

export default QuoteBlock;
