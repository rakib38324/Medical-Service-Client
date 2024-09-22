/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

// Define the return type for generateMetadata
export const generateMetadata = async (): Promise<{ title: string; description: string }> => {
    return {
        title: "Not Found",
        description: "Not found page",
    };
};

const NotFound: React.FC = () => {
    return (
        <div className='min-h-screen pt-24 lg:pt-0 lg:grid lg:grid-cols-2 lg:gap-10 bg-gray-900 '>
            <div className='my-auto text-center lg:text-end'>
                <p className=' text-xl  uppercase text-orange-600'>W e ' r e   <span className='ml-5'>s o r r y</span></p>
                <p className='text-white text-9xl my-10 md:my-0 md:text-[200px] font-extrabold'>404</p>
                {/* <ButtonComponent text={"Back Home"} /> */}
            </div>
            <div className="text-gray-400 lg:my-auto text-center md:text-2xl mt-20">
                <p>We couldn't find the page you're looking for.</p>
            </div>
        </div>
    );
};

export default NotFound;
