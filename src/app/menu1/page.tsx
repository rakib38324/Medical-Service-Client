import AskDoctors from "../Components/askDoctors";
import Banner from "../Components/banner";
import ClinicFacilities from "../Components/clinicFacilities";
import CompanySummary from "../Components/companySummary";
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
    </div>
  );
}
