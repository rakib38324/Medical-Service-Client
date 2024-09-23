"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import d1 from "@/assetes/d-1.png";
import d2 from "@/assetes/d-2.png";
import d3 from "@/assetes/d-3.png";
import card from "@/assetes/bg-7.png";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

export default function TestimonialCarusole() {
  const slider1 = () => {
    return (
      <div className="mt-20 lg:mt-5 grid md:grid-cols-2  lg:grid-cols-3 lg:gap-20">
       
        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d1}
                alt="hospital"
              />
            </div>
          </div>

        </div>

        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative ">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d1}
                alt="hospital"
              />
            </div>
          </div>

         
        </div>


        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative ">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d1}
                alt="hospital"
              />
            </div>
          </div>

         
        </div>

      </div>
    );
  };

  const slider2 = () => {
    return (
      <div className="mt-20 lg:mt-5 grid md:grid-cols-2  lg:grid-cols-3 lg:gap-20">
       
        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark  relative ">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d2}
                alt="hospital"
              />
            </div>
          </div>

        </div>

        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d2}
                alt="hospital"
              />
            </div>
          </div>

         
        </div>


        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d2}
                alt="hospital"
              />
            </div>
          </div>

         
        </div>

      </div>
    );
  };

  const slider3 = () => {
    return (
      <div className="mt-20 lg:mt-5 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
       
        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d3}
                alt="hospital"
              />
            </div>
          </div>

        </div>

        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d3}
                alt="hospital"
              />
            </div>
          </div>

         
        </div>


        <div className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
          <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
            <p className="text-base dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis laborum cumque unde quis aliquid perspiciatis
            </p>

            <div className="mt-10 flex gap-3">
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
              <FaStar className="my-auto text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 flex gap-4">
            <div className="my-auto">
              <p className="text-xl font-bold dark:text-textDark">John Deo</p>
              <p className="text-sm text-textSecondary dark:text-textDark italic">
                Chif Digital Officer
              </p>
            </div>

            <div className="size-20">
              <Image
                className="bg-secondary  rounded-full rounded-br-none"
                src={d3}
                alt="hospital"
              />
            </div>
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

      <div className="w-full lg:col-span-1">
        <Image className="hidden lg:block w-full" src={card} alt="card-image" />
        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={goToPrevSlide}
            className="border  text-xl p-2 bg-white dark:bg-paperDark text-primaryDark dark:border-gray-100 rounded-full dark:text-textDark"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={goToNextSlide}
            className="border  text-xl p-2 bg-white dark:bg-paperDark text-primaryDark dark:border-gray-100 rounded-full dark:text-textDark"
          >
            <FaArrowRight  />
          </button>
        </div>
      </div>
    </div>
  );
}
