import { Routes, Route } from "react-router-dom";
import SkipList from "../features/pages/SkipList";
import ChooseDatePage from "../features/pages/ChooseDatePage";
import PaymentPage from "../features/pages/PaymentPage";
import PermitCheckPage from "../features/pages/PermitCheckPage";
import PostcodePage from "../features/pages/PostcodePage";
import SelectSkipPage from "../features/pages/SelectSkipPage";
import WasteTypePage from "../features/pages/WasteTypePage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SkipList />} />
      <Route path="/postcode" element={<PostcodePage />} />
      <Route path="/waste-type" element={<WasteTypePage />} />
      <Route path="/select-skip" element={<SelectSkipPage />} />
      <Route path="/permit-check" element={<PermitCheckPage />} />
      <Route path="/choose-date" element={<ChooseDatePage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default AppRoutes;
