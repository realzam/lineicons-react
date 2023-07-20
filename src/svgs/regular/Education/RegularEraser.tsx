import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEraser = ({
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
    <path d="m59.2 57.8-27.4-.1 28.6-28.6c2.4-2.4 2.4-6.4 0-8.8L43.7 3.5c-1.2-1.2-2.7-1.8-4.4-1.8s-3.3.7-4.4 1.8L6 32.4c-2.7 2.7-4.2 6.3-4.2 10s1.5 7.4 4.2 10l5.4 5.4c2.8 2.8 6.4 4.2 10 4.2H21.7l37.5.2c1.2 0 2.2-1 2.3-2.2 0-1.2-1-2.2-2.3-2.2zM38 6.7c.3-.3.8-.5 1.2-.5s.9.2 1.2.5l16.7 16.7c.7.7.7 1.8 0 2.5L35.5 47.6 16.3 28.4 38 6.7zM9.1 49.4c-1.8-1.8-2.8-4.3-2.8-6.9s1-5 2.8-6.9l4-4 19.1 19.1-4 4c-3.8 3.8-9.9 3.8-13.7 0l-5.4-5.3z" />
  </svg>
);
export default SvgEraser;
