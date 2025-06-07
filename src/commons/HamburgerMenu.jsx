import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  MapPinIcon,
  TrashIcon,
  CubeIcon,
  DocumentCheckIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  {
    to: "/postcode",
    label: "Postcode",
    icon: <MapPinIcon className="h-5 w-5" />,
  },
  {
    to: "/waste-type",
    label: "Waste Type",
    icon: <TrashIcon className="h-5 w-5" />,
  },
  {
    to: "/select-skip",
    label: "Select Skip",
    icon: <CubeIcon className="h-5 w-5" />,
  },
  {
    to: "/permit-check",
    label: "Permit Check",
    icon: <DocumentCheckIcon className="h-5 w-5" />,
  },
  {
    to: "/choose-date",
    label: "Choose Date",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    to: "/payment",
    label: "Payment",
    icon: <CreditCardIcon className="h-5 w-5" />,
  },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative p-4">
      {/* Mobile button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={toggleMenu}
          className=" md:hidden p-2 text-brand bg-white rounded-md border border-brand hover:bg-brand hover:text-white transition"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className=" absolute top-14 right-4 bg-brand rounded-md shadow-lg p-4 px-12 z-50 space-y-2 md:hidden">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 text-brand px-10 bg-brand-light rounded-md transition-colors duration-200 hover:text-brand-color "
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop menu */}
      <div className=" hidden-below-640 hidden-641-to-768  md:flex md:flex-row sm:gap-2 sm:w-full md:justify-between xl:gap-4 lg:gap-4 xl:justify-end 2xl:gap-8">
        {navLinks.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className="hidden-below-640 md:flex  items-center gap-1 text-brand lg:px-2 whitespace-nowrap bg-brand-light rounded-md p-2 pl-0 xl:px-4 2xl:px-5 transition-colors duration-200 hover:text-brand-color"
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HamburgerMenu;
