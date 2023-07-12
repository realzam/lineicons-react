import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowTopRight = ({
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
    <path d="M15 51.3c-.6 0-1.2-.2-1.6-.7-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6z" />
  </svg>
);
export default SvgArrowTopRight;
