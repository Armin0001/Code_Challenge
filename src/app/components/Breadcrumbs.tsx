import { Bin } from "./icons/Bin";
import { CreditCard } from "./icons/CreditCard";
import { Date } from "./icons/Date";
import { Location } from "./icons/Location";
import { Shield } from "./icons/Shield";
import { Truck } from "./icons/Truck";

const steps = [
  { label: "Postcode", icon: <Location className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Waste Type", icon: <Bin className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Select Skip", icon: <Truck className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Permit Check", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Choose Date", icon: <Date className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Payment", icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" /> },
];

const Breadcrumbs = ({ activeStep = 2 }: { activeStep?: number }) => {
  return (
    <nav
      className="w-full px-2 sm:px-4 py-3"
      aria-label="Progress"
    >
      <ol className="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm text-gray-600 font-pontano">
        {steps.map((step, index) => (
          <li key={step.label} className="flex items-center max-w-full">
            <div
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full transition-colors whitespace-nowrap text-xs sm:text-sm ${
                index === activeStep
                  ? "bg-sail-600 text-dark-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {step.icon}
              <span className="truncate">{step.label}</span>
            </div>

            {index < steps.length - 1 && (
              <span className="mx-1 text-gray-400">→</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
