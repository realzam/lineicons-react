import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngleDoubleLeft = ({
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
    <path d="m30.4 32 21.1-21.4c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-22.6 23c-.9.9-.9 2.3 0 3.2l22.6 23c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L30.4 32z" />
    <path d="m17.4 32 21.1-21.4c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-22.6 23c-.9.9-.9 2.3 0 3.2l22.6 23c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2L17.4 32z" />
  </svg>
);
export default SvgAngleDoubleLeft;
