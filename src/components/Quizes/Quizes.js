import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quiz = useLoaderData();
    const {name, questions} = quiz.data;
    console.log(quiz)
    return (
        <div className='m-12'>
            <h2 className='text-2xl font-medium text-center'>{name}</h2>
            <h2 className='text-lg font-medium text-center'>Total Quiz: {questions.length}</h2>
            <div className='grid md:grid-cols-2'>
            {
                questions.map(ques => <Quiz 
                key={ques.id}
                ques={ques}
                ></Quiz>)
            }     
            </div>  
        </div>
    );
};

export default Quizes;