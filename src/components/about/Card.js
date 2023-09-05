import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiX } from 'react-icons/hi';

const Card = ({ item: { title, des, icon, imageGallery, link }, onClick }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleCardClick = () => {
    if (!showGallery) {
      // Show the gallery only if it's not already shown
      if (link) {
        window.open(link, '_blank'); // Open the link in a new tab
      } else {
        setShowGallery(true);
      }
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < imageGallery.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const closeGallery = () => {
    setShowGallery(false);
    setSelectedImageIndex(0);
  };

  return (
    <div
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-designColor"
              >
                <HiArrowRight />
              </a>
            )}
          </div>
        </div>
      </div>
      {showGallery && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '80%',
              maxHeight: '80%',
              width: 'auto',
              height: 'auto',
            }}
          >
            <img
              src={imageGallery[selectedImageIndex]}
              alt={`${title} Image ${selectedImageIndex + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '24px',
                zIndex: 1001,
              }}
              onClick={closeGallery}
            >
              <HiX />
            </span>
            {imageGallery.length > 1 && (
              <>
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '32px',
                    zIndex: 1001,
                  }}
                  onClick={handlePrevImage}
                >
                  <HiArrowLeft />
                </span>
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '32px',
                    zIndex: 1001,
                  }}
                  onClick={handleNextImage}
                >
                  <HiArrowRight />
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
