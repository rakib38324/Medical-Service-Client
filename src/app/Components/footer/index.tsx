import Image from "next/image";
import Link from "next/link";
import logo from "@/assetes/company-icon.png";
import bg from "@/assetes/bg-6.png";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1440px]  mx-auto bg-red-500 relative my-5 md:my-0">
      <div className="absolute top-1/2 left-0  w-full max-w-screen-xl mx-auto ">
        <div className="pt-5 grid lg:grid-cols-6 gap-5">
          <div className="lg:col-span-2">
            <div className="">
              <Link href="/" className="flex gap-1">
                <Image
                  className={`w-[54px] h-[57px] cursor-pointer`}
                  src={logo}
                  alt="Logo"
                />
                <p className="my-auto text-4xl leading-[43px] font-bold dark:text-textDark">
                  Medical
                </p>
              </Link>
            </div>

            <p className="text-xl text-textSecondary dark:text-textDark my-10">
              Nam posuere accumsan porta. Integer id tincidunt sit amet sed
              libero.
            </p>
            <p className="text-xl text-textSecondary dark:text-textDark my-5">
              © Skyrev Theme 2021
            </p>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="text-primary text-lg font-bold mt-5 mb-10">COMPANY</p>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Donec dignissim
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Curabitur egestas
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Nam posuere
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Aenean facilisis
            </Link>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="text-primary text-lg font-bold mt-5 mb-10">SERVICE</p>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Cras convallis
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Vestibulum faucibus
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Quisque lacinia purus
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Aliquam nec ex
            </Link>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="text-primary text-lg font-bold mt-5 mb-10">ESOURCE</p>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Suspendisse porttitor
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Nam posuere
            </Link>
            <Link
              href={"/"}
              className="text-textSecondary dark:text-textDark text-base"
            >
              Curabitur egestas
            </Link>
          </div>

          <div className="">
            <div className="flex gap-3 lg:justify-end mt-20">
              <p className="p-2 bg-gray-300 rounded-full text-primary text-2xl">
                <GrFacebookOption />
              </p>
              <p className="p-2 bg-gray-300 rounded-full text-primary text-2xl">
                <RiLinkedinFill />
              </p>
              <p className="p-2 bg-gray-300 rounded-full text-primary text-2xl">
                <IoLogoTwitter />
              </p>
              <p className="p-2 bg-gray-300 rounded-full text-primary text-2xl">
                <CiInstagram />
              </p>
            </div>

            <div className="flex lg:justify-end gap-3 mt-5 cursor-pointer dark:bg-paperDark my-5 dark:text-textDark">
              <div className="border border-primary p-2 rounded-md flex gap-8">
                <div className="flex gap-1">
                  <BiWorld className="my-auto text-3xl" />
                  <p className="text-base my-auto ">English - En</p>
                </div>
                <FaAngleDown className="my-auto text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <svg
          className="w-1/2  absolute -top-60 -left-0 -z-10"
          width="592"
          height="547"
          viewBox="0 0 592 547"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.196894"
            cx="246.5"
            cy="345.5"
            r="345.5"
            fill="url(#paint0_linear_1_554)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_554"
              x1="-275.273"
              y1="326.557"
              x2="134.925"
              y2="866.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8E6C9" />
              <stop offset="1" stopColor="#B3E5FC" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="w-1/2 md:w-2/3 absolute -top-80 -left-24 rotate-6 -z-10"
          width="772"
          height="598"
          viewBox="0 0 772 598"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="352" cy="419.5" rx="419" ry="418.5" stroke="#B3E5FC" />
        </svg>

        <div className="absolute -bottom-80 right-0 -z-10">
          <Image src={bg} alt="banner" />
        </div>
      </div>
    </div>
  );
}
