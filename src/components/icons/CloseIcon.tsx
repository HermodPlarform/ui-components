import * as React from "react";

function CloseIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M320 320L192 192M192 320l128-128"
      />
    </svg>
  );
}

export default CloseIcon;