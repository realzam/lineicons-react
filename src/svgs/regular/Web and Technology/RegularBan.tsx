import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBan = ({
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
    <path d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zM6.3 32C6.3 17.8 17.8 6.3 32 6.3c5.3 0 10.1 1.6 14.2 4.3l-32 40C9.3 45.9 6.3 39.3 6.3 32zM32 57.8c-5.3 0-10.2-1.6-14.3-4.4l32-40c4.9 4.7 8 11.3 8 18.6.1 14.2-11.5 25.8-25.7 25.8z" />
  </svg>
);
export default SvgBan;
