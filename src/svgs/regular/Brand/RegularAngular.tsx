import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngular = ({
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
    <path d="M26.8 33.7h10.6L32 21l-5.2 12.7zM32 1 3.3 11.3l4.5 38.2L32 63l24.4-13.5 4.4-38.2L32 1zm18 47.2h-6.8l-3.5-9H24.4l-3.7 9H14L32 7.9l18 40.3z" />
  </svg>
);
export default SvgAngular;
