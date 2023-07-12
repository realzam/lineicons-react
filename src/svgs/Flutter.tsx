import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlutter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M55.733 29.772 40.121 45.384 55.733 61H37.887l-6.691-6.69-8.925-8.926 15.615-15.612h17.847ZM37.887 3l-29 29 8.925 8.925L55.733 3H37.887Z"
    />
  </svg>
);
export default SvgFlutter;
