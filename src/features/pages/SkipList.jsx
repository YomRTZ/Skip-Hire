import { fetchSkips } from "../../domain/services/skipService";
import SkipCard from "../components/SkipCard";

const SkipList = () => {
  const skips = fetchSkips();

  return (
    <div className="container mx-auto p-4">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 ">
      {skips.map((skip, index) => (
        <SkipCard key={index} skip={skip} />
      ))}
    </div>
  </div>
  );
};

export default SkipList;
