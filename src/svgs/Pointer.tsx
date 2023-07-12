import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPointer = ({
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
    <path d="M33.2 62.3c-1.6 0-3.1-.9-3.9-2.4L2.3 8.2c-.9-1.7-.6-3.8.8-5.1 1.4-1.4 3.4-1.7 5.2-.8L60 29.4c1.6.8 2.5 2.4 2.4 4.2-.1 1.7-1.2 3.2-2.8 3.9l-15.9 6.2-6.2 15.9c-.6 1.6-2.1 2.7-3.9 2.8-.2-.2-.3-.1-.4-.1zM6.4 6.4l26.8 51.2L39.7 41c.2-.6.7-1.1 1.3-1.3l16.7-6.5L6.4 6.4z" />
  </svg>
);
export default SvgPointer;
