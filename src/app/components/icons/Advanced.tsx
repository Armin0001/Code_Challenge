import { SVGProps } from "react";

export function Advanced(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill="#f49f0a" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z" />
    </svg>
  );
}
