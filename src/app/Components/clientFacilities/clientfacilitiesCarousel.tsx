"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import h1 from "@/assetes/h-1.png";
import h2 from "@/assetes/h-2.png";
import h3 from "@/assetes/h-3.png";
import card from "@/assetes/bg-4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CleinetFacilitiesCarusole() {
  const slider1 = () => {
    return (
      <div className="mt-5 grid md:grid-cols-3 gap-5">
        <div className=" bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h1}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h2}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h3}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>
      </div>
    );
  };

  const slider2 = () => {
    return (
      <div className="mt-5 grid md:grid-cols-3 gap-5">
        <div className=" bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h3}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>

        <div className=" hidden md:block bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h1}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>

        <div className=" hidden md:block bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h2}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>
      </div>
    );
  };

  const slider3 = () => {
    return (
      <div className="mt-5 grid md:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h2}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h1}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-white dark:bg-paperDark rounded-xl shadow-xl">
          <div className="h-[45%]">
            <Image
              className="w-full h-full rounded-xl rounded-br-[50px]"
              src={h2}
              alt="hospital"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xl font-bold dark:text-textDark">
              Lorem ipsum, dolor
            </p>
            <p className="text-sm text-textSecondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. etur
              adipisicing elit.
            </p>
          </div>

          <div className="flex justify-end align-bottom items-end mt-6">
            <button className="text-sm text-textDark rounded-br-xl rounded-tl-2xl px-4 py-2 bg-secondary">
              SEE DETAILS
            </button>
          </div>
        </div>
      </div>
    );
  };

  const slides = [slider1(), slider2(), slider3()]; // Invoke the slider function to return JSX

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalSlides]);

  // Functions to handle next and previous slide actions
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div className=" grid lg:grid-cols-3 gap-5 mt-10">
      <div className="w-full lg:col-span-1">
        <Image className="hidden lg:block w-full" src={card} alt="card-image" />
        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={goToPrevSlide}
            className="border  text-xl p-2 bg-white text-primaryDark dark:border-gray-100 rounded-full dark:text-textDark"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={goToNextSlide}
            className="border  text-xl p-2 bg-white text-primaryDark dark:border-gray-100 rounded-full dark:text-textDark"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="carousel w-full  relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item absolute w-full transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
