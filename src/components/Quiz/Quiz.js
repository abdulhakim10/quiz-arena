import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ques}) => {
    const [answer, setAnswer] = useState([]);
   const {question, options, correctAnswer} = ques;

    //handler to checking answer
    const handler = option => {
        if(option === correctAnswer){
            // const correct = 'correct answer'
            // setAnswer(correct);
           
            const notify = () =>{
                toast('Correct Answer')
            }
            notify()     
        }
        else{
            // const incorrect = 'incorrect answer'
            //setAnswer(incorrect)  
            
            // toast
            const notify = () => {
                toast('Incorrect Answer')
            }
            notify()
        }   
    }
    const showCorrect = () =>{
        setAnswer(correctAnswer)
    }

    return (
        <div className='border-2 border-blue-400 rounded-lg bg-blue-100
         m-6 p-6'>
            <div className='flex items-center justify-between'>
            <h3 className='text-2xl font-semibold'>{question}</h3>
            <div>
            <EyeIcon onClick={showCorrect} className='h-6 w- hover:text-blue-600'></EyeIcon>
            </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-8'>
            {
                options.map(option => <p onClick={() => handler(option)}
                className={'hover:bg-white p-2 rounded-lg border-2 border-blue-400 text-center'}> {option}</p>)
            }
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl font-semibold text-center text-green-600'>{answer}</h3>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;