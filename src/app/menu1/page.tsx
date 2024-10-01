"use client";
import { useEffect, useState } from "react";
import AskDoctors from "../Components/askDoctors";
import Banner from "../Components/banner";
import ClinicFacilities from "../Components/clinicFacilities";
import PrimaryButton from "../Components/common/PrimaryButton";
import CompanySummary from "../Components/companySummary";
import OurClinics from "../Components/ourClinics";
import OurSpeciality from "../Components/ourSpeciality";
import Testimonials from "../Components/testimonials";
import axios from "axios";
import { getTokenFromLocalStorage } from "../Components/common/utilis";

export default function Menu1() {
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinic] = useState([]);
  const [testimonials, setSetimonials] = useState([]);

  const token = getTokenFromLocalStorage();


  // fetch doctos

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/doctors`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        const data = response.data; // You don't need to call .json() here

        if (data?.success === true) {
          setDoctors(data?.data);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        // Type narrowing for AxiosError
        if (axios.isAxiosError(error)) {
          const errorMessage =
            error.response?.data?.errorMessage ||
            "Oops! Something went wrong. Try again.";

          console.error("Error", errorMessage);
        } else {
          // Handle non-Axios errors

          console.error("An unexpected error occurred:", error);
        }
      }
    };

    getDoctor();
  }, [token]);


  //  fetch our clinic
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/testimonial`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        const data = response.data; // You don't need to call .json() here

        if (data?.success === true) {
          setSetimonials(data?.data);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        // Type narrowing for AxiosError
        if (axios.isAxiosError(error)) {
          const errorMessage =
            error.response?.data?.errorMessage ||
            "Oops! Something went wrong. Try again.";

          console.error("Error", errorMessage);
        } else {
          // Handle non-Axios errors

          console.error("An unexpected error occurred:", error);
        }
      }
    };

    getTestimonials();
  }, [token]);

  //  fetch our clinic
  useEffect(() => {
    const getClinics = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/ourclinic`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        const data = response.data; // You don't need to call .json() here

        if (data?.success === true) {
          setClinic(data?.data);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        // Type narrowing for AxiosError
        if (axios.isAxiosError(error)) {
          const errorMessage =
            error.response?.data?.errorMessage ||
            "Oops! Something went wrong. Try again.";

          console.error("Error", errorMessage);
        } else {
          // Handle non-Axios errors

          console.error("An unexpected error occurred:", error);
        }
      }
    };

    getClinics();
  }, [token]);

  // console.log(testimonials);
  return (
    <div className="">
      <Banner />
      <CompanySummary doctors={doctors?.length} clinic={clinics?.length} specialist={1290} />
      <ClinicFacilities />
      <OurSpeciality />
      <AskDoctors Doctors={doctors} />
      <Testimonials testimonials={testimonials} />

      {/* create apointment banner */}
      <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-[#07ADF1] via-[#7BCFD9] to-[#B4E0CD] dark:bg-gradient-to-br dark:from-[#357A38] dark:via-[#226E5D] dark:to-[#00579B] lg:flex justify-between items-center py-7 px-5 my-10 md:px-10 md:my-20 rounded-2xl">
        <div className="my-auto">
          <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
            Ready to get started ?
          </p>

          <p className="  text-xl font-normal  dark:text-gray-300 mt-2 md:mt-5">
            Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
          </p>
        </div>

        <div className="my-auto mt-5">
          <PrimaryButton
            text="CREATE APPOINTMENT NOW!"
            bgColor="bg-white"
            textColor="text-preimary"
            darkTextColor="text-primary"
          />
        </div>
      </div>

      <OurClinics Clinics={clinics} />
    </div>
  );
}
