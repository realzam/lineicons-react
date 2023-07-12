import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboard = ({
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
    <path d="M45.5 9.4H44v-1c0-2.3-1.8-4.1-4-4.1h-5.7V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v.3H24c-2.2 0-4 1.8-4 4.1v1h-1.5c-3.2 0-5.8 2.7-5.8 5.9v41c0 3.3 2.6 5.9 5.8 5.9h27.1c3.2 0 5.8-2.7 5.8-5.9v-41c-.1-3.3-2.7-5.9-5.9-5.9zm-21-.6h15v5.6h-15V8.8zm22.3 47.5c0 .8-.6 1.4-1.3 1.4h-27c-.7 0-1.3-.6-1.3-1.4v-41c0-.8.6-1.4 1.3-1.4H20v1c0 2.3 1.8 4.1 4 4.1h16c2.2 0 4-1.8 4-4.1v-1h1.6c.7 0 1.3.6 1.3 1.4v41z" />
  </svg>
);
export default SvgClipboard;
