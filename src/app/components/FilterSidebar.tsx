import React from "react";

type FilterValues = {
  size: string;
  hirePeriod: string;
  heavyWaste: boolean;
  onRoad: boolean;
};

type FilterSidebarProps = {
  filters: FilterValues;
  onChange: (filters: FilterValues) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange }) => {
  const handleChange = (key: keyof FilterValues, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <aside className="w-full max-w-xs p-4 border border-secondary-300 rounded-lg shadow-md font-pontano h-fit bg-danger-300">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="relative mb-4">
        <input
          type="number"
          id="skipSize"
          value={filters.size}
          onChange={(e) => handleChange("size", e.target.value)}
          placeholder=" "
          className="peer w-full border border-brand-300 rounded px-2 pt-5 pb-1 text-sm focus:outline-none focus:ring-1 focus:ring-sail-600"
        />
        <label
          htmlFor="skipSize"
          className="absolute left-2 top-1.5 text-dark-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-700 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-dark-600"
        >
          Skip Size (yd³)
        </label>
      </div>

      <div className="relative mb-4">
        <input
          type="number"
          id="hirePeriod"
          value={filters.hirePeriod}
          onChange={(e) => handleChange("hirePeriod", e.target.value)}
          placeholder=" "
          className="peer w-full border border-brand-300 rounded px-2 pt-5 pb-1 text-sm focus:outline-none focus:ring-1 focus:ring-sail-600"
        />
        <label
          htmlFor="hirePeriod"
          className="absolute left-2 top-1.5 text-dark-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-700 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-dark-600"
        >
          Hire Period (days)
        </label>
      </div>

      <div className="mb-3 flex items-center">
        <input
          id="heavyWaste"
          type="checkbox"
          checked={filters.heavyWaste}
          onChange={(e) => handleChange("heavyWaste", e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="heavyWaste" className="text-sm">
          Allows Heavy Waste
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="onRoad"
          type="checkbox"
          checked={filters.onRoad}
          onChange={(e) => handleChange("onRoad", e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="onRoad" className="text-sm">
          Allowed On Road
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
