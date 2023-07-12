import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScrollDown = ({
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
    <path d="m38 40.6-6 6-6-6c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l7.6 7.6c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l7.6-7.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0z" />
    <path d="M41.8 1.8H22.2c-5.7 0-10.3 4.6-10.3 10.3v40c0 5.7 4.6 10.3 10.3 10.3h19.6c5.7 0 10.3-4.6 10.3-10.3V12c0-5.7-4.6-10.2-10.3-10.2zM47.6 52c0 3.2-2.6 5.8-5.8 5.8H22.2c-3.2 0-5.8-2.6-5.8-5.8V12c0-3.2 2.6-5.8 5.8-5.8h19.6c3.2 0 5.8 2.6 5.8 5.8v40z" />
    <path d="M32 26.2h.4c.1 0 .3-.1.4-.1.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.2-.4-.2-.1 0-.3-.1-.4-.1-.7-.1-1.5.1-2 .6-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.4.3 1 .6 1.6.6zM29.9 34.4c.1.1.1.3.2.4.1.1.2.2.3.4l.3.3c.1.1.3.2.4.2.1.1.3.1.4.1h.4c.6 0 1.2-.2 1.6-.6.1-.1.2-.2.3-.4.1-.1.1-.3.2-.4.1-.1.1-.3.1-.4v-.4c0-.6-.2-1.2-.7-1.6-.8-.8-2.3-.8-3.2 0-.4.4-.7 1-.7 1.6v.4c.3.1.4.3.4.4z" />
  </svg>
);
export default SvgScrollDown;
