import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCapsule = ({
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
    <path d="M20.9 62.2c-4.9 0-9.8-1.9-13.5-5.6-3.7-3.6-5.6-8.4-5.6-13.5s2-9.9 5.6-13.5L29.6 7.4c3.6-3.6 8.4-5.6 13.5-5.6s9.9 2 13.5 5.6c7.5 7.5 7.5 19.6 0 27.1L34.4 56.6c-3.7 3.8-8.6 5.6-13.5 5.6zm-.9-39-9.5 9.5c-2.8 2.8-4.3 6.4-4.3 10.4 0 3.9 1.5 7.6 4.3 10.4 2.8 2.8 6.4 4.3 10.4 4.3 3.9 0 7.6-1.5 10.4-4.3l9.5-9.5L20 23.2zm3.2-3.2L44 40.8l9.5-9.5c2.8-2.8 4.3-6.4 4.3-10.4 0-3.9-1.5-7.6-4.3-10.4S47 6.2 43.1 6.2c-3.9 0-7.6 1.5-10.4 4.3L23.2 20z" />
  </svg>
);
export default SvgCapsule;
