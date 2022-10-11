import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 gap-6 m-12'>
            {
                topics.data.map(topic => <Card 
                    key={topic.id}
                    topic={topic}
                    ></Card>)
            }
        </div>
    );
};

export default Topics;