import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKey = ({
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
    <path d="M60.1 43.3 48.6 31.9c-3-2.9-7.5-2.9-10.4 0l-1.5 1.5L7 2.4c-.8-.9-2.3-.9-3.2 0-.9.8-.9 2.3 0 3.2l3.4 3.6-4.8 5c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l4.7-4.9 5.6 5.9-7 7.4c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l6.9-7.2 14.5 15.1-1.5 1.5c-2.9 3-2.9 7.5 0 10.4l11.4 11.6c1.5 1.4 3.4 2.1 5.2 2.1 1.9 0 3.8-.7 5.2-2.2l6.2-6.2c1.4-1.4 2.2-3.3 2.2-5.3-.2-2-.9-3.9-2.3-5.3zm-3.2 7.4-6.2 6.2c-1.2 1.2-2.9 1.2-4.1 0L35.1 45.4c-1.2-1.2-1.2-2.9 0-4.1l3-3 .1-.1.1-.1 3.1-3.1c.6-.6 1.3-.9 2-.9s1.5.3 2.1.9l11.4 11.5c.6.6.9 1.3.9 2.1-.1.8-.4 1.5-.9 2.1z" />
  </svg>
);
export default SvgKey;
