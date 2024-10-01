"use client";
import axios from "axios";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import ban from "@/assetes/bg-9.png";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Processing...");

    if (password !== conPassword) {
      toast.error("Password and repeated password do not match.", {
        id: toastId,
        duration: 4000,
      });
      setError("Password and repeated password do not match.");
      return;
    }

    const formData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/register/user-registration`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; // You don't need to call .json() here

      if (data?.success === true) {
        resetFiled();
        toast.success(
          data.message + "and Email verification link sended in your email.",
          { id: toastId }
        );
        setMessage("Email verification code sended.");
        console.log("User registered successfully:", data);
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

  const resetFiled = ()=>{
    setName("");
    setEmail("");
    setPassword("");
    setConPassword("");
    setEmail("")
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="lg:flex lg:flex-row-reverse  gap-5 p-1">
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
            Create Your Account
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
              Or register with email
            </p>
            <hr className="my-auto md:ml-5 border-[1px]" />
          </div>

          <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-4 pt-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  className="peer w-full h-full pt-5 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
                >
                  Name
                </label>
              </div>

              <div className="relative h-11 w-full min-w-[200px] my-5">
                <input
                  type="email"
                  className="peer w-full h-full pt-5 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                  placeholder="Email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
                >
                  Email
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    className="peer w-full h-full pt-5 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                    placeholder="Password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
                  >
                    Password
                  </label>
                </div>

                <div className="relative h-11 w-full min-w-[200px] mt-5 md:mt-0">
                  <input
                    type="password"
                    className="peer w-full h-full pt-5 text-sm font-normal transition-all bg-transparent border-b-2 border-blue-gray-200  outline-none placeholder-transparent focus:border-primary dark:dark:text-primaryLight"
                    placeholder="Repeat Password"
                    id="repeatPassword"
                    required
                    value={conPassword}
                    onChange={(e) => setConPassword(e.target.value)}
                  />
                  <label
                    htmlFor="repeatPassword"
                    className="absolute left-0 top-0 text-textSecondary text-base transition-all duration-300 peer-placeholder-shown:top-5  peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-primary peer-focus:text-xs dark:text-primaryLight"
                  >
                    Repeat Password
                  </label>
                </div>
              </div>

              {message && <p className="text-green-500 italic">{message}</p>}

              {message && (
                <div className=" mx-auto text-center my-20">
                  <p className="text-3xl  font-bold">Account Verification</p>
                  <p className="text-xl my-2">
                    Thank you so much for Register with us. Check your email. We
                    send a verification link.
                  </p>
                </div>
              )}

              {error && <p className="text-red-500 italic">{error}</p>}

              <div className="md:flex justify-between mt-8">
                <div className="flex gap-3">
                  <input
                    className="size-6 mt-2 cursor-pointer"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    required
                  />
                  <p className="text-lg dark:text-textDark">
                    I have read and accept the Terms of <br />
                    <span className="text-primary cursor-pointer hover:border-b hover:border-primary">
                      Service & Privacy Policy *
                    </span>
                  </p>
                </div>
                <div className="my-auto mt-5 md:mt-0 flex justify-center">
                  <input
                    type="submit"
                    value="CONTINUE"
                    className="text-textDark px-10 py-1 bg-primary rounded-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
