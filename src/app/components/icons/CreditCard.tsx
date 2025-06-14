import React from "react";

export function CreditCard(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#7f1b1b"
        d="M21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616M4 8.808h16V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616zm0 2.384v6.193q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423v-6.193zM4 18V6z"
      ></path>
    </svg>
  );
}
