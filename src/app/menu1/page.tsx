import AskDoctors from "../Components/askDoctors";
import Banner from "../Components/banner";
import ClinicFacilities from "../Components/clinicFacilities";
import PrimaryButton from "../Components/common/PrimaryButton";
import CompanySummary from "../Components/companySummary";
import OurClinics from "../Components/ourClinics";
import OurSpeciality from "../Components/ourSpeciality";
import Testimonials from "../Components/testimonials";

export default function Menu1() {
  return (
    <div className="">
      <Banner />
      <CompanySummary />
      <ClinicFacilities />
      <OurSpeciality />
      <AskDoctors />
      <Testimonials />

      {/* create apointment banner */}
      <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-[#07ADF1] via-[#7BCFD9] to-[#B4E0CD] dark:bg-gradient-to-br dark:from-[#357A38] dark:via-[#226E5D] dark:to-[#00579B] lg:flex justify-between py-7 px-5 my-10 md:px-10 md:my-20 rounded-2xl">
        <div className="my-auto">
          <p className="text-3xl md:text-5xl font-bold dark:text-textDark">
            Clinic Facilies
          </p>

          <p className="  text-xl font-normal  dark:text-gray-300 mt-2 md:mt-5">
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </p>
        </div>

        <div className="my-auto mt-5 lg:mt-0">
          <PrimaryButton
            text="CREATE APPOINTMENT NOW!"
            bgColor="bg-white"
            textColor="text-preimary"
            darkTextColor="text-primary"
          />
        </div>
      </div>


      <OurClinics />
    </div>
  );
}
