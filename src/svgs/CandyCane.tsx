import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCandyCane = ({
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
    <path d="M40.2 54.7c-1.9 0-3.9-.7-5.4-2.2-1.5-1.4-2.3-3.3-2.3-5.3 0-1.9.7-3.7 2.1-5L46.1 31c.7-.7 1.1-1.7 1.1-2.7 0-1.2-.6-2.3-1.5-3.1-1.7-1.5-4.3-1.4-5.9.1L14.5 49.9C11.6 52.7 7 52.6 4 49.8c-1.5-1.4-2.3-3.3-2.3-5.3 0-1.9.7-3.7 2.1-5l25.7-25.1c7.2-7 19.3-6.8 26.8.6 3.7 3.6 5.8 8.3 5.9 13.2.1 5-1.7 9.6-5.3 13.1L45.2 52.7c-1.4 1.4-3.2 2-5 2zm.3-11.9-2.7 2.7c-.5.5-.7 1.1-.7 1.8 0 .8.3 1.5.9 2.1 1.2 1.2 3.1 1.2 4.1.2l4.2-4.1-5.8-2.7zm-27.2-6.3L7 42.7c-.5.5-.7 1.1-.7 1.8 0 .8.3 1.5.9 2.1 1.2 1.2 3.1 1.2 4.1.2l7.8-7.6-5.8-2.7zm30.6 2.9 5.8 2.6 4.1-4c2.6-2.6 4-6 3.9-9.7-.1-3.8-1.7-7.4-4.5-10.1-5.8-5.7-15-5.9-20.5-.6l-6.5 6.3 5.8 2.6 4.6-4.5c3.2-3.1 8.5-3.3 11.9-.3 1.9 1.6 3.1 4 3.1 6.5.1 2.3-.8 4.5-2.5 6.1l-5.2 5.1zm-27.1-6.3 5.8 2.6 6-5.9-5.8-2.6-6 5.9z" />
  </svg>
);
export default SvgCandyCane;
