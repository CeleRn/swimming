import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

 const ImagesCarousel = ({imagesList}) => {
  console.log(imagesList);
  const images = imagesList.map((image) => {
    return {
      src: image.url
    }
  });

  return (
    <Carousel images={images} style={{ height: 500, width: '100%' }} />
  );


}

export default ImagesCarousel;