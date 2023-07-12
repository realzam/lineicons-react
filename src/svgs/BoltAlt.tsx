import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBoltAlt = ({
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
    <path d="M23.8 62.3c-1.2 0-2.3-.5-3.1-1.4-1.5-1.7-1-3.7-.8-4.6l5.3-22.7H14.9c-.7 0-2.1 0-3.3-.9-2-1.6-1.4-4.3-1.3-5.2L14.5 7c.2-1.1.6-2.8 2.1-4C18.3 1.7 20 1.7 21 1.8h13.7c1.2 0 3.7 0 5.2 1.9s1 4.4.8 5.6L39.5 15l8.8.1c3.5 0 4.8 1.6 5.2 2.9.7 2-.5 3.8-1 4.5L28 59.4c-.5.7-1.2 1.8-2.5 2.5-.5.2-1 .4-1.5.4 0-.1-.1 0-.2 0zm.1-2.3zm-9.1-31H28.1c.7 0 1.3.3 1.8.9.4.5.6 1.2.4 1.9l-5.8 24.8L48.7 20c.1-.1.2-.3.2-.4h-.8l-11.5-.1c-.7 0-1.3-.3-1.7-.8-.4-.5-.6-1.2-.4-1.9l1.8-8.5c.3-1.4.2-1.7.1-1.8-.1-.1-.4-.2-1.8-.2H21c-.8 0-1.3 0-1.4.1-.1.1-.3.6-.5 1.4l-4.2 20.5c0 .3-.1.5-.1.7z" />
  </svg>
);
export default SvgBoltAlt;
