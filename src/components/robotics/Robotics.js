import React from 'react';
import CustomCard from './CustomCard';
import { roboticsData } from '../../data/roboticsData';
import Title from '../layouts/Title';

const Robotics = () => {
    const website = "http://mcgillrobotics.com";

    return (
        <section className="p-5">
            <Title 
            title="McGill Robotics"
            des="Autonomous Underwater Vehicle Team"
            />
            <a href={website} className="text-designColor underline">Learn More</a>
          {roboticsData.map(roboticsItem => (
            <CustomCard key={roboticsItem.id} 
            title={roboticsItem.title} 
            text={roboticsItem.text} 
            highlights={roboticsItem.highlights} 
            images={roboticsItem.images} />
          ))}
        </section>
    );
}

export default Robotics;
