import HamburgerMenu from "../../commons/HamburgerMenu";
import { fetchSkips } from "../../domain/services/skipService";
import SkipCard from "../components/SkipCard";

const SkipList = () => {
  const skips = fetchSkips();
  return (
    <div className="container mx-auto p-4">
    <div className="w-full mt-4 mb-8">
       <HamburgerMenu />
    </div>
    <div className="w-full h-72">
      <div className="p-5 bg-brand-light h-11/12"></div>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 ">
      {skips.map((skip, index) => (
        <SkipCard key={index} skip={skip} />
      ))}
    </div>
  </div>
  );
};

export default SkipList;
