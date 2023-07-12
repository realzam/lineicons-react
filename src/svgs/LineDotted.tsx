import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineDotted = ({
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
    <path d="M8.7 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h4.7c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3zM34.3 29.8h-4.7c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h4.7c1.2 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3zM60 29.8h-4.7c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgLineDotted;
