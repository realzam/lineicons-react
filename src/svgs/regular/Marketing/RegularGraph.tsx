import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGraph = ({
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
    <path d="M46.3 12.9c-3.6 0-6.5 2.9-6.5 6.5v.7l-2.4 1.6-2.7-.9c-.8-2.7-3.3-4.6-6.2-4.6-3.6 0-6.5 2.9-6.5 6.5 0 .6.1 1.1.2 1.6-.7.6-1.6 1.2-2.3 1.8-1.1-.7-2.3-1.2-3.7-1.2-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5c0-.6-.1-1.1-.2-1.6.7-.6 1.6-1.2 2.3-1.8 1.1.7 2.3 1.2 3.7 1.2 2.6 0 4.8-1.5 5.9-3.7l2 .7c.4.1.7.2 1.1.2.7 0 1.4-.2 2-.6l2.3-1.5c1.2 1.1 2.7 1.7 4.4 1.7 3.6 0 6.5-2.9 6.5-6.5s-2.8-6.6-6.4-6.6zM16.2 33.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12.3-8.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm17.8-3.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    <path d="M57 5.9H7C3.6 5.9.7 8.7.7 12.2v26.4c0 3.4 2.8 6.3 6.3 6.3h22.8v8.8h-11c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h26.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H34.3v-8.8H57c3.4 0 6.3-2.8 6.3-6.3V12.1c0-3.4-2.9-6.2-6.3-6.2zm1.8 32.6c0 1-.8 1.8-1.8 1.8H7c-1 0-1.8-.8-1.8-1.8V12.1c0-1 .8-1.8 1.8-1.8h50c1 0 1.8.8 1.8 1.8v26.4z" />
  </svg>
);
export default SvgGraph;
