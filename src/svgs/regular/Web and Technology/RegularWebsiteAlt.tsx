import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWebsiteAlt = ({
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
    <path d="M19.6 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1L6.8 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l1.6-2.4 1.6 2.4c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l3.5-5.2c.8-1 .5-2.4-.5-3.1zM40.9 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1L28.2 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l1.6-2.4 1.6 2.4c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l3.5-5.2c.7-1 .5-2.4-.6-3.1zM62.3 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1L49.5 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6-1 .7-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l1.6-2.4 1.6 2.4c.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1l3.5-5.2c.8-1 .5-2.4-.5-3.1z" />
  </svg>
);
export default SvgWebsiteAlt;
