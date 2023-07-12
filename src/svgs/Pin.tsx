import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPin = ({
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
    <path d="M47 16.7c0-8.3-6.7-15-15-15s-15 6.7-15 15c0 7.5 5.5 13.7 12.7 14.8V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V31.5C41.4 30.4 47 24.2 47 16.7zM32 27.2c-5.8 0-10.5-4.7-10.5-10.5S26.2 6.2 32 6.2s10.5 4.7 10.5 10.5S37.8 27.2 32 27.2z" />
    <path d="M34.6 8.5c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 6.8c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.6 1.2-1.2 1.2z" />
  </svg>
);
export default SvgPin;
