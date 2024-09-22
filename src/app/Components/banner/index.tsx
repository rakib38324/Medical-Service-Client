import Image from "next/image";
import banner1 from'@/assetes/bg-1.png'
import PrimaryButton from "../common/PrimaryButton";

export default function Banner() {
  return (
    <div className="max-w-[1434px] mx-auto relative ">
        <div className="max-w-screen-xl mx-auto pt-20 z-50">
            <p className="text-5xl font-bold dark:text-textDark">Lorem ipsum dolor amet</p>
            <p className="text-3xl font-normal text-textSecondary dark:text-gray-300 w-1/2 mt-10">Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.</p>
            
            <div className="mt-10 flex gap-5">
                <p className="text-secondary my-auto font-bold dark:text-secondaryLight dark:font-normal">MORE INFOR</p>
                <PrimaryButton text="REGISTER NOW" textColor="text-white" darkTextColor="text-textDark" bgColor="bg-primary" />
            </div>
        </div>
      <div className="">
        <svg
          className="absolute -top-24 right-0 -z-50"
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
         className="absolute -top-24 right-0 -z-10"
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
        

        <div className="absolute top-0 right-0">
            <Image className="w-[620px]" src={banner1} alt="Banner-1" />
        </div>
      </div>
    </div>
  );
}
