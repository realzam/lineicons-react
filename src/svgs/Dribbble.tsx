import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDribbble = ({
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
    <path d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm25.7 31.1c-5.9-.4-12.1.2-18.2 1.7-.9-2.4-1.8-4.7-2.8-7 6.3-2.1 12.2-5.2 17.3-8.9 2.4 3.9 3.7 8.5 3.7 13.4.1.2 0 .5 0 .8zM51.3 15c-4.8 3.6-10.5 6.5-16.6 8.4-3.2-6.4-6.8-11.8-10.6-16 2.5-.8 5.1-1.2 7.9-1.2 7.7.1 14.6 3.5 19.3 8.8zM19.7 9.4c3.8 3.8 7.4 9 10.6 15.3-7.9 1.9-16 2.2-23.3.9 1.9-7 6.5-12.8 12.7-16.2zM6.3 30c3.3.7 6.7 1 10.1 1 5.2 0 10.6-.7 15.9-2.1 1 2.2 2 4.5 2.8 6.9-8.8 2.8-16.6 7.2-22.8 12.9-3.7-4.6-6-10.4-6-16.7v-2zm9.2 21.8c5.7-5.2 13-9.3 21.1-11.8.3 1 .6 2 .9 2.9 1.3 4.5 2.3 9 3 13.3-2.7.9-5.5 1.5-8.5 1.5-6.3.1-12-2.2-16.5-5.9zm29.3 2.5c-.7-4.1-1.7-8.4-2.9-12.7-.3-1-.6-1.9-.9-2.9 5.4-1.3 11-1.8 16.2-1.5-1.5 7.4-6.2 13.5-12.4 17.1z" />
  </svg>
);
export default SvgDribbble;
