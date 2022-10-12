import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';





const Statistics = () => {
    const topics = useLoaderData([]).data
    // console.log(topics)
    return (
       <div className='m-12'>
        <div className='mx-auto border border-blue-400 rounded-lg p-6 hover:bg-blue-100'>
        <ResponsiveContainer width="90%" height={300}>
            <LineChart data={topics}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>
        </div>
       </div>
    );
};

export default Statistics;