import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='m-12'>
         <div className='grid md:grid-cols-4 gap-6'>
            {
                topics.data.map(topic => <Card 
                    key={topic.id}
                    topic={topic}
                    ></Card>)
            }
        </div>
        </div>
        
    );
};

export default Topics;