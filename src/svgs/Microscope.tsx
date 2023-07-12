import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicroscope = ({
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
    <path d="M47.5 57.7H36.9V52c.3 0 .5 0 .8-.1 9.8-1.2 17.2-10.1 17.2-20.6 0-6-2.3-11.4-6.4-15.3-.4-.4-.8-.7-1.2-1.1l1.6-2.5c.9-1.4 1.2-3.1.9-4.7-.3-1.6-1.3-3-2.7-3.9l-1.6-1.1c-1.4-.9-3.1-1.2-4.7-.9-1.6.3-3 1.3-3.9 2.7l-11.2 17c-1.9 2.9-1.1 6.8 1.8 8.6l1.6 1.1c1.1.7 2.2 1 3.4 1 2 0 4-1 5.2-2.8l7-10.7c.2.2.4.3.6.5 3.3 3.1 5 7.4 5 12.1 0 8.3-5.7 15.2-13.2 16.1-.6.1-1.2.1-1.8.1-.8 0-1.5 0-2.2-.2-3.8-.6-7.2-2.7-9.5-5.9h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H11.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h6.9c2.9 5.5 8.1 9.4 14 10.3v5.8H21.7c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h25.8c1.2 0 2.2-1 2.2-2.2s-.9-2-2.2-2zM34 27c-.5.8-1.6 1-2.4.5L30 26.4c-.8-.5-1-1.6-.5-2.4l11-16.9c.3-.4.6-.7 1.1-.8h.4c.3 0 .7.1 1 .3l1.6 1.1c.4.3.7.6.8 1.1.1.5 0 .9-.2 1.3L34 27z" />
  </svg>
);
export default SvgMicroscope;
