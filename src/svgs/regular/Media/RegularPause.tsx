import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPause = ({
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
    <path d="M20.5 58H10c-3.4 0-6.3-2.8-6.3-6.3V12.3C3.8 8.8 6.6 6 10 6h10.5c3.4 0 6.3 2.8 6.3 6.3v39.5c-.1 3.4-2.9 6.2-6.3 6.2zM10 10.5c-1 0-1.8.8-1.8 1.8v39.5c0 1 .8 1.8 1.8 1.8h10.5c1 0 1.8-.8 1.8-1.8V12.3c0-1-.8-1.8-1.8-1.8H10zM54 58H43.5c-3.4 0-6.3-2.8-6.3-6.3V12.3C37.2 8.9 40 6 43.5 6H54c3.4 0 6.3 2.8 6.3 6.3v39.5c0 3.4-2.9 6.2-6.3 6.2zM43.5 10.5c-1 0-1.8.8-1.8 1.8v39.5c0 1 .8 1.8 1.8 1.8H54c1 0 1.8-.8 1.8-1.8V12.3c0-1-.8-1.8-1.8-1.8H43.5z" />
  </svg>
);
export default SvgPause;
