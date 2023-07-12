import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogle = ({
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
    <path d="M61.5 29.2H32.8v8.5h20.6c-1.1 11.8-10.7 16.9-20 16.9-11.8 0-22.3-9.2-22.3-22.5 0-12.8 10-22.5 22.3-22.5 9.4 0 15.1 6.1 15.1 6.1l5.8-6.1S46.5 1.1 33 1.1C15.2 1 1.6 15.9 1.6 32c0 15.6 12.8 31 31.7 31C50 63 62 51.7 62 34.8c.1-3.5-.5-5.6-.5-5.6z" />
  </svg>
);
export default SvgGoogle;
