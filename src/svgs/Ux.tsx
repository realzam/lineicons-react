import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUx = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M48.1 38.5c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5V29H26.8v-1.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-7.9h1.4c1.9 0 3.5-1.6 3.5-3.5V5.3c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h1.4v7.9h-1.4c-1.9 0-3.5 1.6-3.5 3.5V35c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-1.4h10.4V35c0 1.9 1.6 3.5 3.5 3.5h1.4v9.3h-1.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-9.3h1.4zM16.9 6.2h5.4v5.4h-5.4V6.2zM22.3 34h-5.4v-5.4h5.4V34zm24.8 23.8h-5.4v-5.4h5.4v5.4zm-5.4-29.2h5.4V34h-5.4v-5.4z" />
  </svg>
);
export default SvgUx;
