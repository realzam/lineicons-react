import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineDashed = ({
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
    <path d="M60 29.8H49.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM37.1 29.8H26.9c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3zM14.2 29.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgLineDashed;
