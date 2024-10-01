import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import PrimaryButton from "../common/PrimaryButton";

interface Clinic {
  name: string;
  phone: string;
  email: string;
  location: string;
  img: string
}

export default function OurClinics({ Clinics }: { Clinics: Clinic[] }) {
  // const Clients = [
  // //   {
  // //     name: "Head Quarter",
  // //     phone: "+123 456 78 91",
  // //     email: "hello@luxi.com",
  // //     location: "Lorem ipsum street no 14 Block A",
  // //   },
  // //   {
  // //     name: "Branch Office 1",
  // //     phone: "+987 654 32 10",
  // //     email: "contact@branch1.com",
  // //     location: "Baker Street 221B, London",
  // //   },
  // //   {
  // //     name: "Branch Office 2",
  // //     phone: "+456 789 01 23",
  // //     email: "support@branch2.com",
  // //     location: "Main Street 12, New York",
  // //   },
  // //   {
  // //     name: "Regional Office",
  // //     phone: "+321 654 78 90",
  // //     email: "info@regional.com",
  // //     location: "Sunset Boulevard 101, Los Angeles",
  // //   },
  // //   {
  // //     name: "Headquarters Europe",
  // //     phone: "+49 123 456 789",
  // //     email: "europe@hq.com",
  // //     location: "Alexanderplatz 5, Berlin",
  // //   },
  // //   {
  // //     name: "Asia Pacific Office",
  // //     phone: "+65 9876 5432",
  // //     email: "contact@asiaoffice.com",
  // //     location: "Marina Bay Sands, Singapore",
  // //   }
  // // ];

  return (
    <div className="max-w-screen-xl mx-auto my-10 p-1">
      <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
        Our Clinics
      </p>
      <p className=" text-xl font-normal  dark:text-gray-300 mt-5 md:mt-10">
        Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
      </p>

      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        {Clinics?.map((clinic, i) => (
          <div key={i} className="md:w-[550px] flex gap-4 bg-white dark:bg-paperDark dark:text-textDark border p-3 rounded-2xl">
            <div className="md:w-36 h-[150px] my-auto">
              <Image className="rounded-lg" width={400} height={400} src={clinic.img} alt="clinic-images" />
            </div>
            <div className="mt-1">
              <p className="text-lg font-bold">{clinic.name}</p>
              <div className="md:flex justify-between gap-5 my-2">
                <div className="flex gap-2">
                  <FaPhoneAlt className="text-secondary my-auto" />
                  <p>{clinic.phone}</p>
                </div>
                <div className="flex gap-2">
                  <HiOutlineMailOpen className="text-primary my-auto" />
                  <p>{clinic.email}</p>
                </div>
              </div>
              <div className="flex gap-3 my-2">
                <MdLocationPin className="text-red-600 my-auto" />
                <p>{clinic.location}</p>
              </div>
              <PrimaryButton
                text="CONTACT"
                textColor="text-secondary"
                darkTextColor="dark:text-secondary"
                borderColor="border-secondary"
                border="border"
                weidth={"w-full"}
              />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
