import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicketAlt = ({
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
    <path d="M46.8 1.8H17.2c-4.4 0-8 3.6-8 8v49c0 1.3.9 2.5 2.2 2.8 1.3.4 2.6-.2 3.3-1.3l3.5-5.8 4.5 6.5c.5.8 1.5 1.3 2.4 1.3 1 0 1.9-.5 2.4-1.3l4.6-6.7 4.6 6.7c.5.8 1.5 1.3 2.4 1.3s1.9-.5 2.4-1.3l4.4-6.5 3.5 5.9c.7 1.1 2 1.7 3.3 1.3 1.3-.4 2.2-1.5 2.2-2.8V9.8c-.1-4.4-3.7-8-8.1-8zm3.5 51.4L48.4 50c-.5-.9-1.4-1.4-2.4-1.4s-1.9.5-2.5 1.3L39 56.5l-4.6-6.7c-.5-.8-1.4-1.3-2.4-1.3s-1.9.5-2.4 1.3L25 56.5l-4.5-6.7c-.6-.8-1.5-1.3-2.4-1.3H18c-1 0-1.9.6-2.4 1.4L13.8 53V9.8c0-2 1.6-3.5 3.5-3.5h29.5c2 0 3.5 1.6 3.5 3.5v43.4z" />
    <path d="M42.3 19.7H21.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.3 30H21.7c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgTicketAlt;
