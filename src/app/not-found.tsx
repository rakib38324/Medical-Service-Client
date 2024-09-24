/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ban from '@/assetes/bg-8.png'
import PrimaryButton from './Components/common/PrimaryButton';

// Define the return type for generateMetadata
export const generateMetadata = async (): Promise<{ title: string; description: string }> => {
    return {
        title: "Not Found",
        description: "Not found page",
    };
};

const NotFound: React.FC = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20  dark:text-textDark md:flex justify-center items-center gap-5 p-1'>
            <div>
                <Image  src={ban} alt='banner' />
            </div>
           <hr className='md:-2 md:h-20 my-5 md:my-0' /> 
            <div>
                <p className='text-7xl  font-bold'>404</p>
                <p className='text-4xl my-2'>This page could not be found</p>
                <p className='text-2xl text-textSecondary dark:text-textDark mb-10'>You can either stay and chill here, or go back to the beginning.</p>
                <PrimaryButton link='/' text='BACK TO HOME' bgColor='bg-primary' textColor='text-white' darkTextColor='text-textDark'/>
            </div>
        </div>
    );
};

export default NotFound;
