import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstagram = ({
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
    <path d="M32 17.6c-7.9 0-14.4 6.4-14.4 14.4 0 7.9 6.4 14.4 14.4 14.4 7.9 0 14.3-6.4 14.3-14.4 0-7.9-6.4-14.4-14.3-14.4zm0 24.3c-5.4 0-9.9-4.4-9.9-9.9 0-5.4 4.4-9.9 9.9-9.9 5.4 0 9.8 4.4 9.8 9.9 0 5.4-4.4 9.9-9.8 9.9zM47 11.6c-2 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.5-3.5-3.5-3.5z" />
    <path d="M46.9 1.8H17.1C8.6 1.8 1.8 8.6 1.8 17.1V47c0 8.4 6.9 15.3 15.3 15.3H47c8.4 0 15.3-6.9 15.3-15.3V17.1c0-8.5-6.9-15.3-15.4-15.3zm10.9 45.1c0 6-4.8 10.8-10.8 10.8H17.1c-6 0-10.8-4.8-10.8-10.8V17.1c0-6 4.9-10.8 10.8-10.8h29.8c6 0 10.8 4.9 10.8 10.8v29.8z" />
  </svg>
);
export default SvgInstagram;
