import React from 'react';
import CustomCard from './CustomCard';
import { roboticsData } from '../../data/roboticsData';
import Title from '../layouts/Title';

const Robotics = () => {
    return (
        <section className="p-5">
            <Title 
            title="McGill Robotics"
            des="Autonomous Underwater Vehicle Team"
            />
          {roboticsData.map(roboticsItem => (
            <CustomCard key={roboticsItem.id} title={roboticsItem.title} text={roboticsItem.text} images={roboticsItem.images} />
          ))}
        </section>
    );
}

export default Robotics;
