import React from 'react';
import '../index.css';

function HoverImage({ src, alt }) {
  return (
      <img
        className="hover-image"
        src={src}
        alt={alt}
      />
  );
}

export default HoverImage