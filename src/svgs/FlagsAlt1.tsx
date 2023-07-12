import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlagsAlt1 = ({
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
    <path d="M63.2 23.7c-.3-1.2-1.6-1.9-2.8-1.6-5.9 1.7-16.7 2.7-28 2.7-11.9 0-22.9-1.1-28.7-2.9-1.2-.4-2.4.3-2.8 1.5-.3.9 0 1.9.8 2.4l4.7 12.7c.4 1 1.3 1.8 2.4 1.9h.4c.9 0 1.8-.4 2.4-1.2l7.6-10.4c1.4.1 2.9.2 4.4.3l6 11.5c.5 1 1.5 1.6 2.6 1.6s2.1-.6 2.6-1.6L41 29.1c1.5-.1 3-.1 4.4-.3l7.5 10.4c.6.8 1.4 1.2 2.4 1.2h.4c1.1-.2 2-.9 2.3-1.9l4.6-12.4c.4-.5.8-1.5.6-2.4zM9.5 34.2 7 27.3c2 .4 4.3.7 6.8 1l-4.3 5.9zM32 35.9l-3.5-6.6h7L32 35.9zm22.5-1.7-4.2-5.8c2.4-.3 4.7-.6 6.7-1l-2.5 6.8z" />
  </svg>
);
export default SvgFlagsAlt1;
