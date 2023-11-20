// Resume.js
import React from 'react';
import PdfViewer from './PdfViewer';
import { benResume } from '../../assets';
import Title from '../layouts/Title';
import ImageDisplay from './PdfViewer';


const Resume = () => {
  return (
    <div section className="p-5">
            <Title 
            title="Ben Hepditch"
            des="My Resume"
            />
      <PdfViewer file={benResume}/>
    </div>
  );
};

export default Resume;
