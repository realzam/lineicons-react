import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFireworks = ({
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
    <path d="M47.8 36.2c0-1.7-.6-3.2-1.8-4.4L23 8.9l1-1c1-1 1.3-2.6.8-3.9-.6-1.3-1.9-2.2-3.3-2.2H5.3c-2 0-3.6 1.6-3.6 3.6v16.1c0 1.5.9 2.7 2.2 3.3.5.1 1 .2 1.4.2.9 0 1.8-.4 2.5-1l1-1 23 23c1.2 1.2 2.8 1.8 4.3 1.8 1.6 0 3.1-.6 4.3-1.8l5.4-5.4c1.3-1.2 2-2.7 2-4.4zM33.1 25.4l-4.7 10.9-6-6 4.6-11 6.1 6.1zM6.2 6.3h13l-13 13v-13zM19.8 12l3.8 3.8-4.6 11-7-7 7.8-7.8zm23 25.4-5.4 5.4c-.6.6-1.7.6-2.3 0l-3.2-3.2 4.7-10.9 6.2 6.2c.3.3.5.8.5 1.2 0 .6-.2 1-.5 1.3zM45.2 52.9c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5.5 5.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-5.5-5.5zM50.6 47.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.1 9.1c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9.1-9.1zM61.6 47.5 56.1 42c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5.5 5.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.4 0-3.2z" />
  </svg>
);
export default SvgFireworks;
