import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVuejs = ({
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
      d="M48.082 6.514h-2.667l-7.048.002-6.332 10.55-6.356-10.55-7.056-.003H6.057v.001H2.219l29.858 50.973L61.781 6.515H48.082Zm-16.015 40.4L11.525 11.846h7.53l13.028 22.419 12.925-22.42H52.5l-20.433 35.07Z"
    />
  </svg>
);
export default SvgVuejs;
