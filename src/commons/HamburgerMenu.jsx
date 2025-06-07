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
        <div className="absolute top-14 right-4 bg-white rounded-md shadow-lg p-4 z-50 space-y-2 md:hidden">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 text-brand hover:text-brand-dark"
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop menu */}
      <div className=" hidden-below-640 hidden-641-to-768 md:flex md:flex-row sm:gap-4 md:mt-4 sm:w-full md:justify-between">
        {navLinks.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className="hidden-below-640 md:flex  items-center gap-2 text-brand hover:text-brand-color whitespace-nowrap"
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
