"use client";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import PrimaryButton from "../common/PrimaryButton";
import Image from "next/image";
import d1 from "@/assetes/d-1.png";
import d2 from "@/assetes/d-1.png";
import d3 from "@/assetes/d-1.png";
import bg6 from "@/assetes/bg-6.png";

export default function AskDoctors() {
  const [navigator, setNavigator] = useState(1);

  const specialists = [
    {
      id: 1,
      label: "All",
      doctors: [
        {
          id: 1,
          name: "Aminul Islam Rakib",
          specialist: "Orthopedic",
          like: "92%",
          experience: 4,
          img: d1,
        },
        {
          id: 2,
          name: "Sarah Johnson",
          specialist: "Nutritionist",
          like: "88%",
          experience: 7,
          img: d2,
        },
        {
          id: 3,
          name: "David Miller",
          specialist: "Pediatric",
          like: "94%",
          experience: 5,
          img: d3,
        },
        {
          id: 4,
          name: "Emily Brown",
          specialist: "Anaesthetic",
          like: "89%",
          experience: 6,
          img: d1,
        },
        {
          id: 5,
          name: "John Doe",
          specialist: "Orthopedic",
          like: "85%",
          experience: 8,
          img: d2,
        },
      ],
    },
    {
      id: 2,
      label: "Orthopedic",
      doctors: [
        {
          id: 1,
          name: "Aminul Islam Rakib",
          specialist: "Orthopedic",
          like: "92%",
          experience: 4,
          img: d1,
        },
        {
          id: 5,
          name: "John Doe",
          specialist: "Orthopedic",
          like: "85%",
          experience: 8,
          img: d3,
        },
      ],
    },
    {
      id: 3,
      label: "Nutritionist",
      doctors: [
        {
          id: 2,
          name: "Sarah Johnson",
          specialist: "Nutritionist",
          like: "88%",
          experience: 7,
          img: d2,
        },
      ],
    },
    {
      id: 4,
      label: "Pediatric",
      doctors: [
        {
          id: 3,
          name: "David Miller",
          specialist: "Pediatric",
          like: "94%",
          experience: 5,
          img: d3,
        },
      ],
    },
    {
      id: 5,
      label: "Anaesthetic",
      doctors: [
        {
          id: 4,
          name: "Emily Brown",
          specialist: "Anaesthetic",
          like: "89%",
          experience: 6,
          img: d1,
        },
      ],
    },
  ];

  // Find the selected specialist
  const selectedSpecialist = specialists.find((spec) => spec.id === navigator);

  return (
    <div className="max-w-screen-xl mx-auto my-10 md:my-20 grid md:grid-cols-5 p-1 relative">
      <div className="md:col-span-1">
        <p className="text-3xl my-4 md:text-5xl font-bold dark:text-textDark">
          Ask <br /> Doctors
        </p>

        {specialists && (
          <div>
            {specialists?.map((spec) => (
              <p
                key={spec.id}
                onClick={() => setNavigator(spec.id)}
                className={`w-2/3 md:w-full lg:w-2/3 my-10 text-xl dark:text-textDark border hover:bg-primary rounded-xl pl-4 hover:cursor-pointer ${
                  navigator === spec.id && "bg-primary"
                }`}
              >
                {" "}
                {spec?.label}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="md:col-span-4 grid lg:grid-cols-2 gap-10 pl-10  pt-10 md:pt-0">
        {selectedSpecialist?.doctors?.map((doctor) => (
          <div
            key={doctor.id}
            className="relative h-44 bg-defaultWhite dark:bg-paperDark rounded-lg p-4 mx-5"
          >
            <div className="absolute -top-8 -left-8 size-20">
              <Image
                width={200}
                height={200}
                className="rounded-full rounded-tl-none bg-secondaryLight"
                src={doctor?.img ? doctor?.img : "/"} // You can dynamically set doctor image if available
                alt={doctor.name}
              />
            </div>
            <div className="ml-10 ">
              <p className="text-xl font-bold text-textPrimary dark:text-textDark">
                {doctor.name}
              </p>
              <p className="my-2 text-textSecondary dark:text-textDark">
                {doctor.specialist}
              </p>
            </div>
            <hr className="my-4" />
            <div className="text-textSecondary dark:text-textDark flex justify-around">
              <div className="flex gap-3 ">
                <AiFillLike className="my-auto text-xl " />
                <p className="my-auto">{doctor.like}</p>
              </div>
              <div className="flex gap-3 ">
                <BsHandbagFill className="my-auto text-xl" />
                <p className="my-auto">{doctor.experience} Year</p>
              </div>

              <PrimaryButton
                text="CHAT"
                link="/chat"
                bgColor="bg-secondary"
                darkTextColor="dark:text-textDark"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Vackground images */}
      <div className="absolute right-0 bottom-0 -z-10">
        <Image src={bg6} alt="background" />
      </div>
    </div>
  );
}
