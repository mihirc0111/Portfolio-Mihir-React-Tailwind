import React, { useState } from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  // Add a function to handle returning to the interests section
  const handleReturnToInterests = () => {
    setSelectedInterest(null);
  };

  const handleInterestClick = (interestId) => {
    setSelectedInterest(interestId);
  };

  const renderInterestContent = () => {
    if (selectedInterest === null) {
      // No interest selected, render the list of interests
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {featuresData.map((item) => (
            <Card
              item={item}
              key={item.id}
              onClick={handleReturnToInterests} // Pass the function here
            />
          ))}
        </div>
      );
    } else {
      // Interest selected, display related image gallery or link
      const selectedInterestData = featuresData[selectedInterest - 1];
      return (
        <div>
          {/* Display content related to the selected interest */}
          <h2>{selectedInterestData.title}</h2>
          {selectedInterestData.imageGallery && (
            <div className="image-gallery">
              {selectedInterestData.imageGallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedInterestData.title} Image ${index + 1}`}
                />
              ))}
            </div>
          )}
          {selectedInterestData.link && (
            <a href={selectedInterestData.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          )}
          <button onClick={() => setSelectedInterest(null)}>Back to Interests</button>
        </div>
      );
    }
  };

  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Interests" des="My Passions" />
      {renderInterestContent()}
    </section>
  );
};

export default Features;
