import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlickr = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.4 45.4c7.4 0 13.4-6 13.4-13.4s-6-13.4-13.4-13.4S1 24.6 1 32s6 13.4 13.4 13.4ZM49.6 45.4C57 45.4 63 39.4 63 32s-6-13.4-13.4-13.4-13.4 6-13.4 13.4 6 13.4 13.4 13.4Z" />
  </svg>
);
export default SvgFlickr;
