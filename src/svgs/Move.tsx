import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMove = ({
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
    <path d="m61.3 29.7-8.1-8.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5 5H34.3V9l4.9 5c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2l-8.1-8.1c-.6-.6-1.4-1-2.3-1-.9 0-1.7.3-2.3 1l-8.1 8.1c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0l5-5v20.8H9l5-5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-8.1 8.1c-1.3 1.3-1.3 3.3 0 4.6l8.1 8.1c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.9-.9.9-2.3 0-3.2l-5-5h20.8V55l-5-5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l8.1 8.1c.6.6 1.4 1 2.3 1 .9 0 1.7-.3 2.3-1l8.1-8.1c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-4.9 5V34.2H55l-5 5c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l8.1-8.1c1.2-1.3 1.2-3.3 0-4.6z" />
  </svg>
);
export default SvgMove;
