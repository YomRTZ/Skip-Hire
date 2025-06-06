import { Routes, Route } from "react-router-dom";
import SkipList from "../features/pages/SkipList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SkipList />} />
    </Routes>
  );
};

export default AppRoutes;
