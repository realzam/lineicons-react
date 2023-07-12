import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDialogflow = ({
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
      d="m56.972 15.278-24.105 13.92-24.119-13.92V43.12l12.06 6.955V64l36.164-20.88V15.278Z"
    />
    <path
      fill="#000"
      d="M32.867 27.842 8.748 13.922 32.867 0l24.105 13.921-24.105 13.921Z"
    />
    <path
      fill="#000"
      d="M32.44 27.418 8.9 13.83l-.152.091 24.119 13.921 24.105-13.92-.566-.337-23.967 13.833Z"
    />
    <path
      fill="#000"
      d="M32.867 28.015v-.173L8.9 14.002l-.153.092 24.119 13.921Z"
    />
  </svg>
);
export default SvgDialogflow;
