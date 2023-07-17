import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortAlphaAsc = ({
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
    <path d="m28.7 48.2-6.4 6.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v50.6l-6.4-6.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.7-.9-2.2-.9-3-.1zM52.2 57.8h-4l4.7-6.5c.5-.7.6-1.6.2-2.3-.4-.8-1.2-1.2-2-1.2h-7.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h3.4L42 58.7c-.5.7-.6 1.6-.2 2.3.4.8 1.2 1.2 2 1.2h8.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1zM56.1 15.7 49.8 3c-.4-.8-1.2-1.2-2-1.2s-1.6.5-2 1.2l-6.4 12.7c-.6 1.1-.1 2.5 1 3 1.1.6 2.5.1 3-1l.6-1.3h7.4l.6 1.3c.4.8 1.2 1.2 2 1.2.3 0 .7-.1 1-.2 1.3-.5 1.7-1.9 1.1-3zm-9.8-3.8L47.8 9l1.5 2.9h-3z" />
  </svg>
);
export default SvgSortAlphaAsc;
