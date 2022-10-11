import React, { useState } from 'react';

const Quiz = ({ques}) => {
    const [answer, setAnswer] = useState([]);
   const {question, options, correctAnswer} = ques;
    console.log(ques)
    // 
    const handler = option => {
        if(option === correctAnswer){
            const correct = 'correct answer'
            setAnswer(correct);
            
        }
        else{
            const incorrect = 'incorrect answer'
           setAnswer(incorrect)
        }
       
    }
    return (
        <div className='border-2 border-blue-400 rounded-md bg-blue-100
         m-6 p-6'>
            <h3 className='text-2xl font-semibold'>{question}</h3>
            <div className='grid md:grid-cols-2 gap-4 mt-8'>
            {
                options.map(option => <p onClick={() => handler(option)}
                className='hover:bg-slate-200 p-2 rounded border-2 border-blue-400 text-center'>{option}</p> )
            }
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl font-semibold text-center'>{answer}</h3>
            </div>
        </div>
    );
};

export default Quiz;