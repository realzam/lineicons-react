import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReply = ({
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
    <path d="M30.3 56.9c-.8 0-1.6-.3-2.3-.8L4.1 36.9c-1.5-1.2-2.4-3-2.4-4.9 0-1.9.9-3.7 2.4-4.9L28 7.9c1.1-.9 2.6-1 3.8-.4 1.3.6 2 1.9 2 3.3V21c8.1 1.3 15.5 4.9 21.1 10.4 3.9 4 5.8 7.7 6.9 13.3.2 1.2.4 3.4.4 6.3 0 1.3-.7 2.6-1.9 3.2-1.2.6-2.6.6-3.7-.1-8.4-5.4-16.2-8.7-22.8-9.7v9c0 1.4-.8 2.6-2 3.3-.5.1-1 .2-1.5.2zm-.9-44.3L7 30.6c-.7.4-.8 1.1-.8 1.4s.1.9.7 1.4l22.4 18v-9.6c0-.6.3-1.2.7-1.6.5-.4 1.1-.7 1.7-.6 9.3.6 19 5.4 26 9.8-.1-2.3-.2-3.4-.3-3.8-.9-4.7-2.4-7.6-5.7-11-5.3-5.2-12.5-8.6-20.4-9.4-1.1-.1-2-1.1-2-2.2V12.6z" />
  </svg>
);
export default SvgReply;
