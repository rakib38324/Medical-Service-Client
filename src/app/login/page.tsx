"use client"
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import ban from "@/assetes/bg-10.png";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { saveToLocalStorage } from "../Components/common/utilis";

export default function Register() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Processing...");


    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; // You don't need to call .json() here

      if (data?.success === true) {
        toast.success(data.message, { id: toastId });
        saveToLocalStorage(data?.data?.token, data?.data?.user);
        router.push('/')
      } else {
        toast.error(data?.message, { id: toastId });
        console.error("Failed to register user:", response.status);
      }
    } catch (error) {
      // Type narrowing for AxiosError
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.errorMessage ||
          "Oops! Something went wrong. Try again.";
        setError(errorMessage);
        toast.error(errorMessage, { id: toastId });
        console.error("Error registering user:", errorMessage);
      } else {
        // Handle non-Axios errors
        toast.error("An unexpected error occurred.", { id: toastId });
        console.error("An unexpected error occurred:", error);
      }
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto lg:flex lg:flex-row-reverse  gap-5 p-1 my-20">
      <div className="w-full">
        <p className="text-center text-3xl md:text-4xl font-bold dark:text-textDark lg:mt-16">
          Lorem ipsum dolor sit amet
        </p>

        <p className="text-center text-xl font-normal  dark:text-gray-300 mt-5 md:mt-10">
          consectetur adipiscing elit. Suspendisse sed urna in justo euismod
          condimentum.
        </p>

        <div className="w-1/2 lg:w-[490px] lg:h-[135px] mx-auto mt-5">
          <Image className="w-full" src={ban} alt="banner" />
        </div>
      </div>
      <div className="w-full border border-primary py-5 px-2 md:py-10 md:px-14 rounded-lg bg-white dark:bg-paperDark">
        <p className="text-center text-2xl text-primaryDark dark:text-textDark font-bold">
          Login to Your Account
        </p>

        <div className="grid md:grid-cols-3 gap-5 my-10">
          <div className="bg-[#5856D6] flex justify-center p-2 rounded-lg gap-2 text-textDark text-center cursor-pointer">
            <FaFacebookF className="text-xl my-auto" />
            <p className="text-center my-auto">FACEBOOK</p>
          </div>
          <div className="bg-[#00BCD4] flex justify-center p-2 rounded-lg gap-2 text-textDark text-center cursor-pointer">
            <FaTwitter className="text-xl my-auto" />
            <p className="text-center my-auto">TWITTER</p>
          </div>
          <div className="bg-[#D84226] flex justify-center p-2 rounded-lg gap-2 text-textDark text-center cursor-pointer">
            <LiaGoogle className="text-xl my-auto" />
            <p className="text-center my-auto">GOOGLE</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 text-textSecondary">
          <hr className="my-auto md:mr-5 border-[1px]" />
          <p className="my-auto dark:text-textDark text-center">
            Or login with email
          </p>
          <hr className="my-auto md:ml-5 border-[1px]" />
        </div>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4 pt-6">
            <div className="relative h-11 w-full min-w-[200px] my-5">
              <input
                type="email"
                className="peer w-full h-full pt-5 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                placeholder="Email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
              >
                Email
              </label>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                className="peer w-full h-full pt-5 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                placeholder="Passowrd"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
              >
                Password
              </label>
            </div>

            {error && <p className="text-red-500 italic">{error}</p>}


            <div className="md:flex justify-between mt-8">
              <div className="flex gap-3">
                <input
                  className="size-6 my-auto cursor-pointer"
                  type="checkbox"
                  name="checkbox"
                  id="checbox"
                />
                <p className="text-lg dark:text-textDark my-auto">Remember</p>
              </div>
                <p className="my-auto text-primary cursor-pointer hover:border-b hover:border-primary">Forget Password?</p>
            </div>
            <div className="my-auto mt-10 w-full flex justify-center">
              <input
                type="submit"
                value="CONTINURE"
                className="w-full text-textDark px-10 py-3 bg-primary rounded-2xl cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
