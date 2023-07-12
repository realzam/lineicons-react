import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiamondShape = ({
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
    <path d="M32 62.2c-1.3 0-2.5-.6-3.3-1.7L5.1 28.4c-.9-1.2-1.1-2.8-.5-4.2l8.7-19.9c.7-1.5 2.2-2.5 3.8-2.5h29.6c1.6 0 3.1 1 3.8 2.5l8.7 19.9c.6 1.4.4 3-.5 4.2L35.3 60.5c-.8 1.1-2 1.7-3.3 1.7zM8.8 25.9 32 57.5l23.2-31.6-8.6-19.7H17.4L8.8 25.9z" />
  </svg>
);
export default SvgDiamondShape;
