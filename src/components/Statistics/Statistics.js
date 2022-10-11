import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Statistics = () => {
    const topicsLoaded = useLoaderData();
    const topicsData = topicsLoaded.data;
    // console.log(topic)
        const topic = topicsData.map(topic => {
            return topic;
        })
    return (
       <div>
        <h1>statistics</h1>
       </div>
    );
};

export default Statistics;