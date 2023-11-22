// CustomCard.js
import React from 'react';
import TextBox from './TextBox';
import Photos from './Photos';
import Highlights from './Highlights';

const CustomCard = ({ title, text, highlights, images }) => {
  return (
    <div className="bg-boxBg shadow-shadowOne rounded-lg overflow-hidden transition-colors duration-100 mb-5">
      <h2 className="font-titleFont text-2xl text-lightText p-4 text-center md:text-left">{title}</h2>
      <div className="md:flex justify-center items-start">
        <div className="md:w-1/2">
          {text && text.length > 0 ? <TextBox text={text} /> : highlights && highlights.length > 0 && <Highlights text={highlights} />}
        </div>
        <div className="md:w-1/2">
          <Photos images={images} />
        </div>
      </div>
    </div>
  );
}

export default CustomCard;