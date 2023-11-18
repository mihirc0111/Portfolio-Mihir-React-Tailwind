import React from 'react';
import TextBox from './TextBox';
import Photos from './Photos';

const CustomCard = ({ title, text, images }) => {
  return (
    <div className="bg-boxBg shadow-shadowOne rounded-lg overflow-hidden transition-colors duration-100 mb-5">
      <h2 className="font-titleFont text-2xl text-lightText p-4 text-center md:text-left">{title}</h2>
      <div className="md:flex justify-center items-start">
        <div className="md:w-1/2">
          <TextBox text={text} />
        </div>
        <div className="md:w-1/2">
          <Photos images={images} />
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
