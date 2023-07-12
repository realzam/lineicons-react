import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarm = ({
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
    <path d="m57.6 53.1-2-3.1c-.4-.6-.6-1.2-.6-1.9V27.3c0-5.9-2.5-11.4-7.1-15.5-3.7-3.3-8.5-5.4-13.6-5.8V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v1.9c-.2 0-.4 0-.6.1C17.5 7.3 8.8 16.6 8.8 27.7v20.4c-.1 1-.3 1.5-.5 1.8l-1.9 3.2c-.6 1-.6 2.2 0 3.2.6.9 1.6 1.5 2.7 1.5h20.7V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2.2H55c1.1 0 2.1-.6 2.7-1.5.6-1 .6-2.2-.1-3.2zm-46.1.2.7-1.2c.6-1 .9-2.2 1.1-3.6V27.7c0-8.8 7-16.2 16.3-17.2 5.7-.6 11.3 1.1 15.4 4.7 3.6 3.2 5.6 7.5 5.6 12.1v20.8c0 1.5.4 2.9 1.3 4.3l.6.9h-41z" />
  </svg>
);
export default SvgAlarm;
