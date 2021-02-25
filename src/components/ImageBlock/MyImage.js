import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width} />
  </div>
);

export default MyImage;