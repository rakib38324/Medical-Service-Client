"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Components/loading";

const EmailVerification: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // Move useRouter here
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get email and token from query parameters
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const formData = {
    email,
    token,
  };

  console.log(email, token);

  // Verify email function
  const verifyEmail = async () => {
    const toastId = toast.loading("Verifying your email...");
    setIsLoading(true);
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

      const data = response.data;

      if (data?.success) {
        toast.success(data.message, { id: toastId });
        setMessage(data.message);
        router.push("/login"); // Now works properly
      } else {
        toast.error(data.message, { id: toastId });
      }
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.errorMessage
          ? error.response.data.errorMessage
          : "Oops! Something went wrong. Try again.";
      setError(errorMessage);
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  // Resend verification link function
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

      const data = response.data;

      if (data?.success) {
        toast.success(data.message, { id: toastId, duration: 6000 });
        setMessage(data.message);
        setError('');
      } else {
        toast.error(data.message, { id: toastId });
      }
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.errorMessage
          ? error.response.data.errorMessage
          : "Oops! Something went wrong. Try again.";
      setError(errorMessage);
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20 dark:text-textDark text-center p-1">
      <div>
        <p className="text-7xl font-bold">Account Verification</p>
        <p className="text-4xl my-2">Thank you so much for verifying your email</p>
      </div>

      {message && (
        <p className="my-10 text-2xl text-green-600 italic">
          {message}
        </p>
      )}

      {email && token && (
        <button
          onClick={verifyEmail}
          className="px-6 py-3 my-5 text-textDark bg-secondary rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Verify your email"}
        </button>
      )}

      {error && (
        <div>
          <p className="my-10 text-2xl text-red-600 italic">
            Error: {error}
          </p>

          <button
            onClick={handleResendVerificationLink}
            className="px-6 py-3 text-textDark bg-secondary rounded-lg"
          >
            Re-Send Verification Link
          </button>
        </div>
      )}
    </div>
  );
};

// Wrapping in Suspense for loading state
export default function EmailVerificationPage() {
  return (
    <Suspense fallback={<Loading />}>
      <EmailVerification />
    </Suspense>
  );
}
