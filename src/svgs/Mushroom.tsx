import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMushroom = ({
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
    <path d="M54.3 15.1C49.9 6.9 41.4 1.8 32 1.8S14.1 6.9 9.7 15.2C7.9 18.6 7 22.1 6.9 25.8V26.1c0 .3.1.6.2.9 2.2 4.9 8.2 8.6 15.8 10.2l-1.6 15.1c-.3 2.5.5 5 2.2 6.9s4.1 3 6.6 3h3.7c2.5 0 5-1.1 6.6-3 1.7-1.9 2.5-4.4 2.2-6.9L41 37.2c7.6-1.7 13.5-5.4 15.7-10.2.1-.3.2-.7.2-1 .1-3.8-.9-7.5-2.6-10.9zm-16 37.7c.1 1.3-.3 2.5-1.1 3.4s-2 1.5-3.3 1.5h-3.7c-1.3 0-2.4-.5-3.3-1.5s-1.2-2.2-1.1-3.4L27.4 38c1.5.2 3 .2 4.6.2 1.6 0 3.2-.1 4.7-.3l1.6 14.9zM32 33.7c-10.7 0-18.4-4-20.6-8.1.1-2.9.9-5.6 2.3-8.3 3.6-6.8 10.6-11 18.3-11 7.7 0 14.7 4.2 18.3 11 1.4 2.6 2.2 5.4 2.3 8.4-2.3 4-9.9 8-20.6 8z" />
    <circle cx={21.9} cy={24.4} r={2.3} />
    <circle cx={42.2} cy={24.4} r={2.3} />
    <circle cx={32} cy={14.2} r={2.3} />
  </svg>
);
export default SvgMushroom;
