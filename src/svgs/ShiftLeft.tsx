import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShiftLeft = ({
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
    <path d="M7.1 1.8c-1.2 0-2.2 1-2.2 2.2v56c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V4c0-1.2-1-2.2-2.2-2.2zM56.9 32.2H27l6.9-7c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L20 32.8c-.9.9-.9 2.3 0 3.2l10.6 10.8c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6.8-7h29.9c1.2 0 2.2-1 2.2-2.2s-.9-2.3-2.2-2.3z" />
  </svg>
);
export default SvgShiftLeft;
