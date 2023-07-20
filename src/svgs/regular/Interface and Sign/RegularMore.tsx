import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMore = ({
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
    <path d="M32 39.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zM32 29c-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.3-3-3-3zM55.7 39.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5c.1 4.1-3.3 7.5-7.5 7.5zm0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.3-3-3-3zM8.3 39.5C4.2 39.5.8 36.1.8 32s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zm0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3c1.7 0 3-1.4 3-3s-1.4-3-3-3z" />
  </svg>
);
export default SvgMore;
