import React, { useState } from "react";
import Card from "../../commons/Card";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
function SkipCard({ skip }) {
  const {
    roadStatus = "",
    heavyWasteStatus = "",
    isAllowed = false,
  } = skip.isAllowed?.() || {};
  const [selected, setSelected] = useState(false);
  return (
    <Card className="hover:shadow-lg  hover:border-2 hover:scale-[1.02] rounded transition duration-200 ease-in-out hover:border-amber-400">
      <div className="relative">
        <div className="absolute top-2 right-2 bg-brand text-brand-color text-xs font-semibold rounded px-2 py-1 z-10 shadow">
          {skip.size} Yard Skip
        </div>
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`Skip Size ${skip.size}`}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="px-2 mt-2 flex flex-col-2 justify-between">
        <div>
          <p className="text-brand text-xl font-bold font-heading">
            {skip.hire_period_days} hire period
          </p>
          <p className="text-brand-color text-sm font-semibold font-heading">
            £{skip.getTotalPrice().toFixed(2)}
          </p>
        </div>
        <div>
          <p
           className="text-brand text-sm font-semibold font-heading">
            {roadStatus}
          </p>
          <p
            className="text-brand text-sm font-semibold font-heading">
            {heavyWasteStatus}
          </p>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded transition 
    ${
      selected
        ? "bg-brand-color text-brand"
        : "bg-brand text-brand-color hover:bg-brand-dark"
    }`}
          onClick={() => setSelected(!selected)}
        >
          <div className="circle">
            {selected ? (
              <CheckIcon className="w-4 h-4 text-brand" />
            ) : (
              <ArrowRightIcon className="w-4 h-4 text-brand-color" />
            )}
          </div>
          <span className="transition-colors duration-200">
            {selected ? "Selected" : "Rent This Skip"}
          </span>
        </button>
      </div>
    </Card>
  );
}

export default SkipCard;
