import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdge = ({
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
    <path d="M3.3 28.4zm57.4 2c0-5.5-1-10.5-3.5-15.3C52.1 5.9 43 1 32.4 1 15 1 5.2 14.1 3.3 28.4c5.3-7.7 14.6-15.2 27.4-15.6 0 0 13.8 0 12.4 13.1H21.3c.7-4.6 2.2-7.3 4.2-9.8-9.4 4.5-15.2 12.1-15 23.6.1 8.9 6.3 18.1 15 21.5 10.4 3.9 24 .8 29.9-2.7V45.4c-10 7-33.9 7.6-33.9-8.4h39.1v-6.6h.1z" />
  </svg>
);
export default SvgEdge;
