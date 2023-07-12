import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngleDoubleRight = ({
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
    <path d="m38.4 30.4-22.6-23c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l21 21.4-21 21.4c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l22.6-23c.9-.8.9-2.2 0-3.1z" />
    <path d="m51.4 30.4-22.6-23c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l21 21.4-21 21.4c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l22.6-23c.9-.8.9-2.2 0-3.1z" />
  </svg>
);
export default SvgAngleDoubleRight;
