import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMediumAlt = ({
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
      fillRule="evenodd"
      d="M64 32C64 14.337 49.662 0 32 0S0 14.338 0 32c0 17.66 14.338 31.998 32 31.998S64 49.66 64 32Zm-28.787 0c0 7.865-6.333 14.242-14.145 14.242-7.813 0-14.146-6.378-14.146-14.242 0-7.865 6.333-14.244 14.146-14.244 7.812 0 14.145 6.378 14.145 14.244Zm15.518 0c0 7.404-3.167 13.408-7.073 13.408-3.906 0-7.073-6.004-7.073-13.409 0-7.404 3.166-13.408 7.073-13.408 3.906 0 7.073 6.002 7.073 13.409Zm6.347 0c0 6.632-1.113 12.011-2.487 12.011S52.104 38.633 52.104 32c0-6.633 1.113-12.011 2.487-12.011 1.373 0 2.487 5.377 2.487 12.012Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMediumAlt;
