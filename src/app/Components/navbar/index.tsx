"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/assetes/company-icon.png";
import ThemeToggle from "../Theme/ThemeToggle";
import { IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PrimaryButton from "../common/PrimaryButton";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { getUserFromLocalStorage, removeUserAndToken } from "../common/utilis";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  const [settingPopUp, setSettingPopUp] = useState(false);
  const [mobileNavPopUp, setMobileNavPopUp] = useState(false);
  const pathname = usePathname(); // Get the current path

  const userInfo = getUserFromLocalStorage();

  const navigation = [
    { label: "Menu1", url: "/" },
    { label: "Menu2", url: "/menu2" },
    { label: "Menu3", url: "/menu3" },
    { label: "Menu4", url: "/menu4" },
    { label: "Menu5", url: "/menu5" },
  ];

  useEffect(() => {
    setMounted(true); // Ensures that component has mounted on the client
  }, []);

  if (!mounted) {
    return null; // Prevents rendering until component is mounted on the client
  }

  return (
    <div className="p-[1rem] w-full z-50 ">
      <div className="relative max-w-screen-xl mx-auto px-5 lg:px-0 flex items-center justify-between z-50">
        <div className="flex gap-10">
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

          <nav className="hidden lg:flex items-center justify-between">
            <ul className="flex gap-[24px] ">
              {
                navigation?.map((item) => (
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

        <div className="flex justify-between mx-5">
          <div className="flex justify-between gap-6 text-base">
            {userInfo && (
              <div
                onClick={() => removeUserAndToken()}
                className="hidden lg:block"
              >
                <PrimaryButton
                  link="/login"
                  text="LOGOUT"
                  textColor="text-white"
                  darkTextColor="text-text-Dark"
                  bgColor="bg-primary"
                />
              </div>
            )}
            <Link
              href={"/login"}
              className={`hidden ${
                userInfo ? "lg:hidden" : "lg:block"
              } my-auto font-bold dark:text-textDark`}
            >
              LOGIN
            </Link>

            <div className={`hidden ${userInfo ? "lg:hidden" : "lg:block"} `}>
              <PrimaryButton
                link="/register"
                text="REGISTER"
                textColor="text-white"
                darkTextColor="text-text-Dark"
                bgColor="bg-secondary"
              />
            </div>

            <span className="hidden lg:block border-[1px] border-gray-300 my-2"></span>
            <IoMdSettings
              onClick={() => setSettingPopUp(!settingPopUp)}
              className="hidden lg:block text-gray-500 my-auto text-3xl cursor-pointer dark:text-textDark"
            />

            <GiHamburgerMenu
              onClick={() => setMobileNavPopUp(!mobileNavPopUp)}
              className="lg:hidden text-gray-500 my-auto text-3xl cursor-pointer dark:text-textDark"
            />
          </div>
        </div>

        {/* -----------------Setting Popup-------------------------- */}

        {settingPopUp && (
          <div className="absolute top-16 right-4 w-80 h-32 bg-white dark:bg-paperDark border dark:text-textDark shadow-md z-[1000]">
            <div className=" w-1/4 h-32 bg-primary ">
              <RxCross2
                onClick={() => setSettingPopUp(false)}
                className="text-2xl absolute top-2 left-1 cursor-pointer"
              />

              <div className="absolute top-2 left-12 ">
                <div className="flex gap-3">
                  <FaUserCircle className="text-6xl text-primaryDark bg-white rounded-full" />

                  <div className="my-auto">
                    <p className="text-base font-bold">Aminul Islam Rakib</p>
                    <p className="text-xs text-textSecondary dark:text-textDark">
                      Software Engineer
                    </p>
                    <p className="text-xs mt-1 font-semibold mb-5">
                      120 Connection
                    </p>
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

        {/* Mobile navbar proup */}

        {mobileNavPopUp && (
          <div className="absolute top-16 -right-4 w-4/5 md:w-1/2 lg:hidden min-h-screen bg-white dark:bg-paperDark border dark:text-textDark shadow-md z-[1000]">
            <div className="relative p-5">
              <RxCross2
                onClick={() => setMobileNavPopUp(false)}
                className="text-4xl absolute top-5 left-5 cursor-pointer"
              />

              {/* Profile section */}
              <div className="flex gap-3 mt-20">
                <FaUserCircle className="text-6xl text-primaryDark bg-white rounded-full" />

                <div className="my-auto">
                  <p className="text-base font-bold">Aminul Islam Rakib</p>
                  <p className="text-xs text-textSecondary dark:text-textDark">
                    Software Engineer
                  </p>
                  <p className="text-xs mt-1 font-semibold mb-5">
                    120 Connection
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <p className="font-semibold my-auto">Them:</p>
                <ThemeToggle />
              </div>

              <nav className=" lg:hidden ">
                <ul className="">
                  {navigation?.map((item) => (
                    <li key={item.label} className="relative group">
                      <Link
                        href={item.url}
                        className={`text-base leading-[18px] font-bold flex flex-col gap-1 mt-5
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
                          }  border-[3px] w-1/4 border-primary rounded-md`}
                        ></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10">
                {userInfo ? (
                  <div onClick={() => removeUserAndToken()} className="my-5">
                    <PrimaryButton
                      link="/login"
                      text="LOGOUT"
                      textColor="text-white"
                      darkTextColor="text-text-Dark"
                      bgColor="bg-primary"
                      weidth="w-full"
                    />
                  </div>
                ) : (
                  <>
                    <div className="my-5">
                      <PrimaryButton
                        link="/login"
                        text="LOGIN"
                        textColor="text-white"
                        darkTextColor="text-text-Dark"
                        bgColor="bg-primary"
                        weidth="w-full"
                      />
                    </div>

                    <PrimaryButton
                      link="/register"
                      text="REGISTER"
                      textColor="text-white"
                      darkTextColor="text-text-Dark"
                      bgColor="bg-secondary"
                      weidth="w-full"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
