import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShiftRight = ({
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
    <path d="M56.9 1.8c-1.2 0-2.2 1-2.2 2.2v56c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V4c.1-1.2-.9-2.2-2.2-2.2zM33.3 22c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.9 7H7c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h30l-6.8 7c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7L44 36c.9-.9.9-2.3 0-3.2L33.3 22z" />
  </svg>
);
export default SvgShiftRight;
