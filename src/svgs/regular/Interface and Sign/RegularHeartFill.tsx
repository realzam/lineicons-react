import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeartFill = ({
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
    <path d="M32 57.6c-.8 0-1.6-.3-2.2-.8-2.3-2-4.6-3.9-6.6-5.6-5.8-4.9-10.9-9.2-14.4-13.4C4.8 33 3 28.6 3 23.7c0-4.7 1.6-9.1 4.6-12.3 3-3.2 7.1-5 11.6-5 3.3 0 6.4 1.1 9.1 3.1 1.1.8 2 1.8 2.9 2.9.4.5 1.1.5 1.5 0 .9-1.1 1.9-2 2.9-2.9 2.7-2.1 5.8-3.1 9.1-3.1 4.5 0 8.6 1.8 11.6 5s4.6 7.6 4.6 12.3c0 4.9-1.8 9.3-5.8 14-3.5 4.2-8.6 8.5-14.4 13.4-2 1.7-4.3 3.6-6.6 5.6-.5.6-1.3.9-2.1.9z" />
  </svg>
);
export default SvgHeartFill;
