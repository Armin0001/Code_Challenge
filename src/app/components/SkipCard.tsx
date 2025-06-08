import React from "react";
import { Basic } from "./icons/Basic";
import { Intermediate } from "./icons/Intermediate";
import { Advanced } from "./icons/Advanced";

type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

const getSizeLabel = (size: number) => {
  if (size >= 15) return <Advanced />;
  if (size >= 10) return <Intermediate />;
  return <Basic />;
};

const SkipCard = ({ skip }: { skip: Skip }) => {
  return (
    <div className="relative bg-white font-libre rounded-2xl shadow-md p-4 w-full max-w-md border border-gray-100 justify-self-center overflow-hidden group transition-all duration-300">
      <div className="absolute top-0 left-0 w-full -translate-y-full group-hover:translate-y-0 bg-danger-500 text-white p-4 transition-transform duration-300 ease-in-out rounded-t-2xl z-10">
        <p className="text-sm">
          <span className="font-semibold">Transport Cost:</span>{" "}
          {skip.transport_cost === null ? "Free" : `£${skip.transport_cost}`}
        </p>
        <p className="text-sm mt-1">
          <span className="font-semibold">Heavy Waste:</span>{" "}
          {skip.allows_heavy_waste ? "Allowed" : "Not allowed"}
        </p>
      </div>

      <div className="space-y-2 z-0">
        <h2 className="text-xl font-semibold text-gray-800">
          £{skip.price_before_vat}
        </h2>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Skip Size:</span> {skip.size} yd³
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Hire Period:</span>{" "}
          {skip.hire_period_days} days
        </p>
        <p className="text-sm mt-2 items-center text-gray-600 flex gap-7">
          <span className="font-medium">Skip Size:</span>{" "}
          {getSizeLabel(skip.size)}
        </p>

        <button className="mt-4 w-full bg-secondary-600 hover:cursor-pointer hover:bg-secondary-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
          Select This Skip
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
