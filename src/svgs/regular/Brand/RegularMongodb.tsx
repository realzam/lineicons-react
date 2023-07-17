import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMongodb = ({
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
      d="M37.57 7.139C34.878 3.962 32.558.712 32.087.046a.106.106 0 0 0-.175 0c-.47.666-2.79 3.916-5.482 7.093C3.354 36.536 30.072 56.37 30.072 56.37l.217.15c.202 3.069.706 7.479.706 7.479h2.01s.502-4.391.705-7.459l.218-.17S60.646 36.537 37.57 7.139ZM32 55.939s-1.198-1.021-1.521-1.533l-.003-.055 1.449-32.006a.076.076 0 0 1 .15 0l1.45 32.006-.004.055c-.323.512-1.52 1.534-1.52 1.534Z"
    />
  </svg>
);
export default SvgMongodb;
