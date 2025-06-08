import { Bin } from "./icons/Bin";
import { CreditCard } from "./icons/CreditCard";
import { Date } from "./icons/Date";
import { Location } from "./icons/Location";
import { Shield } from "./icons/Shield";
import { Truck } from "./icons/Truck";

const steps = [
  { label: "Postcode", icon: <Location className="w-4 h-4" /> },
  { label: "Waste Type", icon: <Bin className="w-4 h-4" /> },
  { label: "Select Skip", icon: <Truck className="w-4 h-4" /> },
  { label: "Permit Check", icon: <Shield className="w-4 h-4" /> },
  { label: "Choose Date", icon: <Date className="w-4 h-4" /> },
  { label: "Payment", icon: <CreditCard className="w-4 h-4" /> },
];

const Breadcrumbs = ({ activeStep = 2 }: { activeStep?: number }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto justify-center py-3 font-pontano">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center">
          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
              index === activeStep
                ? "bg-sail-600 text-dark-400"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {step.icon}
            <span className="whitespace-nowrap">{step.label}</span>
          </div>

          {index < steps.length - 1 && (
            <span className="mx-1 text-gray-400">→</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
