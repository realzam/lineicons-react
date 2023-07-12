import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbsDown = ({
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
    <path d="M53.5 8.1c-4.5-3-10.9-4.7-17.7-4.7-1.2 0-2.2 0-3.5.1-8.1.7-13.5 2-16.2 3.8 0 0-.1 0-.1.1l-.5.3H6.6c-2.7 0-4.8 2.2-4.8 4.8v22.9c0 2.6 2.2 4.8 4.8 4.8h11.9c.1 0 .2.1.2.1 2.1 2.1 7.5 8.1 13.2 17 1.3 2.1 3.4 3.3 5.9 3.3h.6c2.6-.2 4.8-1.6 5.9-3.8 1.4-2.6.3-10.2-.3-13.9 5.3.1 14 .3 16.6-5.4 3.7-8.7 1.3-23.9-7.1-29.4zM6.3 35.5V12.6c0-.2.2-.3.3-.3H12v23.5H6.5c-.1 0-.2-.2-.2-.3zm50.1.1c-1.4 3.1-8.6 2.9-12.5 2.8h-2.8c-.7 0-1.3.3-1.8.8-.4.5-.6 1.2-.4 1.9l.3 1.4c1.4 7.4 1.2 11.5.9 12.2-.5 1-1.5 1.3-2.2 1.4-1 .1-1.7-.3-2.3-1.2-5.9-9.2-11.6-15.4-13.8-17.7-.9-.9-2.1-1.5-3.5-1.5h-2V12.2c.4 0 .8-.2 1.1-.4l1-.7c1-.6 4.3-2.2 14.2-3.1 1-.1 1.9-.1 3-.1 5.9 0 11.5 1.4 15.3 3.9 6.5 4.2 8.5 17 5.5 23.8z" />
  </svg>
);
export default SvgThumbsDown;
