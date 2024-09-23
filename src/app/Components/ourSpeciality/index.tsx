import Image from "next/image";
import banner from "@/assetes/bg-5.png";

export default function OurSpeciality() {
  return (
    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 mt-[500px] md:mt-20 p-1">
      <div className="my-auto">
        <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
          Our Speciality
        </p>

        <p className=" text-xl font-normal  dark:text-gray-300 mt-5 md:mt-10">
          Curabitur egestas consequat lorem, vel fermentum augue porta id.
          Aliquam lobortis magna neque, gravida consequat velit venenatis at.
        </p>

        <div className="mt-10 ">
          <div className="gird md:flex gap-3 text-center justify-around">
            <p className="my-1 md:my-0 text-sm text-textSecondary dark:text-textDark px-10 py-2 border border-textSecondary rounded-3xl">
              Dentist
            </p>
            <p className="my-1 md:my-0 text-sm text-textSecondary dark:text-textDark px-16 py-2 border border-textSecondary rounded-3xl">
              Padriatic
            </p>
            <p className="my-1 md:my-0 text-sm text-textSecondary dark:text-textDark px-20 py-2 border border-textSecondary rounded-3xl">
              Cardiology
            </p>
          </div>

          <div className="gird md:flex gap-3 text-center justify-around mt-3">
            <p className="my-1 md:my-0 text-sm text-textDark px-16 bg-primary py-2 rounded-3xl">
              Traumatologi
            </p>
            <p className="my-1 md:my-0 text-sm text-textDark px-10 bg-primary py-2 rounded-3xl">
            Othopaedi
            </p>
            <p className="my-1 md:my-0 text-sm text-textDark px-16 bg-primary py-2 rounded-3xl">
            Anestesiologi
            </p>
          </div>

          <div className="gird md:flex gap-3 text-center justify-around mt-3">
            <p className="my-1 md:my-0 text-sm text-textSecondary dark:text-textDark px-12 py-2 border border-textSecondary rounded-3xl">
            Reumatologi
            </p>
            <p className="my-1 md:my-0 text-sm text-textSecondary dark:text-textDark px-10 py-2 border border-textSecondary rounded-3xl">
            Andrologi
            </p>
            <p className="my-1 md:my-0 text-sm text-textSecondary dark:text-textDark px-20 py-2 border border-textSecondary rounded-3xl">
            Ortodonsia
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Image className=" my-auto mx-auto" src={banner} alt="banner" />
      </div>
    </div>
  );
}
