import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import CleinetFacilitiesCarusole from "./clientfacilitiesCarousel";

export default function ClientFacilities() {
  return (
    <div className="max-w-[1440px] mx-auto my-20  md:h-[700px] relative">
      <div className="p-1 md:pl-10 lg:pl-24 pt-32">
        <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
          Clinic Facilies
        </p>

        <div className="md:flex justify-between">
          <p className="md:w-2/3  text-xl font-normal  dark:text-gray-300 mt-5 md:mt-10">
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </p>

          <Link
            href={"/"}
            className="dark:text-textDark text-end font-bold my-auto flex gap-5 mr-5 mt-5 md:mt-0"
          >
            SEE ALL
            <FaArrowRight className="my-auto" />
          </Link>
        </div>


        {/*---------------------- slider --------------------*/}

        <CleinetFacilitiesCarusole />
      </div>

      {/* background circles */}
      <div>
        <svg
          className="w-2/3 md:w-full absolute top-0 -left-20 md:left-0 -z-30"
          width="400"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity={0.1}
            cx="100"
            cy="100"
            r="90"
            stroke="black"
            strokeWidth="0"
            fill="green"
          />
        </svg>

        <svg
          className="w-2/3 md:w-full absolute -top-36 md:top-20 lg:top-5 md:-left-36 lg:-left-80 -z-20"
          width="700"
          height="700"
          viewBox="0 0 671 645"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="335.5"
            cy="322.5"
            rx="334.5"
            ry="321.5"
            stroke="url(#paint0_linear_1_677)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_677"
              x1="-169.661"
              y1="304.873"
              x2="207.738"
              y2="821.614"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CAF50" />
              <stop offset="1" stopColor="#03ACF2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
