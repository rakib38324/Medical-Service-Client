"use client";
import Image from "next/image";
import banner1 from "@/assetes/bg-1.png";
import PrimaryButton from "../common/PrimaryButton";
import { useEffect, useState } from "react";

export default function Banner() {
  interface CarouselItem {
    src: string;
    alt: string;
  }

  const carouselItems: CarouselItem[] = [
    { src: "banner1", alt: "Slide 1" },
    { src: "banner1", alt: "Slide 2" },
    { src: "banner1", alt: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="max-w-[1434px] mx-auto relative ">
      <div className="max-w-screen-xl mx-auto pt-60 md:pt-5 lg:pt-20  p-2">
        <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
          Lorem ipsum dolor amet
        </p>
        <p className="text-xl font-normal text-textSecondary dark:text-gray-300 md:w-1/2 mt-5 md:mt-10">
          Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
        </p>

        <div className="mt-10 flex gap-5">
          <p className="text-secondary my-auto font-bold dark:text-secondaryLight dark:font-normal">
            MORE INFOR
          </p>
          <PrimaryButton
            text="REGISTER NOW"
            textColor="text-white"
            darkTextColor="text-textDark"
            bgColor="bg-primary"
          />
        </div>

        <div className="mt-10 md:mt-20 lg:mt-36 lg:w-11/12 mx-auto lg:flex gap-10 justify-around">
          <div className="group">
            <p className="text-3xl dark:text-textDark group-hover:text-primary transition-colors duration-300">
              Business Solution
            </p>
            <p className="text-lg dark:text-textDark">Interdum et malesuada fames ac ante…</p>
            <span
              className={`block border-[3px] w-1/2 border-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></span>
          </div>

          <span className="my-2 border-2 bg-primary"></span>

          <div className="group">
            <p className="text-3xl dark:text-textDark group-hover:text-primary transition-colors duration-300">
              Business Solution
            </p>
            <p className="text-lg dark:text-textDark">Interdum et malesuada fames ac ante…</p>
            <span
              className={`block border-[3px] w-1/2 border-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></span>
          </div>

          <span className="my-2 border-2 bg-primary"></span>

          <div className="group">
            <p className="text-3xl dark:text-textDark group-hover:text-primary transition-colors duration-300">
              Business Solution
            </p>
            <p className="text-lg dark:text-textDark">Interdum et malesuada fames ac ante…</p>
            <span
              className={`block border-[3px] w-1/2 border-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></span>
          </div>
        </div>
      </div>

      {/* ---------------------------background images */}
      <div className="-z-10">
        <svg
          className="w-1/2 md:w-2/3 absolute -top-24 right-0 -z-50"
          width="700"
          height="352"
          viewBox="0 0 700 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.500465"
            cx="700"
            cy="-303.666"
            rx="700"
            ry="655.459"
            fill="url(#paint0_linear_0_690)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_690"
              x1="-357.137"
              y1="-339.603"
              x2="405.963"
              y2="732.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C8E6C9" />
              <stop offset="1" stop-color="#B3E5FC" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="w-2/3 md:w-1/2 absolute -top-96 md:-top-80 lg:-top-24 right-0 -z-10"
          width="644"
          height="960"
          viewBox="0 0 644 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="640.457"
            cy="319.02"
            r="639.769"
            stroke="url(#paint0_linear_0_689)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_689"
              x1="-325.719"
              y1="283.944"
              x2="433.852"
              y2="1283.54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CAF50" />
              <stop offset="1" stop-color="#03ACF2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-0 right-0 md:top-12 md:-right-0 lg:top-0 lg:right-0 -z-10 ">
          <Image
            className="md:w-11/12 lg:w-[620px]"
            src={banner1}
            alt="Banner-1"
          />
        </div>
      </div>
    </div>
  );
}
