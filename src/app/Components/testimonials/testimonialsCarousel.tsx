"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import card from "@/assetes/bg-7.png";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

export type TTestimonial = {
  _id: string; // Add the ID field for each testimonial
  name: string;
  designation: string;
  comment: string;
  start: number;
  img: string;
};

interface TestimonialCarouselProps {
  testimonials: TTestimonial[]; // Define the prop type for testimonials
}

const TestimonialCarusole: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  // Function to generate slides from testimonials
  const generateSlides = (data: TTestimonial[]) => {
    const slides: TTestimonial[][] = []; // Array of arrays to hold the slides
    for (let i = 0; i < data.length; i += 3) {
      slides.push(data.slice(i, i + 3)); // Take 3 items for each slide
    }
    return slides;
  };

  const slides = generateSlides(testimonials); // Generate slides

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="grid lg:grid-cols-3 gap-5 mt-10">
      <div className="lg:col-span-2">
        <div className="carousel w-full relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item absolute w-full transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mt-20 lg:mt-5 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
                {slide.map((testimonial) => (
                  <div key={testimonial._id} className="size-72 mx-auto bg-gradient-to-tr from-white via-slate-100 to-white dark:bg-bg-gradient-to-tr dark:from-defaultDark dark:to-defaultDark relative">
                    <div className="w-full h-full bg-white dark:bg-paperDark rounded-full rounded-tl-none p-10">
                      <p className="text-base dark:text-textDark">{testimonial.comment}</p>

                      <div className="mt-10 flex gap-3">
                        {[...Array(testimonial.start)].map((_, i) => (
                          <FaStar key={i} className="my-auto text-yellow-300" />
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 flex gap-4">
                      <div className="my-auto">
                        <p className="text-xl font-bold dark:text-textDark">{testimonial.name}</p>
                        <p className="text-sm text-textSecondary dark:text-textDark italic">{testimonial.designation}</p>
                      </div>

                      <div className="size-20">
                        <Image
                          className="bg-secondary rounded-full rounded-br-none"
                          src={testimonial.img}
                          alt={testimonial.name}
                          width={50} // Specify width for image
                          height={50} // Specify height for image
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:col-span-1">
        <div>
          <Image src={card} alt="banner" />
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={goToPrevSlide}
            className="border text-xl p-2 bg-white dark:bg-paperDark text-primaryDark dark:border-gray-100 rounded-full dark:text-textDark"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={goToNextSlide}
            className="border text-xl p-2 bg-white dark:bg-paperDark text-primaryDark dark:border-gray-100 rounded-full dark:text-textDark"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarusole;
