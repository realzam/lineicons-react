import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPencilAlt = ({
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
    <path d="M62.2 11.9c0-.8-.3-1.6-.9-2.2-1.2-1.2-2.4-2.4-3.5-3.6-1.1-1.1-2.1-2.2-3.2-3.2-.5-.6-1.1-1-1.9-1.1-.9-.1-1.7.1-2.4.7l-6.8 6.8H8.1c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h40.5c3.4 0 6.3-2.8 6.3-6.3V20.5l6.5-6.5c.5-.6.8-1.3.8-2.1zM32.8 36c-.1.1-.1.1-.2.1l-7.2 2.4 2.4-7.2c0-.1.1-.1.1-.2l18-18 5 4.9-18.1 18zm17.5 20c0 1-.8 1.8-1.8 1.8H8.1c-1 0-1.8-.8-1.8-1.8V15.5c0-1 .8-1.8 1.8-1.8h30.8L24.7 28c-.5.5-1 1.2-1.2 2l-3.7 11.2c-.3.8-.1 1.5.3 2.2.3.4.9 1 2 1h.4L34 40.6c.7-.2 1.4-.7 1.9-1.2L50.3 25v31zM54 14.9 49 10l3.1-3.1c.8.8 4.1 4.1 4.9 5l-3 3z" />
  </svg>
);
export default SvgPencilAlt;
