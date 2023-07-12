import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendar = ({
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
    <path d="M20.5 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1zM33.5 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1zM46.6 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1zM20.5 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1zM33.5 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1zM46.6 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1z" />
    <path d="M56 15.4H34.3v-1.9c2.3-.9 3.9-3.1 3.9-5.7 0-3.4-2.8-6.1-6.2-6.1s-6.2 2.7-6.2 6.1c0 2.6 1.6 4.8 3.9 5.7v1.9H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V21.6c0-3.4-2.9-6.2-6.3-6.2zM32 6.2c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6s-1.7-.7-1.7-1.6c0-.9.8-1.6 1.7-1.6zM8 19.9h48c1 0 1.8.8 1.8 1.8v6.2H6.3v-6.2c0-1.1.7-1.8 1.7-1.8zm48 37.9H8c-1 0-1.8-.8-1.8-1.8V32.3h51.5V56c.1 1-.7 1.8-1.7 1.8z" />
  </svg>
);
export default SvgCalendar;
