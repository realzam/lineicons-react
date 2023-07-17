import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlus = ({
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
    <path d="M60 29.8H34.3V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v25.8H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h25.8V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V34.3H60c1.2 0 2.3-1 2.3-2.3 0-1.2-1.1-2.2-2.3-2.2z" />
  </svg>
);
export default SvgPlus;
