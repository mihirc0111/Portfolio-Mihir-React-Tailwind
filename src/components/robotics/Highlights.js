// Highlights.js
import React from 'react';

const Highlights = ({ text }) => {
  if (!Array.isArray(text)) {
    console.error('Highlights component expects an array of strings as the text prop.');
    return null;
  }

  return (
    <ul className="list-disc text-left font-bodyFont text-lightText text-base space-y-4 p-4">
      {text.map((item, index) => (
        item ? <li key={index}>{item}</li> : null
      ))}
    </ul>
  );
}

export default Highlights;