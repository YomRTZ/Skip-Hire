import { fetchSkips } from "../../domain/services/skipService";
import SkipCard from "../components/SkipCard";

const SkipList = () => {
  const skips = fetchSkips();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skips.map(skip => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
  );
};

export default SkipList;
