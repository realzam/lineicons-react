import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngleDoubleUp = ({
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
    <path d="M33.6 25.6c-.9-.9-2.3-.9-3.2 0l-23 22.6c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0l21.4-21 21.4 21.1c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-23-22.6z" />
    <path d="m10.6 38.4 21.4-21 21.4 21.1c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-23-22.6c-.9-.9-2.3-.9-3.2 0l-23 22.6c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0z" />
  </svg>
);
export default SvgAngleDoubleUp;
