import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophone = ({
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
    <path d="M44.2 1.8c-10 0-18.1 8.1-18.1 18.1 0 1.7.3 3.4.7 5L4.3 47.3c-3.4 3.4-3.4 9 0 12.4 1.7 1.7 3.9 2.5 6.2 2.5 2.3 0 4.5-.8 6.2-2.5l22.5-22.5c1.6.5 3.2.7 5 .7 10 0 18.1-8.1 18.1-18.1s-8.2-18-18.1-18zM7.5 56.5c-1.6-1.6-1.6-4.4 0-6l.3-.3 6 6-.2.2c-1.7 1.8-4.5 1.8-6.1.1zm9.4-3.4-6-6 17.9-17.8c1.5 2.5 3.6 4.5 6 6L16.9 53.1zm13.7-33.3c0-1.2.2-2.3.4-3.4L47.5 33c-1.1.3-2.2.4-3.3.4-7.5 0-13.6-6.1-13.6-13.6zM51.9 31 33 12.1c2.5-3.5 6.5-5.8 11.1-5.8 7.5 0 13.6 6.1 13.6 13.6.1 4.6-2.3 8.7-5.8 11.1z" />
  </svg>
);
export default SvgMicrophone;
