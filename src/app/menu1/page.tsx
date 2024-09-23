import AskDoctors from "../Components/askDoctors";
import Banner from "../Components/banner";
import ClientFacilities from "../Components/clientFacilities";
import CompanySummary from "../Components/companySummary";
import OurSpeciality from "../Components/ourSpeciality";

export default function Menu1() {
  return (
    <div className="">
      <Banner />
      <CompanySummary />
      <ClientFacilities />
      <OurSpeciality />
      <AskDoctors />
    </div>
  );
}
