import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarFill = ({
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
    <path d="m59.7 23.9-18.1-2.8-8.2-17.2c-.6-1.2-2.2-1.2-2.8 0l-8.2 17.3-18 2.7c-1.3.2-1.8 1.9-.8 2.8l13.1 13.5-3.1 18.9c-.2 1.3 1.1 2.4 2.3 1.6l16.3-8.9 16.2 8.9c1.1.6 2.5-.4 2.2-1.6l-3.1-18.9 13.1-13.5c.8-.9.4-2.6-.9-2.8z" />
  </svg>
);
export default SvgStarFill;
