import TestimonialCarusole from "./testimonialsCarousel";

export default function Testimonials() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <div className="max-w-screen-xl mx-auto p-1">
        <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
          People Testimonials
        </p>

        <p className="md:w-2/3  text-xl font-normal  dark:text-gray-300 mt-5 md:mt-10">
          Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
        </p>
      </div>

      <div>
        <TestimonialCarusole />
      </div>
      {/* background circles */}
      <div>
        <svg
          className="  absolute top-10 left-1/2 -z-30 "
          width="200"
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
          className="w-1/2  absolute -top-36 md:top-0 lg:top-5  md:right-1 -z-20"
          width="600"
          height="550"
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
