import React from 'react';
import Marquee from 'react-fast-marquee';

const MySelf = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <h4 className='text-xl bg-secondary px-4 rounded-[10px]'>Nill </h4>
            <Marquee pauseOnHover={true}>
            <p className='font-bold'>Tahmina, I Love You</p>
            </Marquee>
        </div>
    );
};

export default MySelf;