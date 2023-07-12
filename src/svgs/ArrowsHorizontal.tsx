import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowsHorizontal = ({
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
    <path d="M61.6 30.4 51.4 20.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.4 6.5H9.3l6.4-6.5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L2.4 30.4c-.9.9-.9 2.3 0 3.2l10.2 10.3c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6.4-6.5h45.2l-6.4 6.5c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l10.2-10.3c.9-.9.9-2.3 0-3.2z" />
  </svg>
);
export default SvgArrowsHorizontal;
