import { fetchSkips } from "../../domain/services/skipService";
import SkipCard from "../components/SkipCard";
import banner from "../../assets/skip-hire-carousel2 (1).jpg";
import {
  MapPinIcon,
  TrashIcon,
  CubeIcon,
  DocumentCheckIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
const SkipList = () => {
  const skips = fetchSkips();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-5">
        <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4">
          <div className="bg-brand-light w-full h-10 flex items-center gap-2 p-2">
            <MapPinIcon className="h-5 w-5 text-brand hover:text-brand-color" />
            <span className="text-brand hover:text-brand-color">Postcode</span>
          </div>
          <div className="bg-brand-light w-full h-10 flex items-center gap-2 p-2">
           <TrashIcon className="h-5 w-5 text-brand-color" />
            <span className="text-brand-color">Waste Type</span>
          </div>
          <div className="bg-brand-light w-full h-10 flex items-center gap-2 p-2">
           <CubeIcon className="h-5 w-5 text-brand" />
            <span className="text-brand">Select Skip</span>
          </div>
          <div className="bg-brand-light w-full h-10 flex items-center gap-2 p-2">
             <DocumentCheckIcon className="h-5 w-5 text-brand" />
            <span className="text-brand">Permit Check</span>
          </div>
          <div className="bg-brand-light w-full h-10 flex items-center gap-2 p-2">
           <CalendarDaysIcon className="h-5 w-5 text-brand" />
            <span className="text-brand">Choose Date</span>
          </div>
          <div className="bg-brand-light w-full h-10 flex items-center gap-2 p-2">
           <CreditCardIcon className="h-5 w-5 text-brand" />
            <span className="text-brand">Payment</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="aspect-[13/5] bg-brand-light rounded overflow-hidden p-5 relative">
          <img
            src={banner}
            className="w-full h-full object-cover rounded"
            alt="8 yard skip hire Halesowen"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 mt-[25%] ml-5 text-brand-color">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Choose Your Skip Size
            </h2>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg mt-1">
              Select the skip size that best suits your needs
            </span>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8">
        {skips.map((skip, index) => (
          <SkipCard key={index} skip={skip} />
        ))}
      </div>
    </div>
  );
};

export default SkipList;
