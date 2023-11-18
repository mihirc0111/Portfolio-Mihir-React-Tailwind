import React from 'react';
import { Carousel } from 'react-bootstrap';

const Photos = ({ images }) => {
  return (
    <Carousel interval={null} className="photos-carousel">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100" // 'w-100' makes the image responsive
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Photos;