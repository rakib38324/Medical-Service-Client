import { useState, useEffect } from "react";
import PrimaryButton from "../common/PrimaryButton";
import Image from "next/image";
import banner1 from "@/assetes/bg-1.png";
import banner2 from "@/assetes/bg-2.png";
import banner3 from "@/assetes/bg-3.png";

const BannerCarousel = () => {
  const slider1 = () => {
    return (
      <div className="">
        <div className="max-w-screen-xl mx-auto pt-60 md:pt-5 lg:pt-20  p-2 relative -z-10">
          <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
            Lorem ipsum dolor amet
          </p>
          <p className="text-xl font-normal text-textSecondary dark:text-gray-300 md:w-1/2 mt-5 md:mt-10">
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </p>

          <div className="mt-16 flex gap-5 ">
            <p className="cursor-pointer text-secondary my-auto font-bold dark:text-secondaryLight dark:font-normal">
              MORE INFOR
            </p>
            <PrimaryButton
              link="/register"
              text="REGISTER NOW"
              textColor="text-white"
              darkTextColor="text-textDark"
              bgColor="bg-primary"
            />
          </div>

          <div className=" mt-10 md:mt-20 lg:mt-36 lg:w-11/12 mx-auto md:flex gap-10 justify-around">
            <div className="my-5 md:my-0">
              <p className="md:text-xl text-3xl text-primary dark:text-primaryLight">
                Business Solution
              </p>
              <p className="text-lg dark:text-textDark">
                Interdum et malesuada fames ac ante…
              </p>
              <span
                className={`block border-[3px] w-1/2 border-primary rounded-md `}
              ></span>
            </div>

            <span className="my-2 border-2"></span>

            <div className="my-5 md:my-0">
              <p className="md:text-xl text-3xl dark:text-textDark">
                Free project quote
              </p>
              <p className="text-lg dark:text-textDark">
                Interdum et malesuada fames ac ante…
              </p>
            </div>

            <span className="my-2 border-2"></span>

            <div className="my-5 md:my-0">
              <p className="md:text-xl text-3xl dark:text-textDark">
                Nulla lobortis nunc
              </p>
              <p className="text-lg dark:text-textDark">
                Interdum et malesuada fames ac ante…
              </p>
            </div>
          </div>
        </div>

        {/* Background images */}
        <div className="">
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
                <stop stopColor="#C8E6C9" />
                <stop offset="1" stopColor="#B3E5FC" />
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
                <stop stopColor="#4CAF50" />
                <stop offset="1" stopColor="#03ACF2" />
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
  };
  const slider2 = () => {
    return (
      <div>
        <div className="max-w-screen-xl mx-auto pt-60 md:pt-5 lg:pt-20 p-2 relative z-10">
          <div>
            <div className="md:pl-[55%] relative z-10">
              <p className=" text-3xl md:text-5xl font-bold dark:text-textDark">
                Lorem ipsum dolor amet
              </p>
              <p className=" text-xl font-normal text-textSecondary dark:text-gray-300 lg:w-1/2 mt-5 md:mt-10">
                Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum
                lobortis.
              </p>
              <div className="mt-10 flex gap-5 z-10">
                <p className="cursor-pointer text-secondary my-auto font-bold dark:text-secondaryLight dark:font-normal">
                  MORE INFOR
                </p>
                <PrimaryButton
                  link="/register"
                  text="REGISTER NOW"
                  textColor="text-white"
                  darkTextColor="text-textDark"
                  bgColor="bg-primary"
                />
              </div>
            </div>

            <div className="mt-10 md:mt-20 lg:mt-36 lg:w-11/12 mx-auto md:flex gap-10 justify-around">
              <div className="my-5 md:my-0">
                <p className="md:text-xl text-3xl dark:text-textDark">
                  Business Solution
                </p>
                <p className="text-lg dark:text-textDark">
                  Interdum et malesuada fames ac ante…
                </p>
              </div>

              <span className="my-2 border-2"></span>

              <div className="my-5 md:my-0">
                <p className="md:text-xl text-3xl dark:text-primaryLight text-primary">
                  Free project quote
                </p>
                <p className="text-lg dark:text-textDark">
                  Interdum et malesuada fames ac ante…
                </p>
                <span
                  className={`block border-[3px] w-1/2 border-primary rounded-md `}
                ></span>
              </div>

              <span className="my-2 border-2"></span>

              <div className="my-5 md:my-0">
                <p className="md:text-xl text-3xl dark:text-textDark ">
                  Nulla lobortis nunc
                </p>
                <p className="text-lg dark:text-textDark">
                  Interdum et malesuada fames ac ante…
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background images */}
        <div className="-z-10">
          <svg
            className="w-2/3 absolute -top-64 md:-top-36 lg:-top-24 left-0 md:-left-32 -z-10 "
            width="664"
            height="428"
            viewBox="0 0 664 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.500465"
              d="M664 2.99758e-06C664 236.378 361.409 428 -11.8545 428C-11.8545 251.692 -11.8545 236.378 -11.8545 1.82543e-05C-385.118 1.82543e-05 472.041 5.60434e-05 -11.8545 1.82543e-05C329.672 -1.00367e-05 338.471 2.99758e-06 664 2.99758e-06Z"
              fill="url(#paint0_linear_1_678)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_678"
                x1="-861.364"
                y1="170.162"
                x2="-449.201"
                y2="1026.68"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C8E6C9" />
                <stop offset="1" stopColor="#B3E5FC" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="w-2/3 md:w-full lg:w-1/2 absolute -top-96 md:-top-80 lg:-top-34 left-0 -z-10"
            width="721"
            height="612"
            viewBox="0 0 721 612"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M720 0.5C720 80.8033 701.403 160.32 665.269 234.511C629.136 308.702 576.175 376.113 509.41 432.896C442.644 489.679 363.382 534.722 276.149 565.452C188.916 596.183 95.4204 612 0.999969 612L1 0.5H720Z"
              stroke="url(#paint0_linear_1_677)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_677"
                x1="-1084.83"
                y1="-33.0266"
                x2="-397.789"
                y2="1030.07"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4CAF50" />
                <stop offset="1" stopColor="#03ACF2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute top-0 left-0 md:top-12 md:-right-0 lg:top-0 lg:right-0 -z-10 ">
            <Image
              className="md:w-6/12 lg:w-[620px]"
              src={banner2}
              alt="Banner-1"
            />
          </div>
        </div>
      </div>
    );
  };
  const slider3 = () => {
    return (
      <div className="">
        <div className="max-w-screen-xl mx-auto  md:pt-5 lg:pt-20 p-2 relative z-10 ">
          <div className="">
            <div className="text-center">
              <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
                Lorem ipsum dolor amet
              </p>
              <p className="text-xl text-center font-normal text-textSecondary dark:text-gray-300  mt-5 md:mt-10">
                Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum
                lobortis.
              </p>
              <div className=" flex justify-center gap-5 my-5">
                <p className="cursor-pointer text-secondary my-auto font-bold dark:text-secondaryLight dark:font-normal">
                  MORE INFOR
                </p>
                <PrimaryButton
                  link="/register"
                  text="REGISTER NOW"
                  textColor="text-white"
                  darkTextColor="text-textDark"
                  bgColor="bg-primary"
                />
              </div>
            </div>

            <div className="flex justify-center my-10">
              <Image className="w-full md:w-fit" src={banner3} alt="background" />
            </div>

            <div className="mt-3 lg:w-11/12 mx-auto  md:flex gap-10 justify-around">
              <div className="my-5 md:my-0">
                <p className="md:text-xl text-3xl dark:text-textDark">
                  Business Solution
                </p>
                <p className="text-lg dark:text-textDark">
                  Interdum et malesuada fames ac ante…
                </p>
              </div>

              <span className="my-2 border-2"></span>

              <div className="my-5 md:my-0">
                <p className="md:text-xl text-3xl dark:text-textDark">
                  Free project quote
                </p>
                <p className="text-lg dark:text-textDark">
                  Interdum et malesuada fames ac ante…
                </p>
              </div>

              <span className="my-2 border-2"></span>

              <div className="my-5 md:my-0">
                <p className="md:text-xl text-3xl dark:text-primaryLight text-primary">
                  Nulla lobortis nunc
                </p>
                <p className="text-lg dark:text-textDark">
                  Interdum et malesuada fames ac ante…
                </p>
                <span
                  className={`block border-[3px] w-1/2 border-primary rounded-md `}
                ></span>
              </div>
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
    }, 5000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalSlides]);

  return (
    <div className="carousel w-full min-h-screen md:min-h-[600px] relative">
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
      {/* Navigation Buttons */}
      {/* <div className="absolute left-5 right-5  top-56 md:top-60 flex -translate-y-1/2 transform justify-between items-center bg-red-600 z-0">
        <button onClick={goToPrevSlide} className="btn btn-circle text-2xl px-4 py-1 border border-gray-600 dark:border-gray-100 rounded-full dark:text-textDark">
          ❮
        </button>
        <button onClick={goToNextSlide} className="btn btn-circle text-2xl px-4 py-1 border border-gray-600 dark:border-gray-100 rounded-full dark:text-textDark">
          ❯
        </button>
      </div> */}
    </div>
  );
};

export default BannerCarousel;
