import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrameExpand = ({
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
    <path d="M19.3 1.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v11.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V7.9C6.3 7 7 6.3 7.9 6.3h11.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zM56.1 1.8H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.4c.9 0 1.6.7 1.6 1.6v11.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V7.9c0-3.4-2.8-6.1-6.2-6.1zM60 42.5c-1.2 0-2.3 1-2.3 2.3v11.4c0 .9-.7 1.6-1.6 1.6H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.4c3.4 0 6.1-2.7 6.1-6.1V44.7c.1-1.2-1-2.2-2.2-2.2zM19.3 57.8H7.9c-.9 0-1.6-.7-1.6-1.6V44.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v11.4c0 3.4 2.7 6.1 6.1 6.1h11.4c1.2 0 2.3-1 2.3-2.3s-1-2.1-2.2-2.1z" />
  </svg>
);
export default SvgFrameExpand;
