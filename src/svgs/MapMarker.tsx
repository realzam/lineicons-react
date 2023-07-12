import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapMarker = ({
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
    <path d="M32 1.8C18.2 1.8 7 12.6 7 25.9 7 36 20.4 52 28.3 60.6c1 1.1 2.3 1.6 3.7 1.6 1.4 0 2.7-.6 3.7-1.6C43.6 52 57 36 57 25.9 57 12.6 45.8 1.8 32 1.8zm.4 55.8c-.2.2-.5.2-.8 0C21.9 47 11.5 33.2 11.5 25.9c0-10.8 9.2-19.6 20.5-19.6s20.5 8.8 20.5 19.6c0 7.3-10.4 21.1-20.1 31.7z" />
    <path d="M32 15.7c-6 0-10.9 4.9-10.9 10.9s4.9 11 10.9 11 10.9-4.9 10.9-10.9-4.9-11-10.9-11zm0 17.4c-3.6 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" />
  </svg>
);
export default SvgMapMarker;
