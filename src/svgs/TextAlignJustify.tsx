import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextAlignJustify = ({
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
    <path d="M4 8.9h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3S2.8 8.9 4 8.9zM60 21.3H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM60 38.2H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.5 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h38.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgTextAlignJustify;
