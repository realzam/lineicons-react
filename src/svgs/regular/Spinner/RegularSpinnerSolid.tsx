import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpinnerSolid = ({
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
    <path d="M32 62.3C15.3 62.3 1.8 48.7 1.8 32S15.3 1.8 32 1.8c4.6 0 9.1 1 13.2 3 1.1.5 1.6 1.9 1 3-.5 1.1-1.9 1.6-3 1-3.5-1.7-7.3-2.5-11.2-2.5C17.8 6.3 6.3 17.8 6.3 32s11.6 25.8 25.8 25.8c9.9 0 18.8-5.6 23.2-14.5 1.7-3.5 2.6-7.3 2.6-11.2 0-2.6-.4-5.2-1.2-7.7-.4-1.2.3-2.4 1.5-2.8 1.2-.4 2.4.3 2.8 1.5.9 2.9 1.4 6 1.4 9.1 0 4.6-1 9.1-3 13.2C54.1 55.7 43.7 62.3 32 62.3z" />
  </svg>
);
export default SvgSpinnerSolid;
