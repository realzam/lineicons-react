import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRain = ({
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
    <path d="M57.3 18.6c-2.7-2.9-6.4-4.9-10.3-5.6-2.2-3.5-5.4-6.1-9.1-7.4-1.7-.7-3.7-1-5.8-1-9.5 0-17.2 7.4-17.8 16.7-7 .9-12.5 6.8-12.5 14.1 0 5.1 2.6 9.7 7 12.3.3.2.7.3 1.1.3.8 0 1.5-.4 1.9-1.1.6-1.1.3-2.5-.8-3.1-3-1.7-4.8-4.9-4.8-8.4 0-5.4 4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.3 6-13.3 13.3-13.3 1.6 0 3 .2 4.3.7 3.1 1.1 5.7 3.3 7.3 6.3.4.7 1 1.1 1.7 1.2 3.3.3 6.4 1.9 8.7 4.3 2.4 2.6 3.8 6 3.8 9.5 0 4.9-2.5 9.3-6.6 11.9-1.1.7-1.4 2-.7 3.1s2 1.4 3.1.7c5.5-3.4 8.7-9.3 8.7-15.7 0-4.6-1.8-9.1-5-12.5z" />
    <path d="M22 40.2c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.5c-.1-1.3-1.1-2.3-2.3-2.3zM32 35.3c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V37.6c0-1.3-1.1-2.3-2.3-2.3zM42 40.2c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.5c0-1.3-1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgRain;
