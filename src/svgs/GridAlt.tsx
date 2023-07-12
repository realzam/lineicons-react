import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGridAlt = ({
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
    <path d="M21.7 3.4H9c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V9.7c.1-3.5-2.7-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H9c-1 0-1.8-.8-1.8-1.8V9.7c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8v12.7zM55 3.4H42.3c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2H55c3.4 0 6.2-2.8 6.2-6.2V9.7c0-3.5-2.8-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H42.3c-1 0-1.8-.8-1.8-1.8V9.7c0-1 .8-1.8 1.8-1.8H55c1 0 1.8.8 1.8 1.8v12.7zM21.7 35.3H9c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V41.6c.1-3.5-2.7-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H9c-1 0-1.8-.8-1.8-1.8V41.6c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8v12.7zM55 35.3H42.3c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2H55c3.4 0 6.2-2.8 6.2-6.2V41.6c0-3.5-2.8-6.3-6.2-6.3zm1.8 19c0 1-.8 1.8-1.8 1.8H42.3c-1 0-1.8-.8-1.8-1.8V41.6c0-1 .8-1.8 1.8-1.8H55c1 0 1.8.8 1.8 1.8v12.7z" />
  </svg>
);
export default SvgGridAlt;
