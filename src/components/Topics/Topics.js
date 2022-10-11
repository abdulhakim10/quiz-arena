import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='m-12'>
         <div className='bg- border rounded-lg border-blue-400 h-96 bg-no-repeat bg-cover' style={{backgroundImage: `url(https://t4.ftcdn.net/jpg/02/24/03/21/240_F_224032170_7PfrDJYWjCw4Rs1WFvhPkiSPuD02sw1q.jpg)`, }}>

            <h1 className='md:text-4xl text-2xl  font-semibold text-blue-200 md:text-center text-right mt-32 mr-8'>Judge Yourself</h1>
            <h2 className='md:text-3xl text-xl mr-8 font-sans text-blue-200 md:text-center text-right mt-6'>To Participate Quiz in</h2>
            <h1 className='md:text-6xl text-4xl text-yellow-400 md:text-center text-right mr-8 font-serif mt-6'>Quiz Arena</h1>
         </div>

         <div className='grid md:grid-cols-2 gap-6'>
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