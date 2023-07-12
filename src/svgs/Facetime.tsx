import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacetime = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M3 21.842v20.316c0 4.436 3.602 8.023 8.024 8.023h24.445c4.436 0 8.024-3.601 8.024-8.023V21.842c0-4.436-3.602-8.023-8.024-8.023H11.037C6.602 13.805 3 17.405 3 21.841Zm52.744-5.437-9.206 7.592a3.56 3.56 0 0 0-1.293 2.74v10.512a3.55 3.55 0 0 0 1.265 2.726l9.206 7.731c2.1 1.752 5.284.264 5.284-2.461V18.88c.014-2.711-3.157-4.213-5.256-2.475Z"
    />
  </svg>
);
export default SvgFacetime;
