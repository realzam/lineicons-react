import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDown = ({
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
    <path d="M32 45.6c-.6 0-1.1-.2-1.6-.6l-23-22.6c-.9-.9-.9-2.3 0-3.2.9-.9 2.3-.9 3.2 0L32 40.1 53.4 19c.9-.9 2.3-.9 3.2 0 .9.9.9 2.3 0 3.2l-23 22.6c-.5.5-1 .8-1.6.8z" />
  </svg>
);
export default SvgChevronDown;
