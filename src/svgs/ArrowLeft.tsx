import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeft = ({
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
    <path d="M56 29.8H13.3l17-17.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-20.7 21c-.9.9-.9 2.3 0 3.2l20.7 21c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L13.4 34.3H56c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z" />
  </svg>
);
export default SvgArrowLeft;
