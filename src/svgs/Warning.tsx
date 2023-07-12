import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarning = ({
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
    <path d="M60.5 41.3 39.1 12.2c-1.7-2.3-4.3-3.6-7.1-3.6-2.9 0-5.5 1.3-7.1 3.6L3.5 41.3c-2 2.7-2.3 6.2-.8 9.2s4.5 4.9 7.9 4.9h42.8c3.4 0 6.4-1.9 7.9-4.9 1.5-2.9 1.2-6.5-.8-9.2zm-3.2 7.2c-.8 1.5-2.2 2.4-3.9 2.4H10.6c-1.7 0-3.1-.9-3.9-2.4-.7-1.5-.6-3.2.4-4.5l21.4-29.1c.8-1.1 2.1-1.8 3.5-1.8s2.7.6 3.5 1.8L56.9 44c1 1.3 1.1 3 .4 4.5z" />
    <path d="M32 23c-1.2 0-2.3 1-2.3 2.3v10.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-11c0-1.2-1.1-2.2-2.3-2.2zM32 40.8c-1.2 0-2.3 1-2.3 2.3v.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V43c0-1.2-1.1-2.2-2.3-2.2z" />
  </svg>
);
export default SvgWarning;
