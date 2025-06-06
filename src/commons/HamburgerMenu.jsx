import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Mobile toggle button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-brand bg-white rounded-md border border-brand hover:bg-brand hover:text-white transition md:hidden"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Mobile dropdown menu - only shows on small screens */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-64 bg-white shadow-lg rounded-md z-50 p-4 space-y-2 md:hidden">
          <MenuItems onClick={() => setIsOpen(false)} direction="vertical" />
        </div>
      )}

      {/* Desktop horizontal menu - always visible on md and up */}
      <div className="hidden md:flex md:flex-row gap-6 text-brand font-medium">
        <MenuItems direction="horizontal" />
      </div>
    </div>
  );
};

const MenuItems = ({ onClick, direction }) => {
  const className =
    direction === "vertical"
      ? "block w-full py-1 hover:text-brand-dark"
      : "hover:text-brand-dark";

  return (
    <>
      <Link to="/postcode" className={className} onClick={onClick}>Postcode</Link>
      <Link to="/waste-type" className={className} onClick={onClick}>Waste Type</Link>
      <Link to="/select-skip" className={className} onClick={onClick}>Select Skip</Link>
      <Link to="/permit-check" className={className} onClick={onClick}>Permit Check</Link>
      <Link to="/choose-date" className={className} onClick={onClick}>Choose Date</Link>
      <Link to="/payment" className={className} onClick={onClick}>Payment</Link>
    </>
  );
};

export default HamburgerMenu;
