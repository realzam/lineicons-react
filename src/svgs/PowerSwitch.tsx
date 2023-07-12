import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPowerSwitch = ({
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
    <path d="M32 37.9c1.2 0 2.3-1 2.3-2.3V5c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v30.7c.1 1.2 1.1 2.2 2.3 2.2z" />
    <path d="M43.1 9.7c-1.1-.5-2.5 0-3 1.1s0 2.5 1.1 3c8 3.6 13.2 11.7 13.2 20.5 0 12.4-10.1 22.5-22.5 22.5S9.5 46.7 9.5 34.3c0-8.8 5.2-16.8 13.2-20.5 1.1-.5 1.6-1.8 1.1-3-.5-1.1-1.8-1.6-3-1.1C11.3 14.1 5 23.7 5 34.3c0 14.9 12.1 27 27 27s27-12.1 27-27c0-10.6-6.3-20.2-15.9-24.6z" />
  </svg>
);
export default SvgPowerSwitch;
