import { SVGProps } from "react";

export function Intermediate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#fde78a"
        d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z"
      />
    </svg>
  );
}
