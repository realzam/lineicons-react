import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarmClock = ({
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
    <path d="M43.4 34.8h-9.1v-9.3c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v9.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-.3h9.1c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
    <path d="M59.5 19.1c0-5.5-4.4-9.9-9.9-9.9-2.6 0-5 1-6.8 2.7-2.7-1.2-5.5-2-8.6-2.2V6.3H37c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H26.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v3.5c-3 .3-5.9 1-8.6 2.2-1.8-1.7-4.2-2.7-6.8-2.7-5.5 0-9.9 4.4-9.9 9.9 0 2.7 1.1 5.3 3.1 7.1-1.2 3-1.9 6.3-1.9 9.7 0 14.5 11.8 26.3 26.3 26.3S58.2 50.5 58.2 36c0-3.4-.7-6.7-1.9-9.7 2.1-1.9 3.2-4.5 3.2-7.2zm-9.9-5.4a5.378 5.378 0 0 1 4.6 8.2c-1.9-3-4.3-5.5-7.2-7.5.8-.5 1.7-.7 2.6-.7zM9 19.1c0-3 2.4-5.4 5.4-5.4.9 0 1.8.2 2.6.7-2.9 2-5.3 4.6-7.2 7.5-.5-.9-.8-1.8-.8-2.8zm23 38.7C20 57.8 10.2 48 10.2 36S20 14.2 32 14.2 53.8 24 53.8 36 44 57.8 32 57.8z" />
  </svg>
);
export default SvgAlarmClock;
