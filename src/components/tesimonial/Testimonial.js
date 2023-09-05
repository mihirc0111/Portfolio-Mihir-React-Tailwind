import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layouts/Title';
import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentynine, thirty




} from '../../assets';


const images = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentynine, thirty];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Gallery" />
      </div>
      <div className="flex justify-center items-center text-center">
        <Title title="Pictures from clubs, socials, contests, and more!"  />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-auto">
          <img
            className="w-full h-auto rounded-lg object-cover"
            src={images[currentIndex]}
            alt={`Gallery-${currentIndex}`}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center mr-4"
            onClick={prevSlide}
          >
            <HiArrowLeft />
          </button>
          <button
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center"
            onClick={nextSlide}
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
