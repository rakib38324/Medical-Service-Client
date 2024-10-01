/* eslint-disable react/no-unescaped-entities */
"use client"; // Error components must be Client Components

import { useEffect } from "react";
import PrimaryButton from "./Components/common/PrimaryButton";
import Image from "next/image";
import ban from '@/assetes/bg-8.png'

// Define the return type for generateMetadata
export const generateMetadata = async (): Promise<{
  title: string;
  description: string;
}> => {
  return {
    title: "Error",
    description: "Error page",
  };
};

// Define the props type for the Error component
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error }: ErrorProps): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-screen-xl mx-auto my-20  dark:text-textDark md:flex justify-center items-center gap-5 p-1">
      <div>
        <Image src={ban} alt="banner" />
      </div>
      <hr className="md:-2 md:h-20 my-5 md:my-0" />
      <div>
        <p className="text-7xl  font-bold">404</p>
        <p className="text-4xl my-2">This page could not be found</p>
        <p className="text-2xl text-textSecondary dark:text-textDark mb-10">
          You can either stay and chill here, or go back to the beginning.
        </p>
        <PrimaryButton
          link="/"
          text="BACK TO HOME"
          bgColor="bg-primary"
          textColor="text-white"
          darkTextColor="text-textDark"
        />
      </div>
    </div>
  );
}
