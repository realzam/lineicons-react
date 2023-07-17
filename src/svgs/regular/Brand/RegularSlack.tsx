import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlack = ({
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
    <path d="M23.8 33.7c-3.5 0-6.5 3-6.5 6.5v16.2c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5V40.2c0-3.7-2.8-6.5-6.5-6.5zM1 40.2c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5v-6.5H7.6C4 33.7 1 36.5 1 40.2zM23.8 1c-3.5 0-6.5 3-6.5 6.5s3 6.5 6.5 6.5h6.5V7.5C30.3 4 27.5 1 23.8 1zM7.5 30.3h16.3c3.5 0 6.5-3 6.5-6.5s-3-6.5-6.5-6.5H7.5c-3.5 0-6.5 3-6.5 6.5s2.8 6.5 6.5 6.5zM56.4 17.3c-3.5 0-6.5 3-6.5 6.5v6.5h6.5c3.5 0 6.5-3 6.5-6.5s-2.9-6.5-6.5-6.5zM33.7 7.5v16.3c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5V7.5c0-3.5-3-6.5-6.5-6.5-3.7 0-6.5 3-6.5 6.5zM46.7 56.5c0-3.5-3-6.5-6.5-6.5h-6.5v6.5c0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5zM56.5 33.7H40.2c-3.5 0-6.5 3-6.5 6.5s3 6.5 6.5 6.5h16.3c3.5 0 6.5-3 6.5-6.5 0-3.7-3-6.5-6.5-6.5z" />
  </svg>
);
export default SvgSlack;
