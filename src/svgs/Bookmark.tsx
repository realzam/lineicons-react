import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookmark = ({
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
    <path d="M16.8 62.3c-.7 0-1.3-.1-2-.4-1.7-.8-2.8-2.5-2.8-4.4V8.2c0-3.5 2.9-6.4 6.4-6.4h27.3c3.5 0 6.4 2.9 6.4 6.4v49.1c0 1.9-1.1 3.6-2.8 4.4-1.7.8-3.7.5-5.2-.8l-11-9.6c-.7-.5-1.5-.4-2.2 0l-11 9.7c-.9.8-2 1.3-3.1 1.3zm1.5-56c-1.1 0-1.9.9-1.9 1.9v49.3c0 .1 0 .2.2.3.2.1.3 0 .3 0l11.2-9.9c2.3-1.8 5.5-1.8 7.8 0l.2.2L47 57.7s.1.1.3 0c.2-.1.2-.2.2-.3V8.2c0-1.1-.9-1.9-1.9-1.9H18.3z" />
  </svg>
);
export default SvgBookmark;
