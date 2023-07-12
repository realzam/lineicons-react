import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeft = ({
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
    <path d="M43.3 57.3c-.6 0-1.2-.2-1.6-.7l-22.6-23c-.9-.9-.9-2.3 0-3.2l22.6-23c.9-.9 2.3-.9 3.2 0 .9.9.9 2.3 0 3.2L23.9 32 45 53.4c.9.9.9 2.3 0 3.2-.6.4-1.1.7-1.7.7z" />
  </svg>
);
export default SvgChevronLeft;
