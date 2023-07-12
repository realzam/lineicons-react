import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDashboard = ({
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
    <path d="M32 14.5c-16.7 0-30.3 14.7-30.3 32.8 0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3 0-18.1-13.6-32.8-30.3-32.8zM31 45l1-3.1 1 3.1h-2zm6.7 0L35 36.6c-.4-1.3-1.6-2.2-3-2.2s-2.6.9-3 2.2L26.3 45h-20C7.4 30.5 18.5 19 32 19s24.6 11.5 25.7 26h-20z" />
    <path d="M32 24.9c-1.2 0-2.3 1-2.3 2.3v2.5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-2.5c0-1.3-1.1-2.3-2.3-2.3zM46.4 32.3l-1.6 1.6c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l1.6-1.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.8-3.2.1zM17.7 32.3c-.8-.9-2.3-1-3.2-.2-.9.8-1 2.3-.2 3.2l1.5 1.6c.4.5 1.1.7 1.7.7.5 0 1.1-.2 1.5-.6.9-.8 1-2.3.2-3.2l-1.5-1.5z" />
  </svg>
);
export default SvgDashboard;
