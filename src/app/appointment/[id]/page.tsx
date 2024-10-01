"use client";

import { useEffect, useState } from "react";
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from "../../Components/common/utilis";
import { useRouter } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/app/Components/checkoutForm";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { TDoctor } from "@/app/Components/askDoctors";

interface AppointmentPageProps {
  params: {
    id: string; // Assuming `id` is always a string (doctor ID)
  };
}

interface PaymentIntentResponse {
  success: boolean;
  data: TDoctor; // Assuming 'data' contains the clientSecret
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export type Tuser = {
  name: string;
  email: string;
  _id: string;
};

export default function AppointmentPage({ params }: AppointmentPageProps) {
  const router = useRouter();
  const [doctorInfo, setDoctorInfo] = useState<TDoctor>();
  const [error, setError] = useState({});
  const [paymentId, setPaymentId] = useState("");
  const [userInfo, setUserInfo] = useState<Tuser>();
  const [takeAppointment, setTakeAppointment] = useState(true);

  // This assumes the token can be a string or null (depending on your implementation)
  const token = getTokenFromLocalStorage() as string | null;
  const { id } = params; // Get the doctor ID from the URL



  const user: any = getUserFromLocalStorage();
  useEffect(() => {
    if (user && !userInfo) {
      const fetchMe = async () => {
        try {
          const response: AxiosResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`,

            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`, // Ensure the token format is correct
              },
            }
          );

          if (response.data?.success) {
            setUserInfo(response.data.data);
          } else {
            console.error("Failed to create Appointment:", response.status);
          }
        } catch (error) {
          // Type narrowing for AxiosError
          if (axios.isAxiosError(error)) {
            const errorMessage =
              (error.response?.data as { errorMessage?: string })
                ?.errorMessage || "Oops! Something went wrong. Try again.";

            setError(errorMessage);

            console.error("Error", errorMessage);
          } else {
            console.error("An unexpected error occurred:", error);
          }
        }
      };

      fetchMe();
    }
  }, [user]);

  // Check the user token and redirect if not available
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  useEffect(() => {
    if (takeAppointment) {
      const takeapointment = async () => {
        if (id && paymentId && userInfo) {
          const appointmentData = {
            doctorId: id,
            userId: userInfo._id,
            paymentId,
          };

          console.log(appointmentData);

          try {
            const response: AxiosResponse<PaymentIntentResponse> =
              await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/appointment/create_appointment`,
                appointmentData,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `${token}`, // Ensure the token format is correct
                  },
                }
              );

            if (response.data?.success) {
              setTakeAppointment(false);
              router.push("/");
            } else {
              console.error("Failed to create Appointment:", response.status);
            }
          } catch (error) {
            // Type narrowing for AxiosError
            if (axios.isAxiosError(error)) {
              const errorMessage =
                (error.response?.data as { errorMessage?: string })
                  ?.errorMessage || "Oops! Something went wrong. Try again.";

              setError(errorMessage);

              console.error("Error", errorMessage);
            } else {
              console.error("An unexpected error occurred:", error);
            }
          }
        }
      };
      takeapointment();
    }
  }, [paymentId, id, userInfo, router, setTakeAppointment]);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<PaymentIntentResponse> = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/doctors/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`, // Ensure the token format is correct
            },
          }
        );

        if (response.data?.success) {
          setDoctorInfo(response.data.data);
        } else {
          console.error("Failed to fetch doctor data:", response.status);
        }
      } catch (error) {
        // Type narrowing for AxiosError
        if (axios.isAxiosError(error)) {
          const errorMessage =
            (error.response?.data as { errorMessage?: string })?.errorMessage ||
            "Oops! Something went wrong. Try again.";

          setError(errorMessage);
          console.error("Error", errorMessage);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    })();
  }, [id, token]);

  console.log(error)
  return (
    <div className="max-w-screen-xl mx-auto my-20  dark:text-textDark md:flex justify-center items-center gap-5 p-1">
      <div>
        <p className="text-2xl md:text-4xl font-semibold text-center">
          Make payment for this Appointment
        </p>

        <div className="my-20 px-4 md:px-0">
          {doctorInfo && (
            <div className="relative h-44 bg-defaultWhite dark:bg-paperDark rounded-lg p-4 mx-5">
              <div className="absolute -top-8 -left-8 size-20">
                <Image
                  width={200}
                  height={200}
                  className="rounded-full rounded-tl-none bg-secondaryLight"
                  src={doctorInfo?.img ? doctorInfo?.img : "/"} // You can dynamically set doctorInfo image if available
                  alt={doctorInfo.name}
                />
              </div>
              <div className="ml-10 ">
                <p className="text-xl font-bold text-textPrimary dark:text-textDark">
                  {doctorInfo.name}
                </p>
                <p className="my-2 text-textSecondary dark:text-textDark">
                  {doctorInfo.specialist}
                </p>
              </div>
              <hr className="my-4" />
              <div className="text-textSecondary dark:text-textDark flex gap-2 justify-around">
                <div className="flex gap-3 ">
                  <AiFillLike className="my-auto text-xl " />
                  <p className="my-auto">{doctorInfo.like}</p>
                </div>
                <div className="flex gap-3 ">
                  <BsHandbagFill className="my-auto text-xl" />
                  <p className="my-auto">{doctorInfo.experience} Year</p>
                </div>

                <p className="text-3xl font-semibold text-primaryDark dark:text-textDark">
                  Fee: ${doctorInfo.amount}
                </p>
              </div>
            </div>
          )}
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm id={id} setPaymentId={setPaymentId} />
        </Elements>
      </div>
    </div>
  );
}
