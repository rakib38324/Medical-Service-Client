/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ban from "@/assetes/bg-8.png";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const EmailVerification: React.FC = () => {
  //   const { data: verifyEmail, isLoading, error } = useVerifyEmailQuery(token);

  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const queryToken = searchParams.get("token");
    const queryEmail = searchParams.get("email");

    setToken(queryToken || null);
    setEmail(queryEmail || null);
  }, [searchParams]);

  const formData = {
    email,
    token,
  };

  const verifyEmail = async () => {
    const toastId = toast.loading("Verifing your email...");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/email-verification`,
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
        router.push("/login");
      } else {
        toast.error(data?.message, { id: toastId });
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

  useEffect(() => {
    if (email && token) {
      verifyEmail();
    }
  }, [email, token]);

  const handleResendVerificationLink = async () => {
    const toastId = toast.loading("Resending...");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/resend-email-verification`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; // You don't need to call .json() here

      if (data?.success === true) {
        toast.success(data.message, { id: toastId, duration: 6000 });
        setMessage(data?.message);
      } else {
        toast.error(data?.message, { id: toastId });
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
    <div className="max-w-screen-xl mx-auto my-20  dark:text-textDark  text-center p-1">
      <div>
        <p className="text-7xl  font-bold">Account Verification</p>
        <p className="text-4xl my-2">
          Thank you so much for verifying your email
        </p>
      </div>

      {message && (
        <p className="my-10 text-2xl text-green-600 items-center italic">
           {message}
        </p>
      )}

      {error && (
        <div>
          <p className="my-10 text-2xl text-red-600 items-center italic">
            Error: {error}
          </p>

          <button onClick={handleResendVerificationLink} className="px-6 py-3 text-textDark bg-secondary rounded-lg">
            Re-Send Verification Link
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
