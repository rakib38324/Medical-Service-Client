"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import logo from "@/assetes/company-icon.png";
import ThemeToggle from "../Theme/ThemeToggle";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PrimaryButton from "../common/PrimaryButton";

const Navbar = () => {
  const [settingPopUp, setSettingPopUp] = useState(false);
  const pathname = usePathname(); // Get the current path

  const navigation = [
    { label: "Menu1", url: "/" },
    { label: "Menu2", url: "/menu2" },
    { label: "Menu3", url: "/menu3" },
    { label: "Menu4", url: "/menu4" },
    { label: "Menu5", url: "/menu5" },
  ];

  return (
    <div className="py-[1rem] w-full z-50 ">
      <div className="relative max-w-screen-xl mx-auto px-5 lg:px-0 flex items-center justify-between">
        <div className="flex gap-10">
          <Link href="/" className="flex gap-1">
            <Image
              className={`w-[54px] h-[57px] cursor-pointer`}
              src={logo}
              alt="Logo"
            />
            <p className="my-auto text-4xl leading-[43px] font-bold dark:text-textDark">Medical</p>
          </Link>

          <nav className="hidden lg:flex items-center justify-between">
            <ul className="flex gap-[24px] ">
              {navigation?.map((item) => (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.url}
                    className={`text-base leading-[18px] font-bold flex flex-col gap-1 mt-3
                    ${
                      pathname === item.url
                        ? "text-primaryDark dark:text-primaryLight" // Highlight active route
                        : "text-textSecondary dark:text-textDark"
                    }
                    `}
                  >
                    {item?.label}
                    <span
                      className={`${
                        pathname === item.url ? "block" : "hidden"
                      }  border-[3px] w-3/5 border-primary rounded-md`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className=" flex justify-between mx-5">
          <div className="flex justify-between gap-6 text-base">
            <Link href={"/login"} className="my-auto font-bold dark:text-textDark">
              LOGIN
            </Link>
            {/* <Link
              href={"/register"}
              className="px-10 py-2 bg-secondary rounded-3xl text-white dark:text-textDark font-bold"
            >
              REGISTER
            </Link> */}
            <PrimaryButton text="REGISTER" textColor="text-white" darkTextColor="text-text-Dark" bgColor="bg-secondary" />
            <span className="border-[1px] border-gray-300 my-2"></span>
            <IoMdSettings
              onClick={() => setSettingPopUp(!settingPopUp)}
              className="text-gray-500 my-auto text-3xl cursor-pointer dark:text-textDark"
            />
          </div>
        </div>

        {/* -----------------Setting Popup-------------------------- */}

        {settingPopUp && (
          <div className="absolute top-16 right-4 w-80 h-32 bg-white dark:bg-paperDark border dark:text-textDark shadow-md z-20">
            <div className=" w-1/4 h-32 bg-primary">
              <div className="absolute top-2 left-12 ">
                <div className="flex gap-3">
                  <FaUserCircle className="text-6xl text-primaryDark bg-white rounded-full" />

                  <div className="my-auto">
                    <p className="text-base font-bold">Aminul Islam Rakib</p>
                    <p className="text-xs text-textSecondary dark:text-textDark">Software Engineer</p>
                    <p className="text-xs mt-1 font-semibold mb-5">120 Connection</p>
                    <ThemeToggle />
                  </div>
                </div>

                <div className="mt-5 ml-14">
                    {/* <p className="font-semibold">Them:</p> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <ButtonPrimary text={"Login"} link='/login' /> */}
        {/* 
        <div className=" flex gap-4 items-center">
          <ThemeToggle />

          <button className=" " onClick={() => setOpen(true)}>
            <FaBars className="text-xl dark:text-white" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
