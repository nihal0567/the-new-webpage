import { format } from 'date-fns';
import React from 'react';

const Home = () => {
    return (
        <header className='flex justify-center gap-1.5 pt-8 flex-col items-center'>
            <h1 className='text-xl md:text-4xl text-red-600  font-bold'>Alex Nill Chowdhury </h1>
            <h3 className='text-xl text-red-400 '>A Front <span className='text-2xl text-violet-400'>End 
                </span> Developer
             </h3>
            <p className='text-indigo-700 text-center'> <span className='text-pink-500'>Created At 20-10-2025</span> 
           <span className='text-gray-400'> & Today : </span>{format(new Date(),"do-MMMM-yyyy")} </p>
        </header>
    );
};

export default Home;