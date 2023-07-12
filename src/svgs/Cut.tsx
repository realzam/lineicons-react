import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCut = ({
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
    <path d="M46.6 42.1c-1.3 0-2.5.3-3.7.7l-8.1-11.9L52.2 5.3c.7-1 .4-2.4-.6-3.1-1-.7-2.4-.4-3.1.6L32 26.9 15.5 2.7c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l17.5 25.6-8.1 11.9c-1.1-.5-2.4-.7-3.7-.7-5.6 0-10.1 4.5-10.1 10.1s4.5 10.1 10.1 10.1 10.1-4.5 10.1-10.1c0-2.6-1-5-2.7-6.8L32 34.9l7.2 10.5c-1.7 1.8-2.7 4.2-2.7 6.8 0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1-4.6-10.1-10.1-10.1zM17.4 57.8c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm29.2 0c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6c3.1 0 5.6 2.5 5.6 5.6s-2.6 5.6-5.6 5.6z" />
  </svg>
);
export default SvgCut;
