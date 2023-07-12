import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBubble = ({
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
    <path d="M5.9 56.1c-.6 0-1.2-.1-1.8-.4-1.5-.7-2.4-2.1-2.4-3.8V14.2c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v27.6c0 3.4-2.8 6.3-6.3 6.3H17.1l-8.5 7c-.8.6-1.7 1-2.7 1zM8 12.4c-1 0-1.8.8-1.8 1.8v37l8.6-7.1c.4-.3.9-.5 1.4-.5H56c1 0 1.8-.8 1.8-1.8V14.2c0-1-.8-1.8-1.8-1.8H8z" />
  </svg>
);
export default SvgBubble;
