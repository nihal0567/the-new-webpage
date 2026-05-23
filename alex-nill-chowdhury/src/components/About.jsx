import React from 'react';
import Navbar from './Navbar';
import App from '../App';

const About = () => {
    return (
        <div>
        <div className='flex justify-center flex-col-reverse'>
            <App></App>
            <Navbar></Navbar>
        </div>
                <div className='flex justify-center mt-8'>
                    <h1 className=''>
                        এই পেজ টা এখনো তৈরি হয়নি আসতে দেরি হবে, ব্যস্ত 
                    </h1>
                </div>
        </div>
    );
};

export default About;