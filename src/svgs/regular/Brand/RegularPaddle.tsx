import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaddle = ({
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
      d="M6.484 23.342v-2.264A10.46 10.46 0 0 0 16.94 10.62h2.093A10.46 10.46 0 0 0 29.49 21.093v2.264a10.46 10.46 0 0 0-10.457 10.457H16.94A10.46 10.46 0 0 0 6.484 23.342ZM16.94 6.694h17.986c8.784 0 15.06 6.273 15.06 15.478 0 9.204-6.273 15.475-15.06 15.475H16.94V64h7.529V44.341h10.457c12.633 0 22.59-9.956 22.59-22.17C57.516 9.96 47.56 0 34.926 0H16.94v6.694Z"
    />
  </svg>
);
export default SvgPaddle;
