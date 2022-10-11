import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({topic}) => {
    // console.log(topic)
    const {name, logo, id} = topic;
    return (
        <div className='border rounded-lg p-6 m-6'>
            <img className='border rounded-lg' src={logo} alt="" />
            <h2 className='text-3xl font-semibold'>{name}</h2>
            <Link to={`/topics/${id}`}>
            <button className='bg-yellow-400 text-white rounded-md px-6 py-1 mt-2'>Start</button>
            </Link>
        </div>
    );
};

export default Card;