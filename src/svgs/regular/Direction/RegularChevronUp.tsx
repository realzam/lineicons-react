import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronUp = ({
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
    <path d="M55 45.6c-.6 0-1.1-.2-1.6-.6L32 23.9l-21.4 21c-.9.9-2.3.9-3.2 0-.9-.9-.9-2.3 0-3.2l23-22.6c.9-.9 2.3-.9 3.2 0l23 22.6c.9.9.9 2.3 0 3.2-.4.4-1 .7-1.6.7z" />
  </svg>
);
export default SvgChevronUp;
