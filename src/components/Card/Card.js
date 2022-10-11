import React from 'react';

const Card = ({topic}) => {
    console.log(topic)
    const {name, logo,} = topic;
    return (
        <div className='border rounded-lg p-6 m-6'>
            <img className='border rounded-lg' src={logo} alt="" />
            <h2 className='text-3xl font-semibold'>{name}</h2>
            <button className='bg-yellow-400 text-white rounded-md px-6 py-1 mt-2'>Start</button>
        </div>
    );
};

export default Card;