import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleMeet = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="m35.808 32 6.257 5.375 6.998 6.012v-22.44l-6.628 5.53L35.808 32ZM3 42.333V52c0 2.21 1.78 4 3.977 4h9.61V42.333H3ZM16.587 8 3 21.667h13.587V8ZM16.587 21.667H3v20.666h13.587V21.667Z"
    />
    <path
      fill="#000"
      d="m57.746 13.787-8.683 7.16v22.44l8.722 7.193C59.091 51.607 61 50.67 61 49V15.333c0-1.69-1.952-2.616-3.254-1.546ZM35.808 32v10.333H16.587V56h28.5c2.197 0 3.976-1.79 3.976-4v-8.613L35.808 32ZM45.087 8h-28.5v13.667h19.22V32l13.256-11.047V12c0-2.21-1.78-4-3.976-4Z"
    />
  </svg>
);
export default SvgGoogleMeet;
