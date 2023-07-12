import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirectionLtr = ({
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
    <path d="M21.7 25.9h1.1v13.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V6.2h7.5v33.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V6.2h13c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.6c-6.7 0-12.1 5.2-12.1 12 0 6.7 5.5 12.1 12.2 12.1zm0-19.7h1.1v15.2h-1.1c-4.3 0-7.6-3.4-7.6-7.6-.1-4.2 3.3-7.6 7.6-7.6zM46.7 44.9c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l2.9 2.9H13.7c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h32.6l-2.9 2.9c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l6.6-6.7c.9-.9.9-2.3 0-3.2l-6.5-6.6z" />
  </svg>
);
export default SvgDirectionLtr;
