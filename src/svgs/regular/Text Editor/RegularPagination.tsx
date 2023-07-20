import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPagination = ({
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
    <path d="M61.4 30 51 19.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.3 9.3-9.3 9.3c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7L61.4 34c1.1-1.1 1.1-2.9 0-4zM16.2 19.5c-.9-.9-2.3-.9-3.2 0L2.6 30c-1.1 1.1-1.1 2.9 0 4.1L13 44.5c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2L6.9 32l9.3-9.3c.9-.9.9-2.4 0-3.2zM21.9 29.3c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z" />
    <circle cx={32.3} cy={32} r={2.7} />
    <path d="M42.9 29.3c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7z" />
  </svg>
);
export default SvgPagination;
