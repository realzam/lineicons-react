import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYahoo = ({
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
    <path d="M60.2 5.3s-.4-.1-.7-.1c-1.7 0-3.5 1-3.5 3.5-1 13-2.1 26.1-3.9 38.5 1.1-.1 1.8.1 2.7.4 2-12.5 6.8-31.4 7.9-36.8.3-.6.4-1.5.4-2.1 0-2-1.2-3.1-2.9-3.4zM44.4 4.8c-2.5.6-4.9.6-7.3 0-2 3.8-9.6 16.2-14.4 24-4.8-8.3-10.7-17.5-14.4-24-3 .6-4.2.7-7.3 0 5.9 8.9 15.4 25.8 18.5 31.4L19 59.3s2.1-.3 3.5-.3c1.5 0 3.5.3 3.5.3l-.4-23.1c6.1-10.6 16-27.8 18.8-31.4 0-.2 0 0 0 0zM51.9 52.5c-2.4 0-3.4 1.7-3.4 3.5 0 2.1 1.7 3.2 3.9 3.2 1.5 0 3.2-1 3.2-3.5.1-1.8-1.6-3.2-3.7-3.2z" />
  </svg>
);
export default SvgYahoo;
