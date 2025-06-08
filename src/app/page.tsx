"use client";
import { useEffect, useState } from "react";
import SkipCard from "./components/SkipCard";
import FilterSidebar from "./components/FilterSidebar";

export default function Home() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    size: "",
    hirePeriod: "",
    heavyWaste: false,
    onRoad: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setFiltered(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let result = [...data];

    if (filters.size) {
      result = result.filter((item) => item["size"] === Number(filters.size));
    }

    if (filters.hirePeriod) {
      result = result.filter(
        (item) => item["hire_period_days"] === Number(filters.hirePeriod)
      );
    }

    if (filters.heavyWaste) {
      result = result.filter((item) => item["allows_heavy_waste"] === true);
    }

    if (filters.onRoad) {
      result = result.filter((item) => item["allowed_on_road"] === true);
    }

    setFiltered(result);
  }, [filters, data]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 p-4 md:p-6">
      {/* Sidebar at the top on mobile, side on desktop */}
      <div className="lg:min-w-[250px]">
        <FilterSidebar filters={filters} onChange={setFilters} />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
        {filtered.length > 0 ? (
          filtered.map((item) => <SkipCard skip={item} key={item["id"]} />)
        ) : (
          <p className="text-gray-600 col-span-full">
            No skips match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
