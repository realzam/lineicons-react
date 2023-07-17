import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEthereum = ({
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
      d="M14.86 32.556 32.852 2l17.996 30.556-17.996 10.887-17.994-10.887Z"
    />
    <path
      fill="#000"
      d="M14.86 36.05 32.852 62l18.006-25.95-18.006 10.88-17.994-10.88Z"
    />
  </svg>
);
export default SvgEthereum;
